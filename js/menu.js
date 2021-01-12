function changeTheme(fileCss) {
    var oldlink = document.getElementsByTagName("link").item(0);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", fileCss);
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

function startdisplay() {
    start = document.getElementById("start-menu");
    if (start.style.display == "block") { start.style.display = "none" } else { start.style.display = "block" }
}

function tabletmode() {
    var menu = document.getElementById("start-menu");
    var newmenu = document.getElementById("start-out");
    menu.id = "start-out";
    newmenu.id = "start-menu";
    document.getElementById("start-out").style.display = "none";
    var desk = document.getElementById("desk");
    var tab = document.getElementById("tab");
    if (tab.style.display == "block") {
        desk.style.display = "block";
        tab.style.display = "none";
        document.getElementById("desk-icon").style.display = "inline-flex"
    } else {
        desk.style.display = "none";
        tab.style.display = "block";
        document.getElementById("desk-icon").style.display = "none"
    }
}

function textcolor(color) {
    var r = document.querySelector(':root');
    r.style.setProperty('--textcolor', color);
}

function colorpalette() {
    var palette = document.getElementById("colpal");
    if (palette.style.display == "inline-flex") { palette.style.display = "none" } else { palette.style.display = "inline-flex" }
}

function phonemenu() {
    var icons = document.getElementById("phone-i");
    var start = document.getElementById("navtot");
    var togg = document.getElementById("toggles-phone");
    var close = document.getElementById("closebutton");
    var app = document.getElementById("allapplications");
    if (icons.style.display != "inline-flex") {
        icons.style.display = "inline-flex";
        start.style.width = "calc(100% - 60px)";
        togg.style.display = "block";
        app.style.display = "block";
        close.style.display = "block";

    } else {
        icons.style.display = "none";
        start.style.width = "auto";
        togg.style.display = "none";
        app.style.display = "none";
        close.style.display = "none";
    }
}