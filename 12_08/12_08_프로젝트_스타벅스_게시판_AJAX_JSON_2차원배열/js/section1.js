(function($,window,document,undefined){

    $('.ani').css({opacity:0});//css건드리지않고 초기화하는것, 제이쿼리 소괄호 = 명령하는거


    // $('.ani-1').stop().animate({opacity:1},500,"easeInOutExpo") :제이쿼리 객체 사용하는 방법



    //섹션1 animation
    function fnSection1(){ //다음의 코드들을 실행하세요 라는 뜻의 함수(묶어준거임)
                // 👇버블링막기(2번이상나타남) 👇0.3초동안 안보이게 유지 👇0.5초동안보이게설정
        $('.ani-1').stop().animate({opacity:1},500,"easeOutCubic", function(/*콜*/){ //ani-1이라는 성분에 animate를 넣어라, 
        /*백*/ $('.ani-2').stop().animate({opacity:1},500,"easeOutCubic", function(/*콜*/){ //functoin은 콜백함수(앞의 구문이 끝나면 function 다음꺼 바로해라 | 계단식으로 나오는게 맞음)
             /*백*/ $('.ani-3').stop().animate({opacity:1},500,"easeOutCubic", function(/*콜*/){ // ()=일단 멈추고 그 다음 행동을 시작해라.
                /*백*/ $('.ani-4').stop().animate({opacity:1},500,"easeOutCubic", function(/*콜*/){ //CSS는 무조건 중괄호, 중괄호 뒤에 시간
                    /*백*/ $('.ani-5').stop().animate({opacity:1},500,"easeOutCubic", function(/*콜*/){
                        /*백*/ $('.ani-6').stop().animate({opacity:1},500,"easeOutCubic");
                        });
                    });
                });
            });
        });           
    }
    
    fnSection1()

})(jQuery,window,document);

/* 
(function($,window,document){
});(jQuery,window,document); 
    (👆 즉시실행함수)
*/

/*
    function fnSection1(){
        $('.ani-1').stop().animate({opacity:0},300).animate({opacity:1},500, function{
            $('.ani-2').stop().animate({opacity:1},500, function(){
                 $('.ani-3').stop().animate({opacity:1},500, function(){ 
                    $('.ani-4').stop().animate({opacity:1},500, function(){
                        $('.ani-5').stop().animate({opacity:1},500, function(){
                            $('.ani-6').stop().animate({opacity:1},500);
                    });
                });
            });
        });
    });           
}

//fnSection1() 이게 선언적 함수(이름있는것) 
*/


/*
//    var fnSection1 = function(){ //다음의 코드들을 실행하세요 라는 뜻의 함수(묶어준거임)
//                // 👇버블링막기(2번이상나타남) 👇0.3초동안 안보이게 유지 👇0.5초동안보이게설정
//        $('.ani-1').stop().animate({opacity:0},300).animate({opacity:1},500, function(/*콜*///){ //ani-1이라는 성분에 animate를 넣어라, 
//        /*백*/ $('.ani-2').stop().animate({opacity:1},500, function(/*콜*/){ //functoin은 콜백함수(끝나면 다음거해라 | 계단식으로 나오는게 맞음)
//             /*백*/ $('.ani-3').stop().animate({opacity:1},500, function(/*콜*/){ // ()=일단 멈추고 그 다음 행동을 시작해라.
//                /*백*/ $('.ani-4').stop().animate({opacity:1},500, function(/*콜*/){ //CSS는 무조건 중괄호, 중괄호 뒤에 시간
//                    /*백*/ $('.ani-5').stop().animate({opacity:1},500, function(/*콜*/){
//                        /*백*/ $('.ani-6').stop().animate({opacity:1},500);
//                    });
//                });
//            });
//        });
//    });           
//}                                 이게 리터럴 함수(이름없는) */

