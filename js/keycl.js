var accessToken;
var Plugins;
const keycloakServer='http://localhost:8080/realms/master/protocol/openid-connect/'
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
    window.location.href = `${keycloakServer}logout?post_logout_redirect_uri=${postLogoutRedirect}&client_id=${clientid}`;
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
                window.location.href = `${keycloakServer}logout?post_logout_redirect_uri=${postLogoutRedirect}&client_id=${clientid}`;

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
