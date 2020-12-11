;(function($,window,document,undefined){
    var board = {
        init : function(){
            this.ajaxFn();
        },
        ajaxFn :function(){
            var a = [];
            var txt = "";
            var total = 0;
            var line = 10;
            var pageCount = Math.ceil(total/line);
            var startNum = 0; // 초기 화면의 1번 버튼 index는 0
            var endNum = startNum + line; // 어차피 10개씩이니까 초기값도 적용됨
            var pageBtnNumber = 0;


            $.ajax({
                url : "./data/json/board.json",
                type : "POST",
                dataType: "JSON",
                success : function(data){
                    $.each(data.board,function(idx,obj){
                        a[idx] = [];

                        a[idx][0] = obj.NO;
                        a[idx][1] = obj.제목;
                        a[idx][2] = obj.날짜;
                        a[idx][3] = obj.조회수;
                        //console.log( a.length ); = 279 = total
                        
                        total = a.length;
                    })

                    txt += "<dt class='fixedclear'>";
                    txt += "<span>NO</span>";
                    txt += "<span>제목</span>";
                    txt += "<span>날짜</span>";
                    txt += "<span>조회수</span>";
                    txt += "</dt>";

                    for(var i=0;i<line;i++){
                        txt += "<dd>";
                        txt += "<span>" + a[i][0] + "</span>";
                        txt += "<span><a href='#'>" + a[i][1] + "</a></span>";
                        txt += "<span>" + a[i][2] + "</span>";
                        txt += "<span>" + a[i][3] + "</span>";
                        txt += "</dd>";
                    }

                    $(".notice-table dl").html( txt );
                    txt="";

                    // 페이지네이션
                    //<1단계>
                        // 1개의 페이지 버튼 당 보여지는 레코드 갯수는 10개
                        // 전체 레코드 total 279개,
                        // 페이지 버튼은 279/10의 자리올림 = 28개가 나와야함
                            // 변수 생성 var pageCount = Math.ceil(total/line);
                        // 전체 페이지 수를 바인딩 해줌
                    
                    pageCount = Math.ceil(total/line);

                    for( var i=1;i<=pageCount;i++){
                        if(i==1){
                            txt += "<li>";
                            txt += "<a href='#' class='pageBtn addCurrent'>" + i + "</a>";
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

                    //<2단계>
                        // 각 페이지버튼을 누르면 자동으로 다음 게시물이 10개씩 보이게하기
                            // 페이지버튼에 each메소드랑 click버튼이벤트 걸어서
                            // 페이지버튼 클릭할 때마다 게시물 바인딩 다시 해주기
                        // 게시물 바인딩 될 때 해당하는 게시물이 바이딩 되게 해주어야 하는데
                            // for(var i=0;i<10;i++) 이라면 페이지버튼 1
                            // for(var i=10;i<20;i++) 이라면 페이지버튼 2
                            // for(var i=20;i<30;i++) 이라면 페이지버튼 3
                            // ...
                            // for(var i=270;i<280;i++) 이라면 페이지버튼 28 = 마지막
                            // 즉, 변수 i의 시작값과 i의 범위에 대한 변수를 정하면 된다.
                            // i의 시작값 변수 = var startNum;
                                // i의 시작값은 pageBtn의 index 값에 *10을 하면 값이 나온다.
                                // 이미 존재하는 변수 line은 게시글 10개라는 의미의 10이기 때문에
                                // var startNum = index * line;
                            // i의 범위에 대한 변수 = i는 ~까지라는 뜻이니까 var endNum;
                                // i의 범위는 10개씩 
                                // startNum에 +10씩 하게되면 10개의 범위가 나온다.
                                // var endNum = startNum + line;
                        // endNum = startNum + line; 라는 것은 
                            // 10 20 30 ... 270 280까지의 숫자가 나온다.
                            // 하지만 현재 전체 레코드 수는 279개로 280번째 레코드는 없음 = 오류!
                            // if문으로 endNum = total이라고 맞춰줌으로써 디버깅
                        // var startNum = index * line;이 맞지만 index를 써주면 버튼을 그룹화 하기 힘듬
                            // 버튼을 그룹화 해서 0..9 10..19 이런식으로 나오면 index번호는 그룹이 바뀔때마다
                            // 초기화 되어 버리기 때문에 index는 사용하지 않는다.
                            // 현재 클릭한 숫자의 텍스트를 그대로 가져와 사용해도 값은 똑같다
                                // 시험삼아 해본 콘솔 : console.log( Number($(this).text()) = 1 2 3 ... 27
                                // 텍스트이기 때문에 내장함수 Number를 사용하여 숫자취급해줌
                                // index값과 같게 해주기 위해 -1 = Number($(this).text())-1
                                // 변수 생성 var pageBtnNumber = Number($(this).text())-1

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

                                pageBtnNumber = Number($(this).text())-1
                                startNum = pageBtnNumber * line;
                                endNum = startNum + line;
                                if(endNum > total){endNum = total};

                                for(var i=startNum;i<endNum;i++){
                                    txt += "<dd>";
                                    txt += "<span>" + a[i][0] + "</span>";
                                    txt += "<span><a href='#'>" + a[i][1] + "</a></span>";
                                    txt += "<span>" + a[i][2] + "</span>";
                                    txt += "<span>" + a[i][3] + "</span>";
                                    txt += "</dd>";
                                }

                                $(".notice-table dl").html( txt );
                                txt="";
                            }
                        })
                    })

                },
                error : function(){
                    alert("Error");
                }
            })
        }
    }
    board.init();
})(jQuery,window,document);