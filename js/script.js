var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("img_load").style.display = "none";
    setTimeout(showPage1, 200);
}

function showPage1() {
    document.getElementById("loader").style.display = "none";
}