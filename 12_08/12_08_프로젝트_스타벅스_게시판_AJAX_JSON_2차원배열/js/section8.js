;(function(document,window,$,undefined){
    
    var t = 0;

    function init(){
        $("#section8 .img").stop().animate({marginTop:100,opacity:0},1000,function(){
            $(this).stop().animate({marginTop:0,opacity:1},2000)
        });//포지션을 안 줬기 때문에 마진 값/트랜스폼/트랜지션 이용

        $("#section8 .title-01").stop().animate({left:550+1000,opacity:0},1000,function(){
            $("#section8 .title-01").stop().animate({left:550,opacity:1},2500);

        });  //left일 경우는 양수값
        $("#section8 .title-02").stop().animate({left:523+1000,opacity:0},1000,function(){
            $("#section8 .title-02").stop().animate({left:523,opacity:1},3000); 
        });
    };

        setTimeout(init,100);

        function formatFn(){
            $("#section8 .img")     .stop().animate({marginTop:100,opacity:0},1000);
            $("#section8 .title-01").stop().animate({left:550+1000,opacity:0},1000);  //left일 경우는 양수값
            $("#section8 .title-02").stop().animate({left:523+1000,opacity:0},1000);
        };

        function animationFn(){ //로딩하면 바로 실행
            $("#section8 .img")     .stop().animate({marginTop:0,opacity:1},2000);
            $("#section8 .title-01").stop().animate({left:550,opacity:1},2500);  //제자리
            $("#section8 .title-02").stop().animate({left:523,opacity:1},3000); 
        };
        $(window).scroll(function(){
            if( $(this).scrollTop() >=/* 스크롤탑값이 어디정도 이상일 때 실행하라 */ $("#section7").offset().top+200/* 그 전:-200 그 후:+200 */ ){
                if( t==0 ){
                    t=1;
                    animationFn();
                }
            }
            if( $(this).scrollTop() </* 스크롤탑값이 어디정도 미만일 때 실행하라 */ $("#section7").offset().top+200/* 그 전:-200 그 후:+200 */ ){
                if( t==1 ){
                    t=0;
                    formatFn();
                }
            }
        });




})(document,window,$);