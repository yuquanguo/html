$(document).ready(function () {
    var scrWidth = $(window).width();
    var path = "./desk/home.html";
    var css = "css/desk.css";
    if (scrWidth < 800) {
        path = "./mb/home.html";
        css = "css/mb.css";
    }
    else if (scrWidth > 1336) {
        path = "./hd/home.html";
    }
    $("<link>")
        .attr({
            rel: "stylesheet",
            type: "text/css",
            href: css
        })
        .appendTo("head");
});