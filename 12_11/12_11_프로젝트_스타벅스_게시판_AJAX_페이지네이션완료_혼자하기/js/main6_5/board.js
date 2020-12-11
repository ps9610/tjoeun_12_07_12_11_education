;(function($,window,document,undefined){
    var board = {
        init : function(){
            this.ajaxFn();
        },
        ajaxFn :function(){
            var a = [];
            var txt = "";
            var total = 0;
            var line = 0;
            var pageCount = Math.ceil(total/line);
            var startNum = 0; // 초기 화면의 1번 버튼 index는 0
            var endNum = startNum + line; // 어차피 10개씩이니까 초기값도 적용됨
            var pageBtnNumber = 0;

            var groupList = 0;
            var groupNum = 0;
            var pageBtnNumber = groupNum * groupList;
            var groupStart = pageBtnNumber*groupList;
            var groupEnd = groupStart+groupList;

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
                    })
                    total = a.length;//console.log( a.length ); = 279 = total

                    line = 10;
                    groupList = 10;
                    noticeBindFn();
                    
                    function noticeBindFn(){

                        startNum = pageBtnNumber * line;
                        endNum = startNum + line;
                            if(endNum > total){endNum = total};

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
                        }
                        $(".notice-table dl").html( txt );
                        txt="";
                    }

                    // 페이지네이션
                    pageCount = Math.ceil(total/line); // 전체 페이지버튼의 수
                    $(".nextBtn-wrap").stop().show();
                    $(".prevBtn-wrap").stop().hide();
                    PageNationFn();
                    function PageNationFn(){
                        // 전체 페이지 버튼을 10개씩 그룹지어 보여지게 하려면 그룹페이지시작버튼과 끝 버튼을 설정해주어야함
                        // 알고리즘은 게시판 목록의 알고리즘과 비슷함
                            // 그룹페이지시작버튼변수/var groupStart = groupNum*groupList;
                            // 그룹페이지끝버튼변수/var groupEnd = groupStart+groupList;
                            // 그룹페이지끝버튼하고나머지자투리버튼변수조건문/
                                // if(groupEnd>pageCount){
                                    // groupEnd=pageCount;
                                    // }
                            // 그룹페이지는 첫 시작에는 이전 버튼이 없고 중간에만 둘 다 있고 마지막 끝에는 다음버튼이 없음
                                //먼저 PageNationFn() 함수 위에 초기값을 설정해주고
                                    //$(".nextBtn-wrap").stop().show();
                                    //$(".prevBtn-wrap").stop().hide();
                                //나머지자투리버튼조건문에 추가로 만들어줌
                                    //if(groupEnd>pageCount){
                                    //    groupEnd=pageCount;
                                    //    $(".nextBtn-wrap").stop().hide(0);
                                    //}
                                    //else{
                                    //    $(".nextBtn-wrap").stop().show(0);
                                    //}
                                    //if(groupNum>0){
                                    //    $(".prevBtn-wrap").stop().show(0);
                                    //}
                                    //else{
                                    //    $(".prevBtn-wrap").stop().hide(0);
                                    //}     
                                //페이지 버튼 바인딩 반복문 변수 i의 초기값과 범위도 고쳐줄 수 있다.
                                    //for( var i=groupStart+1;i<=groupEnd;i++){
                                        //if(1==(i%groupList)){
                                        //txt += "<li>";
                                        //txt += "<a href='#' class='pageBtn addCurrent'>" + i + "</a>";
                                        //txt += "</li>";
                                    //}
                                    //여기서 if 조건문은 i가 10으로 나눠질때 나머지가 1이라면 addCurrent되게하라는뜻
                                        //근데 10이라는것은그룹리스트가 10개라는 뜻이니까 groupList 써줘야야 11page,21page...에도 적용됨
                                // 이제 next, prev 버튼에 클릭이벤트를 걸어줌
                                // 변수 groupStart에 썼던 groupNum은 현재 몇번째 그룹인지 카운트해주는 변수/그래서초기값이0
                                    //next 버튼 클릭 시 groupNum++ 되게 하면 몇번째 그룹인지에 따라서 앞자리가 변하게됨
                                    //prev 버튼 클릭 시 groupNum-- 되게 하면 몇번째 그룹인지에 따라서 앞자리가 변하게됨
                                    // if조건문으로 증감범위를 정해주지 않아도 버튼이 사라지고 보이게 이미 설정해두었고
                                        // 버튼이 없으면 증감시킬수 없기 때문에 범위설정안해줘도 됨

                                // 가상 태그라서 클릭이 안 되는 경우가 있는데 이럴 땐 
                                    //$(document).on("mouseenter",".pageBtn",function(){})안에
                                    // 페이지 버튼 클릭 이벤트를 넣어주면 됨

                        pageBtnNumber = groupNum * groupList;//10개씩 나오게 됨
                        groupStart = groupNum*groupList;
                        groupEnd = groupStart+groupList;
                        if(groupEnd>pageCount){
                            groupEnd=pageCount;
                            $(".nextBtn-wrap").stop().hide(0);
                        }
                        else{
                            $(".nextBtn-wrap").stop().show(0);
                        }
                        if(groupNum>0){
                            $(".prevBtn-wrap").stop().show(0);
                        }
                        else{
                            $(".prevBtn-wrap").stop().hide(0);
                        }
                        
                        for( var i=groupStart+1;i<=groupEnd;i++){
                            if(1==(i%groupList)){
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
                    }    

                    $(document).on("mouseenter",".pageBtn",function(){
                    
                        $(".pageBtn").each(function(index){
                            $(this).on({
                                click : function(e){
                                    e.preventDefault();
                                    $(".pageBtn").removeClass("addCurrent");
                                    $(this).addClass("addCurrent");
                                    pageBtnNumber = Number($(this).text())-1;
                                    noticeBindFn();
                                }
                            })
                        })

                    })    

                    $(".nextBtn").on({
                        click : function(e){
                            e.preventDefault();
                            groupNum++;
                            PageNationFn();
                        }
                    });
                    $(".prevBtn").on({
                        click : function(e){
                            e.preventDefault();
                            groupNum--;
                            PageNationFn();
                        }
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