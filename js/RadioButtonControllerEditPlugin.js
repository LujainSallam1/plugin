


var storedData = localStorage.getItem('pluginData');
var pluginData = JSON.parse(storedData);
backchannel.value = pluginData.config.backchannelSupported ? pluginData.config.backchannelSupported : false;
backchannel.addEventListener("change", function () {
    if (backchannel.checked) {
        backchannel.value = true;
        console.log(`backchannel_value: ${backchannel.value}`);
    } else {
        backchannel.value = false;
        console.log(`backchannel_value: ${backchannel.value}`);
    }
});


const allowCreate = document.getElementById("allowCreate");
allowCreate.value = pluginData.config.allowCreate ? pluginData.config.allowCreate : false;
allowCreate.addEventListener("change", function () {

    if (allowCreate.checked) {
        allowCreate.value = true;
        console.log(`allowCreat_value: ${allowCreate.value}`)

    }
    else {
        allowCreate.value = false;
        console.log(`allowCreat_value: ${allowCreate.value}`)

            ;
    }

});




const httpPostBindingResponse = document.getElementById("httpPostBindingResponse");
httpPostBindingResponse.value = pluginData.config.postBindingResponse ? pluginData.config.postBindingResponse : false;
httpPostBindingResponse.addEventListener("change", function () {
    if (httpPostBindingResponse.checked) {
        httpPostBindingResponse.value = "true";


        console.log(`httpPostBindingResponse.value: ${httpPostBindingResponse.value}`)

    }
    else {
        httpPostBindingResponse.value = false;
        console.log(`httpPostBindingResponse_value: ${httpPostBindingResponse.value}`)

            ;
    }
});






const httpPostBindingAuthnRequest = document.getElementById("httpPostBindingAuthnRequest");
httpPostBindingAuthnRequest.value = pluginData.config.postBindingAuthnRequest ? pluginData.config.postBindingAuthnRequest : false;
httpPostBindingAuthnRequest.addEventListener("change", function () {
    if (httpPostBindingAuthnRequest.checked) {
        httpPostBindingAuthnRequest.value = true;
        console.log(`httpPostBindingAuthnRequest_value: ${httpPostBindingAuthnRequest.value}`)

    }
    else {
        httpPostBindingAuthnRequest.value = false;
        console.log(`httpPostBindingAuthnRequest_value: ${httpPostBindingAuthnRequest.value}`)

            ;
    }
});

const httpPostBindingLogout = document.getElementById("httpPostBindingLogout");
httpPostBindingLogout.value = pluginData.config.postBindingLogout ? pluginData.config.postBindingLogout : false;
httpPostBindingLogout.addEventListener("change", function () {
    if (httpPostBindingLogout.checked) {
        httpPostBindingLogout.value = true;
        console.log(`httpPostBindingLogout_value: ${httpPostBindingLogout.value}`)

    }
    else {
        httpPostBindingLogout.value = false;
        console.log(`httpPostBindingLogout_value: ${httpPostBindingLogout.value}`)

            ;
    }
});


const wantAssertionsSigned = document.getElementById("wantAssertionsSigned");
wantAssertionsSigned.value = pluginData.config.wantAssertionsSigned ? pluginData.config.wantAssertionsSigned : false;
wantAssertionsSigned.addEventListener("change", function () {
    if (wantAssertionsSigned.checked) {
        wantAssertionsSigned.value = true;
        console.log(`wantAssertionsSigned_value: ${wantAssertionsSigned.value}`)

    }
    else {
        wantAssertionsSigned.value = false;
        console.log(`wantAssertionsSigned_value: ${wantAssertionsSigned.value}`)

            ;
    }
});


const wantAssertionsEncrypted = document.getElementById("wantAssertionsEncrypted");
wantAssertionsEncrypted.value = pluginData.config.wantAssertionsEncrypted ? pluginData.config.wantAssertionsEncrypted : false;
wantAssertionsEncrypted.addEventListener("change", function () {
    if (wantAssertionsEncrypted.checked) {
        wantAssertionsEncrypted.value = true;
        console.log(`wantAssertionsEncrypted_value: ${wantAssertionsEncrypted.value}`)

    }
    else {
        wantAssertionsEncrypted_value = false;
        console.log(`wantAssertionsEncrypted_value: ${wantAssertionsEncrypted.value}`)

            ;
    }
});


const forceAuthentication = document.getElementById("forceAuthentication");
forceAuthentication.value = pluginData.config.forceAuthn ? pluginData.config.forceAuthn : false;
forceAuthentication.addEventListener("change", function () {
    if (forceAuthentication.checked) {
        forceAuthentication.value = true;
        console.log(`forceAuthentication_value: ${forceAuthentication.value}`)

    }
    else {
        forceAuthentication.value = false;
        console.log(`forceAuthentication_value: ${forceAuthentication.value}`)

            ;
    }
});



const signMetadata = document.getElementById("signMetadata");
signMetadata.value = pluginData.config.signSpMetadata ? pluginData.config.signSpMetadata : false
signMetadata.addEventListener("change", function () {
    if (signMetadata.checked) {
        signMetadata.value = true;
        console.log(`signMetadata_value: ${signMetadata.value}`)

    }
    else {
        signMetadata.value = false;
        console.log(`signMetadata_value: ${signMetadata.value}`)

            ;
    }
});


const passSubject = document.getElementById("passSubject");
passSubject.value = pluginData.config.loginHint ? pluginData.config.loginHint : false;
passSubject.addEventListener("change", function () {
    if (passSubject.checked) {
        passSubject.value = true;
        console.log(`passSubject_value: ${passSubject.value}`)

    }
    else {
        passSubject.value = false;
        console.log(`passSubject_value: ${passSubject.value}`)

            ;
    }
});


const storeToken = document.getElementById("storeToken");
storeToken.value = pluginData.storeToken ? pluginData.storeToken : false;
storeToken.addEventListener("change", function () {
    if (storeToken.checked) {
        storeToken.value = true;
        console.log(`storeToken_value: ${storeToken.value}`)

    }
    else {
        storeToken.value = false;
        console.log(`storeToken_value: ${storeToken.value}`)

            ;
    }
});


const storedTokensReadable = document.getElementById("storedTokensReadable");
storedTokensReadable.value = pluginData.addReadTokenRoleOnCreate ? pluginData.addReadTokenRoleOnCreate : false;
storedTokensReadable.addEventListener("change", function () {
    if (storedTokensReadable.checked) {
        storedTokensReadable.value = true;
        console.log(`storedTokensReadable_value: ${storedTokensReadable.value}`)

    }
    else {
        storedTokensReadable.value = false;
        console.log(`storedTokensReadable_value: ${storedTokensReadable.value}`)

            ;
    }
});


const trustEmail = document.getElementById("trustEmail");
trustEmail.value = pluginData.trustEmail ? pluginData.trustEmail : false;
trustEmail.addEventListener("change", function () {
    if (trustEmail.checked) {
        trustEmail.value = true;
        console.log(`trustEmail_value: ${trustEmail.value}`)

    }
    else {
        trustEmail.value = false;
        console.log(`trustEmail_value: ${trustEmail.value}`)

            ;
    }
});




const accountLinkingOnly = document.getElementById("accountLinkingOnly");
accountLinkingOnly.value = pluginData.linkOnly ? pluginData.linkOnly : false;
accountLinkingOnly.addEventListener("change", function () {
    if (accountLinkingOnly.checked) {
        accountLinkingOnly.value = true;
        console.log(`accountLinkingOnly_value: ${accountLinkingOnly.value}`)

    }
    else {
        accountLinkingOnly.value = false;
        console.log(`accountLinkingOnly_value: ${accountLinkingOnly.value}`)

            ;
    }
});


const hideLoginPage = document.getElementById("hideLoginPage");
hideLoginPage.value = pluginData.config.hideOnLoginPage ? pluginData.config.hideOnLoginPage : false;
hideLoginPage.addEventListener("change", function () {
    if (hideLoginPage.checked) {
        hideLoginPage.value = true;
        console.log(`hideLoginPage_value: ${hideLoginPage.value}`)

    }
    else {
        hideLoginPage.value = false;
        console.log(`hideLoginPage_value: ${hideLoginPage.value}`)

            ;
    }
});


var SignatureAlgorithm = document.getElementById("SignatureAlgorithm");
var SAMLSignatureKeyName = document.getElementById("SAMLSignatureKeyName");

const wantAuthnRequestsSigned = document.getElementById("wantAuthnRequestsSigned");
wantAuthnRequestsSigned.value = pluginData.config.wantAuthnRequestsSigned ? pluginData.config.wantAuthnRequestsSigned : false;
wantAuthnRequestsSigned.addEventListener("change", function () {
    if (wantAuthnRequestsSigned.checked) {
        wantAuthnRequestsSigned.value = true;
        SignatureAlgorithm.removeAttribute("disabled");
        SAMLSignatureKeyName.removeAttribute("disabled");
        console.log(`wantAuthnRequestsSigned_value: ${wantAuthnRequestsSigned.value}`)

    }
    else {
        wantAuthnRequestsSigned.value = false;
        console.log(`wantAuthnRequestsSigned_value: ${wantAuthnRequestsSigned.value}`)
        SignatureAlgorithm.setAttribute("disabled", "true");
        SAMLSignatureKeyName.setAttribute("disabled", "true");

        ;
    }
});

const ArtifactResolutionService_in_metadata = document.getElementById("ArtifactResolutionService_in_metadata");
ArtifactResolutionService_in_metadata.value = pluginData.config.includeArtifactResolutionServiceMetadata ? pluginData.config.includeArtifactResolutionServiceMetadata : false;
ArtifactResolutionService_in_metadata.addEventListener("change", function () {
    if (ArtifactResolutionService_in_metadata.checked) {
        ArtifactResolutionService_in_metadata.value = true;
        console.log(`ArtifactResolutionService_in_metadata_value: ${ArtifactResolutionService_in_metadata.value}`)

    }
    else {
        ArtifactResolutionService_in_metadata.value = false;
        console.log(`ArtifactResolutionService_in_metadata_value: ${ArtifactResolutionService_in_metadata.value}`)

            ;
    }
});


document.addEventListener("DOMContentLoaded", function () {

    const deleteButtons = document.querySelectorAll(".delete");
    const addButton = document.getElementById("addClassRefs");


    deleteButtons.forEach(function (button) {
        button.style.display = "none";
    });

    addButton.addEventListener("click", function (e) {
        deleteButtons.forEach(function (button) {
            button.style.display = "inline";

        });

        const newItem = document.createElement("div");
        newItem.className = "next-referral col-4";
        newItem.innerHTML = '<input id="textinput" name="textinput" type="text" class="form-control input-md">';
        ClassRefs_items.appendChild(newItem);
    });

    document.body.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            const items = document.querySelectorAll(".next-referral");
            if (items.length > 0) {
                items[items.length - 1].remove();
            }
        }
    });
});
const DeclRefs_items = document.getElementById("DeclRefs_items");

document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".delete1");
    const addButton = document.getElementById("addDeclRefs");

    deleteButtons.forEach(function (button) {
        button.style.display = "none";
    });

    addButton.addEventListener("click", function (e) {
        deleteButtons.forEach(function (button) {
            button.style.display = "inline";
        });

        const newItem = document.createElement("div");
        newItem.className = "next-referral col-4";
        newItem.innerHTML = '<input id="textinput" name="textinput" type="text" class="form-control input-md">';
        DeclRefs_items.appendChild(newItem);
    });

    document.body.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete1")) {
            const items = document.querySelectorAll(".next-referral");
            if (items.length > 0) {
                items[items.length - 1].remove();
            }
        }
    });
});


var validateSignatures = document.getElementById("validateSignatures");
var additionalField1 = document.getElementById("ValidatingX509Certificates");
validateSignatures.value = pluginData.config.validateSignature ? pluginData.config.validateSignature : false;


validateSignatures.addEventListener("change", function () {
    if (validateSignatures.checked) {
        validateSignatures.value = true;
        console.log(`validateSignatures_value: ${validateSignatures.value}`)
        additionalField1.removeAttribute("disabled");


    }
    else {
        validateSignatures.value = false;
        console.log(`validateSignatures_value: ${validateSignatures.value}`)
        additionalField1.setAttribute("disabled", "true");
        ;
    }
});

var Artifact_Resolution = document.getElementById("Artifact_Resolution");
Artifact_Resolution.value = pluginData.config.artifactResolution ? pluginData.config.artifactResolution : false;

Artifact_Resolution.addEventListener("change", function () {
    if (Artifact_Resolution.checked) {
        Artifact_Resolution.value = true;
        console.log(`Artifact_Resolution_value: ${Artifact_Resolution.value}`)
        additionalField_endpoint.removeAttribute("disabled");

    }
    else {
        Artifact_Resolution.value = false;
        console.log(`Artifact_Resolution_value: ${Artifact_Resolution.value}`)
        additionalField_endpoint.setAttribute("disabled", "true");
        ;
    }
}
);


const Sign_Artifact_Resolution_Request = document.getElementById("Sign_Artifact_Resolution_Request");
Sign_Artifact_Resolution_Request.value = pluginData.config.signArtifactResolutionRequest ? pluginData.config.signArtifactResolutionRequest : false;
Sign_Artifact_Resolution_Request.addEventListener("change", function () {
    if (Sign_Artifact_Resolution_Request.checked) {
        Sign_Artifact_Resolution_Request.value = true;
        console.log(`Sign_Artifact_Resolution_Request_value: ${Sign_Artifact_Resolution_Request.value}`)

    }
    else {
        Sign_Artifact_Resolution_Request.value = false;
        console.log(`Sign_Artifact_Resolution_Request_value: ${Sign_Artifact_Resolution_Request.value}`)

            ;
    }
});

const ArtifactResolution_via_HTTP_ARTIFACT = document.getElementById("ArtifactResolution_via_HTTP_ARTIFACT");
ArtifactResolution_via_HTTP_ARTIFACT.value = pluginData.config.artifactResolutionHTTPArtifact ? pluginData.config.artifactResolutionHTTPArtifact : false;
ArtifactResolution_via_HTTP_ARTIFACT.addEventListener("change", function () {
    if (ArtifactResolution_via_HTTP_ARTIFACT.checked) {
        ArtifactResolution_via_HTTP_ARTIFACT.value = true;
        console.log(`ArtifactResolution_via_HTTP_ARTIFACT_value: ${ArtifactResolution_via_HTTP_ARTIFACT.value}`)

    }
    else {
        ArtifactResolution_via_HTTP_ARTIFACT.value = false;
        console.log(`ArtifactResolution_via_HTTP_ARTIFACT_value: ${ArtifactResolution_via_HTTP_ARTIFACT.value}`)

            ;
    }
});




const Artifact_Resolution_with_SOAP = document.getElementById("Artifact_Resolution_with_SOAP");
Artifact_Resolution_with_SOAP.value = pluginData.config.artifactResolutionSOAP ? pluginData.config.artifactResolutionSOAP : false;
Artifact_Resolution_with_SOAP.addEventListener("change", function () {
    if (Artifact_Resolution_with_SOAP.checked) {
        Artifact_Resolution_with_SOAP.value = true;
        console.log(`Artifact_Resolution_with_SOAP_value: ${Artifact_Resolution_with_SOAP.value}`)

    }
    else {
        Artifact_Resolution_with_SOAP.value = false;
        console.log(`Artifact_Resolution_with_SOAP_value: ${Artifact_Resolution_with_SOAP.value}`)

            ;
    }
});



const Artifact_Resolution_with_XML_header = document.getElementById("Artifact_Resolution_with_XML_header");
Artifact_Resolution_with_XML_header.value = pluginData.config.artifactResolutionWithXmlHeader ? pluginData.config.artifactResolutionWithXmlHeader : false;
Artifact_Resolution_with_XML_header.addEventListener("change", function () {
    if (Artifact_Resolution_with_XML_header.checked) {
        Artifact_Resolution_with_XML_header.value = true;
        console.log(`Artifact_Resolution_with_XML_header_value: ${Artifact_Resolution_with_XML_header.value}`)

    }
    else {
        Artifact_Resolution_with_XML_header.value = false;
        console.log(`Artifact_Resolution_with_XML_header_value: ${Artifact_Resolution_with_XML_header.value}`)

            ;
    }
});


const Mutual_TLS = document.getElementById("Mutual_TLS");
Mutual_TLS.value = pluginData.config.mutualTls ? pluginData.config.mutualTls : false;

Mutual_TLS.addEventListener("change", function () {
    if (Mutual_TLS.checked) {
        Mutual_TLS.value = true;
        console.log(`Mutual_TLS_value: ${Mutual_TLS.value}`)

    }
    else {
        Mutual_TLS.value = false;
        console.log(`Mutual_TLS_value: ${Mutual_TLS.value}`)

            ;
    }
});
const enabled = document.getElementById("enabled");
enabled.value = pluginData.enabled ? pluginData.enabled : false;
console.log(enabled.value)
enabled.addEventListener("change", function () {
    if (enabled.checked) {
        enabled.value = true;
        console.log(`enabled: ${enabled.value}`)
    }
    else {
        enabled.value = false;
        console.log(`enabled: ${enabled.value}`)

            ;
    }
});