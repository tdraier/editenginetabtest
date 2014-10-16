function myInit(data) {
    return $.parseHTML("<div> " +
        "<input name=\"testpropertyvalue\" id=\"testpropertyvalue\" value=\"" + (data.isNewNode ? "" : data.getProperty("j:testproperty"))+ "\"/>" +
        "" +
        "</div>")
        [0];
}

function myDoSave(node) {
    node.addMixin("jmix:mytestmixin");
    node.setProperty("j:testproperty",$('#testpropertyvalue').val(), 1);
}

function myLanguageChange(lang) {
    window.alert("new language "+lang);
}
