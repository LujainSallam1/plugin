let backchannel_value="false";
const backchannel_on=document.getElementById("backchannelon");
backchannel_on.addEventListener('change', ()=>{
backchannel_value=backchannel_on.value;
console.log(`backchannel_value: ${backchannel_value}`)
});

let allowCreat_value="false";
const allowCreat_on=document.getElementById("allowCreateon");
allowCreat_on.addEventListener('change', ()=>{
allowCreat_value=allowCreat_on.value;
console.log(`allowCreat_value: ${allowCreat_value}`)
});

let httpPostBindingResponse_value="false";
const httpPostBindingResponse_on=document.getElementById("httpPostBindingResponseon");
httpPostBindingResponse_on.addEventListener('change', ()=>{
    httpPostBindingResponse_value=httpPostBindingResponse_on.value;
console.log(`httpPostBindingResponse_value: ${httpPostBindingResponse_value}`)
});

let httpPostBindingAuthnRequest_value="false";
const httpPostBindingAuthnRequest_on=document.getElementById("httpPostBindingAuthnRequeston");
httpPostBindingAuthnRequest_on.addEventListener('change', ()=>{
    httpPostBindingAuthnRequest_value=httpPostBindingAuthnRequest_on.value;
console.log(`httpPostBindingAuthnRequest_value: ${httpPostBindingAuthnRequest_value}`)
});

let httpPostBindingLogout_value="false";
const httpPostBindingLogout_on=document.getElementById("httpPostBindingLogouton");
httpPostBindingLogout_on.addEventListener('change', ()=>{
    httpPostBindingLogout_value=httpPostBindingLogout_on.value;
console.log(`httpPostBindingLogout_value: ${httpPostBindingLogout_value}`)
});