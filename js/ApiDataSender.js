const redirectUriInput = document.getElementById("redirectUri");
const SamlExtendedInput = document.getElementById("SamlExtended");
const buttonInput = document.getElementById("submit");
const Display_Name_input = document.getElementById("displayName");
const Display_Order_input = document.getElementById("displayOrder");
const Service_Provider_Entity_ID_input = document.getElementById("spEntityId");
const Identity_Provider_Entity_ID_input = document.getElementById("idpEntityId");
const Single_Sign_On_Service_URL_input = document.getElementById("ssoServiceUrl");
const Single_Logout_Service_URL_input = document.getElementById("sloServiceUrl");
const allowedClockSkew_input = document.getElementById("allowedClockSkew");
const attributeConsumingServiceIndex_input = document.getElementById("attributeConsumingServiceIndex");
const attributeConsumingServiceName_input = document.getElementById("attributeConsumingServiceName");
const authnContextClassRefs_input = document.getElementById("authnContextClassRefs");
const authnContextDeclRefs_input = document.getElementById("authnContextDeclRefs");
const comparison_input = document.getElementById("comparison");
const firstLoginFlow_input = document.getElementById("firstLoginFlow");
const postLoginFlow_input = document.getElementById("postLoginFlow");
const syncMode_input = document.getElementById("syncMode");
const principalType_input = document.getElementById("principalType");
const nameIdPolicy_input = document.getElementById("nameIdPolicy");
const SignatureAlgorithm_input = document.getElementById("SignatureAlgorithm");
const SAMLSignatureKeyName_input = document.getElementById("SAMLSignatureKeyName");
const ValidatingX509Certificates_input = document.getElementById("ValidatingX509Certificates");
const Artifact_Resolution_Endpoint_input = document.getElementById("Artifact_Resolution_Endpoint");
const CharacterSet_input = document.getElementById("CharacterSet");
const Metadata_expires_in_input = document.getElementById("Metadata_expires_in");
const metadataValidUntilPeriod_input = document.getElementById("metadataValidUntilPeriod");
const Linked_Providers_input = document.getElementById("Linked_Providers");

let newAccessToken;


buttonInput.addEventListener('click', () => {

    keycloak.updateToken(180).then((bool) => {
        if (bool) {
            console.log("Token is updated");
            newAccessToken = keycloak.token;

            const authnContextClassRefs = []
            const ClassRefs_inputs = ClassRefs_items.querySelectorAll("input");
            ClassRefs_inputs.forEach(input => {
                if (input.value.trim() !== "") {
                    authnContextClassRefs.push(input.value);
                }
            });
            console.log(authnContextClassRefs);
            const authnContextDeclRefs = []
            const DeclRefs_inputs = DeclRefs_items.querySelectorAll("input");
            DeclRefs_inputs.forEach(input => {
                if (input.value.trim() !== "") {
                    authnContextDeclRefs.push(input.value);
                }
            });
            console.log(authnContextDeclRefs);
            const redirectUri = redirectUriInput.value;
            const SamlExtended = SamlExtendedInput.value;
            const button = buttonInput.value;
            const Display_Name = Display_Name_input.value;
            const Display_Order = Display_Order_input.value;
            const Service_Provider_Entity_ID = Service_Provider_Entity_ID_input.value;
            const Identity_Provider_Entity_ID = Identity_Provider_Entity_ID_input.value;
            const Single_Sign_On_Service_URL = Single_Sign_On_Service_URL_input.value;
            const Single_Logout_Service_URL = Single_Logout_Service_URL_input.value;
            const allowedClockSkew = allowedClockSkew_input.value;
            const attributeConsumingServiceIndex = attributeConsumingServiceIndex_input.value;
            const attributeConsumingServiceName = attributeConsumingServiceName_input.value;
            const Artifact_Resolution_Endpoint = Artifact_Resolution_Endpoint_input.value;
            const CharacterSet = CharacterSet_input.value;

            var comparison = comparison_input.value;
            var firstLoginFlow = firstLoginFlow_input.value;
            var postLoginFlow = postLoginFlow_input.value;
            var syncMode = syncMode_input.value;
            var principalType = principalType_input.value;
            var nameIdPolicy = nameIdPolicy_input.value;
            var nameIdPolicy1 = `urn:oasis:names:tc:SAML:1.1:nameid-format:${nameIdPolicy}`;
            var SignatureAlgorithm = SignatureAlgorithm_input.value;
            var SAMLSignatureKeyName = SAMLSignatureKeyName_input.value;
            const ValidatingX509Certificates = ValidatingX509Certificates_input.value;
            const url = `http://localhost:8080/admin/realms/master/identity-provider/instances`;
            const Metadata_expires_in = Metadata_expires_in_input.value;
            const metadataValidUntilPeriod = metadataValidUntilPeriod_input.value;
            const Linked_Providers = Linked_Providers_input.value;
            const data = {
                "alias": SamlExtended,
                "displayName": Display_Name,
                "internalId": "a3e9b939-357f-4bff-bac6-8225aec4a9e4",
                "providerId": "saml-extended",
                "enabled": "true",
                "updateProfileFirstLoginMode": "on",
                "trustEmail": trustEmail_value,
                "storeToken": storeToken_value,
                "addReadTokenRoleOnCreate": storedTokensReadable_value,
                "authenticateByDefault": "false",
                "linkOnly": accountLinkingOnly_value,
                "firstBrokerLoginFlowAlias": firstLoginFlow,
                "postBrokerLoginFlowAlias": postLoginFlow,
                config: {
                    "postBindingLogout": httpPostBindingLogout_value,
                    "authnContextClassRefs": authnContextClassRefs.length > 0 ? JSON.stringify(authnContextClassRefs) : undefined,
                    "postBindingResponse": httpPostBindingResponse_value,
                    "singleLogoutServiceUrl": Single_Logout_Service_URL,
                    "authnContextDeclRefs": authnContextDeclRefs.length > 0 ? JSON.stringify(authnContextDeclRefs) : undefined,
                    "backchannelSupported": backchannel_value,
                    "xmlSigKeyInfoKeyNameTransformer": SAMLSignatureKeyName,
                    "idpEntityId": Identity_Provider_Entity_ID,
                    "loginHint": passSubject_value,
                    "allowCreate": allowCreat_value,
                    "authnContextComparisonType": comparison,
                    "syncMode": syncMode,
                    "singleSignOnServiceUrl": Single_Sign_On_Service_URL,
                    "wantAuthnRequestsSigned": "true",
                    "allowedClockSkew": allowedClockSkew,
                    "guiOrder": Display_Order,
                    "validateSignature": validateSignatures_value,
                    "hideOnLoginPage": hideLoginPage_value,
                    "signingCertificate": ValidatingX509Certificates,
                    "nameIDPolicyFormat": nameIdPolicy1,
                    "entityId": Service_Provider_Entity_ID,
                    "attributeConsumingServiceName": attributeConsumingServiceName,
                    "signSpMetadata": signMetadata_value,
                    "wantAssertionsEncrypted": wantAssertionsEncrypted_value,
                    "signatureAlgorithm": SignatureAlgorithm,
                    "wantAssertionsSigned": wantAssertionsSigned_value,
                    "postBindingAuthnRequest": wantAuthnRequestsSigned_value,
                    "forceAuthn": forceAuthentication_value,
                    "attributeConsumingServiceIndex": attributeConsumingServiceIndex,
                    "principalType": principalType,
                    "includeArtifactResolutionServiceMetadata": ArtifactResolutionService_in_metadata_value,
                    "artifactResolution": Artifact_Resolution_value,
                    "artifactResolutionEndpoint": Artifact_Resolution_Endpoint,
                    "signArtifactResolutionRequest": Sign_Artifact_Resolution_Request_value,
                    "artifactResolutionSOAP": Artifact_Resolution_with_SOAP_value,
                    "artifactResolutionWithXmlHeader": Artifact_Resolution_with_XML_header_value,
                    "artifactResolutionHTTPArtifact": ArtifactResolution_via_HTTP_ARTIFACT_value,
                    "mutualTls": Mutual_TLS_value,
                    "charSet": CharacterSet,
                    "metadataValidUntilUnit": Metadata_expires_in,
                    "metadataValidUntilPeriod": metadataValidUntilPeriod,
                    "linkedProviders": Linked_Providers
                }
            };
            function removeEmptyStrings(obj) {
                for (const key in obj) {
                    if (typeof obj[key] === 'string' && obj[key].trim() === "") {
                        delete obj[key];
                    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                        removeEmptyStrings(obj[key]);
                    }
                }
            }

            removeEmptyStrings(data);

            const configKeys = Object.keys(data.config);
            for (const key of configKeys) {
                if (typeof data.config[key] === 'string' && data.config[key].trim() === "") {
                    delete data.config[key];
                }
            }
            if (Array.isArray(data.config.authnContextClassRefs) && data.config.authnContextClassRefs.length === 0) {
                delete data.config.authnContextClassRefs;
            }

            if (Array.isArray(data.config.authnContextDeclRefs) && data.config.authnContextDeclRefs.length === 0) {
                delete data.config.authnContextDeclRefs;
            }



            console.log(data);
            // Logging the data
            console.log(data);

            // Sending a GET request to check if the plugin exists
            fetch('http://localhost:8080/admin/realms/master/identity-provider/instances/saml-extended', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${newAccessToken}`,
                },
            })

                // Handling the response of the GET request
                .then(async checkPluginResponse => {
                    if (checkPluginResponse.ok) {
                        // If the GET request is successful (status 2xx)
                        // Parsing the JSON data from the response
                        var pluginData = await checkPluginResponse.json();

                        // Updating the plugin data using a PUT request
                        const updatePluginResponse = await fetch('http://localhost:8080/admin/realms/master/identity-provider/instances/saml-extended', {
                            method: 'PUT',
                            headers: {
                                'Authorization': `Bearer ${newAccessToken}`,
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        });
                        localStorage.setItem('pluginData', JSON.stringify(pluginData));
                        console.log(pluginData);
                        console.log("Update Plugin Response:", updatePluginResponse);


                        // Checking the response status for success
                        if (updatePluginResponse.status === 204 || updatePluginResponse.status === 201) {
                            console.log("Plugin updated successfully.");
                            alert("Plugin updated successfully.");
                            localStorage.setItem('pluginData', JSON.stringify(data));
                        } else {
                            console.error(`Failed to update/add the plugin. Response: ${updatePluginResponse.statusText}`);
                            console.error("Error Details:", await updatePluginResponse.json());
                            alert("Failed to update the plugin")
                        }
                    } else if (checkPluginResponse.status === 404) {
                        // If the status is 404, the plugin does not exist, so send a POST request
                        return fetch('http://localhost:8080/admin/realms/master/identity-provider/instances', {
                            method: 'POST',
                            headers: {
                                'Authorization': `Bearer ${newAccessToken}`,
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        })
                            .then(response => {
                                if (response.ok) {
                                    alert("Plugin added successfully.");
                                    localStorage.setItem('pluginData', JSON.stringify(data));
                                } else {
                                    console.error('Failed to add plugin:', response.status, response.statusText);
                                    alert("Failed to add plugin");
                                }
                            })
                            .catch(error => {

                                console.error('Network error or failed to send request:', error);
                            });


                    } else {
                        // If there is another status, an error occurred

                        console.error(`Failed to retrieve the plugin. Response: ${checkPluginResponse.statusText}`);
                        alert("Failed to retrieve the plugin");
                        throw new Error(`Failed to retrieve the plugin. Response: ${checkPluginResponse.statusText}`);
                    }
                })

                // Handling the response of the POST request (if executed)
                .then(response => {
                    // ... (Additional code that was commented out)
                })
                .catch(error => {
                    // ... (Additional code that was commented out)
                });

            // Setting a form element value to an empty string
            document.getElementById("ValidatingX509Certificates").value = '';
            document.getElementById("ValidatingX509Certificates").value = '';

        } else {
            console.log("Token is not updated");
        }
    });
});

