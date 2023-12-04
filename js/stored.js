document.addEventListener('DOMContentLoaded', function () {
    var storedData = localStorage.getItem('pluginData');
    if (storedData) {
        var pluginData = JSON.parse(storedData);
        console.log(pluginData);
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

        if (pluginData.config.backchannelSupported == "true") {
            backchannel.checked = true;
        }
        if (pluginData.config.nameIDPolicyFormat) {
            // استخراج القيمة بعد "nameIDPolicyFormat" وتحديث الحقل بها
            const valueAfterFormat = extractValueAfterFormat(pluginData.config.nameIDPolicyFormat);
            updateField('nameIdPolicy', valueAfterFormat);
            console.log(valueAfterFormat);
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
