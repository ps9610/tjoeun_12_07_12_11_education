;(function(){window,document,$
    var t = 0;
    //fadein/out 3초동안 부드럽게, 단 top값이 section4번에 부딪칠 때
    //1. section4의 Top값부터 구하기

    // $(window).onload(function(){}); = ();라 ();쓸때는 권장하지 않음

    function init(){
        $("#section6 .img-wrap").stop().animate({ opacity : 0 },1000,function(){
            $("#section6 .img-wrap").stop().animate({ opacity : 1 },3000)
        })

    }

    setTimeout(init,100);

    // function loadingFn(){
    //     $("#section6 .img-wrap").stop().animate({ opacity : 0 },0).animate({ opacity : 1 },3000)
    // }

    function formatFn(){
        $("#section6 .img-wrap").stop().animate({ opacity : 0 },1000)
    }

    function animationFn(){
        $("#section6 .img-wrap").stop().animate({ opacity : 1 },3000)
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $(window).scroll(function(){
/*         console.log( "헤더",$("header").offset().top ); //헤더의 탑 값(고정값) (scrollTop은 윈도우 높이,헤당 헤더의 경우 fixed로 공중에 떠 있는 상태이기 때문에 스크롤 값과 동일)
        console.log( "1",$("#section1").offset().top ); //섹션4번의 탑(머리) 값(고정) 
        console.log( "2",$("#section2").offset().top ); //섹션4번의 탑 값 
        console.log( "3",$("#section3").offset().top ); //섹션4번의 탑 값 
        console.log( "4",$("#section4").offset().top ); //섹션4번의 탑 값 
        console.log( "5",$("#section5").offset().top ); //섹션4번의 탑 값  */
    
    if( $(this).scrollTop() >= $("#section5").offset().top-200 ){
        if(t == 0){
            t=1;
            animationFn();
        }

    }

    if( $(this).scrollTop() < $("#section5").offset().top-200 ){
        if(t == 1){
            t=0;
            formatFn();
        }
    }
    
    })
})(window,document,jQuery);