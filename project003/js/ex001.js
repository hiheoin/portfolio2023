$(document).ready(function(){

    // nav의 li를 클릭했을 때, scroll의 위치가 바뀐다
    // nav의 li를 클릭했을 때, 각 li의 순번을 찾고 그 순번에 맞게 scroll의 위치를 매번 바뀌게 해라
    $('nav li').click(function(){

        let i = $(this).index()
        let sht = $('section').height()

        $('html,body').stop().animate({scrollTop:(i+1)*sht},1200)

        $('nav li').removeClass('on')
        $(this).addClass('on')

    });


    // 로고를 클릭했을 때, scroll의 위치를 0으로 이동해라
    $('h1').click(function(){

        $('html,body').stop().animate({scrollTop:0},1200)
        $('nav').fadeOut()
        $('nav li').removeClass('on')

    });


    // .wel을 클릭했을 때, nav가 나타나라
    $('.wel').click(function(){
        let sht = $('section').height()

        $('html,body').stop().animate({scrollTop:sht},1200)
        $('nav').fadeIn(1800)

        $('nav li').removeClass('on')
        $('nav li').eq(0).addClass('on')
        
    });


    // scroll의 위치값을 확인하고, 스크롤의 값이 section의 높이만큼 내려왔을 때부터 nav가 보여라
    $(window).scroll(function(){

        let sc = $(this).scrollTop()
        let sht = $('section').height()

        // if(sc>=sht){
        // $('nav').fadeIn(600)
        // }else{
        //     $('nav').fadeOut(600)
        //     }

        
        if(sc>=sht*0 && sc<sht){
            $('nav').fadeOut(600)
            $('nav li').removeClass('on')
        }
        
        // if(sc>=sht*1 && sc<sht*2){
        //     $('nav').fadeIn(600)
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(0).addClass('on')
        // }
        // if(sc>=sht*2 && sc<sht*3){
        //     $('nav').fadeIn(600)
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(1).addClass('on')
        // }
        // if(sc>=sht*3 && sc<sht*4){
        //     $('nav').fadeIn(600)
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(2).addClass('on')
        // }
        // if(sc>=sht*4 && sc<sht*5){
        //     $('nav').fadeIn(600)
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(3).addClass('on')
        // }

        // 위의 사항을 for문으로 만들기

        for(var a=0; a<4; a++){
            if(sc>=sht*(a+1) && sc<sht*(a+2)){
            $('nav').fadeIn(600)
            $('nav li').removeClass('on')
            $('nav li').eq(a).addClass('on')
            }
        }


    })




}); //끝