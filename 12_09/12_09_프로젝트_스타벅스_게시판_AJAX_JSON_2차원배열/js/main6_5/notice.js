;(function($, window, document, undefined){
    var notice = {

        init  : function(){ 
            var that = this;
            that.ajaxFn();
            that.findFn();
        },
        ajaxFn : function(){
            var a = [];
            var txt = "";
            var list = 10; //페이지 당 10개씩 나오게 할 것임 / 페이지 당 목록갯수
            var totRecord = a.length; //279
            var pageNumber = Math.ceil(totRecord / list); //28(page) = Math.ceil(279/10);
            var groupList = 10;
            var pageBtnIndex = 0;
            //  = 페이지버튼인덱스번호(내가클릭한거 / 기본값 0번 버튼)
            var startPageNumber = pageBtnIndex * list;
            //pageBtnIndex * list;
                                // 페이지버튼맨처음 0 = 0 * 10
                                // 페이지버튼맨처음 1 = 1 * 10
                                // 페이지버튼맨처음 2 = 2 * 10
            var endPageNumber = startPageNumber + list;
                                // 페이지버튼맨끝 10 = 0 + 10
                                // 페이지버튼맨끝 20 = 10 + 10
                                // 페이지버튼맨끝 30 = 20 + 10
            // for문에 쓸 때 i=startPageNumber; i<endPageNumber;
            // for문에 쓸 때 i=0; i<10; / 0~9;
            
            setTimeout(ajaxProcessFn,100);

            function ajaxProcessFn(){
                $.ajax({
                    url: "./data/json/notice.json",
                    type : "POST",
                    dataType : "JSON",
                    success : function(result){
                       $.each(result.공지사항, function(i,obj){
                            a[i] = [];
                            
                            a[i][0] = obj.NO;
                            a[i][1] = obj.제목;
                            a[i][2] = obj.날짜;
                            a[i][3] = obj.조회수;
                        });

                        //정렬 간략식 프로그래밍
                        totRecord = a.length; // 배열이 끝나고 난 다음에 전체 레코드, 글 목록의 총 갯수
                        pageNumber = Math.ceil(totRecord / list); //총 페이지 갯수
                        console.log("총 레코드 갯수", totRecord );
                        console.log("총 페이지", pageNumber );

                        var imsi = "";
                        
                        for(var i=0;i<a.length-1;i++){  //임시 저장 시 비교원본
                            //for(var i=0;j<a.length-1;i++){ // a.length가 10이니까 변수 list로 바꿔줌
                            for(var j=i+1;j<list;j++){ //임시 저장 시 비교대상
                                if(a[i][0] < a[j][0]){ //정렬 기준 / 글번호 내림차순 <
                                    for(var k=0;k<=3;k++){ //4칸 반복
                                        imsi =a[i][k];
                                        a[i][k] = a[j][k];
                                        a[j][k] = imsi;
                                    }
                                }
                            }
                        }

                        txt = "";
                        //웹 출력 형태로 변수에 저장 txt
                        for(var i=0;i<list;i++){
                            txt += "<tr>";
                            txt += "<td>" + a[i][0] + "</td>";
                            txt += "<td>" + a[i][1] + "</td>";
                            txt += "<td>" + a[i][2] + "</td>";
                            txt += "<td>" + a[i][3] + "</td>";
                            txt += "</tr>";
                        } //게시판 목록

                        //3-3 바인딩 / 웹페이지에 출력되게 설정해줌
                        $("table tbody").html( txt ); //게시판 바인딩
                        
                        //페이지네이션
                            // 버튼 누를때 한 줄에 보이는 숫자들을 그룹 하나로 봄 (1 2 3 4 5 6 7 8 9 10 next>)    
                            // 몇 개의 게시물이든 상관없이 자동으로 페이지 넘버가 메겨져야 함
                            
                        //페이지 번호 웹 페이지에 형식으로 pageTxt 변수에 저장 + 자동 실행 
                        var pageTxt="";
                        for(i=0;i<pageNumber;i++){
                            if(i==0){
                                pageTxt += '<li><a href="#" class="pageBtn addCurrent">'+ (i+1) +'</a></li>';
                            }
                            else{
                                pageTxt += '<li><a href="#" class="pageBtn">'+ (i+1) +'</a></li>';
                            }
                        } //페이지 번호

                        //페이지 번호 바인딩
                        $(".page-wrap ul").html( pageTxt );

                        // 페이지 버튼 객체 배열처리 클릭 이벤트
                            //ㄴ> 페이지 버튼 바인딩 한 후에 가장 마지막에 할 작업
                        $(".pageBtn").each(function(index){ //본인이 클릭한 페이지번호-1 / 인덱스니까 당연;
                            $(this).on({ 
                                click : function(e){
                                    e.preventDefault();

                                    //레코드 시작번호
                                    //레코드 끝 번호

                                    pageBtnIndex = index;
                                    startPageNumber = pageBtnIndex * list;
                                    endPageNumber = startPageNumber + list;

                                    //웹 출력 형태로 변수에 저장 txt
                                    for(var i=startPageNumber;i<endPageNumber;i++){
                                        txt += "<tr>";
                                        txt += "<td>" + a[i][0] + "</td>";
                                        txt += "<td>" + a[i][1] + "</td>";
                                        txt += "<td>" + a[i][2] + "</td>";
                                        txt += "<td>" + a[i][3] + "</td>";
                                        txt += "</tr>";
                                    }
                                    // 페이지 버튼을 클릭한 경우의 게시판 바인딩
                                    $("table tbody").html( txt );
                                }
                            });
                        })
                        //each메소드까지구현햇으면 페이지네이션 알고리즘 구현하기
                        //레코드 시작번호와 레코드 끝번호 변수 설정하기 (지역으로 할거임)
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
