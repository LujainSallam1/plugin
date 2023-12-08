var accessToken;
const keycloak = Keycloak({
  url: 'http://localhost:8080',
  realm: 'master',
  clientId: 'frontend',
  redirectUri: 'http://localhost:3000/list.html',
  enableDebug: true,

});


// document.getElementById('login').addEventListener('click', () => {
//   keycloak.login();
// });

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


      //get flow from KEY
      const selectElement_postLoginFlow = document.getElementById('postLoginFlow');
      const selectElement_firstLoginFlow = document.getElementById('firstLoginFlow');

      fetch('http://localhost:8080/admin/realms/master/ui-ext/authentication-management/flows', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      })
        .then(response => response.json())
        .then(responseJSON => {

          while (selectElement_postLoginFlow.firstChild) {
            selectElement_postLoginFlow.removeChild(selectElement_postLoginFlow.firstChild);
          }
          while (selectElement_firstLoginFlow.firstChild) {
            selectElement_firstLoginFlow.removeChild(selectElement_firstLoginFlow.firstChild);
          }


          responseJSON.forEach((flow, index) => {
            const optionElement = document.createElement('option');
            optionElement.value = flow.alias;
            optionElement.text = flow.alias;
            selectElement_postLoginFlow.add(optionElement);


          });
          responseJSON.forEach((flow, index) => {
            const optionElement1 = document.createElement('option');
            optionElement1.value = flow.alias;
            optionElement1.text = flow.alias;
            selectElement_firstLoginFlow.add(optionElement1);
            console.log(flow.id);
            console.log(flow.alias);
          });




          console.log("Alias values have been successfully added to the select element.");
        })
        .catch(error => {
          console.error(error);
        });

      // Check if the user has the "admin" role
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
          plugins.forEach(plugin => {
            var resultItem = document.createElement('div');
            var link = document.createElement('a');
            link.href = 'http://localhost:3000/editplugin.html'; // تحديد الرابط المؤقت، يمكنك تحديده بناءً على احتياجاتك
            link.textContent = plugin.alias;
            // اضافة حدث النقر على الرابط
            link.addEventListener('click', function (event) {
              event.preventDefault(); // منع النقرة من فتح الرابط مباشرة
              getPluginDetails(plugin.alias);
            });
            resultItem.appendChild(link);
            resultsContainer.appendChild(resultItem);
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

