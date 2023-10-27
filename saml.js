
<html>

<head>
    <title>General Settings</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }

        .container {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin: 20px auto;
            max-width: 600px;
            padding: 20px;
        }

        h2 {
            font-size: 20px;
            margin: 10px 0;
        }

        h5 {
            font-size: 15px;
            margin: 9px 0;
        }

        label {
            display: block;
            margin-bottom: 5px;
        }

        input[type="text"],
        input[type="url"],
        select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        input[type="radio"] {
            margin-right: 5px;
        }

        .btn {
            background-color: #337ab7;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .image {
            cursor: pointer;
            width: 15px;
            height: 15px;


        }

        .radio {
            display: flex;


        }

        .btn:hover {
            background-color: #235a91;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>General Settings</h2>
        <form id="GeneralSettings">
            <h5>Redirect URI
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('The redirect uri to use when configuring the identity provider.')">

            </h5>
            <input type="url" name="redirectUri"
                value="http://localhost:8080/realms/master/broker/saml-extended/endpoint" id="redirectUri" >


            <h5>Alias *
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('The alias uniquely identifies an identity provider and it is also used to build the redirect uri.')">
            </h5>

            <input type="text" name="alias" required value="saml-extended" id="SamlExtended" >
            <h5>Display Name
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Friendly name for Identity Providers')">
            </h5>
            <input type="text" name="displayName">

            <h5>Display Order
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Number defining the order of the providers in GUI (for example, on the Login page). The lowest number will be applied first.')">
            </h5>

            <input type="text" name="displayOrder">

            <h5>Endpoints
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('The alias uniquely identifies an identity provider and it is also used to build the redirect uri.')">

            </h5>
            <a href="http://localhost:8080/realms/master/broker/saml-extended/endpoint/descriptor">
                SAML 2.0 Service Provider Metadata </a>
            <h2>SAML Settings</h2>

            <h5>Service Provider Entity ID
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('The Entity ID that will be used to uniquely identify this SAML Service Provider.')">

            </h5>
            <input type="text" name="spEntityId">

            <h5>Identity Provider Entity ID
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('The Entity ID used to validate the Issuer for received SAML assertions. If empty, no Issuer validation is performed.')">

            </h5>
            <input type="text" name="idpEntityId">

            <h5>Single Sign-On Service URL *
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('The Url that must be used to send authentication requests (SAML AuthnRequest).')">
            </h5>

            <input type="url" name="ssoServiceUrl">

            <h5>Single Logout Service URL
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('The Url that must be used to send logout requests.')">
            </h5>
            <input type="url" name="sloServiceUrl">

            <h5>Backchannel Logout
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Does the external IDP support backchannel logout?')">
            </h5>
            <div class="radio">
                <input type="radio" name="on" value="true">
                <label for="on">on</label>
                <input type="radio" name="off" value="false" checked>
                <label for="off">off</label>
            </div>

            <h5>NameID Policy Format
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Specifies the URI reference corresponding to a name identifier format.')">
            </h5>
            </h5>
            <select name="nameIdPolicy">
                <option value="Persistent">Persistent</option>
                <option value="Transient">Transient</option>
                <option value="Email">Email</option>
                <option value="Kerberos">Kerberos</option>
                <option value="X.509 Subject Name">X.509 Subject Name</option>
                <option value="Windows Domain Qualified Name">Windows Domain Qualified Name</option>
                <option value="Unspecified">Unspecified</option>Unspecified</option>
            </select>

            <h5>Principal Type
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Way to identify and track external users from the assertion. Default is using Subject NameID, alternatively you can set up identifying attribute.')">
            </h5>
            </h5>
            <select name="principalType">
                <option value="Subject NameID">Subject NameID</option>
                <option value="Attribute [Name]">Attribute [Name]</option>
                <option value="Attribute [Friendly Name]">Attribute [Friendly Name]</option>
            </select>

            <h5>Principal attribute
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Name or Friendly Name of the attribute used to identify external users.')">
            </h5>
            <input type="text" name="Principal attribute">



            <h5>Allow Create
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Allow the external identity provider to create a new identifier to represent the principal.')">
            </h5>

            <div class="radio">
                <input type="radio" name="allowCreate" value="true">
                <label for="on">on</label>
                <input type="radio" name="allowCreate" value="false" checked>
                <label for="off">off</label>
            </div>
            <h5>HTTP-POST Binding Response
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Indicates whether to respond to requests using HTTP-POST binding. If false, HTTP-REDIRECT binding will be used.')">
            </h5>

            <div class="radio">

                <input type="radio" name="httpPostBindingResponse" value="true">
                <label for="on">on</label>
                <input type="radio" name="httpPostBindingResponse" value="false" checked>
                <label for="off">off</label>
            </div>

            <h5>HTTP-POST Binding for AuthnRequest
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Indicates whether the AuthnRequest must be sent using HTTP-POST binding. If false, HTTP-REDIRECT binding will be used')">
            </h5>


            <div class="radio">
                <input type="radio" name="httpPostBindingAuthnRequest" value="true">
                <label for="on">on</label>
                <input type="radio" name="httpPostBindingAuthnRequest" value="false" checked>
                <label for="off">off</label>
            </div>

            <h5>HTTP-POST Binding Logout
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Indicates whether to respond to requests using HTTP-POST binding. If false, HTTP-REDIRECT binding will be used.')">
            </h5>
            <div class="radio">
                <input type="radio" name="httpPostBindingLogout" value="true">
                <label for="on">on</label>
                <input type="radio" name="httpPostBindingLogout" value="false" checked>
                <label for="off">off</label>
            </div>


            <h5>Want AuthnRequests Signed
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Indicates whether the identity provider expects a signed AuthnRequest.')">
            </h5>
            </h5>
            <div class="radio">

                <input type="radio" name="wantAuthnRequestsSigned" value="true" id="on">
                <label for="on">on</label>
                <input type="radio" name="wantAuthnRequestsSigned" value="false" id="off" checked>
                <label for="off">off</label>

            </div>
            <select name="Signature algorithm" id="SignatureAlgorithm" placeholder="" disabled>
                <option value="RSA_SHA1">RSA_SHA1</option>
                <option value="RSA_SHA256">RSA_SHA256</option>
                <option value="RSA_SHA256_MGF1">RSA_SHA256_MGF1</option>
                <option value="RSA_SHA512">RSA_SHA512</option>
                <option value="RSA_SHA512_MGF1">RSA_SHA512_MGF1</option>
                <option value="DSA_SHA1">DSA_SHA1</option>
            </select>
            <select name="SAML signature key name " id="SAMLSignatureKeyName" placeholder="" disabled>
                <option value="KEY-ID">KEY-ID</option>
                <option value="NONE">NONE</option>
                <option value="CERT_SUBJECT">CERT_SUBJECT</option>
            </select>
            <script> document.addEventListener("DOMContentLoaded", function () {
                    var onRadioButton = document.getElementById("on");
                    var offRadioButton = document.getElementById("off");
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
            </script>



            <h5>Want Assertions Signed
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Indicates whether this service provider expects a signed Assertion.')">
            </h5>
            <div class="radio">
                <input type="radio" name="wantAssertionsSigned" value="true">
                <label for="on">on</label>
                <input type="radio" name="wantAssertionsSigned" value="false" checked>
                <label for="off">off</label>
            </div>

            <h5>Want Assertions Encrypted
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Indicates whether this service provider expects an encrypted Assertion.')">
            </h5>
            <div class="radio">
                <input type="radio" name="wantAssertionsEncrypted" value="true">
                <label for="on">on</label>
                <input type="radio" name="wantAssertionsEncrypted" value="false" checked>
                <label for="off">off</label>
            </div>

            <h5>Force Authentication
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Indicates whether the identity provider must authenticate the presenter directly rather than rely on a previous security context.')">
            </h5>
            <div class="radio">
                <input type="radio" name="forceAuthentication" value="true">
                <label for="on">on</label>
                <input type="radio" name="forceAuthentication" value="false" checked>
                <label for="off">off</label>
            </div>

            <h5>Validate Signatures
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Enable/disable signature validation of external IDP signatures.')">
            </h5>

            <div class="radio">
                <input type="radio" name="validateSignatures" value="true" id="on1">
                <label for="on">on</label>
                <input type="radio" name="validateSignatures" value="false" id="off1" checked>
                <label for="off">off</label>
            </div>
            <H5>Validating X509 certificates
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('The certificate in PEM format that must be used to check for signatures. Multiple certificates can be entered, separated by comma (,).')">
            </H5>
            <input type="text" id="ValidatingX509Certificates" name="ValidatingX509Certificates" placeholder=""
                disabled>

            <script>
                var onRadioButton = document.getElementById("on1");
                var offRadioButton = document.getElementById("off1");
                var additionalField1 = document.getElementById("ValidatingX509Certificates");
                onRadioButton.addEventListener("change", function () {
                    if (onRadioButton.checked) {
                        additionalField1.removeAttribute("disabled");
                        ;
                    }
                });

                offRadioButton.addEventListener("change", function () {
                    if (offRadioButton.checked) {
                        additionalField1.setAttribute("disabled", "true");

                    }
                });

            </script>
            <h5>Sign Service Provider Metadata
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Enable/disable signature of the provider SAML metadata.')">
            </h5>

            <div class="radio">
                <input type="radio" name="signMetadata" value="true">
                <label for="on">on</label>
                <input type="radio" name="signMetadata" value="false" checked>
                <label for="off">off</label>
            </div>

            <h5>Pass Subject
                <img src="question.png" class="image" alt="question mark" onclick="alert('')">
            </h5>

            <div class="radio">
                <input type="radio" name="passSubject" value="true">
                <label for="on">on</label>
                <input type="radio" name="passSubject" value="false" checked>
                <label for="off">off</label>

            </div>

            <h5>Allowed Clock Skew

                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('During login phase, forward an optional login_hint query parameter to SAML AuthnRequest subject.')">
            </h5>

            <input type="text" name="allowedClockSkew">

            <h5>Attribute Consuming Service Index
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Index of the Attribute Consuming Service profile to request during authentication.')">
            </h5>

            <input type="text" name="attributeConsumingServiceIndex">

            <h5>Attribute Consuming Service Name
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Name of the Attribute Consuming Service profile to advertise in the SP metadata.')">
            </h5>

            <input type="text" name="attributeConsumingServiceName">

            <h2>Requested AuthnContext Constraints</h2>

            <h5>Comparison
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Specifies the comparison method used to evaluate the requested context classes or statements. The default is *Exact*.')">
            </h5>

            <select name="comparison">
                <option value="exact">Exact</option>
                <option value="minimum">Minimum</option>
                <option value="maximum">Maximum</option>
                <option value="better">better</option>
            </select>


            <h5>AuthnContext ClassRefs
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Ordered list of requested AuthnContext DeclRefs.')">
            </h5>

            <input type="text" name="authnContextClassRefs">

            <h5>AuthnContext DeclRefs
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Ordered list of requested AuthnContext DeclRefs.')">
            </h5>

            <input type="text" name="authnContextDeclRefs">

            <h2>Advanced Settings</h2>

            <h5>Store Tokens
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Enable/disable if tokens must be stored after authenticating users')">
            </h5>
            <div class="radio">
                <input type="radio" name="storeTokens" value="true">
                <label for="on">on</label>
                <input type="radio" name="storeTokens" value="false" checked>
                <label for="off">off</label>
            </div>
            <h5>Stored Tokens Readable
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Enable/disable if new users can read any stored tokens. This assigns the broker.read-token role.')">
            </h5>
            <div class="radio">
                <input type="radio" name="storedTokensReadable" value="true">
                <label for="on">on</label>
                <input type="radio" name="storedTokensReadable" value="false" checked>
                <label for="off">off</label>
            </div>

            <h5>Trust Email
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('If enabled, email provided by this provider is not verified even if verification is enabled for the realm.')">
            </h5>
            <div class="radio">
                <input type="radio" name="trustEmail" value="true">
                <label for="on">on</label>
                <input type="radio" name="trustEmail" value="false" checked>
                <label for="off">off</label>
            </div>

            <h5>Account Linking Only
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('If true, users cannot log in through this provider. They can only link to this provider. This is useful if you do not want to allow login from the provider, but want to integrate with a provider')">
            </h5>
            <div class="radio">
                <input type="radio" name="accountLinkingOnly" value="true">
                <label for="on">on </label>
                <input type="radio" name="accountLinkingOnly" value="false" checked>
                <label for="off">off</label>
            </div>

            <h5>Hide on Login Page
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('If hidden, login with this provider is possible only if requested explicitly, for example using the *kc_idp_hint* parameter.')">
            </h5>
            <div class="radio">
                <input type="radio" name="hideLoginPage" value="true">
                <label for="on">on</label>
                <input type="radio" name="hideLoginPage" value="false" checked>
                <label for="off">off</label>
            </div>


            <h5>First Login Flow
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Alias of authentication flow, which is triggered after first login with this identity provider. Term *First Login* means that no Keycloak account is currently linked to the authenticated identity provider account.')">
            </h5>
            </h5>
            <select name="firstLoginFlow">
                <option value="browser">browser</option>
                <option value="direct grant">direct grant</option>
                <option value="registration">registration</option>
                <option value="reset credentials">Custom Flow 2</option>
                <option value="firstBrokerLogin">First Broker Login</option>
                <option value="docker auth">docker auth</option>
            </select>

            <h5>Post Login Flow
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Alias of authentication flow, which is triggered after each login with this identity provider. Useful if you want additional verification of each user authenticated with this identity provider (for example OTP). Leave this to *None* if you need no any additional authenticators to be triggered after login with this identity provider. Also note that authenticator implementations must assume that user is already set in ClientSession as identity provider already set it.')">
            </h5>
            </h5>
            <select name="postLoginFlow">
                <option value="browser">browser</option>
                <option value="direct grant">direct grant</option>
                <option value="registration">registration</option>
                <option value="reset credentials">Custom Flow 2</option>
                <option value="firstBrokerLogin">First Broker Login</option>
                <option value="docker auth">docker auth</option>
            </select>

            <h5>Sync Mode
                <img src="question.png" class="image" alt="question mark"
                    onclick="alert('Default sync mode for all mappers. The sync mode determines when user data will be synced using the mappers. Possible values are: *legacy* to keep the behaviour before this option was introduced, 'import' to only import the user once during first login of the user with this identity provider, *force* to always update the user during every login with this identity provider.')">
            </h5>
            </h5>
            <select name="syncMode">
                <option value="Import">Import</option>
                <option value="Lagacy">Lagacy</option>
                <option value="Force">Force</option>
            </select>

            <button class="btn" type="submit" id="submit">Save</button>
        </form>
    </div>
    <script>
        const redirectUriInput = document.getElementById("redirectUri");
        const SamlExtendedInput = document.getElementById("SamlExtended");
        const buttonInput = document.getElementById("submit");

        buttonInput.addEventListener('click', () => {
            const redirectUri = redirectUriInput.value;
            const SamlExtended = SamlExtendedInput.value;
            const button = buttonInput.value;
            const param= `redirectUri=${redirectUri }&SamlExtended=${SamlExtended}`
            const url = `http://localhost:8080/api?${param}`


            fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json' 
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('save', data);
                })
                .catch(error => {
                    console.error('error', error);
                });
        });


    </script>
</body>

</html>