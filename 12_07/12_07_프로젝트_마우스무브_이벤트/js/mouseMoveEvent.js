;(function($, window, document, undefined){
   
    /*$("#section01").on({
        mousemove:function(event){
            console.log(event.clientX); // 수평좌표값(clientX) 먼저 구하기
            console.log(event.clientY); // 수직좌표값(clientY) 먼저 구하기
        }
    }) //리터럴 방식*/

    $("#section01").on("mousemove", function(e){
        // console.log(e.clientX);
        // console.log(e.clientY);
        $(".mousepointer").stop().animate({ top:e.clientY, left:e.clientX },100,"swing");
        $(this).css({backgroundPosition: -e.clientX*0.1+"px " + -e.clientY*0.1+"px"})
        // backgroundPosition:x축 y축 = 
            // ㄴ> 100+"px " + 100+"px" 
                // 특히 앞쪽에 픽셀하고 한칸 띄어야 좌표값으로 인식됨
                // -를 써서 포인터랑 반대로 움직이게 함
            // -e.clientX*0.5+"px " + -e.clientY*0.5+"px" 
                //곱한 수만큼 이미지가 움직임 (이미지 제어)
                //css에서 백그라운드 사이즈 가로축을 120% -> 각각 20%씩 움직일 수 있는 것
                    //즉 css 이미지 확대 비율(%)을 활용, 110%; -e.clientY * 0.1 // 10%내로 배경사진이 움직이게 하라
    })

})(jQuery, window, document);