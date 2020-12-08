;(function($,window,document,undefined){

    //공지사항
    var notice = {
        init:function(){
            var that = this;

            that.ajaxFn();
            that.findFn();
        },
        ajaxFn:function(){
            //외부데이터 JSON파일(notice.json) 호출 처리 실행
            //게시판 목록 내용을 모두 JSON데이터 파일로 저장하고
            //AJAX로 처리해서 데이터를 읽어서 게시판 목록 바인딩한다.
            var a = []; //2차원 배열 사용 준비
            var txt ='';


            setTimeout(ajaxProcessFn,100);

            function ajaxProcessFn(){
                $.ajax({
                    url:'./data/json/notice.json',
                    type:'POST',
                    dataType:'JSON',
                    success:function(result){
                        //1
                        //JSON DATA 처리    
                        //console.log('AJAX SUCCESS RESULT : ', result);


                        //2
                        //객체 배열처리(each() 메서드) 필드 분리 작업
                        /*
                        $.each(result.공지사항, function(index, object){ //인덱스번호, 객체(속성Property:속성값value)
                            console.log('AJAX SUCCESS RESULT : ', object.제목);
                            // console.log('AJAX SUCCESS RESULT : ', index+1, object.제목, object.날짜);
                        });
                        */

                        //3
                        //array 2차원 배열
                        $.each(result.공지사항, function(i, obj){
                            a[i] = []; //2차원 배열 a[0] = []

                            a[i][0] = obj.번호;
                            a[i][1] = obj.제목;
                            a[i][2] = obj.날짜;
                            a[i][3] = obj.조회수;

                            txt += "<tr>";
                            txt += "<td>" + a[i][0] + "</td>";
                            txt += "<td>" + a[i][1] + "</td>";
                            txt += "<td>" + a[i][2] + "</td>";
                            txt += "<td>" + a[i][3] + "</td>";
                            txt += "</tr>";

                        });


                        $('table tbody').html( txt );  //게시판 바인딩



                        

                    },
                    error:function(){
                        console.log('AJAX Error!!!');
                    }
                });
            }



        },
        findFn:function(){
           
        }
    };

    notice.init();



})(jQuery,window,document);