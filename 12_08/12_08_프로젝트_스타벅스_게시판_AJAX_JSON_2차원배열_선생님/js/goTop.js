;(function(window,document,$,undefined){
    var t=0;
    
    $(window).scroll(function(){

        if( $(this).scrollTop() >= 100 ){
            $('.goTop').stop().fadeIn(1000);
        }
        else{
            $('.goTop').stop().fadeOut(1000);
        }

    });

    $('.goTop-btn').on({
        click:  function(){
            $('html,body').stop().animate({scrollTop:0},1000,'easeOutExpo');
        }
    });





})(window,document,jQuery);