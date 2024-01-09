var accessToken;
var Plugins;
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


            // getAllPlugins(accessToken);
            getAllRealms(accessToken)
            const tokenParsed = keycloak.tokenParsed;
            const roles = tokenParsed.realm_access.roles;


            if (roles.includes("admin")) {
                console.log("User has 'admin' role");
                document.body.style.display = 'block';
            } else {
                alert("User does not have admin role. Access denied.");
                window.location.href = `${ServerUrl}/realms/${realm}/protocol/openid-connect/logout?post_logout_redirect_uri=${redirectUri}&client_id=${clientid}`;

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
