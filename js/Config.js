const clientid = 'frontend';
const postLogoutRedirect = 'https://kcsignicat.first8.nl/samlconfig/pages/list.html';
const ServerUrl = 'https://kcsignicat.first8.nl';
const redirectUri = 'https://kcsignicat.first8.nl/samlconfig/pages/list.html';
const post_logout_redirect_uri = 'https://kcsignicat.first8.nl/samlconfig/pages/realm.html';
const realm = localStorage.getItem('realm_input');
console.log(realm)
const editplugin='https://kcsignicat.first8.nl/samlconfig/pages/editplugin.html';
const addplugin='https://kcsignicat.first8.nl/samlconfig/pages/addplugin.html';
localStorage.setItem('ServerUrl', ServerUrl);
localStorage.setItem('postLogoutRedirect', postLogoutRedirect);
localStorage.setItem('redirectUri', redirectUri);
localStorage.setItem('addplugin', addplugin);
