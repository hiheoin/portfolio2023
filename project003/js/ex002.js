$(document).ready(function(){

    // 마우스가 움직이는 값을 찾아라
    $(window).mousemove(function(e){

        let x = e.pageX
        let y = e.pageY

        $('.cursor').css({'left':x,'top':y})

    })

    // 커서가 em 안에 들어갔을 때 커서의 보더색이 바뀌어라
    $('.main p em').mouseenter(function(){
        // $('.cursor').css({'border-color':'red'})
        $('.cursor').addClass('style1')
    });

    $('.main p em').mouseleave(function(){
        // $('.cursor').css({'border-color':'#fff'})
        $('.cursor').removeClass('style1')
    });

    // 커서가 span 안에 들어갔을 때 커서가 돌아라
    $('.main p span').mouseenter(function(){
        // $('.cursor').css({'border-color':'red'})
        $('.cursor').addClass('style2')
    });

    $('.main p span').mouseleave(function(){
        // $('.cursor').css({'border-color':'#fff'})
        $('.cursor').removeClass('style2')
    });


}); //끝