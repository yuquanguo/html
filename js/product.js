$(document).ready(function () {

    var imagebox, ico, imageboxWidth, nextID, intervalID, delaytime, speed = 700;//执行速度
    function product_init() {
        var width = $(document).width();
        var showbox = $(".showbox");
        imagebox = showbox.children('.productlistbox')[0],//获得图片容器
            ico = $(".icobox").children(),//获得图标数组
            imageboxWidth = width * 0.7,//获得图片容器的宽度
            nextID = 0,//下一个图标的ID
            intervalID,//setInterval()函数的ID
            delaytime = 4000;//延迟的时间
        var imagenum = $(imagebox).children().length;//获得图片数量

        $(imagebox).css({ 'width': imageboxWidth * imagenum + "px" });
        showbox.css({ 'width': imageboxWidth + "px" });
        $("productbox").each(function () {
            $(this).css({ 'width': imageboxWidth + "px" });
        });
        $(".text").each(function () {
            if (width < 800) {
                $(this).css({ 'width': imageboxWidth + "px" });
            } else {
                $(this).css({ 'width': (imageboxWidth - 433) + "px" });
            }
        });
    }
    product_init();
    var rotate = function (clickID) { //图片滑动函数
        if (clickID >= 0 && clickID < 4) {
            nextID = clickID;
        } else {
            return;
        };
        $(ico).removeClass('active');
        $(ico[nextID]).addClass('active');
        $(imagebox).animate({ left: "-" + nextID * imageboxWidth + "px" }, speed);//jQuery中的animate函数

    }

    intervalID = setInterval(rotate, delaytime);//循环函数

    $.each(ico, function (index, val) {
        $(this).click(function (event) {
            clearInterval(intervalID);//清楚之前的定时任务
            var clickID = index;
            rotate(clickID);//运行一次带参数的rotate函数
            intervalID = setInterval(rotate, delaytime);
        });
    });
    $("#next").click(function (event) {
        clearInterval(intervalID);//清楚之前的定时任务
        rotate(nextID + 1);//运行一次带参数的rotate函数
        intervalID = setInterval(rotate, delaytime);
    });
    $("#last").click(function (event) {
        if (nextID <= 0) {
            return;
        }
        clearInterval(intervalID);//清楚之前的定时任务
        rotate(nextID - 1);//运行一次带参数的rotate函数
        intervalID = setInterval(rotate, delaytime);
    });

    $(window).resize(function (event) {
        product_init();
    });

});