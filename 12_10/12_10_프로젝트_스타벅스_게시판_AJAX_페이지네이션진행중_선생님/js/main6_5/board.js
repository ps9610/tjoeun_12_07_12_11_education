;(function($,window,document,undefined){

    var board = {
        init:   function(){
            var that = this;
            that.ajaxFn();
        },
        ajaxFn: function(){
            var a = [];
            var total = 279;    //전체 목록 갯수
            var txt = '';       //반드시 공백 처리
            var list = 10;      //한화면에 보이는 목록 갯수
            var pageCount = Math.ceil(total/list); //28페이지 = 279/10; 전체 페이지 갯수



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
                        total = a.length; //전체 레코드 279

                        //바인딩 텍스트
                        txt += "<dt class='fixedclear'>";
                        txt += "<span>NO</span>";
                        txt += "<span>제목</span>";
                        txt += "<span>날짜</span>";
                        txt += "<span>조회수</span>";
                        txt += "</dt>";

                        for(var i=0; i<list; i++){
                            txt += "<dd>";
                            txt += "<span>" + a[i][0] + "</span>";
                            txt += "<span><a href='#'>" +  a[i][1]  + "</a></span>";
                            txt += "<span>"+  a[i][2]  + "</span>";
                            txt += "<span>" + a[i][3]  +"</span>";
                            txt += "</dd>";
                        }

                        $('.notice-table dl').html( txt );
                        txt='';



                        //페이지네이션
                        for(var i=1; i<=pageCount; i++){ //1~28
                            if(i==1){
                                txt += "<li class='addCurrent'>"; 
                            }
                            else{
                                txt += "<li>";
                            }
                            txt += "<a href='#' class='pageBtn'>" + i + "</a>";
                            txt += "</li>";
                        }
                        //바인딩
                        $('.page-wrap ul').html( txt );
                        txt='';

                        //페이지번호 클릭 이벤트
                        //클릭된 페이지 번호로 
                        //화면에 나타날 게시판 목록 10개를 출력(반인딩)
                        $('.pageBtn').each(function(index){
                            $(this).on({
                                click:  function(event){
                                    event.preventDefault();
                                                                                
                                        //바인딩 텍스트
                                        txt += "<dt class='fixedclear'>";
                                        txt += "<span>NO</span>";
                                        txt += "<span>제목</span>";
                                        txt += "<span>날짜</span>";
                                        txt += "<span>조회수</span>";
                                        txt += "</dt>";
                                        //두번째 페이지 번호 클릭 한 상태 가상
                                        for(var i=10; i<20; i++){
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
                            });
                        });


            
                    },
                    error:  function(){
                        alert('AJAX ERROR!!!');
                    }
                });

            }

        }
    };

    board.init();

})(jQuery,window,document);
//board.js