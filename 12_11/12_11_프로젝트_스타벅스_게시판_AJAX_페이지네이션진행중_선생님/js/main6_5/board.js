;(function($,window,document,undefined){

    var board = {
        init:   function(){
            var that = this;
            that.ajaxFn();
        },
        ajaxFn: function(){
            var a = [];
            var txt = '';       //반드시 공백 처리

            var list = 5;      //한화면에 보이는 목록 갯수
            var total = 279;    //전체 목록 갯수 0 ~ 278
            var pageCount = Math.ceil(total/list); //28페이지 = 279/10; 전체 페이지 갯수

            var pageBtnNumber = 0;  //페이지버튼 번호 기본값 첫번째 버튼 번호 인덱스 값 
            var startNum = pageBtnNumber * list;
            var endNum = startNum + list;     //0 ~ < 10   ... 270 ~ <280
                if(endNum>total){             //마지막 페이지에 10개 미만인 목록
                    endNum=total;             //처리 알고리즘 : 총 레코드수를 넣어주면된다.
                }


            //그룹 페이지 변수 설정
            var groupNum  = 0;
            var groupList = 10;  //10개의 묶음 그룹(1 ~ 10)
            var groupStar = groupNum * groupList;  //0 = 0 * 10
            var groupEnd  = groupStar + groupList; //10 = 0 + 10
            
            if(groupEnd > pageCount){ //페이지 나머지 수 알고리즘
                groupEnd = pageCount;
            }




            setTimeout(mainAjaxFn,100);
            function mainAjaxFn(){

                //ajax 구현
                $.ajax({
                    url:"./data/json/board.json",
                    type:"POST", //전송방식
                    dataType:"JSON", //파일형식
                    success:function(data){
                        
                        $.each(data.board, function(idx, obj){
                            a[idx] = [];
                            
                            a[idx][0] = obj.NO;
                            a[idx][1] = obj.제목;
                            a[idx][2] = obj.날짜;
                            a[idx][3] = obj.조회수;                           
                        });

                        //변경될 변수들 설정
                        total = a.length;   //전체 레코드 현재 281 변하는 목록 갯수
                        list = 10;          //한화면에 보이는 목록 갯수 5 6 7 8 9 10 ... 셀렉트목록을 선택하도록 설정
                        pageCount = Math.ceil(total/list); //29페이지 = 281/10; 전체 페이지 갯수                   



                        //바인딩할 공지사항 목록 내용 함수
                        bindBoardListFn();
                        function bindBoardListFn(){

                            //공지사항 목록 출력시 들어갈 변수와 계산 알고리즘
                            startNum = pageBtnNumber * list;
                            endNum = startNum + list;     //0 ~ < 10   ... 270 ~ <280
                            if(endNum>total){             //마지막 페이지에 10개 미만인 목록
                                endNum=total;             //처리 알고리즘 : 총 레코드수를 넣어주면된다.
                            }
                            //바인딩 텍스트
                            txt += "<dt class='fixedclear'>";
                            txt += "<span>NO</span>";
                            txt += "<span>제목</span>";
                            txt += "<span>날짜</span>";
                            txt += "<span>조회수</span>";
                            txt += "</dt>";

                            for(var i=startNum; i<endNum; i++){
                                txt += "<dd>";
                                txt += "<span>" + a[i][0] + "</span>";
                                txt += "<span><a href='#'>" +  a[i][1]  + "</a></span>";
                                txt += "<span>"+  a[i][2]  + "</span>";
                                txt += "<span>" + a[i][3]  +"</span>";
                                txt += "</dd>";
                            }

                            $('.notice-table dl').html( txt );
                            txt='';

                        }

                        //페이지네이션 1 2 3 4 5 .... 29  처음은 이렇게 구현 나열형 페이지번호 초기단계 완료되면 그 다음 그룹단위

                        //그룹 단위로 페이지네이션 구현
                        //그룹 페이지네이션 
                        //1그룹  : 1 2 3 4 5 6 7 8 9 10 > 현재화면 구현 0

                        //2그룹  : < 11 12 13 14 15 16 17 18 19 20 > 
                        //3그룹  : < 21 22 23 24 25 26 27 28 29

                        //그룹 페이지 화살버튼 이벤트
                        $('.prevBtn-wrap').stop().hide(0);
                        $('.nextBtn-wrap').stop().show(0);

                        pageNationFn();
                        function pageNationFn(){

                            pageBtnNumber = groupNum * groupList; //   10 = 1 * 10
                            bindBoardListFn();

                            groupStar = groupNum * groupList;  //0 = 0 * 10
                            groupEnd  = groupStar + groupList; //10 = 0 + 10   0~<10   10~<20    20~<30 .....                                                                               
                            if(groupEnd > pageCount){ //페이지 나머지 수 알고리즘  30 > 29
                                groupEnd = pageCount; //29  
                                $('.nextBtn-wrap').stop().hide(0); //마지막 그룹에서는 다음 버튼 숨김
                            }
                            else{
                                $('.nextBtn-wrap').stop().show(0); //마지막이 아니면 보임
                            }
                            

                            //왼쪽 화살 버튼 groupNum 가  0보다 큰경우 보임
                            if(groupNum > 0){
                                $('.prevBtn-wrap').stop().show(0);
                            }
                            else{ //0 이하이면 외쪽화살 숨짐
                                $('.prevBtn-wrap').stop().hide(0);
                            }

                            for(var i=groupStar; i<groupEnd; i++){ //1~29
                                if(i==0){
                                    txt += "<li>"; 
                                    txt += "<a href='#' class='pageBtn addCurrent'>" + (i+1) + "</a>";
                                    txt += "</li>";
                                }
                                else{
                                    txt += "<li>";
                                    txt += "<a href='#' class='pageBtn'>" + (i+1) + "</a>";
                                    txt += "</li>";
                                }
                                
                            }
                            //바인딩
                            $('.page-wrap ul').html( txt );
                            txt='';
                        }


                        //페이지번호 클릭 이벤트 클릭된 페이지 번호로 
                        //화면에 나타날 게시판 목록 10개를 출력(반인딩)
                        $('.pageBtn').each(function(index){
                            $(this).on({
                                click:  function(event){
                                    event.preventDefault();
                                    
                                    $('.pageBtn').removeClass('addCurrent'); //이전 클래스 모두 삭제
                                    $(this).addClass('addCurrent');  //클릭한 버튼에만 클래스 추가
                                    
                                    pageBtnNumber = Number($(this).text())-1; //버튼 번호 숫자 추출
                                    bindBoardListFn();
                                }
                            });
                        });


                        //다음 그룹 버튼 클릭 이벤트
                        $('.nextBtn').on({
                            click:  function(event){
                                event.preventDefault();
                                
                                groupNum ++;
                                if( groupNum > 2 ){
                                    groupNum = 2;
                                }
                                //페이지 네이션 호출
                                pageNationFn();

                            }
                        });





            
                    }, //SUCCESS END
                    error:  function(){
                        alert('AJAX ERROR!!!');
                    }

                }); //AJAX THE END

            }

        }
    };

    board.init();

})(jQuery,window,document);
//board.js