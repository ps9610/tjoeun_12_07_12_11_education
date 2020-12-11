;(function($,window,document,undefined){
    var board = {
        init : function(){
            var that = this; //❓ this와 $(this)의 차이
            that.ajaxFn();
        },
        ajaxFn : function(){
            //1. each함수
            //2. 2차원 배열
            //3. 반복문
            //4. 페이지네이션
                // 먼저 else 부분을 먼저 만들고 페이지가 만들어짐이 확인되면 
                // if 조건문 만들기

            var a = [];
            var total = 279; //전체 목록
            var txt = ""; //반드시 공백처리
            var list = 10; // 한 화면에 보이는 목록 갯수
            var pageCount = Math.ceil(total/list); 
            //전체페이지를 list의 개수로 나눠줌 = 27.9 
                //ㄴ> 자리올림 메서드 Math.ceil(); = 28 나오면 됨
                // = 전체 페이지 갯수 28page
            var pageBtnNumber = 0; //페이지버튼 기본값, 첫번째버튼 번호 인덱스값 0
            var startNum = pageBtnNumber * list; //0
            var endNum = startNum + list; //10

            setTimeout(mainAjax,100);

            function mainAjax(){

                //AJAX 구현
                $.ajax({
                    url      : "./data/json/board.json",
                    type     : "POST", //전송방식
                    dataType : "JSON", //파일형식
                    success  : function(data){
                        //console.log(data);
                        $.each(data.board, function(idx,obj){ 
                            //읽어올데이터가 board.json이고, 반목문이 한번씩 반복될때마다
                            // 매개변수 idx와 obj의 데이터를 가져와라
                            //console.log(idx, obj.NO, obj.제목, obj.날짜, obj.조회수); 
                            //객체이름.프로퍼티(속성), 객체이름.프로퍼티, 객체이름.프로퍼티, 객체이름.프로퍼티
                            //$each (매개변수 객체.프로퍼티, ,function(){})
                                //function : 반복문 한 바퀴마다 실행됨
                                //idx : 몇바퀴째 자동으로 실행되는지 체크해주는 인덱스 넘버
                                //obj : 현재 반복문에서 선택된 것. 여기선 board.json의 전체 데이터
                            a[idx] = [];

                            a[idx][0]=obj.NO;
                            a[idx][1]=obj.제목;
                            a[idx][2]=obj.날짜;
                            a[idx][3]=obj.조회수;
                        });
                        total = a.length // 전체 레코드(전체 게시물 갯수)
                        console.log(a)
                        console.log(total)

                        //2차원배열이라 행과 열이 같이 반복되어야함



                        //바인딩 텍스트
                            txt += "<dt class='fixedclear'>"; /* +=쓰거나 =써도 상관없고  */
                            txt += "<span>NO</span>"; /* 맨위에서 어떤 내용이 써졌으니까 그 내용이 초기화되지않고 이어지라고 +=써준거임 */
                            txt += "<span>제목</span>";
                            txt += "<span>날짜</span>";
                            txt += "<span>조회수</span>";
                            txt += "</dt>";

                            //for(var i=startNum;i<endNum;i++){밑에랑 똑같
                        for(var i=0;i<list;i++){ 
                            txt += "<dd>";
                            txt += "<span>" + a[i][0] + "</span>";
                            txt += "<span><a href='#'>" + a[i][1] + "</a></span>";
                            txt += "<span>" + a[i][2] + "</span>";
                            txt += "<span>" + a[i][3] + "</span>";
                            txt += "</dd>";
                        };

                        $(".notice-table dl").html( txt );
                        txt="";
                        //그냥 출력하자마자 자동으로 초기화시키기

                        // 페이지네이션
                        
                        for(var i=1;i<=pageCount;i++){ //1~28
                            if(i==1){
                                txt += "<li class='addCurrent'>";
                                txt += "<a href='#' class='pageBtn'>" + i + "</a>";
                                txt += "</li>";
                            }
                            else{
                                txt += "<li>";
                                txt += "<a href='#' class='pageBtn'>" + i + "</a>";
                                // 여기 a에다가 javascript:안쓰면 이따 pagebtn 클릭이벤트에 걸어줘
                                txt += "</li>";
                            }
                        }
                        
                        $(".page-wrap ul").html( txt );
                        txt="";
                        //여기도 출력하자마자 자동으로 초기화시키기

                        //페이지번호 클릭이벤트 
                            //클릭된 페이지 번호로 화면에 나타날 게시판 목록 10개를 출력(바인딩)
                        $(".pageBtn").each(function(index){
                            $(this).on({
                                click : function(e){
                                    e.preventDefault();
                                    txt += "<dt class='fixedclear'>";
                                    txt += "<span>NO</span>"; 
                                    txt += "<span>제목</span>";
                                    txt += "<span>날짜</span>";
                                    txt += "<span>조회수</span>";
                                    txt += "</dt>";

                                    //예 : 지금은 2번째 버튼 클릭한거임
                                    //for(var i=10;i<20;i++){
                                    //예 : 지금은 3번째 버튼 클릭한거임
                                    //for(var i=20;i<30;i++){ //여기서는 i가 버튼이니까 

                                    //페이지 번호 클릭 버튼으로 시작 번호와 끝 번호 결정
                                    //pageBtnNumber = index; //인덱스번호
                                    pageBtnNumber = Number($(this).text())-1; //버튼번호숫자
                                        //페이지 버튼이 1~28개 다 나와있지 않고 그룹으로 딱 10개만 보여지고
                                        //0~9, 10~19처럼 그룹화되어있고 index 번호는 대신에 0-9까지 반복되기 떄문에
                                        //index 쓰지말고 그 안에 있는 숫자를 추출하는 이걸로 쓰기
                                        //텍스트로 취급하고 잇으니까 꼭 내장함수 넘버쓰기
                                        
                                    startNum = pageBtnNumber * list; //시작 레코드 번호 0 10 20 30 ... 270
                                    //내가 클릭한 버튼에 곱하기 한 화면에 보여지는 레코드 갯수 10 
                                    //첫번째 버튼은 index 0, 두번째 버튼은 index 1,,, 마지막은 index 27
                                    endNum = startNum + list; //끝 레코드 번호 <10 <20 ...< 280
                                    // 근데 마지막 레코드 번호는 279로 280은 없음 -> 처리해줘어야함
                                    
                                    // 실제 레코드보다 끝 번호가 더 크면
                                    // 끝 번호를 실제 레코드 숫자와 동일하게 하라
                                    if(endNum>total){ //지금 끝번호 280, 우리 실제레코드 숫자 279
                                        endNum = total; //끝번호 = 레코드 숫자
                                    }

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
                            })
                        })
                        
                    },
                    error    : function(){
                        alert("🚫AJAX ERROR🚫");
                    }
                })

            }
        },  
    }





    board.init(); //메소드니까 ()가 있고, 메소드가 아닌 프로퍼티일때는 괄호없음
})(jQuery,window,document); 