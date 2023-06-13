$(document).ready(function(){

    // .new .imgBox>div에 마우스를 올렸을 때, 그 div에 on값이 생겨라
    $('.new .imgBox>div').mouseenter(function(){

        $('.new .imgBox>div').removeClass('on')
        $(this).addClass('on')

    });

    // hero에서 스크롤을 위로 올렸을 때, .hero>div:nth-child(1)에 on값을 붙여라
    $('.hero').mousewheel(function(event,delta){

        if(delta>0){
            $('.hero>div').removeClass('on')
            $('.hero>div:nth-child(1)').addClass('on')

            $('.hero .hero_t.on>div:nth-child(2)>div').removeClass('on')
            $('.hero .hero_t.on>div:nth-child(2)>div').stop().animate({},1500)
            $('.hero .hero_t.on>div:nth-child(2)>div').addClass('on')

            $('.hero>div:nth-child(4) span').css({'top':'50%'})
            $('.hero>div:nth-child(4) span').stop().animate({'top':'0%'},1500)
        
            $('.hero .hero_t>div:nth-child(1)').css({'right':'-25%'})
            $('.hero .hero_t>div:nth-child(1)').stop().animate({'right':'0'},1500)
        
        }
        // else if(delta<0){
        //     $('.hero>div').removeClass('on')
        //     $('.hero>div:nth-child(2)').addClass('on')
        //     $('.hero>div:nth-child(4) span').stop().animate({'bottom':'0%'},1500)

        // }

    });



    $(window).scroll(function(){

        let cai = $('.cairo').offset().top
        let col = $('.collec').offset().top
        let sc = $(this).scrollTop()

        console.log(sc)

        if(sc<=cai){
            $('.cairo .box').find('img').css({'left': '200px'})
            $('.cairo .box').find('p').css({'right': '200px'})
        }

        if(sc>=col-100){

            $('.collec .group .group_1 .frag').css({'bottom':'85%'})
            
        }
        if(sc>=col+500){
            $('.collec .group .group_2 .frag').css({'top':'15%'})
        }





    })

    




    

})