let backchannel_value = "false";
const backchannel_on = document.getElementById("backchannelon");
backchannel_on.addEventListener('change', () => {
    backchannel_value = backchannel_on.value;
    console.log(`backchannel_value: ${backchannel_value}`)
});

let allowCreat_value = "false";
const allowCreat_on = document.getElementById("allowCreateon");
allowCreat_on.addEventListener('change', () => {
    allowCreat_value = allowCreat_on.value;
    console.log(`allowCreat_value: ${allowCreat_value}`)
});

let httpPostBindingResponse_value = "false";
const httpPostBindingResponse_on = document.getElementById("httpPostBindingResponseon");
httpPostBindingResponse_on.addEventListener('change', () => {
    httpPostBindingResponse_value = httpPostBindingResponse_on.value;
    console.log(`httpPostBindingResponse_value: ${httpPostBindingResponse_value}`)
});

let httpPostBindingAuthnRequest_value = "false";
const httpPostBindingAuthnRequest_on = document.getElementById("httpPostBindingAuthnRequeston");
httpPostBindingAuthnRequest_on.addEventListener('change', () => {
    httpPostBindingAuthnRequest_value = httpPostBindingAuthnRequest_on.value;
    console.log(`httpPostBindingAuthnRequest_value: ${httpPostBindingAuthnRequest_value}`)
});

let httpPostBindingLogout_value = "false";
const httpPostBindingLogout_on = document.getElementById("httpPostBindingLogouton");
httpPostBindingLogout_on.addEventListener('change', () => {
    httpPostBindingLogout_value = httpPostBindingLogout_on.value;
    console.log(`httpPostBindingLogout_value: ${httpPostBindingLogout_value}`)
});


let wantAssertionsSigned_value = "false";
const wantAssertionsSigned_on = document.getElementById("wantAssertionsSignedon");
wantAssertionsSigned_on.addEventListener('change', () => {
    wantAssertionsSigned_value = wantAssertionsSigned_on.value;
    console.log(`wantAssertionsSigned_value: ${wantAssertionsSigned_value}`)
});

let wantAssertionsEncrypted_value = "false";
const wantAssertionsEncrypted_on = document.getElementById("wantAssertionsEncryptedon");
wantAssertionsEncrypted_on.addEventListener('change', () => {
    wantAssertionsEncrypted_value = wantAssertionsEncrypted_on.value;
    console.log(`wantAssertionsEncrypted_value: ${wantAssertionsEncrypted_value}`)
});

let forceAuthentication_value = "false";
const forceAuthentication_on = document.getElementById("forceAuthenticationon");
forceAuthentication_on.addEventListener('change', () => {
    forceAuthentication_value = forceAuthentication_on.value;
    console.log(`forceAuthentication_value: ${forceAuthentication_value}`)
});


let signMetadata_value = "false";
const signMetadata_on = document.getElementById("signMetadataon");
signMetadata_on.addEventListener('change', () => {
    signMetadata_value = signMetadata_on.value;
    console.log(`signMetadata_value: ${signMetadata_value}`)
});

let passSubject_value = "false";
const passSubject_on = document.getElementById("passSubjecton");
passSubject_on.addEventListener('change', () => {
    passSubject_value = passSubject_on.value;
    console.log(`passSubject_value: ${passSubject_value}`)
});

let storeToken_value = "false";
const storeToken_on = document.getElementById("storeTokenon");
storeToken_on.addEventListener('change', () => {
    storeToken_value = storeToken_on.value;
    console.log(`storeToken_value: ${storeToken_value}`)
});


let storedTokensReadable_value = "false";
const storedTokensReadable_on = document.getElementById("storedTokensReadableon");
storeToken_on.addEventListener('change', () => {
    storedTokensReadable_value = storedTokensReadable_on.value;
    console.log(`storedTokensReadable_value: ${storedTokensReadable_value}`)
});

let trustEmail_value = "false";
const trustEmail_on = document.getElementById("trustEmailon");
trustEmail_on.addEventListener('change', () => {
    trustEmail_value = trustEmail_on.value;
    console.log(`trustEmail_value: ${trustEmail_value}`)
});

let accountLinkingOnly_value = "false";
const accountLinkingOnly_on = document.getElementById("accountLinkingOnlyon");
accountLinkingOnly_on.addEventListener('change', () => {
    accountLinkingOnly_value = accountLinkingOnly_on.value;
    console.log(`accountLinkingOnly_value: ${accountLinkingOnly_value}`)
});

let hideLoginPage_value = "false";
const hideLoginPage_on = document.getElementById("hideLoginPageon");
hideLoginPage_on.addEventListener('change', () => {
    hideLoginPage_value = hideLoginPage_on.value;
    console.log(`hideLoginPage_value: ${hideLoginPage_value}`)
});