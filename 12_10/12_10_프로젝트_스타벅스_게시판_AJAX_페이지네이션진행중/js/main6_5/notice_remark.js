;(function($, window, document, undefined){ // 매개변수
    //서브페이지 공지사항 
    var notice = {

        init  : function(){ //원래 init 혼자잇으면 프로퍼티 근데 함수가 들어가면 메소드가 됨
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
                    url: "./data/json/notice.json", //외부 데이터 가져오기 방법
                    type : "POST",  //전송방식
                    dataType : "JSON",  //notice.json에 저장되어있는 문서타입
                    success : function(result){   // function : 리터럴 객체방식 / data, result, object / 가장 많이 쓰는 매개변수
                        //1. JSON 데이터 처리
                        //json 데이터를 다 여기서 처리한다고 생각하면 됨
                        //console.log("AJAX success result : ", result.제목, result.날짜);

                        //2. 객체 배열처리 each메서드사용해서 필드 분리 작업
                       /*  $.each(result.공지사항, function(index, object){ //each는 배열처리니까 indexs매개변수 한개, 매개변수 객체(속성 / Property : Value) 총 2개를 가져오는거임
                            console.log("AJAX success result : ", index, object.제목,object.날짜);
                        }); */

                        //3. 배열처리하기 먼저 1치원부터하고 2차원 분리하기
                        // 3-1객체 배열을 속성과 속성값을 2차원 배열(array)에 저장 
                        // 가져온 외부 데이터의 객체 배열의 속성과 속성값을 2차원 배열에 저장
                       $.each(result.공지사항, function(i,obj){ //result가 객체모음의 이름이고 , 그 중에서 공지사항을 택한다는 말임
                            a[i] = []; //2차원 배열 (1차원인데 거기다가 배열 하나를 더 추가하면 2차원) / 2차원 a[i][]배열 / i뒤에는 계속 숫자가 반복하니까 반복문 선언 가능
                            
                            a[i][0] = obj.NO;
                            a[i][1] = obj.제목;
                            a[i][2] = obj.날짜;
                            a[i][3] = obj.조회수;
                        });    
                            //배열값만 저장 / 순수한 데이터 수집 / 외부 데이터

                            // a[i] = obj.NO;
                            //  a[i] = obj.제목;
                            //  a[i] = obj.날짜;
                            //  a[i] = obj.조회수;
                            // 이렇게 되는게 1차원, 예를들어 한 반의 성적은 이렇게 나타낼 수 있음
                            // 근데 한 학년 전체의 성적을 알아야? 한 학교의 학생들을 모두 하라고 하면? 변수가 많기 때문에  n차원 배열을 사용

                            //3-2 데이터 가공 처리 / information process
                            // 배열 데이터 반복문 처리
                            // 279개 인덱스 번호(0~278)
                            //console.log("레코드 갯수 = a(배열)의 길이?", a.length);
                            // 저장된 순으로 그대로 출력
                            // for(i in a.length) 라고 쓰거나
                            /*for(i=0;i<a.length;i++){
                                txt += "<tr>";
                                txt += "<td>" + a[i][0] + "</td>";
                                txt += "<td>" + a[i][1] + "</td>";
                                txt += "<td>" + a[i][2] + "</td>";
                                txt += "<td>" + a[i][3] + "</td>";
                                txt += "</tr>"; // 이렇게 279번 나올예정
                            }*/

                            //글 번호를 오름차순 알고리즘처리 후 줄력
                            //for(var i=0;i<a.length-1;i++){ //278번째 / 마지막이전 비교
                                //for(var j=i+1;j<a.length;j++){ //필드(항목) / 칸 / 열 / 4칸 / 0 1 2 3 / 279번째 /마지막 비교대상
                                    //if( a[i][0] > a[j][0] ){ //279 > 278 / 만약 더 작으면 앞 뒤 바꾸기
                                    // a[i][0] < a[j][0] // 번호 올림차순 
                                    // a[i][0] > a[j][0] // 번호 올림차순 
                                    // a[i][3] > a[j][3] // 조회수가 제일 작은것부터 먼저 나오게 하기
                                    // a[i][3] < a[j][3] // 조회수가 제일 큰것부터 먼저 나오게 하기
                                    // a[i][1] < a[j][1] // 제목 중에 숫자가 제일 큰것부터 먼저 나오게 하기
                                    // a[i][1] > a[j][1] // 제목 중에 숫자가 제일 작은것부터 먼저 나오게 하기
                                    //번호(NO) 바꾸기
                                        //  a[i][0] = a[j][0] // 작은 번호가 첫번째가 지워지고 두번째 번호가 기억 / 그래서 지워지기 전에 임시 기억 변수(imsi)에 저장해둔다
                                        /*
                                        imsi = a[i][0]; //임시기억 변수 / imsi임 / 279
                                        a[i][0] = a[j][0]; //첫번쨰 배열에 두번째 번호가 기억된다(=저장된다) / a[i][0] -> 278
                                        a[j][0] = imsi; // 이렇게 해야 앞뒤가 바뀐다. / 두번째 배열에 임시기억내용을 기억시킨다(저장) / a[j][0] -> imsi(279)
                                        //컴퓨터는 다음 정보가 오면 이전 정보는 없어지기 떄문에 이전 정보를 임시로 저장해놓고, 그 자리를 비워놓은 다음에
                                        // 다음 정보를 빈 자리에 넣어 두고 임시 저장해 놓은 정보를 이전 정보가 있던 빈 자리에 놓으면 
                                        // 결국 서로의 순서가 바뀐거임
                                        // 이렇게 임시 저장을하는 이유는 컴퓨터는 서로 맞바꿔질수가 없어서

                                        //글제목 바꾸기
                                        //위랑 똑같은 변수라도 위의 코드가 끝난 후에 새로 시작하는 거라 ㄱㅊ
                                        imsi = a[i][1];
                                        a[i][1] = a[j][1];
                                        a[j][1] = imsi;

                                        //날짜 바꾸기
                                        imsi = a[i][2];
                                        a[i][2] = a[j][2];
                                        a[j][2] = imsi;

                                         //조회수 바꾸기
                                        imsi = a[i][3];
                                        a[i][3] = a[j][3];
                                        a[j][3] = imsi;
                                        밑에 for문으로 간략하게 코드정리*/

                                        // for(k=0;k<=3;k++){
                                        // imsi = a[i][k];
                                        // a[i][k] = a[j][k];
                                        // a[j][k] = imsi;
                                        // }
                                    //} //end if
                                //} //for j
                            //} //for i

                            //위에 쓴 정렬 간략식 프로그래밍
                            var imsi = "";
                            
                            for(var i=0;i<a.length-1;i++){  //임시 저장 시 비교원본
                                for(var j=i+1;j<a.length;j++){ //임시 저장 시 비교대상
                                    if([a][0] > a[j][0]){ //정렬 기준(글번호,날짜 등)을 정해주느 조건문 = 여기선 글번호 오름차순 >
                                        for(var k=0;k<=3;k++){ //칸 4칸 반복
                                            imsi =a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = imsi;


                                        }
                                    }
                                }
                            }

                            txt = "";
                            //웹 출력 형태로 변수에 저장 txt
                            for(var i=0;i<a.length;i++){
                                txt += "<tr>";
                                txt += "<td>" + a[i][0] + "</td>";
                                txt += "<td>" + a[i][1] + "</td>";
                                txt += "<td>" + a[i][2] + "</td>";
                                txt += "<td>" + a[i][3] + "</td>";
                                txt += "</tr>";
                            }



                            // 글 번호를 오름차순으로 정보(데이터)처리
                            // 오름차순, 내림차순의 알고리즘................ㅋ.... / ex.조회수가 제일 적은것을 먼저 나타내라 / 많은 것을 나타내라 / 날짜별로 2010년것만 / 2012-2013년 사이의 것들만 / 게시글 내용 중에 스타벅스가 포함된 / 개인 정보가 포함된 게시물만
                                //스타벅스 게시판의 No는 항상 내림차순
                                // 헤딩 레코드에 버튼 추가해서 오름차순, 내림차순 설정 할 수 있음

                            //페이지네이션
                                // 버튼 누를때 한 줄에 보인는 숫자들을 그룹 하나로 봄 (1 2 3 4 5 6 7 8 9 10 next>)    
                                // 몇 개의 게시물이든 상관없이 자동으로 페이지 넘버가 메겨져야 함

                            //3-3 바인딩 / 웹페이지에 출력되게 설정해줌
                            $("table tbody").html( txt ); //게시판 바인딩

                        //console.log(a[0][0], a[0][1], a[0][2], a[0][3]); /이렇게 쓰면 레코즈 한 줄이 나옴

                        
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
