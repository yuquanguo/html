$(document).ready(function () {

    function deskClickNav(li) {
        $('#navlist li a').removeClass("current");
        var $this = $(li),
            _clickTab = $this.find('a').attr('target');
        $this.find('a').addClass("current"),
            a_id = $this.find('a').attr("id");
        if (a_id == "home") {
            $("#main").css("background", "#344DA1");
        } else {
            $("#main").css("background", "none");
        }
        $.get(_clickTab, function (data) {
            $("#main").html(data);
        });
    };

    function mbClickNav(li) {
        deskClickNav(li);
        var $this = $(li);
        text = $this.text();
        $('#navlist').css("display", "none");
        $('#select_nav').text(text);
        $('#navlist li img').removeClass("current");
        $this.find('img').addClass("current");
    };

    var scrWidth = $(window).width();
    var path = "./desk/home.html";
    var css = "css/desk.css";
    var clickNav = deskClickNav;
    if (scrWidth < 800) {
        path = "./mb/home.html";
        css = "css/mb.css";
        clickNav = mbClickNav;
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
    $("#home").attr('target', path);

    $.get(path, function (data) {
        $("#main").html(data);
        $("#main").css("background", "#344DA1");
    });

    $('#navlist li').click(function () {
        clickNav(this);
    });
    $("#select_nav").click(function () {
        $('#navlist').css("display", "block");
    });
});