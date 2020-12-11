;(function($,window,document,undefined){
    var board = {
        init : function(){
            var that = this; //❓ this와 $(this)의 차이
            that.ajaxFn();
        },
        ajaxFn : function(){

            var a = [];
            var txt = ""; 

            var total = 0; 
            var list = 0;

            //공지사항 목록 출력시 들어갈 변수와 계산 알고리즘
            var pageCount = Math.ceil(total/list); 
            //여기서부터 변수 3개는 그룹화할때 아주 중요한 개념이라 꼭 이해하고 넘어가야됨
            var pageBtnNumber = 0; 
            var startNum = pageBtnNumber * list; 
            var endNum = startNum + list;
                if(endNum>total){
                    endNum = total;
                }   

            //그룹 페이지 버튼 변수 설정
            var groupNum = 0;
            var groupList = 10;//그룹 단위의 묶음은 10개씩(1-10/11-20/21-30...)
            var groupStart = groupNum*groupList; // 0=0*10
            var groupEnd = groupStart+groupList; //10=0+10
                //10개 단위 끝났으면 자투리 갯수 정리
                if(groupEnd>pageCount){
                    groupEnd=pageCount;
                }

            setTimeout(mainAjax,100);

            function mainAjax(){

                //AJAX 구현
                $.ajax({
                    url      : "./data/json/board.json",
                    type     : "POST", //전송방식
                    dataType : "JSON", //파일형식
                    success  : function(data){
                        $.each(data.board, function(idx,obj){ 
                            a[idx] = [];

                            a[idx][0]=obj.NO;
                            a[idx][1]=obj.제목;
                            a[idx][2]=obj.날짜;
                            a[idx][3]=obj.조회수;
                        });
                        //
                        //변경될 변수들 설정
                        total = a.length 
                        // 전체 레코드(전체 게시물 갯수)281개/컴퓨터에서는0부터시작하니까280개임/게시물추가,삭제될때마다 자동으로 알아서 바뀜
                        list = 5; //한 화면에 보이는 목록 갯수  5 6 7 8 9 10 ... select 목록을 선택하도록 설정
                        groupList = 10; // 한 화면에 보이는 페이지버튼 갯수
                        pageCount = Math.ceil(total/list); 
                        
                        //바인딩 텍스트/2차원배열이라 행과 열 둘 다 반복 필요함
                            //게시판 목록, 페이지네이션 등 사용하는 곳이 많아서 함수로 만들어줌

                        //공지사항(Board) 목록(List) 함수
                        bindBoardListFn();

                        function bindBoardListFn(){
                        
                        //페이지 그룹화 때문에 변해야 하는 변수들
                        startNum = pageBtnNumber * list; 
                        endNum = startNum + list;
                        //즉 현재는 무조건 게시글목록이 10개가 되어야 화면이 나오게 설정했는데
                        // 10개가 안되면 안 나오기 때문에 if문을 써서 
                        // 10개가 안 되더라도 마지막 화면에 나올수 있게 해줌
                            if(endNum>total){ //지금 끝번호 290, 우리 실제레코드 숫자 281/마지막 페이지에 10개 미만인 목록의 갯수/여기선 1 
                                endNum = total;//끝번호(= 전체 레코드 숫자) 처리 알고리즘 
                            }

                            //바인딩텍스트
                            txt += "<dt class='fixedclear'>";
                            txt += "<span>NO</span>"; 
                            txt += "<span>제목</span>";
                            txt += "<span>날짜</span>";
                            txt += "<span>조회수</span>";
                            txt += "</dt>";

                        for(var i=startNum;i<endNum;i++){ 
                            txt += "<dd>";
                            txt += "<span>" + a[i][0] + "</span>";
                            txt += "<span><a href='#'>" + a[i][1] + "</a></span>";
                            txt += "<span>" + a[i][2] + "</span>";
                            txt += "<span>" + a[i][3] + "</span>";
                            txt += "</dd>";
                        };

                        $(".notice-table dl").html( txt );
                        txt="";
                        }
                            
                        //그룹 페이지 화살 버튼 이벤트
                        $(".prevBtn-wrap").stop().hide(0); //초기에는 이전버튼없음
                        $(".nextBtn-wrap").stop().show(0);

                        // 페이지네이션/처음부터끝까지다나온거/처음구현하는거연습한거
                        pageNationFn();

                        function pageNationFn(){
                            // 그룹 페이지네이션/이게찐/ 
                                //1그룹   1  2  3  4  5  6  7  8  9  >
                                //2그룹 < 11 12 13 14 15 16 17 18 19 >
                                //3그룹 < 21 22 23 24 25 26 27 28 29
                            
                            pageBtnNumber = groupNum*groupList;
                            bindBoardListFn();

                            groupStart = groupNum*groupList; // 0=0*10
                            groupEnd = groupStart+groupList; //10=0+10
                                //10개 단위 끝났으면 자투리 갯수 정리
                                if(groupEnd>pageCount){
                                    groupEnd=pageCount;
                                    //오른쪽 화살 버튼,
                                    $(".nextBtn-wrap").stop().hide(0);//마지막그룹에서는다음버튼사라짐
                                }
                                else{
                                    $(".nextBtn-wrap").stop().show(0);
                                }
                                if(groupNum > 0){
                                    //groupNum 0보다 큰 경우
                                    $(".prevBtn-wrap").stop().show(0);
                                }
                                else{
                                    $(".prevBtn-wrap").stop().hide(0);
                                }

                            // 그룹 페이지네이션 하기 전/for(var i=1;i<=pageCount;i++){ //1~29
                            for(var i=groupStart+1;i<=groupEnd;i++){ 
                                if(i==1){
                                    txt += "<li>";
                                    txt += "<a href='#' class='addCurrent pageBtn'>" + i + "</a>";
                                    txt += "</li>";
                                }
                                else{
                                    txt += "<li>";
                                    txt += "<a href='#' class='pageBtn'>" + i + "</a>";
                                    txt += "</li>";
                                }
                            }

                            $(".page-wrap ul").html( txt );
                            txt="";
                        }

                        //페이지번호 클릭이벤트 
                            //클릭된 페이지 번호로 화면에 나타날 게시판 목록 10개를 출력(바인딩)
                        //웹문서전체에서볼때 .pageBtn와 같이 JS에서 만들어진 가상 태그 요소들은 문서로 인식이 안될수도잇음
                            //가상태그요소:html에없고js에서만든태그들
                        //그래서문서자체로 인식되라고 세팅해 주어야 함
                            //마우스가 올라가자마자 dcument로 인식되게하는 document이벤트를 사용해줌
                            $(document).on("mouseenter",".pageBtn",function(){

                                $(".pageBtn").each(function(index){
                                    $(this).on({
                                        click : function(e){
                                            e.preventDefault();
        
                                            $(".pageBtn").removeClass("addCurrent");
                                            $(this).addClass("addCurrent");
        
                                            pageBtnNumber = Number( $(this).text() )-1; 
                                            //위에서 0으로 초기화시켜줌/클릭된버튼번호숫자추출/페이지 번호 클릭 버튼으로 시작버노와 끝버노 결정
                                            bindBoardListFn();
                                            //여기 공지사항(Board) 목록(List) 함수/어차피 같은 내용인데 또 쓰면 코딩만 길어지니까 함수로 만들어줌
                                        }
                                    });
                                });
                            });

                        

                        $(".nextBtn").on({
                            click : function(e){
                                e.preventDefault();
                                groupNum++;
                                // if조건문까지 끝난다면 페이지네이션 함수를호출하라
                                pageNationFn();
                            }
                        })          
                        $(".prevBtn").on({
                            click : function(e){
                                e.preventDefault();
                                groupNum--;
                                // if조건문까지 끝난다면 페이지네이션 함수를호출하라
                                pageNationFn();
                            }
                        })              
                    }, //AJAX Success End
                    error    : function(){
                        alert("🚫AJAX ERROR🚫");
                    } //AJAX Error End
                })
            }
        },  
    }





    board.init(); //메소드니까 ()가 있고, 메소드가 아닌 프로퍼티일때는 괄호없음
})(jQuery,window,document); 