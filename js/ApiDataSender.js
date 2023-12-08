
// var newAccessToken;


// buttonInput.addEventListener('click', () => {

//     keycloak.updateToken(180).then((bool) => {
//         if (bool) {
//             console.log("Token is updated");
//             newAccessToken = keycloak.token;

//             function removeEmptyStrings(obj) {
//                 for (const key in obj) {
//                     if (typeof obj[key] === 'string' && obj[key].trim() === "") {
//                         delete obj[key];
//                     } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//                         removeEmptyStrings(obj[key]);
//                     }
//                 }
//             }

//             removeEmptyStrings(data);

//             const configKeys = Object.keys(data.config);
//             for (const key of configKeys) {
//                 if (typeof data.config[key] === 'string' && data.config[key].trim() === "") {
//                     delete data.config[key];
//                 }
//             }
//             if (Array.isArray(data.config.authnContextClassRefs) && data.config.authnContextClassRefs.length === 0) {
//                 delete data.config.authnContextClassRefs;
//             }

//             if (Array.isArray(data.config.authnContextDeclRefs) && data.config.authnContextDeclRefs.length === 0) {
//                 delete data.config.authnContextDeclRefs;
//             }



//             console.log(data);

//             // Sending a GET request to check if the plugin exists
//             fetch(`http://localhost:8080/admin/realms/master/identity-provider/instances/${alias}`, {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${newAccessToken}`,
//                 },
//             })

//                 // Handling the response of the GET request
//                 .then(async checkPluginResponse => {
//                     if (checkPluginResponse.ok) {
//                         var pluginData = await checkPluginResponse.json(); 
//                         const updatePluginResponse = await fetch(`http://localhost:8080/admin/realms/master/identity-provider/instances/${alias}`, {
//                             method: 'PUT',
//                             headers: {
//                                 'Authorization': `Bearer ${newAccessToken}`,
//                                 'Content-Type': 'application/json',
//                             },
//                             body: JSON.stringify(data),
//                         }                      

//                         );
//                         console.log(data)
                        

//                         console.log("Update Plugin Response:", updatePluginResponse);


//                         // Checking the response status for success
//                         if (updatePluginResponse.status === 204 || updatePluginResponse.status === 201) {
//                             console.log("Plugin updated successfully.");
//                             alert("Plugin updated successfully.");
//                             localStorage.setItem('pluginData', JSON.stringify(data));


//                         } else {
//                             console.error(`Failed to update/add the plugin. Response: ${updatePluginResponse.statusText}`);
//                             console.error("Error Details:", await updatePluginResponse.json());
//                             alert("Failed to update the plugin")
//                         }
//                     } else if (checkPluginResponse.status === 404) {
//                         // If the status is 404, the plugin does not exist, so send a POST request
//                         return fetch('http://localhost:8080/admin/realms/master/identity-provider/instances', {
//                             method: 'POST',
//                             headers: {
//                                 'Authorization': `Bearer ${newAccessToken}`,
//                                 'Content-Type': 'application/json',
//                             },
//                             body: JSON.stringify(data),
//                         })
//                             .then(response => {
//                                 if (response.ok) {
//                                     alert("Plugin added successfully.");
//                                      localStorage.setItem('pluginData', JSON.stringify(data));
//                                 } else {
//                                     console.error('Failed to add plugin:', response.status, response.statusText);
//                                     alert("Failed to add plugin");
//                                 }
//                             })
//                             .catch(error => {

//                                 console.error('Network error or failed to send request:', error);
//                             });


//                     } else {
//                         // If there is another status, an error occurred

//                         console.error(`Failed to retrieve the plugin. Response: ${checkPluginResponse.statusText}`);
//                         alert("Failed to retrieve the plugin");
//                         throw new Error(`Failed to retrieve the plugin. Response: ${checkPluginResponse.statusText}`);
//                     }
//                 })

//                 // Handling the response of the POST request (if executed)
//                 .then(response => {
//                     // ... (Additional code that was commented out)
//                 })
//                 .catch(error => {
//                     // ... (Additional code that was commented out)
//                 });

//             // Setting a form element value to an empty string

//         } else {
//             console.log("Token is not updated");
//         }
//     });
// });

