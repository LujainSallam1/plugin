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



// let backchannel_value="false";
// const backchannel_on=document.getElementById("backchannelon");
// backchannel_on.addEventListener('change', ()=>{
// backchannel_value=backchannel_on.value;
// console.log(`backchannel_value: ${backchannel_value}`)
// });

// const Backchannel_Logout_input=document.querySelector('input[name="Backchannel"]:checked')

buttonInput.addEventListener('click', () => {

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
    const authnContextClassRefs = authnContextClassRefs_input.value;
    const authnContextDeclRefs = authnContextDeclRefs_input.value;
    var comparison = comparison_input.value;
    var firstLoginFlow = firstLoginFlow_input.value;
    var postLoginFlow = postLoginFlow_input.value;
    var syncMode = syncMode_input.value;
    var principalType = principalType_input.value;
    var nameIdPolicy = nameIdPolicy_input.value;
    var nameIdPolicy1=`urn:oasis:names:tc:SAML:1.1:nameid-format:${nameIdPolicy}`;
    const url = `http://localhost:8080/api`;

    const data = {
        alias: SamlExtended,
        displayName: Display_Name,
        addReadTokenRoleOnCreate: storedTokensReadable_value,
        trustEmail: trustEmail_value,
        linkOnly: accountLinkingOnly_value,
        postBrokerLoginFlowAlias: postLoginFlow,
        firstBrokerLoginFlowAlias: firstLoginFlow,

        config: {
            guiOrder: Display_Order,
            singleLogoutServiceUrl: Single_Logout_Service_URL,
            idpEntityId: Identity_Provider_Entity_ID,
            singleSignOnServiceUrl: Single_Sign_On_Service_URL,
            entityId: Service_Provider_Entity_ID,
            backchannelSupported: backchannel_value,
            allowCreate: allowCreat_value,
            postBindingResponse: httpPostBindingResponse_value,
            postBindingLogout: httpPostBindingLogout_value,
            wantAssertionsSigned: wantAssertionsSigned_value,
            wantAssertionsEncrypted: wantAssertionsEncrypted_value,
            forceAuthn: forceAuthentication_value,
            signSpMetadata: signMetadata_value,
            loginHint: passSubject_value,
            storeToken: storeToken_value,
            hideOnLoginPage: hideLoginPage_value,
            allowedClockSkew: allowedClockSkew,
            attributeConsumingServiceIndex: attributeConsumingServiceIndex,
            attributeConsumingServiceName: attributeConsumingServiceName,
            authnContextClassRefs: authnContextClassRefs,
            authnContextDeclRefs: authnContextDeclRefs,
            authnContextComparisonType: comparison,
            syncMode: syncMode,
            principalType: principalType,
            nameIDPolicyFormat: nameIdPolicy1

        }
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })
    })
        .then(response => response.json())
        .then(data => {
            `displayData.textContent = Data received: ${JSON.stringify(data)}`;

        })
        .catch(error => {
            console.error('error', error);
        });
});

