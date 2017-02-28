$(document).ready(function () {

    $(function () {
        $("#productlistbox").swipe({
            //Generic swipe handler for all directions
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                alert("You swiped " + direction);
            }
        });

        //Set some options later
        //$("#productlistbox").swipe({ fingers: 2 });
    });

    var imagebox = $(".showbox").children('.productlistbox')[0],//获得图片容器
        ico = $(".icobox").children(),//获得图标数组
        imagenum = $(imagebox).children().length,//获得图片数量
        imageboxWidth = $(".showbox").width(),//获得图片容器的宽度
        imagewidth = imageboxWidth * imagenum,//获得图片的总宽度
        nextID = 0,//下一个图标的ID
        intervalID,//setInterval()函数的ID
        delaytime = 4000,//延迟的时间
        speed = 700;//执行速度
    $(imagebox).css({ 'width': imagewidth + "px" });

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

});