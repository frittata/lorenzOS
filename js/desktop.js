var wins = 0;

function win(element) {
    var id = element.id;

    var container = document.createElement("div");
    container.className = "windowdiv";
    container.id = id + "win";

    var bar = document.createElement("div");
    bar.className = "windowbar";

    var icons = document.createElement("div");
    var icono = document.createElement("i");
    var iconx = document.createElement("i");
    iconx.className = "fas fa-times";
    icono.className = "far fa-window-maximize";
    icons.appendChild(icono);
    icons.appendChild(iconx);
    iconx.addEventListener("click", function() {
        close(id);
    });
    icons.className = "windowicons";

    var title = document.createElement("div");
    title.innerHTML = id;
    title.className = "windowtitle";

    bar.appendChild(title);
    bar.appendChild(icons);
    container.appendChild(bar);

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(container);

    x = 0;
    y = 0;
    mousedown = false;

    // div event mousedown 
    container.addEventListener('mousedown', function(e) {
        // mouse state set to true 
        mousedown = true;
        container.style.zIndex = 9999;
        // subtract offset 
        x = container.offsetLeft - e.clientX;
        y = container.offsetTop - e.clientY;
    }, true);

    // div event mouseup 
    container.addEventListener('mouseup', function(e) {
        // mouse state set to false 
        mousedown = false;
        wins = wins + 1;
        container.style.zIndex = wins;
    }, true);

    // element mousemove to stop 
    container.addEventListener('mousemove', function(e) {
        // Is mouse pressed 
        if (mousedown) {
            // Now we calculate the difference upwards 
            container.style.left = e.clientX + x + 'px';
            container.style.top = e.clientY + y + 'px';
        }
    }, true);
}

function close(div) {
    document.getElementById(div + "win").remove();
}