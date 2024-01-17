var accessToken;
const keycloak = Keycloak({
    url: `${ServerUrl}`,
    realm: `${realm}`,
    clientId: `${clientid}`,
    redirectUri: `${redirectUri}`,
    enableDebug: true,

});

document.getElementById('logout').addEventListener('click', () => {
    window.location.href = `${ServerUrl}/realms/${realm}/protocol/openid-connect/logout?post_logout_redirect_uri=${redirectUri}&client_id=${clientid}`;
});

keycloak
    .init({ onLoad: 'login-required' })
    .then((authenticated) => {
        if (authenticated) {
            accessToken = keycloak.token;
            console.log(`Access Token: ${accessToken}`);
            localStorage.setItem('accessToken', keycloak.token);
            var selectedrealm = localStorage.getItem('selectedRealm');
            //get flow from KEY
            const selectElement_postLoginFlow = document.getElementById('postLoginFlow');
            const selectElement_firstLoginFlow = document.getElementById('firstLoginFlow');

            fetch(`http://localhost:8080/admin/realms/${selectedrealm}/ui-ext/authentication-management/flows`, {
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

                const tokenParsed = keycloak.tokenParsed;
                const realmroles = tokenParsed.realm_access.roles;
                const clientroles = tokenParsed.resource_access;
                console.log(clientroles);
    
                if ((clientroles && clientroles['realm-management'] && clientroles['realm-management'].roles.includes("realm-admin")) || realmroles.includes("admin")) {
                    document.body.style.display = 'block';
                } else {
    
                    alert("User does not have admin role. Access denied.");
                    window.location.href = `${ServerUrl}/realms/${realm}/protocol/openid-connect/logout?post_logout_redirect_uri=${redirectUri}&client_id=${clientid}`;

                }
            }
    
            else {
    
                alert("User authentication failed!");
    
            }
        })
        .catch(() => {
            alert("Could not authenticate the user!");
        });
    