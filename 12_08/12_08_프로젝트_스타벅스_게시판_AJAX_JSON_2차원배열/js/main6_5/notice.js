;(function($, window, document, undefined){ // 매개변수
    //서브페이지 공지사항 
    var notice = {
        init  : function(){ //원래 init 혼자잇ㅇ드면 프로퍼티 근데 함수가 들어가면 메소드가 됨
            var that = this;

            that.ajaxFn();
            that.findFn();
        },
        ajaxFn : function(){
            //외부데이터 JSON파일(notice.json) 호출 처리 실행
                //JSON : 객체 기반으로 만들어진 외부 데이터, 호환성이 아주 좋음
            //스토리보드 :
                //게시판 목록 내용을 모두 JSON데이터 파일로 저장하고
                //AJAX 처리해서(불러들여서) 데이터를 읽은 후 게시판 목록에 바인딩한다.
                    //바인딩 : 글번호, 제목, 목록, 조회수 등을 홈페이지에 뿌려주는것
            //게시판 한 줄 = 레코드
            //JSON 파일을 먼저 만들어줘야됨
            //JSON 파일에 끌어모을 정보를 엑셀에 보기 좋게 정리 후 컨버터로 제이슨형식으로 바꿔서 

            var a = []; //2차원 배열 사용 준비 ->먼저 1차원부터 만들어주어야 함
            var txt = "";

            setTimeout(ajaxProcessFn,100);

            function ajaxProcessFn(){
                $.ajax({
                    //,property : value
                    url: "./data/json/notice.json",
                    type : "POST",  //전송방식
                    dataType : "JSON",  //notice.json에 저장되어있는 문서타입
                    success : function(result){   // function : 리터럴 객체방식 / data, result, object / 가장 많이 쓰는 매개변수
                        //1. JSON 데이터 처리
                        //json 데이터를 다 여기서 처리한다고 생각하면 됨
                        console.log("AJAX success result : ", result.제목, result.날짜);
                        //2. 객체 배열처리 each메서드사용해서 필드 분리 작업
                       /*  $.each(result.공지사항, function(index, object){ //each는 배열처리니까 indexs매개변수 한개, 매개변수 객체(속성 / Property : Value) 총 2개를 가져오는거임
                            console.log("AJAX success result : ", index, object.제목,object.날짜);
                        }); */
                        //3. 배열처리하기 먼저 1치원부터하고 2차원 분리하기
                         $.each(result.공지사항, function(i,obj){ //result가 객체모음의 이름이고 , 그 중에서 공지사항을 택한다는 말임
                            a[i] = []; //2차원 배열 (1차원인데 거기다가 배열 하나를 더 추가하면 2차원)
                            
                            a[i][0] = obj.NO;
                            a[i][1] = obj.제목;
                            a[i][2] = obj.날짜;
                            a[i][3] = obj.조회수;
                            
                            txt += "<tr>";
                            txt += "<td>" + a[i][0] + "</td>";
                            txt += "<td>" + a[i][1] + "</td>";
                            txt += "<td>" + a[i][2] + "</td>";
                            txt += "<td>" + a[i][3] + "</td>";
                            txt += "</tr>";

                            $("table tbody").html( txt ); //게시판 바인딩

                        });

                         console.log(a[0][0], a[0][1], a[0][2], a[0][3]); //레코즈 한 줄이 나옴

                        
                    },
                    error : function(){
                        console.log("AJAX error");
                    }
                });
            }
        },
        findFn : function(){
        }
    };
    

    notice.init();

})(jQuery, window, document); //전달인자
