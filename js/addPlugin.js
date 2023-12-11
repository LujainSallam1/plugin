
buttonInput.addEventListener('click', () => {
    var authnContextClassRefs = []
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
const button = buttonInput.value;
var Display_Name = Display_Name_input.value;
var Display_Order = Display_Order_input.value;
var Service_Provider_Entity_ID = Service_Provider_Entity_ID_input.value;
var Identity_Provider_Entity_ID = Identity_Provider_Entity_ID_input.value;
var Single_Sign_On_Service_URL = Single_Sign_On_Service_URL_input.value;
var Single_Logout_Service_URL = Single_Logout_Service_URL_input.value;
var allowedClockSkew = allowedClockSkew_input.value;
var attributeConsumingServiceIndex = attributeConsumingServiceIndex_input.value;
var attributeConsumingServiceName = attributeConsumingServiceName_input.value;
var Artifact_Resolution_Endpoint = Artifact_Resolution_Endpoint_input.value;
var CharacterSet = CharacterSet_input.value;

var comparison = comparison_input.value;
var firstLoginFlow = firstLoginFlow_input.value;
var postLoginFlow = postLoginFlow_input.value;
var syncMode = syncMode_input.value;
var principalType = principalType_input.value;
var nameIdPolicy = nameIdPolicy_input.value;
var nameIdPolicy1 = `urn:oasis:names:tc:SAML:1.1:nameid-format:${nameIdPolicy}`;
var SignatureAlgorithm = SignatureAlgorithm_input.value;
var SAMLSignatureKeyName = SAMLSignatureKeyName_input.value;
var ValidatingX509Certificates = ValidatingX509Certificates_input.value;
var url = `http://localhost:8080/admin/realms/master/identity-provider/instances`;
var Metadata_expires_in = Metadata_expires_in_input.value;
var metadataValidUntilPeriod = metadataValidUntilPeriod_input.value;
var Linked_Providers = Linked_Providers_input.value;
var alias=alias_input.value;

var data = {
    "alias": alias,
    "displayName": Display_Name,
    "providerId": "saml-extended",
    "enabled": "true",
    "updateProfileFirstLoginMode": "on",
    "trustEmail": trustEmail.value,
    "storeToken": storeToken.value,
    "addReadTokenRoleOnCreate": storedTokensReadable.value,
    "authenticateByDefault": "false",
    "linkOnly": accountLinkingOnly.value,
    "firstBrokerLoginFlowAlias": firstLoginFlow,
    "postBrokerLoginFlowAlias": postLoginFlow,
    config: {
        "postBindingLogout": httpPostBindingLogout.value,
        "authnContextClassRefs": authnContextClassRefs.length > 0 ? JSON.stringify(authnContextClassRefs) : undefined,
        "postBindingResponse": httpPostBindingResponse.value,
        "singleLogoutServiceUrl": Single_Logout_Service_URL,
        "authnContextDeclRefs": authnContextDeclRefs.length > 0 ? JSON.stringify(authnContextDeclRefs) : undefined,
        "backchannelSupported":  backchannel.value,
        "xmlSigKeyInfoKeyNameTransformer": SAMLSignatureKeyName,
        "idpEntityId": Identity_Provider_Entity_ID,
        "loginHint": passSubject.value,
        "allowCreate": allowCreate.value,
        "authnContextComparisonType": comparison,
        "syncMode": syncMode,
        "singleSignOnServiceUrl": Single_Sign_On_Service_URL,
        "wantAuthnRequestsSigned": wantAuthnRequestsSigned.value,
        "allowedClockSkew": allowedClockSkew,
        "guiOrder": Display_Order,
        "validateSignature": validateSignatures.value,
        "hideOnLoginPage": hideLoginPage.value,
        "signingCertificate": ValidatingX509Certificates,
        "nameIDPolicyFormat": nameIdPolicy1,
        "entityId": Service_Provider_Entity_ID,
        "attributeConsumingServiceName": attributeConsumingServiceName,
        "signSpMetadata": signMetadata.value,
        "wantAssertionsEncrypted": wantAssertionsEncrypted.value,
        "signatureAlgorithm": SignatureAlgorithm,
        "wantAssertionsSigned": wantAssertionsSigned.value,
        "postBindingAuthnRequest":httpPostBindingAuthnRequest.value,
        "forceAuthn": forceAuthentication.value,
        "attributeConsumingServiceIndex": attributeConsumingServiceIndex,
        "principalType": principalType,
        "includeArtifactResolutionServiceMetadata": ArtifactResolutionService_in_metadata.value,
        "artifactResolution": Artifact_Resolution.value,
        "artifactResolutionEndpoint": Artifact_Resolution_Endpoint,
        "signArtifactResolutionRequest": Sign_Artifact_Resolution_Request.value,
        "artifactResolutionSOAP": Artifact_Resolution_with_SOAP.value,
        "artifactResolutionWithXmlHeader": Artifact_Resolution_with_XML_header.value,
        "artifactResolutionHTTPArtifact": ArtifactResolution_via_HTTP_ARTIFACT.value,
        "mutualTls": Mutual_TLS.value,
        "charSet": CharacterSet,
        "metadataValidUntilUnit": Metadata_expires_in,
        "metadataValidUntilPeriod": metadataValidUntilPeriod,
        "linkedProviders": Linked_Providers
    }};
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


 

    // Update token and execute the following code when the token is successfully updated 
    keycloak.updateToken(180).then((bool) => {
        if (bool) {
            // Code to be executed after token update 
            var newAccessToken = keycloak.token;

            // Sending a GET request to check if the plugin exists 
            fetch(`http://localhost:8080/admin/realms/master/identity-provider/instances/${alias}`, {
                method: 'GET',
                headers: {
                    'Authorization':` Bearer ${newAccessToken}`, // Fix here
                },
            })
                .then(async checkPluginResponse => {
                    if (checkPluginResponse.ok) {
                        console.log("Plugin exists.");
                        alert("Plugin exists.");
                        // Add your logic for updating the existing plugin if needed 
                    } else if (checkPluginResponse.status === 404) {
                        // Plugin not found, add it using a POST request 
                        const updatePluginResponse = await fetch('http://localhost:8080/admin/realms/master/identity-provider/instances', {
                            method: 'POST',
                            headers: {
                                'Authorization':` Bearer ${newAccessToken}`, // Fix here
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        });

                        // Handle the response of the POST request 
                        if (updatePluginResponse.ok) {
                            alert("Plugin added successfully.");
                            localStorage.setItem('pluginData', JSON.stringify(data));
                        } else {
                            console.error('Failed to add plugin:', updatePluginResponse.status, updatePluginResponse.statusText);
                            alert("Failed to add plugin");
                        }
                    } else {
                        // If there is another status, an error occurred 
                        console.error(`Failed to retrieve the plugin. Response: ${checkPluginResponse.statusText}`);
                        alert("Failed to retrieve the plugin");
                        throw new Error(`Failed to retrieve the plugin. Response: ${checkPluginResponse.statusText}`);
                    }
                })
                .catch(error => {
                    console.error('Error during the process:', error);
                });
        }
    });
});
