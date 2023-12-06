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
            if (pluginData.config && pluginData.config.validateSignature) {
                validateSignatures_value = pluginData.config.validateSignature;
                console.log(`validateSignatures_value: ${validateSignatures_value}`);

                if (pluginData.config.validateSignature == "true") {
                    console.log(`validateSignatures_value: ${validateSignatures_value}`)
                    additionalField1.removeAttribute("disabled");
                    validateSignatures.checked = true;

                } else {
                    console.log(`validateSignatures_value: ${validateSignatures_value}`)
                    additionalField1.setAttribute("disabled", "true");
                    validateSignatures.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.validateSignature) {
                validateSignatures_value = pluginData.config.validateSignature;
                console.log(`validateSignatures_value: ${validateSignatures_value}`);

                if (pluginData.config.validateSignature == "true") {
                    console.log(`validateSignatures_value: ${validateSignatures_value}`)
                    additionalField1.removeAttribute("disabled");

                    validateSignatures.checked = true;
                } else {
                    validateSignatures.checked = false;
                    additionalField1.setAttribute("disabled", "true");

                }
            }
            if (pluginData.config && pluginData.config.signArtifactResolutionRequest) {
                Sign_Artifact_Resolution_Request_value = pluginData.config.signArtifactResolutionRequest;
                console.log(`Sign_Artifact_Resolution_Request_value: ${Sign_Artifact_Resolution_Request_value}`);

                if (pluginData.config.signArtifactResolutionRequest == "true") {
                    console.log(`Sign_Artifact_Resolution_Request_value: ${Sign_Artifact_Resolution_Request_value}`)

                    Sign_Artifact_Resolution_Request.checked = true;
                } else {
                    Sign_Artifact_Resolution_Request.checked = false;


                }
            }
            if (pluginData.config && pluginData.config.artifactResolutionHTTPArtifact) {
                ArtifactResolution_via_HTTP_ARTIFACT_value = pluginData.config.artifactResolutionHTTPArtifact;
                console.log(`ArtifactResolution_via_HTTP_ARTIFACT_value: ${ArtifactResolution_via_HTTP_ARTIFACT_value}`);

                if (pluginData.config.artifactResolutionHTTPArtifact == "true") {
                    console.log(`ArtifactResolution_via_HTTP_ARTIFACT_value: ${ArtifactResolution_via_HTTP_ARTIFACT_value}`)
                    ArtifactResolution_via_HTTP_ARTIFACT.checked = true;
                } else {
                    ArtifactResolution_via_HTTP_ARTIFACT.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.artifactResolutionHTTPArtifact) {
                Sign_Service_Provider_Metadata_value = pluginData.config.artifactResolutionHTTPArtifact;
                console.log(`Sign_Service_Provider_Metadata_value: ${ArtifactResolution_via_HTTP_ARTIFACT_value}`);

                if (pluginData.config.artifactResolutionHTTPArtifact == "true") {
                    console.log(`ArtifactResolution_via_HTTP_ARTIFACT_value: ${ArtifactResolution_via_HTTP_ARTIFACT_value}`)
                    Sign_Service_Provider_Metadata.checked = true;
                } else {
                    Sign_Service_Provider_Metadata.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.artifactResolutionSOAP) {
                Artifact_Resolution_with_SOAP_value = pluginData.config.artifactResolutionSOAP;
                console.log(`Artifact_Resolution_with_SOAP_value: ${Artifact_Resolution_with_SOAP_value}`);

                if (pluginData.config.artifactResolutionSOAP == "true") {
                    console.log(`Artifact_Resolution_with_SOAP_value: ${Artifact_Resolution_with_SOAP_value}`)
                    Artifact_Resolution_with_SOAP.checked = true;
                } else {
                    Artifact_Resolution_with_SOAP.checked = false;

                }
            }
            if (pluginData.config && pluginData.config.artifactResolutionWithXmlHeader) {

                Artifact_Resolution_with_XML_header_value = pluginData.config.artifactResolutionWithXmlHeader;
                console.log(`Artifact_Resolution_with_XML_header_value: ${Artifact_Resolution_with_XML_header_value}`);

                if (pluginData.config.artifactResolutionWithXmlHeader == "true") {
                    console.log(`Artifact_Resolution_with_XML_header_value: ${Artifact_Resolution_with_XML_header_value}`)
                    Artifact_Resolution_with_XML_header.checked = true;
                } else {
                    Artifact_Resolution_with_XML_header.checked = false;

                }
            }

            if (pluginData.config && pluginData.config.mutualTls) {
                Mutual_TLS_value = pluginData.config.mutualTls;
                console.log(`Mutual_TLS_value: ${Mutual_TLS_value}`);

                if (pluginData.config.mutualTls == "true") {
                    console.log(`Mutual_TLS_value: ${Mutual_TLS_value}`)
                    Mutual_TLS.checked = true;
                } else {
                    Mutual_TLS.checked = false;

                }
            }

            if (pluginData.config && pluginData.config.artifactResolution) {
                Artifact_Resolution_value = pluginData.config.artifactResolution;
                console.log(`Artifact_Resolution_value: ${Artifact_Resolution_value}`);

                if (pluginData.config.artifactResolution == "true") {
                    console.log(`Artifact_Resolution_value: ${Artifact_Resolution_value}`)
                    Artifact_Resolution.checked = true;
                    console.log(`Artifact_Resolution_value: ${Artifact_Resolution_value}`)
                    additionalField_endpoint.removeAttribute("disabled");
                } else {
                    Artifact_Resolution.checked = false;
                    console.log(`Artifact_Resolution_value: ${Artifact_Resolution_value}`)
                    additionalField_endpoint.setAttribute("disabled", "true");

                }
            }

        }
        Artifact_Resolution_value



        function processAuthnContextArray(id, container) {
            var element = document.getElementById(id);
            if (pluginData.config && pluginData.config[id]) {
                var myArray = JSON.parse(pluginData.config[id]);
                updateField(id, myArray[0]);
                for (var i = 1; i < myArray.length; i++) {
                    const newItem = document.createElement("div");
                    newItem.className = "next-referral col-4";
                    newItem.innerHTML = '<input id="textinput_' + i + '" name="textinput" type="text" class="form-control input-md" value="' + myArray[i] + '">';
                    container.appendChild(newItem);
                }
                console.log(pluginData.config[id]);
            }
        }

        processAuthnContextArray("authnContextClassRefs", ClassRefs_items);
        processAuthnContextArray("authnContextDeclRefs", DeclRefs_items);




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
        if (pluginData.config.signatureAlgorithm) {
            updateField('SignatureAlgorithm', pluginData.config.signatureAlgorithm);
        }
        if (pluginData.config.xmlSigKeyInfoKeyNameTransformer) {
            updateField('SAMLSignatureKeyName', pluginData.config.xmlSigKeyInfoKeyNameTransformer);
        }
        if (pluginData.config.signingCertificate) {
            updateField('ValidatingX509Certificates', pluginData.config.signingCertificate);
        }
        if (pluginData.config.metadataValidUntilUnit) {
            updateField('Metadata_expires_in', pluginData.config.metadataValidUntilUnit);
        }
        if (pluginData.config.metadataValidUntilPeriod) {
            updateField('metadataValidUntilPeriod', pluginData.config.metadataValidUntilPeriod);
        }
        if (pluginData.config.linkedProviders) {
            updateField('Linked_Providers', pluginData.config.linkedProviders);
        }
        if (pluginData.config.artifactResolutionEndpoint) {
            updateField('Artifact_Resolution_Endpoint', pluginData.config.artifactResolutionEndpoint);
        }
        if (pluginData.config.charSet) {
            updateField('CharacterSet', pluginData.config.charSet);
        }

        
    }
}

);

function extractValueAfterFormat(text) {
    const regex = /nameid-format:(\w+)/;
    const match = text.match(regex);
    return match ? match[1] : null;
}



function updateField(fieldName, value) {
    document.getElementById(fieldName).value = value;
}
