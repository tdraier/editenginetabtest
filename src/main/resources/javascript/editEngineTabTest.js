function myInit(data) {
    return $.parseHTML("<div> " + 
                       "<input name=\"testpropertyvalue\" id=\"testpropertyvalue\" value=\"" + (data.isNewNode ? "" : data.getProperty("j:testproperty"))+ "\"/>" +
                       "<div id=\"myLangCode\">" + data.getLanguage() + "</div>" +
                       "</div>" )
        [0];
}

function myDoSave(node) {
    node.addMixin("jmix:mytestmixin");
    node.setProperty("j:testproperty",$('#testpropertyvalue').val(), 1);
}

function myLanguageChange(data) {
    $('#myLangCode').html(data.getLanguage());
}
