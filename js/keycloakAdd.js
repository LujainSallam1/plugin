var accessToken;
const clientid = 'frontend';
const postLogoutRedirect = 'http://localhost:3000/list.html';
const keycloak = Keycloak({
    url: 'http://localhost:8080',
    realm: 'master',
    clientId: 'frontend',
    redirectUri: 'http://localhost:3000/list.html',
    enableDebug: true,

});


document.getElementById('logout').addEventListener('click', () => {
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

                    if (pluginData.postBrokerLoginFlowAlias) {
                        console.log(postLoginFlow.value)

                    }

                    if (pluginData.firstBrokerLoginFlowAlias) {
                        console.log(postLoginFlow.value)

                    }


                    console.log("Alias values have been successfully added to the select element.");
                })
                .catch(error => {
                    console.error(error);
                });

            const tokenParsed = keycloak.tokenParsed;
            const roles = tokenParsed.realm_access.roles;


            if (roles.includes("admin")) {
                console.log("User has 'admin' role");
                document.body.style.display = 'block';
            } else {
                alert("User does not have admin role. Access denied.");
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
