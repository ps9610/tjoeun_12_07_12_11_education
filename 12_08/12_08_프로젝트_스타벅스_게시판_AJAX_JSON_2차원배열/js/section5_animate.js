;(function(window,document,$,undefined){
// 스크롤하면 커피원팩이랑 글씨가 끝에서 가운데로 모이게 애니메이션
//3.1 조건문에 사용할 전역변수 t 생성
var t = 0;
//5. 로딩 시 애니메이션 실행되게 setTimeout
setTimeout(animationLoadFn,100);

function animationLoadFn(){
    //#section5 .wrap .left
    $("#section5 .left") .stop().animate({ left:-1000 },0).animate({ left:0 },1000);
    $("#section5 .right").stop().animate({right:-1000 },0).animate({right:0 },1000);
};

//1. 커피원팩, 글씨 초기값 함수
function animationInitFn(){
    //#section5 .wrap .left
    $("#section5 .left") .stop().animate({ left:-1000 },1000);
    $("#section5 .right").stop().animate({right:-1000 },1000);
};
//2. 커피원팩, 글씨 애니메이션 적용 함수
function animationFn(){
        $("#section5 .left") .stop().animate({ left:0 },2000);
        $("#section5 .right").stop().animate({right:0 },2000);
};
//3. 지정된 값에서만 스크롤 되게 조건문
//4. 만들어진 조건문 스크롤 함수에 적용
$(window).scroll(function(){

    if( $(this).scrollTop() >= 400 ){
        if(t == 1)
        t=0;
        animationFn();
    }
    if( $(this).scrollTop() < 400 ){
        if(t == 0)
        t=1;
        animationInitFn();
    }
});
})(window,document,jQuery);