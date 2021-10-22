var msgIndex = 1;
var msgs = new Array(
    "SCEGLI UNA LINGUA",
    "CHOOSE A LANGUAGE",
    "EINE SPRACHE WÄHLEN"
);

function changeMessage(milliseconds) {
    if (msgIndex >= msgs.length) {
        msgIndex = 0;
    }
    if (document.getElementById != null) {
        var heading = document.getElementById("header-language-selector");
        heading.firstChild.nodeValue = msgs[msgIndex];
    }
    msgIndex++;
    window.setTimeout(function(){changeMessage(milliseconds);}, milliseconds);
}