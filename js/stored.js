document.addEventListener('DOMContentLoaded', function () {
    var storedData = localStorage.getItem('pluginData');
    if (storedData) {
        if (storedData) {

            var pluginData = JSON.parse(storedData);

            if (pluginData.config && pluginData.config.backchannelSupported) {
                backchannel_value = pluginData.config.backchannelSupported;
                console.log(`backchannel_value: ${backchannel_value}`);

                if (pluginData.config.backchannelSupported == "true") {
                    backchannel.checked = true;
                } else {
                    backchannel.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.allowCreate) {
                allowCreat_value = pluginData.config.allowCreate;
                console.log(`allow_create_value: ${allowCreat_value}`);

                if (pluginData.config.allowCreate == "true") {
                    allowCreate.checked = true;
                } else {
                    allowCreate.checked = false;

                }
            }

            if (pluginData.config && pluginData.config.postBindingResponse) {
                httpPostBindingResponse_value = pluginData.config.postBindingResponse;
                console.log(`httpPostBindingResponse_value: ${httpPostBindingResponse_value}`);

                if (pluginData.config.postBindingResponse == "true") {
                    httpPostBindingResponse.checked = true;
                } else {
                    httpPostBindingResponse.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.postBindingAuthnRequest) {
                httpPostBindingAuthnRequest_value = pluginData.config.postBindingAuthnRequest;
                console.log(`httpPostBindingAuthnRequest_value: ${httpPostBindingAuthnRequest_value}`);

                if (pluginData.config.postBindingAuthnRequest == "true") {
                    httpPostBindingAuthnRequest.checked = true;
                } else {
                    httpPostBindingAuthnRequest.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.postBindingLogout) {
                httpPostBindingLogout_value = pluginData.config.postBindingLogout;
                console.log(`httpPostBindingLogout_value: ${httpPostBindingLogout_value}`);

                if (pluginData.config.postBindingLogout == "true") {
                    httpPostBindingLogout.checked = true;
                } else {
                    httpPostBindingLogout.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.wantAssertionsSigned) {
                wantAssertionsSigned_value = pluginData.config.wantAssertionsSigned;
                console.log(`wantAssertionsSigned_value: ${wantAssertionsSigned_value}`);

                if (pluginData.config.wantAssertionsSigned == "true") {
                    wantAssertionsSigned.checked = true;
                } else {
                    wantAssertionsSigned.checked = false;

                }
            }

            if (pluginData.config && pluginData.config.wantAssertionsEncrypted) {
                wantAssertionsEncrypted_value = pluginData.config.wantAssertionsEncrypted;
                console.log(`wantAssertionsEncrypted_value: ${wantAssertionsEncrypted_value}`);

                if (pluginData.config.wantAssertionsEncrypted == "true") {
                    wantAssertionsEncrypted.checked = true;
                } else {
                    wantAssertionsEncrypted.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.forceAuthn) {
                forceAuthentication_value = pluginData.config.forceAuthn;
                console.log(`forceAuthentication_value: ${forceAuthentication_value}`);

                if (pluginData.config.forceAuthn == "true") {
                    forceAuthentication.checked = true;
                } else {
                    forceAuthentication.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.signSpMetadata) {
                signMetadata_value = pluginData.config.signSpMetadata;
                console.log(`signMetadata_value: ${signMetadata_value}`);

                if (pluginData.config.signSpMetadata == "true") {
                    signMetadata.checked = true;
                } else {
                    signMetadata.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.loginHint) {
                passSubject_value = pluginData.config.loginHint;
                console.log(`passSubject_value: ${passSubject_value}`);

                if (pluginData.config.loginHint == "true") {
                    passSubject.checked = true;
                } else {
                    passSubject.checked = false;

                }
            }

            if (pluginData && pluginData.addReadTokenRoleOnCreate) {
                storedTokensReadable_value = pluginData.addReadTokenRoleOnCreate;
                console.log(`storedTokensReadable_value: ${storedTokensReadable_value}`);
                if (pluginData.addReadTokenRoleOnCreate == "true") {
                    storedTokensReadable.checked = true;
                } else {
                    storedTokensReadable.checked = false;

                }
            }

            if (pluginData && pluginData.storeToken) {
                storeToken_value = pluginData.storeToken;
                console.log(`storeToken_value: ${storeToken_value}`);
                if (pluginData.storeToken == "true") {
                    storeToken.checked = true;
                } else {
                    storeToken.checked = false;

                }
            }
            if (pluginData && pluginData.trustEmail) {
                trustEmail_value = pluginData.trustEmail;
                console.log(`trustEmail_value: ${trustEmail_value}`);
                if (pluginData.trustEmail == "true") {
                    trustEmail.checked = true;
                } else {
                    trustEmail.checked = false;

                }
            }
            if (pluginData && pluginData.linkOnly) {
                accountLinkingOnly_value = pluginData.linkOnly;
                console.log(`accountLinkingOnly_value: ${accountLinkingOnly_value}`);
                if (pluginData.linkOnly == "true") {
                    accountLinkingOnly.checked = true;
                } else {
                    accountLinkingOnly.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.hideOnLoginPage) {
                hideLoginPage_value = pluginData.config.hideOnLoginPage;
                console.log(`hideLoginPage_value: ${hideLoginPage_value}`);

                if (pluginData.config.hideOnLoginPage == "true") {
                    hideLoginPage.checked = true;
                } else {
                    hideLoginPage.checked = false;

                }
            }

            if (pluginData.config && pluginData.config.wantAuthnRequestsSigned) {
                wantAuthnRequestsSigned_value = pluginData.config.wantAuthnRequestsSigned;
                console.log(`wantAuthnRequestsSigned_value: ${wantAuthnRequestsSigned_value}`);

                if (pluginData.config.wantAuthnRequestsSigned == "true") {
                    SignatureAlgorithm.removeAttribute("disabled");
                    SAMLSignatureKeyName.removeAttribute("disabled");
                    wantAuthnRequestsSigned.checked = true;
                } else {
                    SignatureAlgorithm.setAttribute("disabled", "true");
                    SAMLSignatureKeyName.setAttribute("disabled", "true");
                    wantAuthnRequestsSigned.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.includeArtifactResolutionServiceMetadata) {
                ArtifactResolutionService_in_metadata_value = pluginData.config.includeArtifactResolutionServiceMetadata;
                console.log(`ArtifactResolutionService_in_metadata_value: ${ArtifactResolutionService_in_metadata_value}`);

                if (pluginData.config.includeArtifactResolutionServiceMetadata == "true") {
                    ArtifactResolutionService_in_metadata.checked = true;
                } else {
                    ArtifactResolutionService_in_metadata.checked = false;

                }
            }




            if (pluginData.config && pluginData.config.authnContextClassRefs) {
                updateField('authnContextClassRefs', pluginData.config.authnContextClassRefs);
                console.log(authnContextClassRefs)

            };



            if (pluginData.displayName) {
                updateField('displayName', pluginData.displayName);
            }
            if (pluginData.config.guiOrder) {
                updateField('displayOrder', pluginData.config.guiOrder);
            }
            if (pluginData.config.entityId) {
                updateField('spEntityId', pluginData.config.entityId)
            }
            if (pluginData.config.idpEntityId) {
                updateField('idpEntityId', pluginData.config.idpEntityId)
            }
            if (pluginData.config.singleSignOnServiceUrl) {
                updateField('ssoServiceUrl', pluginData.config.singleSignOnServiceUrl);
            }
            if (pluginData.config.singleLogoutServiceUrl) {
                updateField('sloServiceUrl', pluginData.config.singleLogoutServiceUrl);
            }

            if (pluginData.config.nameIDPolicyFormat) {
                const valueAfterFormat = extractValueAfterFormat(pluginData.config.nameIDPolicyFormat);
                updateField('nameIdPolicy', valueAfterFormat);
                console.log(valueAfterFormat);
            }
            if (pluginData.config.principalType) {
                updateField('principalType', pluginData.config.principalType);
            }


        }
    }

});

function extractValueAfterFormat(text) {
    const regex = /nameid-format:(\w+)/;
    const match = text.match(regex);
    return match ? match[1] : null;
}



function updateField(fieldName, value) {
    document.getElementById(fieldName).value = value;
}
