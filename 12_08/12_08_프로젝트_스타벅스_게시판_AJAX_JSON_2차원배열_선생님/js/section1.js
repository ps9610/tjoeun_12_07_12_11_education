(function($,window,document,undefined){
    
    $('.ani').css({opacity:0});  


    //섹션1 애니메이션 
    function fnSection1(){
        $('.ani-1').stop().animate({opacity:1},500,"easeOutExpo", function(){
            $('.ani-2').stop().animate({opacity:1},500,"easeOutExpo", function(){
                $('.ani-3').stop().animate({opacity:1},500,"easeOutExpo", function(){
                    $('.ani-4').stop().animate({opacity:1},500,"easeOutExpo", function(){
                        $('.ani-5').stop().animate({opacity:1},500,"easeOutExpo", function(){
                            $('.ani-6').stop().animate({opacity:1},500,"easeOutExpo",);
                        });
                    });
                });
            });
        });
    }  
    
    setTimeout(fnSection1,100);


})(jQuery,window,document);