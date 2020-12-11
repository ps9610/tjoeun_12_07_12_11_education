(function($){

    $(".main-btn").on({
        mouseenter:function(){  //mouseenter = mouseover
            //버튼 효과 배경 색상 글자
            $(".main-btn").removeClass("addMainbtn"); //모든 메인버튼 추간된 클래스 삭제
            $(this).addClass("addMainbtn"); //현재(this) current만 추가 클래스(addClass())
            //서브메뉴의 슬라이드 다운 업 효과(애니메이션)
            $(".sub").stop().slideUp(0);
            $(this).next().stop().slideDown(500,"swing");

        },
        focusin:function(){
           //버튼 효과 배경 색상 글자
           $(".main-btn").removeClass("addMainbtn"); //모든 메인버튼 추간된 클래스 삭제
            $(this).addClass("addMainbtn"); //현재(this) current만 추가 클래스(addClass())            
        },
    });


    //마우스가 #nav를 떠나면 mouseleave = mouseout
    $("#nav").on({
        mouseleave:function(){
            $(".sub").stop().slideUp(500);
            $(".main-btn").removeClass("addMainbtn");
        }
    });


 $(".main-btn").each(function(index){
        $(this).on({
            click:  function(){
                if(index==0){
                    location.href="https://www.starbucks.co.kr/coffee/index.do"; 
                }
                else if(index==1){
                    location.href="https://www.starbucks.co.kr/menu/index.do";
                }
                else if(index==2){
                    location.href="https://www.starbucks.co.kr/store/index.do";
                }
                else if(index==3){
                    location.href="https://www.starbucks.co.kr/responsibility/index.do";
                }
                else if(index==4){
                    location.href="https://www.starbucks.co.kr/whats_new/index.do";
                }
                else if(index==5){
                    window.open("https://www.starbucks.co.kr/whats_new/index.do");
                }
            }
        });
    });




})(jQuery);