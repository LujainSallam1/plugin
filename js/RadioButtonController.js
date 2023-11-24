let backchannel_value = "false";
const backchannel = document.getElementById("backchannel");
backchannel.addEventListener("change", function () {
    if (backchannel.checked) {
        backchannel_value = "true";
        console.log(`backchannel_value: ${backchannel_value}`)

    }
    else {
        backchannel_value = backchannel.value;
        console.log(`backchannel_value: ${backchannel_value}`)

            ;
}});

let allowCreat_value = "false";
const allowCreat = document.getElementById("allowCreate");
allowCreat.addEventListener("change", function () {
    if (allowCreat.checked) {
        allowCreat_value = "true";
        console.log(`allowCreat_value: ${allowCreat_value}`)

    }
    else {
        allowCreat_value = allowCreat.value;
        console.log(`allowCreat_value: ${allowCreat_value}`)

            ;
}});


 
let httpPostBindingResponse_value = "false";
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
}});

  

  
 
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
}});

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
}});

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
}});


let wantAssertionsEncrypted_value = "false";
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
}});

let forceAuthentication_value = "false";
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
}});


let signMetadata_value = "false";
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
}});

let passSubject_value = "false";
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
}});

let storeToken_value = "false";
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
}});

let storedTokensReadable_value = "false";
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
}});

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
}});



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
}});
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
}});



let wantAuthnRequestsSigned_value = "false";
const wantAuthnRequestsSigned = document.getElementById("wantAuthnRequestsSigned");
wantAuthnRequestsSigned.addEventListener("change", function () {
    if (wantAuthnRequestsSigned.checked) {
        wantAuthnRequestsSigned_value = "true";
        console.log(`wantAuthnRequestsSigned_value: ${wantAuthnRequestsSigned_value}`)

    }
    else {
        wantAuthnRequestsSigned_value = wantAuthnRequestsSigned.value;
        console.log(`wantAuthnRequestsSigned_value: ${wantAuthnRequestsSigned_value}`)

            ;
}});



    document.addEventListener("DOMContentLoaded", function () {

        const deleteButtons = document.querySelectorAll(".delete");
        const addButton = document.getElementById("addClassRefs");
        const ClassRefs_items = document.getElementById("ClassRefs_items");

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

    document.addEventListener("DOMContentLoaded", function () {
        const deleteButtons = document.querySelectorAll(".delete1");
        const addButton = document.getElementById("addDeclRefs");
        const ClassRefs_items = document.getElementById("DeclRefs_items");

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

    document.addEventListener("DOMContentLoaded", function () {
        var onRadioButton = document.getElementById("wantAuthnRequestsSigned");
        var additionalField1 = document.getElementById("SignatureAlgorithm");
        var additionalField2 = document.getElementById("SAMLSignatureKeyName");

        onRadioButton.addEventListener("change", function () {
            if (onRadioButton.checked) {
                additionalField1.removeAttribute("disabled");
                additionalField2.removeAttribute("disabled");
            }
        });

        offRadioButton.addEventListener("change", function () {
            if (offRadioButton.checked) {
                additionalField1.setAttribute("disabled", "true");
                additionalField2.setAttribute("disabled", "true");
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
    }
    );

