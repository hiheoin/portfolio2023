$(document).ready(function(){


        let wd = $(window).width();
        $('header .gnb') .width(wd-600)
        $(window).resize(function(){
    // 화면 크기가 바뀔 때마다 와이드값 다시 구하게
        let wd = $(window).width();
        $('header .gnb') .width(wd-600)
        })


    // .hal>div:nth-child(2)>div:nth-child(2) i:nth-child(2)를 클릭하면 다음 사진, .hal>div:nth-child(2)>div:nth-child(2) i:nth-child(1)를 클릭하면 이전 사진으로
    $('.hal>div:nth-child(2)>div:nth-child(2) i').click(function(){
        let hal = $(this).index()

        console.log(hal)

        $('.hal>div:nth-child(2)>div:nth-child(1) img').removeClass('on')
        $('.hal>div:nth-child(2)>div:nth-child(1) img').eq(hal).addClass('on')

    });

    
    // 스크롤 이벤트 영역
    $(window).scroll(function(){

        // .detail 영역에서 스크롤 내릴 때마다 요소 나타나게
        let det = $('.detail').offset().top
        let sc = $(this).scrollTop()

        if(sc>=det-100){
            $('.detail .about01').css({'opacity':'1'})
        }

        if(sc>=det+200){
            $('.detail .note').css({'opacity':'1'})
        }

        if(sc>=det+450){
            $('.detail .about02').css({'opacity':'1'})
        }


        // .intro 영역에 들어가면 .another .intro>div:nth-child(1)>div:nth-child(2)가 왼쪽에서 나타나라
        let int = $('.intro').offset().top

        console.log(int)
        if(sc>=int){
            $('.another .intro>div:nth-child(1)>div:nth-child(2)').css({'right':600}).stop().animate({'right':0},800)
        }




    });


    $('.attach').mousemove(function(e){
        // 마우스 좌표값을 찾는 이벤트가 발생해야 하기 때문에 e써줌
        
        let x = e.pageX;
        let y = e.pageY;
        
            console.log(x,y)

        $(this).find('div:nth-child(2)').css({'top':(y/8)-40})
        

    });



    let a1 = 0;

    setInterval(function(){

        a1++;
        if(a1==2)a1=0;

        $('.another .slide div').eq(a1-1).css({'left':'0'}).stop().animate({'left':'965px'},1500);
        $('.another .slide div').eq(a1).css({'left':'-965px'}).stop().animate({'left':'0'},1500);

    },5000)


    





}); //끝