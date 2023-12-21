var accessToken;
var Plugins;
const keycloak = Keycloak({
    url: 'http://localhost:8080',
    realm: 'master',
    clientId: 'frontend',
    redirectUri: 'http://localhost:3000/list.html',
    enableDebug: true,

});

function getAllPlugins(accessToken) {
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
                updatePluginList(plugins, accessToken);
            } else {
                console.error('Failed to fetch plugins:', response.status, response.statusText);
            }
        })
        .catch(error => {
            console.error('Error during the process:', error);
        });
}
window.getAllPlugins = getAllPlugins;


function updatePluginList(plugins, accessToken) {
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
            if (plugin.providerId == 'saml-extended') {
                var row = document.createElement('tr');

                // Create a link
                var link = document.createElement('a');
                link.href = 'http://localhost:3000/editplugin.html';
                if (plugin.displayName) {
                    link.textContent = plugin.displayName;
                }
                else { link.textContent = plugin.alias; }



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
                button.classList.add('btn');
                button.textContent = 'Delete';
                button.addEventListener('click', function () {
                    // Add the behavior associated with the button here
                    handleDeleteButtonClick(plugin.alias, accessToken);

                });
                buttonCell.appendChild(button);
                row.appendChild(buttonCell);

                // Add the row to the table
                table.appendChild(row);
            }
        });

        // Add the table to the results container
        resultsContainer.appendChild(table);
    } else {
        console.log("resultsContainer not exists");
    }
}
window.updatePluginList = updatePluginList;
function handleDeleteButtonClick(plugin_alias, accessToken) {
    keycloak.updateToken(180).then((bool) => {
        if (bool) {
            // Assuming you have an API endpoint for deleting plugins
            var deleteEndpoint = `http://localhost:8080/admin/realms/master/identity-provider/instances/${plugin_alias}`;
            var accessToken = keycloak.token;
            // Send a DELETE request using Fetch API
            fetch(deleteEndpoint, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    // You may need to include additional headers, such as authorization headers
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to delete plugin');

                    }
                    var resultsContainer = document.getElementById('resultsContainer');
                    resultsContainer.innerHTML = '';

                    getAllPlugins(accessToken);
                    // Optionally update the UI or perform additional actions on success
                })
                .catch(error => {
                    console.error('Error deleting plugin:', error.message);
                    // Handle the error as needed
                    alert('Failed to delete plugin. Please try again.');
                });

        }
    });
}
window.updatePluginList = updatePluginList;


function getPluginDetails(alias, accessToken) {

    keycloak.updateToken(180).then((bool) => {
        if (bool) {
            console.log("Token is updated");
            var accessToken = keycloak.token;

            fetch(`http://localhost:8080/admin/realms/master/identity-provider/instances/${alias}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
            })
                .then(async response => {
                    if (response.ok) {
                        var pluginData = await response.json();
                        window.location.href = 'http://localhost:3000/editplugin.html'
                        localStorage.setItem('pluginData', JSON.stringify(pluginData));

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
window.updatePluginList = updatePluginList;

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


            getAllPlugins(accessToken);

            const tokenParsed = keycloak.tokenParsed;
            const roles = tokenParsed.realm_access.roles;


            if (roles.includes("admin")) {
                console.log("User has 'admin' role");
                document.body.style.display = 'block';
            } else {
                alert("User does not have admin role. Access denied.");
                const clientid = 'frontend';
                const postLogoutRedirect = 'http://localhost:3000/list.html';
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
