$(document).ready(function(){

    // main에서 HI에 마우스 올리면 HEOIN으로 바뀌게
    $('.main ul li:nth-child(3) div').mouseenter(function(){
        $('.main ul li:nth-child(3) div:nth-child(2)').html('HEOIN').css({'font-size':'100px'})
    });
    $('.main ul li:nth-child(3) div').mouseleave(function(){
        $('.main ul li:nth-child(3) div:nth-child(2)').html('HI').css({'font-size':'150px'})
    });

    // main에서 HEOIN을 클릭하면 배경색/위치/txt 바뀌게
    $('.main ul li:nth-child(3) div').click(function(){
        // 배경, 사진
        $('.main').css({'z-index':'9', 'opacity':'0'})
        $('.main002').css({'z-index':'10','opacity':'1'})
        // 사진들 위치
        $('.main002 ul li:nth-child(1) div').css({'top': '70%'})
        $('.main002 ul li:nth-child(2) div').css({'top': '60%'})
        $('.main002 ul li:nth-child(4) div').css({'top': '30%'})
        $('.main002 ul li:nth-child(5) div').css({'top': '35%'})
        // 사진 회전
        $('.main ul li:nth-child(3) div').removeClass('on');
        $('.main002 ul li:nth-child(3) div').addClass('on');
        // txt, 버튼 나타나게
        $('.main002 .txt001').css({'opacity':'1'})
        $('.main002 .txt002').css({'opacity':'1'})
        $('.main ul li:nth-child(3) div').removeClass('in');
        $('.main ul li:nth-child(3) div').addClass('on');
    });
    $('.main002 ul li:nth-child(3) div').click(function(){
        // 배경, 사진
        $('.main002').css({'z-index':'9','opacity':'0'})
        $('.main').css({'z-index':'10', 'opacity':'1'})
        // 사진들 위치
        $('.main002 ul li:nth-child(1) div').css({'top': '50%'})
        $('.main002 ul li:nth-child(2) div').css({'top': '50%'})
        $('.main002 ul li:nth-child(4) div').css({'top': '50%'})
        $('.main002 ul li:nth-child(5) div').css({'top': '50%'})
        
        $('.main002 ul li:nth-child(3) div').removeClass('on');
        $('.main ul li:nth-child(3) div').addClass('in');
    });

    // main에서 GO 버튼 클릭하면 각 페이지로 넘어가게 
    $('.main002 .txt001 span').click(function(){
        $('.profile').addClass('on')
    });

    $('.main002 .txt002 span').click(function(){
        $('.project').addClass('on')
    });

    // 프로필에서 back 버튼 누르면 다시 메인으로 가게
    $('.profile .btn').click(function(){
        // 메인으로
        $('.profile').removeClass('on')
        // 프로필 그래프 width 0으로
        $('.profile .skill .box .left .sec li div span:nth-child(1)').removeClass('on')
    });
    // 프로필에서 스크롤 내리면 그래프 채워지게
    $('.profile').mousewheel(function(e,delta){
        if(delta<0){
            $('.profile .skill .box .left .sec li div span:nth-child(1)').addClass('on')
        }
    });

    // 프로젝트에서 back 버튼 누르면 다시 메인으로 가게
    $('.project .btn1').click(function(){
        // 메인으로
        $('.project').removeClass('on')
    });
    
    // 프로젝트에서 GO 버튼 누르면 각 섹션이 올라오게
    $('.project .box ul li:nth-child(1) .btn2').click(function(){
        $('.cjh').addClass('on')
    });
    $('.project .box ul li:nth-child(2) .btn2').click(function(){
        $('.pen').addClass('on')
    });
    $('.project .box ul li:nth-child(3) .btn2').click(function(){
        $('.ow').addClass('on')
    });
    // 프로젝트 다음 각 섹션에서 back 버튼 누르면 프로젝트 목록으로 돌아오게
    $('.cjh .btn').click(function(){
        // 프로젝트로
        $('.cjh .concept').removeClass('on')
        $('.cjh').removeClass('on')
    });
    $('.pen .btn').click(function(){
        // 프로젝트로
        $('.pen .concept').removeClass('on')
        $('.pen').removeClass('on')
    });
    $('.ow .btn').click(function(){
        // 프로젝트로
        $('.ow .concept').removeClass('on')
        $('.ow').removeClass('on')
    });

    // 프로젝트 섹션에서 concept view 버튼 누르면 .cv가 나타나게
    $('.cjh .btnBox .btnC').click(function(){
        $('.cjh .concept').addClass('on')
    });
    $('.pen .btnBox .btnC').click(function(){
        $('.pen .concept').addClass('on')
    });
    $('.ow .btnBox .btnC').click(function(){
        $('.ow .concept').addClass('on')
    });
    // x버튼 누르면 닫히게
    $('.cjh .close').click(function(){
        $('.cjh .concept').removeClass('on')
    });
    $('.pen .close').click(function(){
        $('.pen .concept').removeClass('on')
    });
    $('.ow .close').click(function(){
        $('.ow .concept').removeClass('on')
    });
    

    


    



}) //끝