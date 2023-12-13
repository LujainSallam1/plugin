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
                  // إنشاء جدول
                  var table = document.createElement('table');
              
                  // إضافة هيدر الجدول
                  var headerRow = document.createElement('tr');
                  var headerNameCell = document.createElement('th');
                  headerNameCell.textContent = 'Name';
                  var headerProviderCell = document.createElement('th');
                  headerProviderCell.textContent = 'Provider details';
                  headerRow.appendChild(headerNameCell);
                  headerRow.appendChild(headerProviderCell);
                  table.appendChild(headerRow);
              
                  // إضافة الصفوف إلى الجدول
                  plugins.forEach(plugin => {
                    var row = document.createElement('tr');
              
                    // إنشاء الرابط
                    var link = document.createElement('a');
                    link.href = 'http://localhost:3000/editplugin.html'; // تحديد الرابط المؤقت، يمكنك تحديده بناءً على احتياجاتك
                    link.textContent = plugin.alias;
              
                    // اضافة حدث النقر على الرابط
                    link.addEventListener('click', function (event) {
                      event.preventDefault(); // منع النقرة من فتح الرابط مباشرة
                      getPluginDetails(plugin.alias);
                    });
              
                    // إضافة الرابط إلى الصف
                    var nameCell = document.createElement('td');
                    nameCell.appendChild(link);
                    row.appendChild(nameCell);
              
                    // إضافة باقي المعلومات إلى الصف
                    var providerCell = document.createElement('td');
                    providerCell.textContent = 'Saml-extended'; // قم بتغيير هذا الجزء بتفاصيل مزود الخدمة الفعلية
                    row.appendChild(providerCell);
              
                    // إضافة الصف إلى الجدول
                    table.appendChild(row);
                  });
              
                  // إضافة الجدول إلى النتائج
                  resultsContainer.appendChild(table);
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
