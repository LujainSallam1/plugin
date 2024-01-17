

const backchannel = document.getElementById("backchannel");
var storedData = localStorage.getItem('pluginData');
var pluginData = JSON.parse(storedData);


const enabled = document.getElementById("enabled");
enabled.addEventListener("change", function () {
    handleCheckboxValue(enabled);

});

backchannel.addEventListener("change", function () {
    handleCheckboxValue(backchannel);
});


const allowCreate = document.getElementById("allowCreate");
allowCreate.addEventListener("change", function () {
    handleCheckboxValue(allowCreate);

});




const httpPostBindingResponse = document.getElementById("httpPostBindingResponse");
httpPostBindingResponse.addEventListener("change", function () {
    handleCheckboxValue(httpPostBindingResponse);
});






const httpPostBindingAuthnRequest = document.getElementById("httpPostBindingAuthnRequest");
httpPostBindingAuthnRequest.addEventListener("change", function () {
    handleCheckboxValue(httpPostBindingAuthnRequest);

});

const httpPostBindingLogout = document.getElementById("httpPostBindingLogout");
httpPostBindingLogout.addEventListener("change", function () {
    handleCheckboxValue(httpPostBindingLogout);

});


const wantAssertionsSigned = document.getElementById("wantAssertionsSigned");
wantAssertionsSigned.addEventListener("change", function () {
    handleCheckboxValue(wantAssertionsSigned);

});


const wantAssertionsEncrypted = document.getElementById("wantAssertionsEncrypted");
wantAssertionsEncrypted.addEventListener("change", function () {
    handleCheckboxValue(wantAssertionsEncrypted);

});


const forceAuthentication = document.getElementById("forceAuthentication");
forceAuthentication.addEventListener("change", function () {
    handleCheckboxValue(forceAuthentication);

});



const signMetadata = document.getElementById("signMetadata");
signMetadata.addEventListener("change", function () {
    handleCheckboxValue(signMetadata);

});


const passSubject = document.getElementById("passSubject");
passSubject.addEventListener("change", function () {
    handleCheckboxValue(passSubject);

});


const storeToken = document.getElementById("storeToken");
storeToken.addEventListener("change", function () {
    handleCheckboxValue(storeToken);

});


const storedTokensReadable = document.getElementById("storedTokensReadable");
storedTokensReadable.addEventListener("change", function () {
    handleCheckboxValue(storedTokensReadable);

});


const trustEmail = document.getElementById("trustEmail");
trustEmail.addEventListener("change", function () {
    handleCheckboxValue(trustEmail);

});




const accountLinkingOnly = document.getElementById("accountLinkingOnly");
accountLinkingOnly.addEventListener("change", function () {
    handleCheckboxValue(accountLinkingOnly);

});


const hideLoginPage = document.getElementById("hideLoginPage");
hideLoginPage.addEventListener("change", function () {
    handleCheckboxValue(hideLoginPage);

});


var SignatureAlgorithm = document.getElementById("SignatureAlgorithm");
var SAMLSignatureKeyName = document.getElementById("SAMLSignatureKeyName");

const wantAuthnRequestsSigned = document.getElementById("wantAuthnRequestsSigned");
wantAuthnRequestsSigned.addEventListener("change", function () {
    if (wantAuthnRequestsSigned.checked) {
        wantAuthnRequestsSigned.value = true;
        SignatureAlgorithm.removeAttribute("disabled");
        SAMLSignatureKeyName.removeAttribute("disabled");
        encryption_algorithm.removeAttribute("disabled");
        console.log(`wantAuthnRequestsSigned_value: ${wantAuthnRequestsSigned.value}`)

    }
    else {
        wantAuthnRequestsSigned.value = false;
        console.log(`wantAuthnRequestsSigned_value: ${wantAuthnRequestsSigned.value}`)
        SignatureAlgorithm.setAttribute("disabled", "true");
        SAMLSignatureKeyName.setAttribute("disabled", "true");
        encryption_algorithm.setAttribute("disabled", "true");


        ;
    }
});

const ArtifactResolutionService_in_metadata = document.getElementById("ArtifactResolutionService_in_metadata");
ArtifactResolutionService_in_metadata.addEventListener("change", function () {
    handleCheckboxValue(ArtifactResolutionService_in_metadata);
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
        button.style.display = "inline";
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
                        button.style.display = "inline";
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
        additionalField1.value = '';
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
        additionalField_endpoint.value = '';
        ;
    }
}
);


const Sign_Artifact_Resolution_Request = document.getElementById("Sign_Artifact_Resolution_Request");
Sign_Artifact_Resolution_Request.addEventListener("change", function () {
    handleCheckboxValue(Sign_Artifact_Resolution_Request);

});

const ArtifactResolution_via_HTTP_ARTIFACT = document.getElementById("ArtifactResolution_via_HTTP_ARTIFACT");
ArtifactResolution_via_HTTP_ARTIFACT.addEventListener("change", function () {
    handleCheckboxValue(ArtifactResolution_via_HTTP_ARTIFACT);

});



const Artifact_Resolution_with_SOAP = document.getElementById("Artifact_Resolution_with_SOAP");
Artifact_Resolution_with_SOAP.addEventListener("change", function () {
    handleCheckboxValue(Artifact_Resolution_with_SOAP);

});



const Artifact_Resolution_with_XML_header = document.getElementById("Artifact_Resolution_with_XML_header");
Artifact_Resolution_with_XML_header.addEventListener("change", function () {
    handleCheckboxValue(Artifact_Resolution_with_XML_header);

});


const Mutual_TLS = document.getElementById("Mutual_TLS");
Mutual_TLS.addEventListener("change", function () {
    handleCheckboxValue(Mutual_TLS);
});

principalType_input.addEventListener('change', function () {
    console.log(principalType_input.value)
    if (principalType_input.value == "ATTRIBUTE" || principalType_input.value == "FRIENDLY_ATTRIBUTE") {
        principalAttribute_input.removeAttribute("disabled");

    } else {
        principalAttribute_input.value = '';
        principalAttribute_input.setAttribute("disabled", "true");

    }
});