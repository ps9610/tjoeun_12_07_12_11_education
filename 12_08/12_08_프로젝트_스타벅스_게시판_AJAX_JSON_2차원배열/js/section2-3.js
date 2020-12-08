(function(window, document, $){
    //공지사항 롤링(텍스트) 슬라이드 상하
    // 1. 슬라이드 함수 만들고 호출할거임 -> 실행하게 만들면 됨
    // 2. 계속 롤링해야되니까 슬라이드에 타이머 걸어줄거임 = setInterval(함수, 2500); = 함수를 2.5초의 간격으로 무한하게 진행시킴
    var cnt = -1;

    function noticeSlideFn(){
        cnt++; //증감수라서 처음이 -1로 시작해야 0부터 나옴
        if(cnt > 3){
            cnt = -1; //마지막 슬라이드를 0으로 셋팅, (마지막이전 마지막)
        }
        $(".notice-list li").stop().animate({top:24/* css에서 li top값이 24니까} */},0).css({zIndex:2}); //롤링 대상이 되는 요소를 앞에 쓰면됨
        //👆 모두 초기화 24픽셀 아래에서 대기
        $(".notice-list li").eq(cnt<0? 4:cnt).stop().animate({top:0},0)/* 기다리는 요소들은 무조건 0초해야 일시정지함 */.css({zIndex:1}); //롤링 대상이 되는 요소를 앞에 쓰면됨
        //👆 첫번째만 화면에서 대기
        $(".notice-list li").eq(cnt+1).stop().animate({top:24},0)/* top 24에서 일시정지 */.animate({top:0},1000/* 올라오는데 걸리는 시간 1초 */).css({zIndex:3}); //롤링 대상이 되는 요소를 앞에 쓰면됨
        //👆 24픽셀 아래에서 위로 부드럽게 올라온다.
    }

//0 1
//1 2
//2 3
//3 4


//4 0

    /* 일단 수동으로 테스트해보기 :
    noticeSlideFn(); //0번 텍스트 1번 텍스트
    noticeSlideFn(); //1번 텍스트 2번 텍스트 
    이제 setInterval 할거임
    */

    setInterval(noticeSlideFn, 2500); //타이머
    //setInterval의 알고리즘
    // 0 1, 1 2, 2 3, 3 4, 4 5(X, 5 안됨)-> 4 0


    //섹션2 프로모션 버튼 클릭 이벤트리스너
    // $(".promotion-btn").on({
    //     click:function(e){
    //         e.preventDefault();

    //         $(this).toggleClass("addUp"); //addUp이라는 요소를 한 번 누르면addclass(속성추가),다시 또 누르면 removeclass(속성삭제)하겠다.
    //         $("#section3").stop().slideToggle(400,"easeInCubic"); //animate와 똑같이 버블링 발생할수있음 //toggle만들기(슬라이드 다시 올려야되니까)
    //     }
    //     });
        /* $("#section3").stop().slideToggle(500,function(){
            슬라이드 함수 콜백함수로 넣어주면 됨
        }); */
}(window, document, jQuery));