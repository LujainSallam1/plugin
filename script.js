const redirectUriInput = document.getElementById("redirectUri");
const SamlExtendedInput = document.getElementById("SamlExtended");
const buttonInput = document.getElementById("submit");
const Display_Name_input =document.getElementById("displayName");
const Display_Order_input=document.getElementById("displayOrder");
const Service_Provider_Entity_ID_input=document.getElementById("spEntityId");
const Identity_Provider_Entity_ID_input=document.getElementById("idpEntityId");
const Single_Sign_On_Service_URL_input=document.getElementById("ssoServiceUrl");
const Single_Logout_Service_URL_input=document.getElementById("sloServiceUrl");
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
    const Display_Name= Display_Name_input.value;
    const Display_Order=Display_Order_input.value;
    const Service_Provider_Entity_ID= Service_Provider_Entity_ID_input.value;
    const Identity_Provider_Entity_ID= Identity_Provider_Entity_ID_input.value;
    const Single_Sign_On_Service_URL= Single_Sign_On_Service_URL_input.value;
    const Single_Logout_Service_URL= Single_Logout_Service_URL_input.value; 
  
    const url = `http://localhost:8080/api`;

   const data = {
        alias:SamlExtended,
        displayName:Display_Name,
        addReadTokenRoleOnCreate:storedTokensReadable_value,
        trustEmail:trustEmail_value,
        linkOnly:accountLinkingOnly_value,

    config: {
        guiOrder:Display_Order, 
        singleLogoutServiceUrl:Single_Logout_Service_URL,
        idpEntityId:Identity_Provider_Entity_ID,
        singleSignOnServiceUrl:Single_Sign_On_Service_URL,
        entityId:Service_Provider_Entity_ID,
        backchannelSupported:backchannel_value,
        allowCreate:allowCreat_value,
        postBindingResponse: httpPostBindingResponse_value,
        postBindingLogout:httpPostBindingLogout_value,
        wantAssertionsSigned:wantAssertionsSigned_value,
        wantAssertionsEncrypted:wantAssertionsEncrypted_value,
        forceAuthn:forceAuthentication_value,
        signSpMetadata:signMetadata_value,
        loginHint:passSubject_value,
        storeToken:storeToken_value,
        hideOnLoginPage:hideLoginPage_value
    }};

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: data})
    })
        .then(response => response.json())
        .then(data => {
            `displayData.textContent = Data received: ${JSON.stringify(data)}`;

        })
        .catch(error => {
            console.error('error', error);
        });
});

