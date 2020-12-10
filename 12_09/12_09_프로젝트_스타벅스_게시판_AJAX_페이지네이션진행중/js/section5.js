//스크롤 이벤트 해야하기 때문에 3개 매개변수 다 필요함
;(function(window,document,$,undefined){

     var t = 0;
    //var t = 'scrollOff';

    /* var f = 0; */
    
    function init(){
        $("#section5 .left") .stop().animate({ left: -1000 },1000,function(){
            $("#section5 .left") .stop().animate({ left: 0 },2000); 
    
        }); 
        $("#section5 .right").stop().animate({ right:-1000 },1000,function(){
            $("#section5 .right").stop().animate({ right:0 },2000);
    
        });
    }
    
    setTimeout(init,100);

    // function animationLoadFn(){
    //     //#section5 .wrap .left
    //     $("#section5 .left") .stop().animate({ left:-1000 },0).animate({ left:0 },1000);
    //     $("#section5 .right").stop().animate({right:-1000 },0).animate({right:0 },1000);
    // };
    
    function s5AnimationtFormatFn(){
        //#section5 .wrap .left
        $("#section5 .left") .stop().animate({ left: -1000 },1000); 
                                    // 초기 함수
        $("#section5 .right").stop().animate({ right:-1000 },1000); //자릿수맞춰서입력 = 체인방식
}
    function s5AnimationFn(){
        //#section5 .wrap .left
        $("#section5 .left") .stop().animate({ left: 0 },2000); 
                                                //실행하는 함수
        $("#section5 .right").stop().animate({ right:0 },2000);
    } 


    $(window).scroll(function(){

/*     if( $(this).scrollTop() == 0 ){
            t=0; //스크롤 탑 값이 맨 위 상단위치 0에 도달하면 다시 변수 초기화됨
            s5AnimationFormatFn();//애니메이션 포지션을 아예 초기화 시킴
        }
 */
// 변수 2개쓰는 방법
/*     if( $(this).scrollTop() < 400 ){// 스크롤 탑 값이 맨 위 상단위치 400 미만으로 도달하면 다시 변수 초기화됨
        if(f == 0)
            t=0 //위에 Top이 0인 경우의 조건문 지웠으니까 
            f=1;
            s5AnimationFormatFn();
        }
    
    if( $(this).scrollTop() >= 400 ){
        if(t==0){ //토글변수 t의 값이 0이면 함수 호출
            t=1; //호출 하고나서 바로 변수값 1로 변경 스크롤 실행 상태임
            f=0;
            s5AnimationFn();
        }    
    } */

    //변수 1개 쓰는 방법(스크롤 이벤트는 무조건 if문만 써야됨 (else if 안먹음))
     if( $(this).scrollTop() < 400 ){// 스크롤 탑 값이 맨 위 상단위치 400 미만으로 도달하면 다시 변수 초기화됨
        if(t == 0) // t와 함수의 animate left와는 관계없음
        s5AnimationtFormatFn();
            t=1; 
        }
    
    
     if( $(this).scrollTop() >= 400 ){
        if(t == 1) 
        s5AnimationFn();
            t=0; 
        }
        
        /*// t 변수 이해하기
        //스크롤 이벤트는 무조건 if문만 써야됨 (elseif 안먹음)
        if( $(this).scrollTop() < 400 ){// 스크롤 탑 값이 맨 위 상단위치 400 미만으로 도달하면 다시 변수 초기화됨
            if(t == 'scrollOff') // t와 함수의 animate left와는 관계없음
            t ='scrollOn' //위에 Top이 0인 경우의 조건문 지웠으니까 
            s5AnimationFormatFn();
        }
        
        if( $(this).scrollTop() >= 400 ){
            if(t == 'scrollOn'){ //토글변수 t의 값이 ON이면 함수 호출
                t ='scrollOff'; //호출 하고나서 바로 변수값 OFF로 변경
                s5AnimationFn();
            }    
        };*/
        
/*         function s5AnimationtFormatFn(){
            //#section5 .wrap .left
            $("#section5 .left").stop().animate({ left: 0 },1000); 
                                        // 초기 함수
            $("#section5 .right").stop().animate({ right:0 },1000); //자릿수맞춰서입력 = 체인방식
    } */ 
        
/*          function s5AnimationFn(){
            //#section5 .wrap .left
            $("#section5 .left").stop().animate({ left: -1000 },2500); 
            //실행하는 함수
            $("#section5 .right").stop().animate({ right:-1000 },2500);
        }  */
});

})(window,document,$);