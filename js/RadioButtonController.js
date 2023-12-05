// var backchannel_value;
// const backchannel = document.getElementById("backchannel");
// const storedData = localStorage.getItem('pluginData');

// if (storedData) {
//     var pluginData = JSON.parse(storedData);

//     if (pluginData.config && pluginData.config.backchannelSupported) { 
//         backchannel_value = pluginData.config.backchannelSupported;
//         console.log(`backchannel_value: ${backchannel_value}`);
        
//         if (pluginData.config.backchannelSupported == "true") {
//             backchannel.checked = true;
//         }else{
//             backchannel.checked = false;
     
//         }
//     }

//     console.log(pluginData);
// }
const backchannel=document.getElementById("backchannel")
var backchannel_value;
backchannel.addEventListener("change", function () {
    if (backchannel.checked) {
        backchannel_value ="true";
        console.log(`backchannel_value: ${backchannel_value}`);
    } else {
        backchannel_value ="false";
        console.log(`backchannel_value: ${backchannel_value}`);
    }
});


const allowCreate = document.getElementById("allowCreate");
var allowCreat_value ;
allowCreate.addEventListener("change", function () {

    if (allowCreate.checked) {
        allowCreat_value = "true";
        console.log(`allowCreat_value: ${allowCreat_value}`)

    }
    else {
        allowCreat_value = allowCreate.value;
        console.log(`allowCreat_value: ${allowCreat_value}`)

            ;
    }

});



var httpPostBindingResponse_value ;
const httpPostBindingResponse = document.getElementById("httpPostBindingResponse");
httpPostBindingResponse.addEventListener("change", function () {
    if (httpPostBindingResponse.checked) {
        httpPostBindingResponse_value = "true";


        console.log(`httpPostBindingResponse_value: ${httpPostBindingResponse_value}`)

    }
    else {
        httpPostBindingResponse_value = httpPostBindingResponse.value;
        console.log(`httpPostBindingResponse_value: ${httpPostBindingResponse_value}`)

            ;
    }
});





let httpPostBindingAuthnRequest_value = "false";
const httpPostBindingAuthnRequest = document.getElementById("httpPostBindingAuthnRequest");
httpPostBindingAuthnRequest.addEventListener("change", function () {
    if (httpPostBindingAuthnRequest.checked) {
        httpPostBindingAuthnRequest_value = "true";
        console.log(`httpPostBindingAuthnRequest_value: ${httpPostBindingAuthnRequest_value}`)

    }
    else {
        httpPostBindingAuthnRequest_value = httpPostBindingAuthnRequest.value;
        console.log(`httpPostBindingAuthnRequest_value: ${httpPostBindingAuthnRequest_value}`)

            ;
    }
});

let httpPostBindingLogout_value = "false";
const httpPostBindingLogout = document.getElementById("httpPostBindingLogout");
httpPostBindingLogout.addEventListener("change", function () {
    if (httpPostBindingLogout.checked) {
        httpPostBindingLogout_value = "true";
        console.log(`httpPostBindingLogout_value: ${httpPostBindingLogout_value}`)

    }
    else {
        httpPostBindingLogout_value = httpPostBindingLogout.value;
        console.log(`httpPostBindingLogout_value: ${httpPostBindingLogout_value}`)

            ;
    }
});

let wantAssertionsSigned_value = "false";
const wantAssertionsSigned = document.getElementById("wantAssertionsSigned");
wantAssertionsSigned.addEventListener("change", function () {
    if (wantAssertionsSigned.checked) {
        wantAssertionsSigned_value = "true";
        console.log(`wantAssertionsSigned_value: ${wantAssertionsSigned_value}`)

    }
    else {
        wantAssertionsSigned_value = wantAssertionsSigned.value;
        console.log(`wantAssertionsSigned_value: ${wantAssertionsSigned_value}`)

            ;
    }
});


var wantAssertionsEncrypted_value="false" ;
const wantAssertionsEncrypted = document.getElementById("wantAssertionsEncrypted");
wantAssertionsEncrypted.addEventListener("change", function () {
    if (wantAssertionsEncrypted.checked) {
        wantAssertionsEncrypted_value = "true";
        console.log(`wantAssertionsEncrypted_value: ${wantAssertionsEncrypted_value}`)

    }
    else {
        wantAssertionsEncrypted_value = wantAssertionsEncrypted.value;
        console.log(`wantAssertionsEncrypted_value: ${wantAssertionsEncrypted_value}`)

            ;
    }
});

var forceAuthentication_value="false" ;
const forceAuthentication = document.getElementById("forceAuthentication");
forceAuthentication.addEventListener("change", function () {
    if (forceAuthentication.checked) {
        forceAuthentication_value = "true";
        console.log(`forceAuthentication_value: ${forceAuthentication_value}`)

    }
    else {
        forceAuthentication_value = forceAuthentication.value;
        console.log(`forceAuthentication_value: ${forceAuthentication_value}`)

            ;
    }
});


var signMetadata_value="false" ;
const signMetadata = document.getElementById("signMetadata");
signMetadata.addEventListener("change", function () {
    if (signMetadata.checked) {
        signMetadata_value = "true";
        console.log(`signMetadata_value: ${signMetadata_value}`)

    }
    else {
        signMetadata_value = signMetadata.value;
        console.log(`signMetadata_value: ${signMetadata_value}`)

            ;
    }
});

let passSubject_value="false" ;
const passSubject = document.getElementById("passSubject");
passSubject.addEventListener("change", function () {
    if (passSubject.checked) {
        passSubject_value = "true";
        console.log(`passSubject_value: ${passSubject_value}`)

    }
    else {
        passSubject_value = passSubject.value;
        console.log(`passSubject_value: ${passSubject_value}`)

            ;
    }
});

var storeToken_value="false" ;
const storeToken = document.getElementById("storeToken");
storeToken.addEventListener("change", function () {
    if (storeToken.checked) {
        storeToken_value = "true";
        console.log(`storeToken_value: ${storeToken_value}`)

    }
    else {
        storeToken_value = storeToken.value;
        console.log(`storeToken_value: ${storeToken_value}`)

            ;
    }
});

var storedTokensReadable_value="false" ;
const storedTokensReadable = document.getElementById("storedTokensReadable");
storedTokensReadable.addEventListener("change", function () {
    if (storedTokensReadable.checked) {
        storedTokensReadable_value = "true";
        console.log(`storedTokensReadable_value: ${storedTokensReadable_value}`)

    }
    else {
        storedTokensReadable_value = storedTokensReadable.value;
        console.log(`storedTokensReadable_value: ${storedTokensReadable_value}`)

            ;
    }
});

let trustEmail_value = "false";
const trustEmail = document.getElementById("trustEmail");
trustEmail.addEventListener("change", function () {
    if (trustEmail.checked) {
        trustEmail_value = "true";
        console.log(`trustEmail_value: ${trustEmail_value}`)

    }
    else {
        trustEmail_value = trustEmail.value;
        console.log(`trustEmail_value: ${trustEmail_value}`)

            ;
    }
});



let accountLinkingOnly_value = "false";
const accountLinkingOnly = document.getElementById("accountLinkingOnly");
accountLinkingOnly.addEventListener("change", function () {
    if (accountLinkingOnly.checked) {
        accountLinkingOnly_value = "true";
        console.log(`accountLinkingOnly_value: ${accountLinkingOnly_value}`)

    }
    else {
        accountLinkingOnly_value = accountLinkingOnly.value;
        console.log(`accountLinkingOnly_value: ${accountLinkingOnly_value}`)

            ;
    }
});

let hideLoginPage_value = "false";
const hideLoginPage = document.getElementById("hideLoginPage");
hideLoginPage.addEventListener("change", function () {
    if (hideLoginPage.checked) {
        hideLoginPage_value = "true";
        console.log(`hideLoginPage_value: ${hideLoginPage_value}`)

    }
    else {
        hideLoginPage_value = hideLoginPage.value;
        console.log(`hideLoginPage_value: ${hideLoginPage_value}`)

            ;
    }
});


var SignatureAlgorithm = document.getElementById("SignatureAlgorithm");
var SAMLSignatureKeyName = document.getElementById("SAMLSignatureKeyName");
var wantAuthnRequestsSigned_value="false" ;
const wantAuthnRequestsSigned = document.getElementById("wantAuthnRequestsSigned");
wantAuthnRequestsSigned.addEventListener("change", function () {
    if (wantAuthnRequestsSigned.checked) {
        wantAuthnRequestsSigned_value = "true";
        SignatureAlgorithm.removeAttribute("disabled");
        SAMLSignatureKeyName.removeAttribute("disabled");
        console.log(`wantAuthnRequestsSigned_value: ${wantAuthnRequestsSigned_value}`)

    }
    else {
        wantAuthnRequestsSigned_value = wantAuthnRequestsSigned.value;
        console.log(`wantAuthnRequestsSigned_value: ${wantAuthnRequestsSigned_value}`)
        SignatureAlgorithm.setAttribute("disabled", "true");
        SAMLSignatureKeyName.setAttribute("disabled", "true");

        ;
    }
});
let ArtifactResolutionService_in_metadata_value = "false";
const ArtifactResolutionService_in_metadata = document.getElementById("ArtifactResolutionService_in_metadata");
ArtifactResolutionService_in_metadata.addEventListener("change", function () {
    if (ArtifactResolutionService_in_metadata.checked) {
        ArtifactResolutionService_in_metadata_value = "true";
        console.log(`ArtifactResolutionService_in_metadata_value: ${ArtifactResolutionService_in_metadata_value}`)

    }
    else {
        ArtifactResolutionService_in_metadata_value = ArtifactResolutionService_in_metadata.value;
        console.log(`ArtifactResolutionService_in_metadata_value: ${ArtifactResolutionService_in_metadata_value}`)

            ;
    }
});

const ClassRefs_items = document.getElementById("ClassRefs_items");

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
        ClassRefs_items.appendChild(newItem);
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
let validateSignatures_value = "false";


validateSignatures.addEventListener("change", function () {
    if (validateSignatures.checked) {
        validateSignatures_value = "true";
        console.log(`validateSignatures_value: ${validateSignatures_value}`)
        additionalField1.removeAttribute("disabled");


    }
    else {
        validateSignatures_value = validateSignatures.value;
        console.log(`validateSignatures_value: ${validateSignatures_value}`)
        additionalField1.setAttribute("disabled", "true");
        ;
    }
});

var Artifact_Resolution = document.getElementById("Artifact_Resolution");
var additionalField_endpoint = document.getElementById("Artifact_Resolution_Endpoint");
let Artifact_Resolution_value = "false";


Artifact_Resolution.addEventListener("change", function () {
    if (Artifact_Resolution.checked) {
        Artifact_Resolution_value = "true";
        console.log(`Artifact_Resolution_value: ${Artifact_Resolution_value}`)
        additionalField_endpoint.removeAttribute("disabled");


    }
    else {
        Artifact_Resolution_value = Artifact_Resolution.value;
        console.log(`Artifact_Resolution_value: ${Artifact_Resolution_value}`)
        additionalField_endpoint.setAttribute("disabled", "true");
        ;
    }
}
);

let Sign_Artifact_Resolution_Request_value = "false";
const Sign_Artifact_Resolution_Request = document.getElementById("Sign_Artifact_Resolution_Request");
Sign_Artifact_Resolution_Request.addEventListener("change", function () {
    if (Sign_Artifact_Resolution_Request.checked) {
        Sign_Artifact_Resolution_Request_value = "true";
        console.log(`Sign_Artifact_Resolution_Request_value: ${Sign_Artifact_Resolution_Request_value}`)

    }
    else {
        Sign_Artifact_Resolution_Request_value = Sign_Artifact_Resolution_Request.value;
        console.log(`Sign_Artifact_Resolution_Request_value: ${Sign_Artifact_Resolution_Request_value}`)

            ;
    }
});
let ArtifactResolution_via_HTTP_ARTIFACT_value = "false";
const ArtifactResolution_via_HTTP_ARTIFACT = document.getElementById("ArtifactResolution_via_HTTP_ARTIFACT");
ArtifactResolution_via_HTTP_ARTIFACT.addEventListener("change", function () {
    if (ArtifactResolution_via_HTTP_ARTIFACT.checked) {
        ArtifactResolution_via_HTTP_ARTIFACT_value = "true";
        console.log(`ArtifactResolution_via_HTTP_ARTIFACT_value: ${ArtifactResolution_via_HTTP_ARTIFACT_value}`)

    }
    else {
        ArtifactResolution_via_HTTP_ARTIFACT_value = ArtifactResolution_via_HTTP_ARTIFACT.value;
        console.log(`ArtifactResolution_via_HTTP_ARTIFACT_value: ${ArtifactResolution_via_HTTP_ARTIFACT_value}`)

            ;
    }
});
let Sign_Service_Provider_Metadata_value = "false";
const Sign_Service_Provider_Metadata = document.getElementById("Sign_Service_Provider_Metadata");
Sign_Service_Provider_Metadata.addEventListener("change", function () {
    if (Sign_Service_Provider_Metadata.checked) {
        Sign_Service_Provider_Metadata_value = "true";
        console.log(`Sign_Service_Provider_Metadata_value: ${Sign_Service_Provider_Metadata_value}`)

    }
    else {
        Sign_Service_Provider_Metadata_value = Sign_Service_Provider_Metadata.value;
        console.log(`Sign_Service_Provider_Metadata_value: ${Sign_Service_Provider_Metadata_value}`)

            ;
    }
});


let Artifact_Resolution_with_SOAP_value = "false";
const Artifact_Resolution_with_SOAP = document.getElementById("Artifact_Resolution_with_SOAP");
Artifact_Resolution_with_SOAP.addEventListener("change", function () {
    if (Artifact_Resolution_with_SOAP.checked) {
        Artifact_Resolution_with_SOAP_value = "true";
        console.log(`Artifact_Resolution_with_SOAP_value: ${Artifact_Resolution_with_SOAP_value}`)

    }
    else {
        Artifact_Resolution_with_SOAP_value = Artifact_Resolution_with_SOAP.value;
        console.log(`Artifact_Resolution_with_SOAP_value: ${Artifact_Resolution_with_SOAP_value}`)

            ;
    }
});


let Artifact_Resolution_with_XML_header_value = "false";
const Artifact_Resolution_with_XML_header = document.getElementById("Artifact_Resolution_with_XML_header");
Artifact_Resolution_with_XML_header.addEventListener("change", function () {
    if (Artifact_Resolution_with_XML_header.checked) {
        Artifact_Resolution_with_XML_header_value = "true";
        console.log(`Artifact_Resolution_with_XML_header_value: ${Artifact_Resolution_with_XML_header_value}`)

    }
    else {
        Artifact_Resolution_with_XML_header_value = Artifact_Resolution_with_XML_header.value;
        console.log(`Artifact_Resolution_with_XML_header_value: ${Artifact_Resolution_with_XML_header_value}`)

            ;
    }
});

let Mutual_TLS_value = "false";
const Mutual_TLS = document.getElementById("Mutual_TLS");
Mutual_TLS.addEventListener("change", function () {
    if (Mutual_TLS.checked) {
        Mutual_TLS_value = "true";
        console.log(`Mutual_TLS_value: ${Mutual_TLS_value}`)

    }
    else {
        Mutual_TLS_value = Mutual_TLS.value;
        console.log(`Mutual_TLS_value: ${Mutual_TLS_value}`)

            ;
    }
});