

const backchannel = document.getElementById("backchannel");
var storedData = localStorage.getItem('pluginData');
var pluginData = JSON.parse(storedData);
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
    const deleteButtonsClassRefs = document.querySelectorAll(".delete");
    const addButtonClassRefs = document.getElementById("addClassRefs");
    const ClassRefs_items = document.getElementById("ClassRefs_items");

    deleteButtonsClassRefs.forEach(function (button) {
        button.style.display = "inline";
    });

    addButtonClassRefs.addEventListener("click", function (e) {
        deleteButtonsClassRefs.forEach(function (button) {
            button.style.display = "inline";
        });

        const newItem = document.createElement("div");
        newItem.className = "next-referral col-4";
        newItem.innerHTML = '<input name="textinputClassRefs" type="text" class="input_text">';
        ClassRefs_items.appendChild(newItem);
    });

    document.body.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            const items = ClassRefs_items.querySelectorAll(".next-referral");
            if (items.length > 0) {
                items[items.length - 1].remove();
                deleteButtonsClassRefs.forEach(function (button, index) {
                    if (index === items.length - 1) {
                        button.style.display = "inline";
                    }
                });
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const deleteButtonsDeclRefs = document.querySelectorAll(".delete1");
    const addButtonDeclRefs = document.getElementById("addDeclRefs");
    const DeclRefs_items = document.getElementById("DeclRefs_items");

    deleteButtonsDeclRefs.forEach(function (button) {
        button.style.display = "none";
    });

    addButtonDeclRefs.addEventListener("click", function (e) {
        deleteButtonsDeclRefs.forEach(function (button) {
            button.style.display = "inline";
        });

        const newItem = document.createElement("div");
        newItem.className = "next-referral col-4";
        newItem.innerHTML = '<input name="textinputDeclRefs" type="text" class="input_text">';
        DeclRefs_items.appendChild(newItem);
    });

    document.body.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete1")) {
            const items = DeclRefs_items.querySelectorAll(".next-referral");
            if (items.length > 0) {
                items[items.length - 1].remove();
                deleteButtonsDeclRefs.forEach(function (button, index) {
                    if (index === items.length - 1) {
                        button.style.display = "none";
                    }
                });
            }
        }
    });
});


var validateSignatures = document.getElementById("validateSignatures");
var additionalField1 = document.getElementById("ValidatingX509Certificates");


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
// var Sign_Service_Provider_Metadata_value = "false";
// const Sign_Service_Provider_Metadata = document.getElementById("Sign_Service_Provider_Metadata");
// Sign_Service_Provider_Metadata.addEventListener("change", function () {
//     if (Sign_Service_Provider_Metadata.checked) {
//         Sign_Service_Provider_Metadata_value = "true";
//         console.log(`Sign_Service_Provider_Metadata_value: ${Sign_Service_Provider_Metadata_value}`)

//     }
//     else {
//         Sign_Service_Provider_Metadata_value = Sign_Service_Provider_Metadata.value;
//         console.log(`Sign_Service_Provider_Metadata_value: ${Sign_Service_Provider_Metadata_value}`)

//             ;
//     }
// });



const Artifact_Resolution_with_SOAP = document.getElementById("Artifact_Resolution_with_SOAP");
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