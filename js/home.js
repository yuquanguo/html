$(document).ready(function () {

    function deskClickNav(li) {
        $('#navlist li a').removeClass("current");
        var $this = $(li),
            _clickTab = $this.find('a').attr('target'),
            a_id = $this.find('a').attr("id");
        $this.find('a').addClass("current");
        if (a_id == "nav_home") {
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

    function initHome(scrWidth) {
        var path = "./desk/home.html";
        var clickNav = deskClickNav;
        if (scrWidth < 800) {
            path = "./mb/home.html";
            clickNav = mbClickNav;
            $("#select_nav").click(function () {
                $('#navlist').css("display", "block");
            });
        }
        else if (scrWidth > 1336) {
            path = "./hd/home.html";
        }
        $("#home").attr('target', path);

        $.get(path + "?ddfj", function (data) {
            $("#main").html(data);
            $("#main").css("background", "#344DA1");
        });
        $('#navlist li').click(function () {
            clickNav(this);
        });
    }

    initHome($(window).width());


    var lastWidth;
    $(window).resize(function (event) {
        var width = $(this).width();
        if (width > 800 && lastWidth < 800) {
            $('#navlist li').unbind("click");
            $('#navlist').css("display", "block");
            $('#navlist li').click(function () {
                deskClickNav(this);
            });
            if ($("#nav_home").hasClass("current")) {
                initHome(width);
            }
        } else if (width < 800 && lastWidth > 800) {
            $('#navlist li').unbind("click");
            $('#navlist').css("display", "none");
            $('#navlist li').click(function () {
                mbClickNav(this);
            });
            if ($("#nav_home").hasClass("current")) {
                initHome(width);
            }
        }

        lastWidth = width;
    });
});