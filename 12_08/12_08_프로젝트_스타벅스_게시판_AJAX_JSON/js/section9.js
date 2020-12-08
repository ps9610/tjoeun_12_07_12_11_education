;(function(window,document,$,undefined){
    var t=0;
    
        setTimeout(init,100);

        function init(){
            $("#section9").stop().animate({opacity:0},1000,function(){
                $("#section9").stop().animate({opacity:1},1000);
            });
            $("#section9 .title-01").stop().animate({left:1000,opacity:0},1000,function(){
                $("#section9 .title-01").stop().animate({left:0,opacity:1},2000);
            });
            $("#section9 .title-02").stop().animate({left:1000,opacity:0},1000,function(){
                $("#section9 .title-02").stop().animate({left:0,opacity:1},2500);
            });
            $("#section9 .store-find-wrap").stop().animate({left:1000,opacity:0},1000,function(){
                $("#section9 .store-find-wrap").stop().animate({left:0,opacity:1},3000);
            });
        }

        function formatFn(){
            $("#section9").stop().animate({opacity:0},1000);
            $("#section9 .title-01").stop().animate({left:1000,opacity:0},1000);
            $("#section9 .title-02").stop().animate({left:1000,opacity:0},1000);
            $("#section9 .store-find-wrap").stop().animate({left:1000,opacity:0},1000);
        }
        function animationFn(){
            $("#section9").stop().animate({opacity:1},1000);
            $("#section9 .title-01").stop().animate({left:0,opacity:1},2000);
            $("#section9 .title-02").stop().animate({left:0,opacity:1},2500);
            $("#section9 .store-find-wrap").stop().animate({left:0,opacity:1},3000);
        }

        $(window).scroll(function(){
            if( $(this).scrollTop() >= $("#section8").offset().top-200 ){
                if(t==0){
                    t=1;
                    animationFn();
                }
            }
            if( $(this).scrollTop() < $("#section8").offset().top-200 ){
                if(t==1){
                    t=0;
                    formatFn();
                }
            }
        });

})(window,document,jQuery);