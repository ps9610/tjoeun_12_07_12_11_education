;(function(window,document,$,undefined){
    var t=0;
    
    $(window).scroll(function(){
        if( $(window).scrollTop() >= 100 ){
            $(".go-top").stop().fadeIn(500);
        }
        else{
            $(".go-top").stop().fadeOut(500);
        }
    });

    $("gotop-btn").on({
        click:function(){
            $("html,body").stop().animate({ scrollTop:0 },1000,easeInCubic);
        }
    })

})(window,document,jQuery);