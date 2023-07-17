$(document).ready(function(){

    // main에서 HI에 마우스 올리면 HEOIN으로 바뀌게
    $('.main ul li:nth-child(3)').mouseenter(function(){
        $('.main ul li:nth-child(3) div:nth-child(2)').html('HEOIN').css({'font-size':'100px'})
    });
    $('.main ul li:nth-child(3)').mouseleave(function(){
        $('.main ul li:nth-child(3) div:nth-child(2)').html('HI').css({'font-size':'150px'})
    });
    // main에서 HEOIN을 클릭하면 배경색/위치/txt 바뀌게
    $('.main ul li:nth-child(3)').click(function(){
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
    $('.main002 ul li:nth-child(3)').click(function(){
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
    })

    $('.main002 .txt002 span').click(function(){

    })


    $('.profile .btn').click(function(){
        $('.profile').removeClass('on')

    })






}) //끝