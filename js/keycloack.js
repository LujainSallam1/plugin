var accessToken;
const keycloak = Keycloak({
  url: 'http://localhost:8080',
  realm: 'master',
  clientId: 'frontend',
  redirectUri: 'http://localhost:3000/list.html',
  enableDebug: true,

});


document.getElementById('login').addEventListener('click', () => {
  keycloak.login();
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
        // Get the container where the results will be displayed
        var resultsContainer = document.getElementById('resultsContainer');
      
        if (resultsContainer) {
          // Create a table element
          var table = document.createElement('table');
      
          // Add the table header
          var headerRow = document.createElement('tr');
          var headerNameCell = document.createElement('th');
          headerNameCell.textContent = 'Name';
          var headerProviderCell = document.createElement('th');
          headerProviderCell.textContent = 'Provider details';
          var headerButtonCell = document.createElement('th');
          headerButtonCell.textContent = 'Actions';
          headerRow.appendChild(headerNameCell);
          headerRow.appendChild(headerProviderCell);
          headerRow.appendChild(headerButtonCell);
          table.appendChild(headerRow);
      
          // Add rows to the table
          plugins.forEach(plugin => {
            var row = document.createElement('tr');
      
            // Create a link
            var link = document.createElement('a');
            link.href = 'http://localhost:3000/editplugin.html';
            link.textContent = plugin.alias;
      
            // Add click event to the link
            link.addEventListener('click', function (event) {
              event.preventDefault();
              getPluginDetails(plugin.alias);
              localStorage.setItem('pluginalias', plugin.alias);
            });
      
            // Add the link to the row
            var nameCell = document.createElement('td');
            nameCell.appendChild(link);
            row.appendChild(nameCell);
      
            // Add other information to the row
            var providerCell = document.createElement('td');
            providerCell.textContent = 'Saml-extended';
            row.appendChild(providerCell);
      
            // Add button without image
            var buttonCell = document.createElement('td');
            var button = document.createElement('button');
            button.textContent = 'Action';
            button.addEventListener('click', function () {
              // Add the behavior associated with the button here
              handleButtonClick(plugin.alias);
            });
            buttonCell.appendChild(button);
            row.appendChild(buttonCell);
      
            // Add the row to the table
            table.appendChild(row);
          });
      
          // Add the table to the results container
          resultsContainer.appendChild(table);
        } else {
          console.log("resultsContainer not exists");
        }
      }
      


      function getPluginDetails(alias) {

        keycloak.updateToken(180).then((bool) => {
          if (bool) {
            console.log("Token is updated");
            var newAccessToken1 = keycloak.token;
            localStorage.setItem('accessToken', newAccessToken1)

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

      var accesstoken = localStorage.getItem('accessToken');
      var pluginalias = localStorage.getItem('pluginalias')
      console.log(pluginalias)
      // استرجاع بيانات المكون باستخدام طلب GET
      console.log(accesstoken)
      if (accesstoken) {
        // استخدم storedToken كما تحتاج
        console.log(accesstoken)
        fetch(`http://localhost:8080/admin/realms/master/identity-provider/instances/${pluginalias}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accesstoken}`,
          },
        })
          .then(async checkPluginResponse => {
            if (checkPluginResponse.status === 200) {
              // المكون موجود، يمكنك الآن معالجة المعلومات
              var pluginData = await checkPluginResponse.json();
              console.log('Plugin Details:', pluginData);
              localStorage.setItem('pluginData', JSON.stringify(pluginData));
              console.log(pluginData);
              // يمكنك استخدام pluginData كما تريد هنا
            } else {
              // المكون غير موجود، يمكنك إجراء الإجراء المناسب (مثل رسالة خطأ)
              console.error("Plugin not found.");
              alert("Plugin not found.");
            }
          })
          .catch(error => {
            console.error('Error during the process:', error);
          });
      }
      else {
        console.error('No stored access token found.');
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
      localStorage.setItem('accessToken', keycloak.token);
      console.log("Access Token:", accessToken);

    }
    else {

      alert("User authentication failed!");

    }
  })
  .catch(() => {
    alert("Could not authenticate the user!");
  });
