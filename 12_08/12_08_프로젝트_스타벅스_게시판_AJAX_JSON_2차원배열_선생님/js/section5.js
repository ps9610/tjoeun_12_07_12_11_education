;(function(window,document,$,undefined){
    var t = 0;

    setTimeout(init, 100);

    function init(){
        $('#section5 .left') .stop().animate({left: -1000},1000, function(){
            $('#section5 .left') .stop().animate({left:0},2000);
        });
        $('#section5 .right').stop().animate({right:-1000},1000, function(){
            $('#section5 .right').stop().animate({right:0},2000);
        });
    }

    function s5AnimationFormatFn(){
        $('#section5 .left') .stop().animate({left: -1000},1000);
        $('#section5 .right').stop().animate({right:-1000},1000);
    }

    function s5AnimationFn(){
        $('#section5 .left') .stop().animate({left:0},2000);
        $('#section5 .right').stop().animate({right:0},2000);
    }

    $(window).scroll(function(){
        if( $(this).scrollTop() < 400 ){
            if(t==1){
                t=0; 
                s5AnimationFormatFn();//애니메이션 포지션 초기화
            }
        }

        if( $(this).scrollTop() >=400 ){
            if(t==0){ //토글변수 t의 값이 0이면 함수 호출
                t=1; //호출하고 변수 값 1로 변경 스크롤 실행 상태임
                s5AnimationFn();
            }               
        }
    });


})(window,document,jQuery);