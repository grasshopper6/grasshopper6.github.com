$(function () {
    $(".imgEnlarge").mousemove(function (e) {

        var x = e.clientX - $(this).offset().left; //x轴坐标
        var y = e.clientY - $(this).offset().top; //y轴坐标
        var sw = $(this).width(); //小图宽度
        var sh = $(this).height(); //小图高度
        var bw = $(".divEnlarge>img").width(); //大图宽度
        var bh = $(".divEnlarge>img").height(); //大图高度
        var ssolidw = sw / 2 * sw / bw; //小图x轴边距
        var ssolidh = sh / 2 * sh / bh; //小图y轴边距
        var bsolidw = sw / 2; //大图x轴边距
        var bsolidh = sh / 2; //大图x轴边距
        var bx = 0; //大图x轴坐标
        var by = 0; //大图y轴坐标



        //求出大图x轴坐标
        if (x <= ssolidw)
            bx = 0;
        else if (x >= sw - ssolidw)
            bx = bw - bsolidw * 2;
        else
            bx = bw / sw * (x - ssolidw);

        //求出大图y轴坐标
        if (y <= ssolidh)
            by = 0;
        else if (y >= sh - ssolidh)
            by = bh - bsolidh * 2;
        else
            by = bh / sh * (y - ssolidh);

        $(".divEnlarge>img").css("margin-left", -bx + "px").css("margin-top", -by + "px");
        $(".divEnlarge").fadeIn("slow");
    })

    $(".imgEnlarge").mouseleave(function () {
        $(".divEnlarge").fadeOut("slow");
    })
})