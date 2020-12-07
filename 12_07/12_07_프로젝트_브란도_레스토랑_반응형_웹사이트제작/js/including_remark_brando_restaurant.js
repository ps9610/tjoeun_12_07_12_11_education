;(function(window,document,$,undefined){ //항상 밑에서 위로 보기(업데이트 항목은 위로 써줌)

    var brando = {
        init:           function(){ 
            var that=this;
                that.headerFn();
                that.section01Fn();
                that.section02Fn();
                that.section03Fn();
                that.section04Fn();
                that.section05Fn();
                that.section06Fn();
                that.section07Fn();
                that.section08Fn();
                that.section09Fn();
                that.section10Fn();
                that.section11Fn();
                that.section12Fn();
                that.section13Fn();
                that.section14Fn();
                that.footerFn();
        },//브란도 레스토랑 전체에서 최초에 실행할 js

        headerFn:       function(){
            //속성을 변수로 둬서 이동시키면 됨
            //smooth scrolling = a href의 속성 중 하나인 (a href=#) hashtag 가져와서 해당 섹션으로 부드럽게 이동
            var url = null; //null이면 이동안되고 null이 아니면 해당 섹션으로 이동하게 하려고
            $(".smooth-btn").on({ //스무스 버튼을
                click : function(event){ //클릭하면 다음과 같이 실행하라 : 
                    event.preventDefault();
                    url = $(this).attr("href"); // url은 이 선택자의 속성을 가져오는 것이고,
                   $("html,body").stop().animate({ scrollTop: $( url ).offset().top },800) //html,body에서 0.6초 동안에url의 탑 값으로 스크롤 탑이라는 애니메이션이 실행되게 하라.
                                            //현재 스크롤의 위치값
                   $(".mobile-menu").hide();
                   $(".mobile-btn").removeClass("addClose");
                }
            });
       
            //scrolling
            $(window).scroll(function(){
                if( $(window).scrollTop()>=30 ){
                    $("#header").addClass("addMobile")
                    $(".goTop").addClass("addGotop")
                }
                else{
                    $("#header").removeClass("addMobile")
                    $(".goTop").removeClass("addGotop")
                }
            });

            //resize
            var winW = 0;

            $(window).resize(function(){
                winW = $(window).width();
                if( winW>990 ){
                    $(".mobile-btn").removeClass("addClose");
                    $(".mobile-menu").stop().slideUp(0);
                }
            });

            //btn-click
            $(".mobile-btn").on({
                click : function(event){
                    event.preventDefault();
                    $(this).toggleClass("addClose");
                    $(".mobile-menu").stop().slideToggle(300);//한번은 내려가고 한번은 올라가고
                }
            });


        },//헤더의 js
        section01Fn:    function(){

            var winH = 969;
            var imgH = $(".hungry").height();
            var imgTop = (winH-imgH)/2;
    
            //뭘 먼저 해야할지 우선순위 정리가 가장 첫번째
            //1. 창을 늘리고 줄일 때마다 섹션 1,2,3,4의 전체 높이가 같이 늘어났다 줄어들어야 하고 (전체 배경이 사진이니까)
                //ㄴ>   1) 변하는 값 : (늘어났다 줄어들었다 하는) 창의 높이 
                //          var winH = 0;
                //      2)  창을 늘렸다 줄여야 하니까 resize함수 필요
                //          function resizeFn(){}
                //      3) winH가 브라우저 창의 높이라는 변수라고 설정해줌
                //          winH = $(window).height();
                //      4) 섹션 1234, 움직인다, 높이, 윈도우 창과 같은 값으로 라고 설정
                //          $("#section01, #section02, #section03, #section04").stop().animate({ height:winH });
            //2. 헝그리 이미지 크기(높이)는 유지, resize시 브라우저 꼭대기랑 이미지 사이 위 공백의 길이가 같이 늘어났다 줄어들게 함
                //ㄴ>   1) 변하는 값 : 이미지 사이 위의 공백
                //                      = (전체 창 높이 - 이미지 높이) / 2;
                //          var imgTop = (winH - 이미지 높이) / 2;
                //                                  ㄴ> var imgH = $(".hungry").height();
                //      2) 헝그리 이미지, Top값이, 
                //      3) 

                //1) hungry 이미지 탑 값 구하기 = (window top - hungry높이)/2;              
                                //ㄴ> imgTop = (winH-imgH)/2;
            setTimeout(resizeFn,100);
            //ㄴ> 컴퓨터 킬 때도 높이가 정해야져 함
            
            
            function resizeFn(){                
                // setTimeouT(브라우저켜질때), resize()될 때 두 경우 필요하니까
                // 리터럴 함수 사용해서 필요한 곳곳마다 함수 이름만 불러서 실행시킴
                winH = $(window).height();
                $("#section01, #section02, #section03, #section04").css({ height:winH });
                //BOM문서에 의해서 높이가 자동으로 잡혀짐

                // ✨ {top:imgTop},{bottom:imgTop}을 줘도 헝그리는 중앙에 있는데 top만 쓴 이유 :  
                imgH = $(".hungry").height();
                imgTop = (winH-imgH)/2;
                //$(".hungry").css({top:imgTop},{bottom:imgTop});
                $(".hungry").css({ top:imgTop });
                //console.log(imgH) -> 이미지의 높이를 알고 싶을 때
                // = console.log($(".hungry").height())
            }

            //Smooth Scrolling Event
            // ✨ scroll vs scrollTop 차이점
            $(".arrow-down-btn").on({
                click : function(){
                    $("html,body").stop().animate({ scrollTop : $("#section02").offset().top},700);
                }
            });

            $(window).resize(function(){
                resizeFn();
                //ㄴ> 브라우저 창이 크기 변경 될 때마다 높이가 정해져야 함
            });

            setInterval(nextCountFn,100);

            //메인 NEXT 슬라이드
            function mainNextSlideFn(){
                $(".slide").css({ zIndex:1 }).stop().animate({opacity:1},0);
                // 다음 슬라이드가 나타나게끔 원
                $(".slide").eq(cnt==0? 2:cnt-1).css({ zIndex:2 });
                //현재 슬라이드
                //핵심 포인트 : 현재 슬라이드 위에 다음 슬라이드가 나타남
                // (=다음 슬라이드가 현재 슬라이드를 덮는다)
                $(".slide").eq(cnt).css({ zIndex:3 }).stop().animate({opacity:0},0).animate({opacity:1},800); //화면에 나타나는 것
                //보이지 않는 상태에서 1초만에 보이게 하라(페이드인효과) 
                console.log(cnt);
            }
            
            //메인 PREV 슬라이드
            function mainPrevSlideFn(){
                $(".slide").css({ zIndex:1 }).stop().animate({opacity:1},0);
                // 이전 슬라이드
                $(".slide").eq(cnt).css({ zIndex:2 });
                //현재 슬라이드를 사라지게 하면 이전 슬라이드가 보인다.
                //핵심 포인트 : 현재 슬라이드를 사라지게 하고 이전 슬라이들 보이게 함
                //( = 현재 덮어져있는 슬라이드를 걷어내 이전 슬라이드를 보이게 함)
                $(".slide").eq(cnt==2? 0:cnt+1).css({ zIndex:3 }).stop().animate({opacity:1},0).animate({opacity:0},800);
                                                                    //보여진 상태에서 1초만에 보이지 않게 하라(페이드아웃효과) 
                console.log(cnt);
                }
            
            //PREV 슬라이드
            function prevCountFn(){
                cnt--;
                if(cnt<0){cnt=2};
                mainPrevSlideFn();
            }
            //NEXT 슬라이드
            function nextCountFn(){
                cnt++; //0 1, 1 2, 2 0, 0 1 ...
                if(cnt>2){cnt=0};
                mainNextSlideFn();
            }
            //setInterval(prevCountFn,3000) : test용
            //setInterval(nextCountFn,3000) : test용

            //헝그리 이미지까지 같이 포함한 섹션01번을 터치이벤트로 잡아야 어디를 터치해도 슬라이드가 넘어감
            $("#section01").swipe({
                swipeLeft : function(){
                    if( !$(".slide").is(":animated") ){
                        nextCountFn();
                    }
                },
                swipeRight : function(){
                    if( !$(".slide").is(":animated") ){
                        prevCountFn();
                    }
                }
            })
        },
        /* section02Fn:    function(){
            //해당 섹션의 폰트사이즈 비율
            var txtBoxW = 0;
            var fontRateH3 = 0.082758621;//h3글자크기(24px)/텍스트박스너비; = 24/txtBoxW;
            var fontRateH4 = 0.037931034;//h4글자크기/텍스트박스너비; = 11/txtBoxW;
            var fontRateP = 0.048275862;//p글자크기/텍스트박스너비; = /txtBoxW;
            var fontSizeH3 = 0;//텍스트박스 너비 * 24px의 비율
            var fontSizeH4 = 0;//텍스트박스 너비 * 24px의 비율
            var fontSizeP =  0;//텍스트박스 너비 * 24px의 비율
            var boxHRate = 1.2222222;
            var boxW = 450;
            var boxH = boxW * boxHRate; //박스높이 = 박스너비 * 박스 높이의 비율;
            var winH = 0;
            var boxT = 0; //(창높이-박스높이)/2;
            var winW = 0;
            var boxR = 0; // 박스의 right 값 구하기 = (창 넓이=winW - 박스넓이) / 2;
            var boxL = 0; // 박스의 left 값 구하기 = (창 넓이=winW - 박스넓이) / 2; = boxR

            setTimeout(resizeFn,100);

            //해당 섹션의 폰트사이즈 비율
            function resizeFn(){
                
            txtBoxW = $(".content-wrap").width(); 
            boxW = $(".content").width(); 
            boxH = boxW * boxHRate;
            fontSizeH3 =  txtBoxW * fontRateH3;
            fontSizeH4 =  txtBoxW * fontRateH4;
            fontSizeP =  txtBoxW * fontRateP;
            winH = $(window).height();
            boxT = (winH-boxH)/2; //(창높이-박스높이)/2;
            winW = $(window).width();
            boxR = (winW-boxW)/2; 
            boxL = boxR 
            //console.log ( "창넓이" ,winW );
            //console.log ( "박스 넓이 ",boxW );
            //console.log ( "박스 right값 ",boxR );
            //console.log ( "박스 left값 ",boxL ); 

            $(".content-wrap h3").css({fontSize:fontSizeH3});
                $(".content-wrap h4").css({fontSize:fontSizeH4});
                $(".content-wrap p").css({fontSize:fontSizeP});

                $(".content").css({height:boxH,top:boxT});

                //창 너비가 1170이하이면 실행
                if(winW <= 1170){
                    $(".content24").stop().animate({right:boxR,},300);//css는 그냥 위치만 바뀌고 animate는 움직이는것
                    $(".content3").stop().animate({left:boxL},300);
                }
                else{
                    $(".content24").stop().animate({right:0,},300);
                    $(".content3").stop().animate({left:0,},300);
                }
            }
            // console.log( "텍스트박스 너비 ", txtBoxW, "글자크기비율", fontRateH3, "실제글자크기", fontSizeH3 );
            // console.log( "텍스트박스 너비 ", txtBoxW, "글자크기비율", fontRateH4, "실제글자크기", fontSizeH4 );
            // console.log( "텍스트박스 너비 ", txtBoxW, "글자크기비율", fontRateP, "실제글자크기", fontSizeP );

            $(window).resize(function(){
                resizeFn();
            });
        },
 */
section234Fn:    function(){
            
    //css.content-wrap {top:209.5px;height:550px;}   
    //content-wrap이라는 박스의 top값, height 값을 반응형으로(= 자동 계산되게) 설정하기
    //창 높이가 바뀌면 top 높이 값도 바뀌여야 함 : 제일 마지막에 한거
    //  ㄴ> 자동화 resize(); 사용해주면 됨
    //박스 넓이가 바뀌면 height도 바뀌여야 함

     //변수 박스 탑 값 = (창높이-박스높이)/2;
     //var = (windowHeight-boxHeight)/2;

    //창 높이가 content-wrap보다 작을 때 content-wrap이 창 높이를 안 넘어가게 유지하기
        //ㄴ>그럼 창 높이랑 content-wrap top값이 같이 줄어들게 하면 됨
        //function resizeFn(){ windowHeight = $(window).height();를 조정한다.
        // $("#section01, #section02, #section03, #section04").css({ height:winH });에서 
        //#section02, #section03, #section04를 삭제한다.
        //#section01은 무조건 창 높이인데, #section02, #section03, #section04는 아무리 작아도 박스높이만큼은 유지시켜야 됨
    // 창 높이가 박스 높이보다 작으면 섹션 2,3,4의 높이를 박스 높이로 설정
    // 그렇지 않으면 섹션 2,3,4의 높이는 창 높이로 설정
    // 결론 : 섹션 2,3,4의 높이는 최소 박스 높이 이상이여야 한다.
    // 필요한 변수 : 창 높이, #section02, #section03, #section04의 높이,
    // 변수 #section02, #section03, #section04의 높이 = var section234Height
    // 박스높이가 창 높이보다 큰 경우 = 창높이 < 박스 높이 ? 박스높이 : 창높이
    /*if(windowHeight < boxHeight){
        section234Height = boxHeight;
    }
    else if(windowHeight >= boxHeight)(= else){
        section234Height = windowHeight;
    }*/
    // = section234Height = windowHeight < boxHeight ? boxHeight : windowHeight;
    // 여기까지 하면 작아지긴하는데 Top값이 안 줄어들어서 윗 부분이 먹혀버림
    // ㄴ> 박스 높이가 창값으로 바꼈는데 인식을 못해서 그럼
    // ㄴ> 조건문 수정해줘야됨
    //  if(windowHeight < boxHeight){
    //    section234Height = boxHeight;
    
    var windowHeight = $(window).height(); //969
    var section234Height = windowHeight; // 아무 조건도 없는 기본은 창 높이고, 조건문 달아서 실행함
    var boxHeight = $(".content-wrap").height(); //550
    //(if문에서 실행했기 때문에 없어도 됨)var boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5
    // ㄴ> 박스 높이보다 창 높이가 작을 때, 섹션 높이는 박스 높이로 설정 됨
    // 그러니 박스의 탑 값은 창 높이랑 박스 높이랑 같기 때문에 0으로 설정한다.
    
    //모든 코딩이 끝나면 새로고침시 실행하게끔 setTimeout해주고, setTimeout, resizeFn 외의 코드들은 지워버리기

//    $(".content-wrap").css({ top:boxTop });
//    //여기까지만 하면 계속 새로고침해야만 content-wrap이 중앙으로 옴 -> resize 걸어줘야됨

//    if(windowHeight < boxHeight){
//        section234Height = boxHeight;
//        boxTop = 0;
//        // = (boxHeight-boxHeight)/2; 
//    }
//    else{ //크거나 같음
//        section234Height = windowHeight;
//        boxTop = (windowHeight-boxHeight)/2; 
//    }

//    $(".section234").css({height:section234Height});
    
    var rl = (windowWidth-boxWidth)/2;
    var windowWidth = $(window).width(); //1170
    var boxWidth = $(".content-wrap").width(); //450
    
//박스 넓이가 바뀌면 height도 바뀌여야 함 이거 할거임
//박스 높이(고정되어있음) = 박스 너비 (450)* 높이의 비율 = 1.22222
// boxHeight = boxWidth * 1.22222
// boxWidth는 boxHeight 위 쪽으로 변수 써주기

//창 너비가 1170이하면 [조건문] 박스를 가운데 정렬하는 애니메이션 만들기
// right(또는 left) = (창너비-박스너비)/2
// 창 너비 변수 생성하기
// 그리고 right(또는 left) 변수 생성하기

    setTimeout(resizeFn,100);

    function resizeFn(){
        
        rl = (windowWidth-boxWidth)/2;
        windowWidth = $(window).width(); //1170
        windowHeight = $(window).height(); //969
        section234Height = windowHeight;
        boxWidth = $(".content-wrap").width(); //450
        boxHeight = boxWidth * 1.22222;
        boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5

        //조건같이 계산 해야 되는 것들 따로
        if(windowHeight < boxHeight){
            section234Height = boxHeight;
            boxTop = 0; //section2(3, 4) 꼭대기에 딱 붙어서 더이상 위로 못 올라가게
        }
        else{
            section234Height = windowHeight;
            boxTop = (windowHeight-boxHeight)/2;
        };

        if( windowWidth <= 1170 ){ // boxWidth의 부모 넓이가 1170px이기 때문에 기준을 1170으로 잡음
            $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:rl-15 },300);
            // $("#section02 .content-wrap, #section04 .content-wrap").css({ right:rl-15 }) : 애니메이션 하기 전
            // $("#section02 .content-wrap, #section04 .content-wrap").css({ right:rl-15 = 마진값 빼줘야 한쪽으로 안 치우치고 중앙에 옴});
            $("#section03 .content-wrap").stop().animate({ left:rl-15 },300);
        }
        else{
            $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:0 },100);
            $("#section03 .content-wrap").stop().animate({ left:0 },100);
        };
    };

    //DOM 구조 따로 정리하기
    $(".content-wrap").css({ top:boxTop, height:boxHeight });
    $(".section234").css({height:section234Height});
    $(window).resize(function(){
        resizeFn();
    })
},

/*        section234Fn:    function(){} =
        section02Fn:function(){},
        section03Fn:function(){},
        section04Fn:function(){},
*/
        section05Fn:    function(){
            
        },
        section06Fn:    function(){
            
        },
        section07Fn:    function(){
            
        },
        section08Fn:    function(){
            
        },
        section09Fn:    function(){
/*            
            var cnt = 25;
            
            //  모달창 띄우기
            $(".gallery-img-btn").on({
                click : function(e){
                    e.preventDefault();
                    $(".modal").stop().fadeIn(300);//show:그냥보이기, fadeIn=opacity(더많이씀):부드럽게보이기
                    $("html").addClass("addScroll");
                }
            });

            //모달창 닫기
            $(".close-btn, .img-wrap").on({ //이미지까지 클릭이벤트가 적용되었음(=이미지 눌러도 닫힘) -> 제어하면 됨
                click : function(e){
                    e.preventDefault();
                    $(".modal").stop().fadeOut(300);
                    $("html").removeClass("addScroll");
                }
            })

            // 이미지 버튼 (모달창 안에 있는거)
            $(".img-btn, .arrow-right-btn").on({
                click:function(event){ //클릭하면 이미지가 바뀜
                    event.stopPropagation();
                    // 이미지를 눌렀을 때 부모가 눌러지니까 그걸 막아야됨 
                    // = 부모 영역으로의 전파하는걸 차단
                    cnt++;
                    console.log(cnt)
                    if(cnt>32){cnt=25};
                    //var imgName = $(this).children().attr("src");
                    var txt = '<img src="./img/restaurant-img' + cnt + '.jpg" alt="모달창 이미지 1">';
                    //이미지 통째로 변수로 만들어서 this에 넣어버림, 이미지 숫자만 증가하게 cnt 넣어줌
                    $(".img-btn").html(txt);
                    //this = a링크, childeren = a링크의 자식 = img, 의 속성을 가져와라 = src
                    // alert(imgName)
                }
            })
            $(".arrow-left-btn").on({
                click:function(e){
                    e.preventDefault();
                    cnt--; //32 31 30 ... 25 
                    if(cnt<25){cnt=32};
                    //console.log(cnt)
                    //var imgName = $(this).children().attr("src");
                    var txt = '<img src="./img/restaurant-img' + cnt + '.jpg" alt="모달창 이미지 1">';
                    $(".img-btn").html(txt);
                }
            })
        },*/

            //(11월 16일~)
            //1. 갤러리 이미지 버튼을 클릭하면 
            //1-1. 클릭한 이미지를 모달창에 띄우기
            //1-2. 클릭한 이미지 파일 이름 가져오기 그리고 번호(이미지 인덱스번호)만 추출하기
                    //ㄴ>tag의 property를 attr 메소드를 이용하여 가져온다.
            //1-3. 단, 페이드 인/아웃 효과를 준다.

            var winH = 0;
            
            setTimeout(resizeFn,100);

            function resizeFn(){
                winH = $(window).innerHeight(); //바깥쪽이 아닌 실질적인 창의 내부 높이 // winH로 .img-wrap을 조정해야함
                $(".img-wrap").css({lineHeight : winH+"px"});
                //console.log(winH); -> lineHeight 설정 안 됨 
                //ㄴ> background와 lineHeight는 꼭 뒤에 px 단위 써줘야됨
            }

            $(window).resize(function(){
                resizeFn();
            });

            //모달창 만들기

            var fileName = null; //비어있는 값(값이 없음) -> 값이 들어가면 null은 없어짐
            var posNum = null;
            var num = null;

            $(".gallery-img-btn").on({//function전 click : 이벤트리스너
                click : function(e){// gallery-img-btn를 클릭하면 파일 이름을 가져온다 -> 이벤트 핸들러
                    e.preventDefault();
                    //모달창에 띄울 파일의 번호를 추출
                    fileName = $(this).find("img").attr("src");
                    endNum = fileName.indexOf(".jpg"); //fileNum에 index번호(파일의 위치 번호) 들어감
                    fileNum = Number(fileName.slice(endNum-2, endNum)); // slice : 글자를 뽑아라
                    // console.log(fileName, fileNum);
                    modalMainSlideFn();
                }
            })    
                function modalMainSlideFn(){
                    $(".modal").stop().fadeIn(300);
                    $(".img-wrap img").stop().fadeOut(0).attr("src","./img/restaurant-img" + fileNum + ".jpg").fadeIn(1000);
                                                    // = attr("src","./img/restaurant-img" +    29   + ".jpg");
                }
                
                $(".close-btn, .img-wrap").on({
                    click : function(e){
                        e.preventDefault();
                        $(".modal").stop().fadeOut(300);
                    }
                })
    
                $(".arrow-right-btn, .img-btn").on({
                    click : function(e){
                        e.stopPropagation();
                        fileNum++;
                        fileNum>32? fileNum=25:fileNum;
                        modalMainSlideFn();
                    }
                })
                $(".arrow-left-btn").on({
                    click : function(){
                        fileNum--;
                        //fileNum<25? 32:fileNum;
                        if(fileNum<25){fileNum=32} // 롤링되게
                        //if(fileNum<25){fileNum = 25} // 롤링 안 되고 처음으로 오면 PREV 버튼 막기
                        modalMainSlideFn();                    
                    }
                })
                    //1 - 하위 요소 검색 + 속성(attr = property) 추출
                    //2 - 속성 내용 중 문자열 위치를 겁색 search(), indexOf("검색할 문자열") [권장함]
                    //3 - 해당 위치에서 특정 문자나 문자열을 추출 / 문자열.slice(시작,끝) 문자열 추출
                    //4 - Number(); -> 내장함수, 문자형 숫자를 숫자형으로 변환

                    // 하위 요소 검색 + 속성(attr = property) 추출 //
                    //fileName = $(this).children().attr("src"); // this(gallery-img-btn).의 자식.의 속성.중에 href라는 속성 을 가져온다.
                    //           $(this).children("img").attr("src"); 
                                // ㄴ> class 속성도 찾을 수 있음, 광범위하고 구체적
                                // ㄴ> children에 img 써도 되지만 지금은 자식이 하나밖에 없어서 그냥 안 써도 알아서 img인줄 앎 
                    fileName = $(this).find("img").attr("src"); 
                    // 내가 클릭한 것 아래의 요소 중에서 찾아라. img라는 요소를 찾아라. 그 중에서 이미지의 속성을 가져와라
                    //children, find 둘 다 쓸 줄 알아야 됨

                    // 2 - 속성 내용 중 문자열 위치를 겁색 search(), indexOf("검색할 문자열") //
                    //posNum = fileName.search("img");// fileName의 img의 인덱스를 찾아라(문자 열(파일경로까지 다) = 문자 숫자를 알려줌)
                    //posNum = fileName.search(".jpg");// fileName의 jpg의 인덱스를 찾아라
                    //posNum = fileName.indexOf(".jpg");// search보다 더 정확하고 정밀함 (=지금 나오는 결과는 동일)
                    //posNum = fileName.indexOf(".jpg");
                    posNum = fileName.indexOf(".jpg");

                    // 해당 위치에서 특정 문자나 문자열을 추출 / 문자열.slice(시작,끝) 문자열 추출 //
                    //num = fileName.slice(posNum-2, posNum);//(포지션)인덱스번호.slice(글자가시작하는위치, 글자가끝나는위치)
                    //    = fileName.slice(posNum,posNum+2)로 쓰면
                    //      위의 fileName.indexOf(".jpg")-2; //-2 써줘야함

                    //fileName = '0123456789';
                    num = fileName.slice(0, 2);  //0 1   //0이상 2미만의 가운데 숫자들
                    num = fileName.slice(0, 3);  //0 1 2 //0이상 3미만의 가운데 숫자들
                    num = fileName.slice(2, 5);  //2 3 4 //2이상 5미만의 가운데 숫자들
                    num = fileName.slice(8, 9);  //8(인덱스넘버는 8, 실제로는 9번째) //8이상 9미만의 가운데 숫자들
                    num = fileName.slice(9, 10); //8(인덱스넘버는 9, 실제로는 10번째) //9이상 10미만의 가운데 숫자들
                    num = fileName.slice();      //123456789 //끝위치가 필요없으면 내가 시작하고 싶은 위치만 써주면 됨
                    num = fileName.slice(0);     //123456789 //왼쪽 문자부터 검색하여 일치하는 index 번호를 반환
                    num = fileName.slice(8);     //89
                    num = fileName.slice(9);     //9
                    // 역순
                    num = fileName.slice(-1); //9 //-는 뒤에서부터 추출
                    num = fileName.slice(-2); //89 //-는 뒤에서부터 추출
                    num = fileName.slice(0, -1); //012345678 //0부터 마지막 -1전 까지
                    num = fileName.slice(0); //-1을 빼면 전체가 다 나옴
                    num = fileName.slice(-2, -1); //8 //-2미만 -1전까지
                    num = fileName.slice(-4, -1); //678 //-2미만 -1전까지
                    num = fileName.slice(-4); //6789 //-2미만 0전까지
                    num = fileName.slice(-6, -4); //정확히 img의 숫자만 추출함 //-6에서 -4 전까지
                    
                    console.log(fileName, Number(num)); //Number(num) : 문자로 되어진 num를 순수한 정수형으로 바꿔줌
                    console.log(fileName, parseInt(num)); //parseInt(num) = Number(num)
                    //"20" + "30" = "2030" -> 문자열
                    //console.log(fileName, num); //012가 콘솔에 나오는 이유는 숫자로 인식하지 않기 때문, 숫자로 인식한다면 0은 안 나옴
            },    
            section09GalleryFn:    function(){
                //⭐갤러리 구현(계산식 많아서 따로 함수 만들어줌)⭐
                // 타입스크립트 ; 어셈블리, 컴파인 언어와 같이 변수를 반드시 설정하는것에 대해 엄격함
                // ECMA6 ; 호이스팅 발생 방지, 변수 재 사용 방지로 let/const 사용
                // 갤러리는 창 넓이를 100% 사용하여 이미지를 배분함, 전체 창 넓이에서 칸 갯수대로 나눠줌 (% 줘도 됨)
                // 이미지 한개당 넓이 800, 높이 600, 가로의 크기가 바뀌면 세로의 크기가 자동으로 바뀜 = 높이/너비 = 75%(0.75)
                // ECMA6) const hRate = 600/800;    // ECMA6를 사용하면 IE 하위버전, 사파리 등 아무것도 안 되기 때문에 바벨 인코딩을 또 해줘야됨
                
                // 함수 실행즉시 없어지고 바로 생기게 할거임
                $(".gallery").removeClass("addZoom"); //속 알맹이는 없어지게
                    //칸 수에 따라서 줄 수 바뀜
                $(".gallery").css({ height:imgH*rows });
            
                var hRate = 600/800; // 0.75; 이미지너비 * 이미지높이 비율 값, 상수값(=초기 고정된 값)
            
                // 초기값 변수(변수는 따로 함수지정)
                var cols = 4; //칸 수 해상도별 변수사용
                var n = $(".gallery li").length; //8
                var rows = Math.ceil(8/cols); // 갤러리 갯수/칸 수 = 이것도변수, 딱 떨어지지 않으면 자리 올림 할 예정
                                              // Math.ceil:자리올림; Math.round:반올림; Math.floor:자리내림; 
                                              // 외에도 숫자로 바꿔주는 Number("01"); = parsInt("01") = 1;
                var winW = $(window).innerWidth();
                
                var imgW = winW/cols; // 창너비 / 칸 수(cols)
                var imgH = imgW*hRate;

                //배열 두 개 필요
                var hide = [];// 초기값 : 감춰지는(hidden) 목록 없음
                var show = [0, 1, 2, 3, 4, 5, 6, 7];// 초기값 : li의 목록번호(li갯수, eq에 넣었던 숫자들) 8개 보임
                
                setTimeout(galleryFn,100);
                
                function galleryFn(){

                    n = $(".gallery li").length;
                    rows = Math.ceil(n/cols);
                
                    winW = $(window).innerWidth();
                    imgW = winW/cols;
                    imgH = imgW*hRate;

                    if(winW > 1200){//(1201~)
                        cols = 4;
                    }
                    //if( widW >1200 /*창넓이에따라바뀜*/ ){ //창넓이가 1200초과다 라고하면 {cols=4}
                    else if( winW <= 1200 && winW > 980/*창넓이에따라바뀜*/ ){ //1200이하다 그리고 980초과다(981~1200)
                        cols = 3;
                    }
                    else if( winW <= 980 && winW > 760){ //(761~980)
                        cols = 2;
                    }
                    else if( winW <= 760 && winW >= 0){ //0~760
                        cols = 1;
                    }
                    
                    // console.log("갤러리갯수", n);
                    // console.log("rate", hRate);
                    // console.log("줄 수", rows);
                    // console.log("칸 수", cols);
                    // console.log("imgW", imgW);
                    // console.log("winW", winW);
                    // console.log("imgH", imgH);
                
                    console.log("hide",hide);
                    console.log("show",show);
                    
                    //갤러리 숨김 hide();
                    //         (i<hide 배열길이;)
                    for(var i=0;i<hide.length;i++){
                        $(".gallery li").eq(hide[i]).hide(); 
                    }
                    
    
                    //갤러리 보이기 show();
                    
                    var cnt = -1;
                    for(i=0;i<rows;i++){ //0~1까지 i = 줄 수 
                        for(j=0;j<cols;j++){ // 0~3 0부터 4 미만까지, j = 칸 수
                            cnt++; //0 1 2 3 4 5 6 7까지 
                            //if(cnt>7)//보이는 갯수에 따라서 변경
                            if(cnt>=show.length)//무조건 7이 아니고 각 상황마다 배열의 길이가 다름
                            //cnt는 0-7까지니까 show.length-1 or >=
                            {break;} //break 다음 코드부터 실행하지 않도록 설정 
                            //if(cnt>7) break;//break 뒤에 코드 하나 밖에 없는 경우는 중괄호 빼도 됨(with문도 마찬가지)
                            console.log( cnt, i, j )
                            //$(".gallery li").eq(cnt).stop().animate({ top:(imgH*i), left:(imgW*j), width:imgW, height:imgH },300);
                            //                                          이미지 높이 값
                            $(".gallery li").removeClass("addZoom2");//모든 li 칸 초기화
                            $(".gallery li").eq(show[cnt]).show().stop().animate({ top:(imgH*i), left:(imgW*j), width:imgW, height:imgH },300,function(){
                                $(this).addClass("addZoom2");// 화면이 늘어난 다음에 스케일 실행해야 하니까 콜백함수
                            });
                        }
                    }
                    $(".gallery").addClass("addZoom"); // 이미지가 100% 커지면서 내용이 나타남
                    //함수 끝에 들어가서 보이게 해야됨
                }    

                    
                    /*  if(cols==4){   
                        //$(".gallery li").eq(0).css({ top:(imgH*줄번호), left:(imgW*칸번호), width:imgW, height:imgH }); //section09 gallery li에 들어있는 사진들. 
                        //칸 수가 4칸인 경우, width>1200
                        //첨에 설정한 css를 animate로 바꿔주면 왔다 갔다 거리면서 바뀜
                        $(".gallery li").eq(0).stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
                        $(".gallery li").eq(1).stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
                        $(".gallery li").eq(2).stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
                        $(".gallery li").eq(3).stop().animate({ top:(imgH*0), left:(imgW*3), width:imgW, height:imgH },300);
                    
                        $(".gallery li").eq(4).stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
                        $(".gallery li").eq(5).stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);
                        $(".gallery li").eq(6).stop().animate({ top:(imgH*1), left:(imgW*2), width:imgW, height:imgH },300);
                        $(".gallery li").eq(7).stop().animate({ top:(imgH*1), left:(imgW*3), width:imgW, height:imgH },300);
                    }
                    else if(cols==3){
                        //칸 수가 3칸인 경우
                        $(".gallery li").eq(0).stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
                        $(".gallery li").eq(1).stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
                        $(".gallery li").eq(2).stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
                    
                        $(".gallery li").eq(3).stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
                        $(".gallery li").eq(4).stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);
                        $(".gallery li").eq(5).stop().animate({ top:(imgH*1), left:(imgW*2), width:imgW, height:imgH },300);
                        
                        $(".gallery li").eq(6).stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
                        $(".gallery li").eq(7).stop().animate({ top:(imgH*2), left:(imgW*1), width:imgW, height:imgH },300);
                    }
                    else if(cols==2){
                        //칸 수가 2칸인 경우
                        $(".gallery li").eq(0).stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
                        $(".gallery li").eq(1).stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
                    
                        $(".gallery li").eq(2).stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
                        $(".gallery li").eq(3).stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);
                    
                        $(".gallery li").eq(4).stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
                        $(".gallery li").eq(5).stop().animate({ top:(imgH*2), left:(imgW*1), width:imgW, height:imgH },300);
                        
                        $(".gallery li").eq(6).stop().animate({ top:(imgH*3), left:(imgW*0), width:imgW, height:imgH },300);
                        $(".gallery li").eq(7).stop().animate({ top:(imgH*3), left:(imgW*1), width:imgW, height:imgH },300);
                    }
                    else if(cols==1){
                        //칸 수가 1칸인 경우
                        $(".gallery li").eq(0).stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
                    
                        $(".gallery li").eq(1).stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
                    
                        $(".gallery li").eq(2).stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
                    
                        $(".gallery li").eq(3).stop().animate({ top:(imgH*3), left:(imgW*0), width:imgW, height:imgH },300);
                    
                        $(".gallery li").eq(4).stop().animate({ top:(imgH*4), left:(imgW*0), width:imgW, height:imgH },300);
                    
                        $(".gallery li").eq(5).stop().animate({ top:(imgH*5), left:(imgW*0), width:imgW, height:imgH },300);
                        
                        $(".gallery li").eq(6).stop().animate({ top:(imgH*6), left:(imgW*0), width:imgW, height:imgH },300);
                    
                        $(".gallery li").eq(7).stop().animate({ top:(imgH*7), left:(imgW*0), width:imgW, height:imgH },300);
                    }
                    */
                   
                $(window).resize(function(){
                    galleryFn();
                })

            // 갤러리 버튼 이벤트 0-4 (5개)
            $(".gallery-btn").each(function(index){//index : 내가 클릭한 값을 기억하도록 저장해놓음
                //버튼 이벤트와 위의 반응형 갤러리와 연결되게 할것임
                //클릭할 때 마다 슬라이드의 length가 변경됨 -> 위의 조건에서 바꿔주기
                //배열 처리해줄거임, 배열안에 차례대로 저장해놨다가 위 for문에서 차례대로 출력시켜줄거임
                // 각 버튼마다 배열이 다르기 때문에 각 값들을 알맞게 저장시키면 됨
                $(this).on({
                    click : function(e){
                        e.preventDefault();

                        $(".gallery-btn").removeClass("addNav");//$(".gallery-btn") 전체의 클래스를 없앤다
                        $(this).addClass("addNav"); //현재 클릭된 것만 클래스를 더한다

                        // if(index==0){}
                        // else if(index==1){}
                        // else if(index==2){}
                        // else if(index==3){}
                        // else{} 가 밑의 switch랑 같음

                        switch(index){
                            case 0 :
                                hide = [];
                                show = [0,1,2,3,4,5,6,7];
                                break;
                                // eq(0) : 첫번째 자식요소
                                // hide = [];
                                // show = [0,1,2,3,4,5,6,7];
                            case 1 :
                                hide = [0,2];
                                show = [1,3,4,5,6,7];
                                break;
                                // eq(1) : 두번째 자식요소
                                // hide = [0,2];
                                // show = [1,3,4,5,6,7];
                            case 2 :
                                hide = [1,3,4,5];
                                show = [0,2,6,7];
                                break;
                            case 3 :
                                hide = [0,2,5];
                                show = [1,3,4,6,7];
                                break;    
                            default:
                                hide = [0,1,3,6];
                                show = [2,4,5,7];
                        }

                        /*  // 이렇게 되게 배열처리 해주면 됨 -> 위의 for문 있는 함수랑 연결하면 끝
                        // $(".gallery li").eq(0).hide();
                        // $(".gallery li").eq(2).hide();

                        // $(".gallery li").eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
                        // $(".gallery li").eq(3).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
                        // $(".gallery li").eq(4).show().stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
                        // $(".gallery li").eq(5).show().stop().animate({ top:(imgH*0), left:(imgW*3), width:imgW, height:imgH },300);
                        // $(".gallery li").eq(6).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
                        // $(".gallery li").eq(7).show().stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);
                        */

                        galleryFn(); //메인함수 호출 실행; 배열이 먼저 나오고 함수가 나와야 됨
                        //번호 순서대로 되어야지 반복문 같은걸 쓰는데, 여기는 사라지고 보여지는게 규칙적이지 않아서 배열이 꼭 필요함
                    }
                })
            })
//8개짜리가 4개, 3개, 2개, 1개
// 에다가 클릭 이벤트까지
// 배열을 무조건 사용해야 긴 코드 안짜고 할 수 있음                
        },
        
        section10Fn:    function(){

            var window_ = $(window);
            var winW = window_.innerWidth();
            var slideW = 975;//975 = 기본값 -> 창 넓이에 따라 바뀜
            var cnt = 0;
            var slideWrap = $("#section10 .slide-wrap")
            var slide = $("#section10 .slide")
            var nextBtn = $("#section10 .next-btn")
            var prevBtn = $("#section10 .prev-btn")

            setTimeout(resizeFn,100);

            function resizeFn(){
                winW = window_.innerWidth();
                if( winW > 975 ){
                    slideW = 975;
                }
                else{
                    slideW = winW;
                }

                slide.css({width:slideW}); //slide랑 wrapping 둘 다 넓이가 같이 변화해야함, 하고 나서 텍스트 길이 조정
                slideWrap.stop().animate({ left:-slideW*cnt },500);//창 너비가 바뀌면서 재 조정됨 = 초기화
                mainSlideFn();
            }

            window_.resize(function(){
                resizeFn();
            })

            function mainSlideFn(){
                //콜백이 필요없는 완전 단순한 슬라이드
                // slideWrap.stop().animate({ left:-975*cnt },600);를 창 넓이에 따라 바뀌게 반응형으로 바꿀 예정
                //console.log(slideW);//return값 확인용(밑에 left값 적용되나 보게)
                slideWrap.stop().animate({ left:-slideW*cnt },600);
            }

            function prevSlideFn(){
                cnt--;
                if(cnt<0){cnt=0;}
                mainSlideFn();
            }
            function nextSlideFn(){
                cnt++;
                if(cnt>2){cnt=2;}
                mainSlideFn();
            }

            prevBtn.on({
                click:function(e){
                    e.preventDefault();
                    if( !$(this).is(":animated") ){
                        prevSlideFn();
                    }
                    if(cnt<0){
                        slideWrap.stop().animate({ left:-975*0},0);
                        return false;
                    }
                }
            })
            nextBtn.on({
                click:function(e){
                    e.preventDefault();
                    if( !$(this).is(":animated") ){
                        nextSlideFn();
                    }
                    if(cnt>2){
                        slideWrap.stop().animate({ left:-975*2 },0);
                        return false;
                    }
                   // console.log(cnt);
                }
            })

            //터치 스와이프
            slideWrap.swipe({
                swipeLeft:function(){
                    nextSlideFn();
                },
                swipeRight:function(){
                    prevSlideFn();
                }
            })
        },
        section11Fn:    function(){
            // 반응형으로 제작, win=$(window)
            // 화면이 줄어들면 좌측 li 박스 높이가 ul 높이에 맞춰 줄어들어야 함
            // 좌측 li 박스 높이에 따라 우측 li 박스도 따라감
            var window_ = $(window);
            var blog = $("#section11 .blog")// 4개 배열처리 each() 메소드 활용
            var blogList = $("#section11 .blog li") //첫번째의 li
            var blogListImgH = blogList.eq(0).innerHeight(); //첫번째의 li의 높이
            var fontRateH3 = 0.039711191; //폰트 비율
            var fontRateP = 0.072202166; //폰트 비율
            var blogListImgW = blogList.eq(0).innerWidth(); //첫번째의 li의 너비
            //너비에 따라서 글자 크기가 바뀜//
            var fontSizeH3 = fontRateH3 * blogListImgW; //폰트사이즈 반응형 계산
            var fontSizeP = fontRateP * blogListImgW; //폰트사이즈 반응형 계산
            
            setTimeout(resizeFn,100);
            
            // {position:relative;float:left;width:50%;} /* 좌측 박스 높이로 우측 박스 js 사용하여 높이 설정 */
            function resizeFn(){

                blogListImgW = blogList.eq(0).innerWidth(); //첫번째의 li의 너비
                blogListImgH = blogList.eq(0).innerHeight();
                fontSizeH3 = fontRateH3 * blogListImgW; //너비에 따라서 글자 크기가 바뀜
                fontSizeP = fontRateP * blogListImgW;
                
            // 12px까지는 줄어들어도 괜찮
            fontSizeH3>12?fontSizeH3=12:fontSizeH3;
            fontSizeH3<8?fontSizeH3=8:fontSizeH3;

            fontSizeH3>20?fontSizeH3=20:fontSizeH3;
            fontSizeH3<15?fontSizeH3=15:fontSizeH3;

            blog.each(function(idx){
                blog.eq(idx).children("li").eq(1).css({height:blogListImgH});
                blog.eq(idx).find("h3").css({fontSize : fontSizeH3});
                blog.eq(idx).find("p").css({fontSize : fontSizeP});
            });
                // blog.eq(0).children("li").eq(1).css({height:blogListImgH});
                // blog.eq(1).children("li").eq(1).css({height:blogListImgH});
                // blog.eq(2).children("li").eq(1).css({height:blogListImgH});
                // blog.eq(3).children("li").eq(1).css({height:blogListImgH});
                // console.log(blogListImgH)

                // blog.eq(0).find("h3").css({fontSize = fontSizeH3})
                // blog.eq(0).find("P").css({fontSize = fontSizeP})

                // blog.eq(1).find("h3").css({fontSize = fontSizeH3})
                // blog.eq(1).find("P").css({fontSize = fontSizeP})

                // blog.eq(2).find("h3").css({fontSize = fontSizeH3})
                // blog.eq(2).find("P").css({fontSize = fontSizeP})

                // blog.eq(3).find("h3").css({fontSize = fontSizeH3})
                // blog.eq(3).find("P").css({fontSize = fontSizeP})
            }

            window_.resize(function(){                
                resizeFn();
            })
        },
        section12Fn:    function(){
            var window_ = $(window);
            var h3 = $("#section12 h3");
            var h2 = $("#section12 h2");
            var container = $("#section12 .title-wrap");

            var containerW = container.innerWidth();
            var fontSizeH3 = containerW * 0.01754386;
            var fontSizeH2 = containerW * 0.035087719;

            setTimeout(resizeFn,100);

            function resizeFn(){
                containerW = container.innerWidth();
                fontSizeH3 = containerW * 0.01754386;
                fontSizeH2 = containerW * 0.035087719;

                if(fontSizeH3<13){fontSizeH3=13};
                if(fontSizeH2<25){fontSizeH2=25};
                
                h3.css({fontSize : fontSizeH3});
                h2.css({fontSize : fontSizeH2});
                
                //console.log(containerW)
                //console.log("fontSizeH3",fontSizeH3)
                //console.log(fontSizeH2)

            };

            //반응형 함수
            window_.resize(function(){
                resizeFn();
            })
        },
        section13Fn:    function(){
            var h2Number = $("#section13 h2")//780(0.012820513, 12.820513) 987(0.010131712, 10.131712) 350(0.028571429, 28.571429) 166(0.060240964, 60.240964)
            var cnt = [0,0,0,0];//증감수는 반드시 초기값 0 가지고 있어야함 
            var setId = [null,null,null,null];
            var num = [780, 987, 350, 166]; //이거 안 쓰려면 html에 초기값 먼저 기입해주면 됨 
            var s = 10; // 10초 안에 움직인다고 상수써줌
            var mSecond = [];//mSecond를 배열로 먼저 만들어 주고
            var window_ = $(window);
            var sec12Top = $("#section12").offset().top-500;
            var t=0;
            //var mSecond = [12.820513, 10.131712, 28.571429, 60.240964];
            //var mSecond = [s/num[0]*1000,s/num[1]*1000,s/num[2]*1000,s/num[3]*1000];//10초를 각 숫자로 나누기, 
            //                  ☝ 이것도 for문 사용해서 반복문 가능
            for (var i=0; i<num.length; i++){
                mSecond[i] = (s/num[i])*1000;
            }
            
            //setTimeout(countFn,100)   
            
            //parallax scorlling
            window_.scroll(function(){
                console.log(window_.scrollTop());
                if( window_.scrollTop() > sec12Top ){
                    if(t==0){
                        t=1;
                        countFn();
                    }
                }
                else{
                    t=0;
                    cnt = [0,0,0,0];
                }
            });

            function countFn(){
                h2Number.each(function(i){
                    setId[i] = setInterval(function(){
                        cnt[i]++;
                        if(cnt[i]>num[i]){
                            clearInterval(setId[i]);
                        }
                        else{
                            h2Number.eq(i).text(cnt[i]);
                        }
                        },mSecond[i]); 
                });
            }
            
        /* 
            
            var cnt = 0;
            var setId = null;
            var cnt2 = 0;
            var setId2 = null;
            var cnt3 = 0;
            var setId3 = null;
            var cnt4 = 0;
            var setId4 = null;

            setId = setInterval(function(){
                cnt++;
                if(cnt>num){
                    clearInterval(setId);
                }                                       //730이 되면 끝나고 
                else {h2Number.eq(i).text(cnt)}         //아니면 계속 카운트를 반복한다. 
                
                // 첫번째 h2에 730이라는 텍스트가 들어간다; 변수cnt를 이용하여 10초동안 증가하게 한다;0.012820513이용[반복 타이머]}

            },mSecond);                                 //12.820513(12밀리세컨즈) 동안 한 번만 진행
            
            // 1초 = 1000 / 0.1초 = 100 / 0.01초 = 10 / 0.001 = 1
            // cnt가 ++(증가)해서 730이 나오면 끝 = 730 나올때 까지 interval, 10초동안 730까지 카운트 무한 진행 = 조건문 만들 수 있다
            
            h2Number.eq(i).text(cnt); 
            // 첫번째 h2에 730이라는 텍스트가 들어간다; 
            //변수cnt를 이용하여 10초동안 증가하게 한다;0.012820513이용[반복 타이머]
            
           setId = setInterval(function(){
                cnt++;
                if(cnt>987){clearInterval(setId);}
                else {hNumber.eq(1).text(cnt);}
            },12.820513);
            hNumber.eq(1).text(cnt);

            setId2 = setInterval(function(){
                cnt2++;
                if(cnt2>987){clearInterval(setId2);}
                else {h2Number.eq(1).text(cnt2);}
            },10.131712);
            h2Number.eq(1).text(cnt2); 
            
            setId3 = setInterval(function(){
                cnt3++;
                if(cnt3>350){clearInterval(setId3);}
                else {h2Number.eq(2).text(cnt3)}
            },28.571429);
            h2Number.eq(2).text(cnt3); 

            setId4 = setInterval(function(){
                cnt4++;
                if(cnt4>166){clearInterval(setId4);}
                else {h2Number.eq(3).text(cnt4)}
            },60.240964);
            h2Number.eq(3).text(cnt4);  
            
            같은 코드로 계속 반복 - >반복하는 함수 하나 만들고 배열처리함
        */
        },
        section14Fn:    function(){
            var setId = null;
            //다시 입력 하기 위해 첫번째 입력상자(이름) 포커스 발생하면 성공 메세지 removeClass
            $("#irum").on({
                focusin:function(){
                    $(".success-message").removeClass("addSuccess");//성공 메세지
                }
            })

            // 폼 Ajax 전송 버튼 클릭 이벤트
            var submit = $("#submit");

            submit.on({
                click:function(e){ 
                    e.preventDefault(); // submit 고유 전송버튼의 기능 제어(삭제시킴)

                    //초기화
                    $(".error-mesage").removeClass("addError");//에러 메세지
                    $(".success-message").removeClass("addSuccess");//성공 메세지

                    var irumVal = $("#irum").val();//이름 입력 내용 값
                    var mailVal = $("#mail").val();//메일 입력 내용 값
                    var interestedVal = $("#interested").val();//흥미 있는 요소 선택(change)
                    var messageVal = $("#message").val();//메시지 입력 내용 값
                    var cnt = 0;
                    
                    //1~2초 동안 로딩 이미지 뜨고 사라지면 에러 메시지 또는 성공 메시지 나타남
                    $(".ajax-loader").addClass("addAjax");

                    setId = setInterval(function(){
                        cnt++;
                        //cnt+0.5;처럼 산수 써도 됨
                        if(cnt>=1){
                            clearInterval(setId);
                            $(".ajax-loader").removeClass("addAjax");//로딩 이미지
                             formSubmitFn(); //폼 전송 에러메시지, 성공메시지, Ajax 함수
                        }
                        //console.log(cnt)
                    },500);
                    
                    function formSubmitFn(){
                        // 1.슬래쉬 두번 세미콜론
                        // 2. 대괄호

                        //이름 유효성검사
                        var regExpIrum = /[^a-zA-Z|ㄱ-ㅎ|ㅏ-ㅑ|가-힣]/; //영문과 한글이 아니면 입력 오류가 나게 하라;공백이 있어도 오류남
                        if(regExpIrum.test( $("#irum").val())  === false ){
                            alert("이름 유효성 검사 통과");
                            $("#irum").removeClass("addError");
                        
                        }
                        else{ //정상이 아닌 경우에만 return false 써줌
                            alert("이름 유효성 검사 오류")
                            $("#irum").addClass("addError");
                            return false;
                           
                        }


                        //이메일 체크
                        var regExpEmail =/^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z-0-9]([.]?[a-zA-Z])*.[a-zA-Z]{2,3}$/i;

                        //console.log( "유효성검사", regExpEmail.test( $("#mail").val() ) )
                        
                        if(  regExpEmail.test( $("#mail").val() ) ){ //유효성 검사의 규칙이 맞았다면
                            //alert("이메일 유효성 검사 통과")
                            $("#mail").removeClass("addError"); //에러메세지를 지워라
                           
                        }
                        else{ //셋 다 빈 값이 아니라면
                            //alert("이메일 유효성 검사 오류")
                            $("#mail").addClass("addError"); //유효성 검사를 틀렸다면 에러메세지를 색상으로 표시
                            return false;
                        }

                            //if (셋 중에 한개라도 공백이라면 = 어디 하나라도 빈칸이라면){
                            if(irumVal=="" || mailVal=="" || messageVal==""){
                                //에러메세지와 전송 취소
                                //에러메세지 테두리 색상 변화(빨강)
                                if(irumVal==""){
                                    $("#irum").addClass("addError"); //에러메세지를 색상으로 표시
                                }
                                else{ //셋 다 빈 값이 아니라면
                                    $("#irum").removeClass("addError");
                                }
                                //옛날에는 alert를 띄워서 단순 경고메시지만 주었지만
                                //요즘은 UI를 사용하여 폼에 직접 변화를 줌
                               
                                // 유효성 검사
                                //정규 표현식 (RegExp) 이메일 체크
                                //hello9610@naver.com

                                //조건 첫번째. 맨 앞글자(첫글자)는 반드시 영숫자[a-zA-Z0-9]으로 시작(^)
                                // ❗ 삿갓이 대괄호 안에 있고 밖에 있고의 차이가 있음 ❗
                                    // [^a-zA-Z] 영문이 아닌 것;부정문 쓸 때 이렇게 씀;대괄호 안의 삿갓 = 부정 = ~아닌 것
                                    // ^[a-zA-Z] 첫 글자가 영문으로 시작하는 것 = 대괄호 밖은 첫 글자의 의미
                                //조건 마지막은 반드시 영문[a-zA-Z]으로 2글자에서 3글자{2,3}로 끝($)
                                // 0 이상을 의미하는 특수문자는 * 을 쓰면 된다. 0이상 반복
                                // 더하기를 의미하는 특수문자는 + 을 쓰면 된다.  1이상 반복; 1개 이상의 문자가 무조건 나와야함
                                    // /^[a-zA-Z0-9]+[a-zA-Z{2,3}$]/; 라고 하면 앞의 영숫자는 무조건 나와야 함
                                // 0 또는 1개의 문자를 의미할 땐 ? 를 쓰면 된다. 0또는1이상 매칭; 어떤 글자가 나와도 그만 안나와도 그만일때
                                // . 는 정확히 1개 문자에 매칭한다
                                // 소문자 i는 대소문자 상관없이 쓸 수 있게 해줌 = 대소문자 구별안함
                                // 소문자 g는 전체 문자를 비교 점검한다
                                    // /[ㄱ-ㅎ|ㅏ-ㅑ|가-힣|a-zA-Z]/g;라고하면 대괄호 안의 전체를 검사하는 것

                                //첫번째 삿갓, 마지막 달러 = 타입속성
                                //마지막의 중괄호는 범위, 2글자에서 3글자사이니까 {2,3}
                                    // 만약 2글자만 가능하다 라고 하면 {2} 만 쓰면 됨
                                    
                                //                     sohye_9610(필요조건)           @gmail(필요조건)  .co          .kr(필요조건)    i는 대소문자 무시
                                /* var regExpEmail = /^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z-0-9]   ([.]?[a-zA-Z])*.[a-zA-Z]{2,3}$/i; //마침표는 gmail.com naver.com할 때 그 마침표!!
                                                                // ㄴ> 하이폰이나 언더바나 점이 온다 -> _9610 */
                                
                                // hello_9610@naver.com
                                //첫문자: 영문대소문자 구별 안함 두번째 하이폰언더바점 올수도잇고안올수도잇고 세번째골뱅이필수조건 마지막점 반드시필요하고 마지막i 대소문자구별안함


                                if(messageVal==""){
                                    $("#message").addClass("addError"); //에러메세지를 색상으로 표시
                                }
                                else{ //셋 다 빈 값이 아니라면
                                    $("#message").removeClass("addError");
                                }
                                $(".error-mesage").addClass("addError");
                                return false; // 전송 취소는 무조건 마지막에 한 번만!! return이 모든 값을 초기화시키기 때문에
                                //클릭한 버튼의 전송 취소하고 다시 입력 받는 형태의 리턴 값
                            }
                            else{
                                //성공메세지와 전송
                                //$(".error-mesage").removeClass("addError");
                                //$(".success-message").addClass("addSuccess"); => ajax로 가져감
                               // contact.submit(); //<form name="contact"> 갖다쓴거
                                //일반 전송 = API;화면 바뀜
                                
                                // 3개 다 빈 칸이 아니면  remove가 안 되니까 여기서 초기화 시켜줘야됨
                                $("#irum").removeClass("addError");
                                $("#mail").removeClass("addError");
                                $("#message").removeClass("addError");
                                $(".error-mesage").removeClass("addError");

                                //위 API를 Ajax 전송방법으로 바꾸기
                                //Ajax 전송 : 화면이 바뀌지 않고 내용만 전송됨
                                $.ajax({//ajax는 서버에서만 실행됨

                                    url  : "./response.php", //action="response.php"
                                    type : "post", //method="post"
                                    data : { // 입력 정보를 넣어줌
                                        irum : irumVal,
                                        mail : mailVal,
                                        interested : interestedVal,
                                        message : messageVal
                                    },
                                    success :function(data){
                                        console.log(data); //전송결과
                                        

                                        $(".success-message").addClass("addSuccess");


                                        $("#irum").val("");
                                        $("#mail").val("");
                                        //$("#interested").val("");//select 첫번째값이 초기화값, .val("")는 안됨
                                        //$("#interested").find("option").eq(0).prop("selected",true); 
                                        //select 첫번째 목록을 selected, selected는 property속성=prop)
                                        $("#interested option").eq(0).prop("selected",true); //select 첫번째값이 초기화값, .val("")는 안됨, select 첫번째 목록을 selected, selected는 property속성)
                                        $("#message").val("");

                                    },
                                    error : function(){
                                        console.log("ajax 오류");
                                    }
                                    //경로(내가 전송하고자 하는 파일 = response.php)먼저 쓰고 콤마(ajax 객체기반이라 콤마)
                                });//ajax
                            }//else if
                    }//function        // val() : value -> irum의 value 값 들어옴
                }//click
            })//button(submit)
        },
        footerFn:         function(){
            
        }
    }; 

//위에서 함수를 만들고 밑에서 함수를 실행한다.
    brando.init();

})(window,document,jQuery);