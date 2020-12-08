(function(window,document,$){
    var cnt=-1;
    //공지사항 롤링 슬라이드 상하
    function noticeSlideFn(){
        cnt++; //0 1 2 3 4 0 1 2 3 4 0
        if(cnt>4){
            cnt=0;
        }
         //모두 초기화 24픽셀 아래에서 대기
        $(".notice-list li").stop().animate({top:24},0).css({zIndex:2});
          //첫번째만 화면에서 대기
        $(".notice-list li").eq(cnt).stop().animate({top:0},0).css({zIndex:1}); 
         //24픽셀 아래에서 위로 부드럽게 올라온다.
        $(".notice-list li").eq(cnt+1>4?0:cnt).stop().animate({top:0},1000).css({zIndex:3});
    }

    setInterval(noticeSlideFn, 2500);

    // 0  1
    // 1  2
    // 2  3
    // 3  4
    // 4  5 X ==> 0


    //섹션2의 프로모션 버튼 클릭 이벤트 리스너
    $(".promotion-btn").on({
        click:  function(e){
            e.preventDefault();
            
            $(this).toggleClass("addUp");
            $("#section3").stop().slideToggle(500);
        }
    });


}(window,document,jQuery));