var accessToken;
const keycloak = Keycloak({
  url: 'http://localhost:8080',
  realm: 'master',
  clientId: 'frontend',
  redirectUri: 'http://localhost:3000/list.html',
  enableDebug: true,

});



document.getElementById('logout').addEventListener('click', () => {
  const clientid = 'frontend';
  const postLogoutRedirect = 'http://localhost:3000/list.html';
  window.location.href = `http://localhost:8080/realms/master/protocol/openid-connect/logout?post_logout_redirect_uri=${postLogoutRedirect}&client_id=${clientid}`;
});

keycloak
  .init({ onLoad: 'login-required' })
  .then((authenticated) => {
    if (authenticated) {
        
      accessToken = keycloak.token;
      console.log(`Access Token: ${accessToken}`);
      localStorage.setItem('accessToken', keycloak.token);

      getAllPlugins();

      function getAllPlugins() {
        fetch('http://localhost:8080/admin/realms/master/identity-provider/instances', {
          method: 'GET',
          headers: {
            'Authorization': ` Bearer ${accessToken}`
          },
        })
          .then(async response => {
            if (response.ok) {
              var plugins = await response.json();
              console.log('All Plugins:', plugins);
              updatePluginList(plugins);
            } else {
              console.error('Failed to fetch plugins:', response.status, response.statusText);
            }
          })
          .catch(error => {
            console.error('Error during the process:', error);
          });
      }

      function updatePluginList(plugins) {
        var resultsContainer = document.getElementById('resultsContainer');

        if (resultsContainer) {
            // var samlProviders = data.filter(plugin => plugin.providerId== 'saml-extended').map(plugin => plugin.alias); 
 
          plugins.forEach(plugin => {
            if (plugin.providerId== 'saml-extended'){
            var resultItem = document.createElement('div');
            var link = document.createElement('a');
            link.href = 'http://localhost:3000/editplugin.html'; // تحديد الرابط المؤقت، يمكنك تحديده بناءً على احتياجاتك
            link.textContent = plugin.alias;

            // اضافة حدث النقر على الرابط
            link.addEventListener('click', function (event) {
              event.preventDefault(); // منع النقرة من فتح الرابط مباشرة
              getPluginDetails(plugin.alias);
              localStorage.setItem('pluginalias', plugin.alias);
              console.log`(plugin:${plugin.alias})`
              
            });
            resultItem.appendChild(link);
            resultsContainer.appendChild(resultItem);
        }
          });
        } else {
          console.log("resultsContainer not exists");
        }
      }

      function getPluginDetails(alias) {

        keycloak.updateToken(180).then((bool) => {
          if (bool) {
            console.log("Token is updated");
            newAccessToken1 = keycloak.token;

            fetch(`http://localhost:8080/admin/realms/master/identity-provider/instances/${alias}`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${newAccessToken1}`
              },
            })
              .then(async response => {
                if (response.ok) {
                  var pluginData = await response.json();

                  localStorage.setItem('pluginData', JSON.stringify(pluginData))
                  // يمكنك هنا تحديث واجهة المستخدم باستخدام pluginDetails
                  window.location.href = 'http://localhost:3000/editplugin.html'
                  console.log('Plugin Details:', pluginData);
                } else {
                  console.error('Failed to fetch plugin details:', response.status, response.statusText);
                }
              })
          } else {
            console.log("Token is not updated");
          }
        })

          .catch(error => {
            console.error('Error during the process:', error);
          });
      }


      const tokenParsed = keycloak.tokenParsed;
      const roles = tokenParsed.realm_access.roles;


      if (roles.includes("admin")) {
        console.log("User has 'admin' role");
        document.body.style.display = 'block';
      } else {
        alert("User does not have admin role. Access denied.");
        const clientid = 'frontend';
        const postLogoutRedirect = 'http://localhost:3000/index.html';
        window.location.href = `http://localhost:8080/realms/master/protocol/openid-connect/logout?post_logout_redirect_uri=${postLogoutRedirect}&client_id=${clientid}`;

      }
      console.log("Access Token:", accessToken);

    }
    else {

      alert("User authentication failed!");

    }
  })
  .catch(() => {
    alert("Could not authenticate the user!");
  });

