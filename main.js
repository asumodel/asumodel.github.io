//ヘッダーをしたから上に表示させる為

const headerMove =$("header");

$(window).on("load scroll",function(){

    if ($(this).scrollTop() > 200 && headerMove.hasClass("isFixed") == false ) {
        headerMove.css("display","blosk");
        headerMove.css({"top":"-80px"});
        headerMove.addClass("isFlexed");
        headerMove.animate({"top":0}, 600);
    }

    else if ($(this).scrollTop() < 200 && headerMove.hasClass("isFixed") == true) {
        headerMove.removeClass("isFixed");
        headerMove.css("display","none");
    }

});



//セクションタイトルの背景が右から左に出てきていい感じにアニメーション

function BgFadeAnime(){


    $('.bgTrigger').each(function(){
        var elemPos =$(this).offset().top-5;
        var scroll=$(window).scrollTop();
        var windowHeight =$(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('bgExtend');
        }else{
            $(this).removeClass('bgApper');
        }

    });

    $('.textTrigger').each(function(){
        var elePos =$(this).offset().top-5;
        var scroll=$(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('bgAppear');
        }else{
            $(this).removeClass('bgApper');
        }

    });
}



$(window).scroll(function(){
    BgFadeAnime();
});