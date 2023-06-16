$(document).ready(function(){

    /* 적용해야 할 것
    1. - 히어로(첫화면)에서 스크롤 올리면 향수 바뀌고, 텍스트 들어갔다 나오고, 오른쪽 p 위로 이동
        - 히어로(첫화면)에서 스크롤 내리면 향수 바뀌고, 텍스트 들어갔다 나오고, 오른쪽 p 아래로 이동
        - 향수가 총 3개
    2. new에서 향수에 마우스 올리면 커지면서 텍스트 나오게(class on 값 주기)
    3. - 스크롤 내려서 penhaligon's가 나타나면 이미지랑 텍스트가 양쪽에서 날아오게
        - 스크롤 내려서 collection 나타나면 컬렉션 이름 나타나고, 향수 이미지가 아래에서 나타나기
    4. collection에서 향수병 클릭하면 다른 향수로 바꾸기
    5. heritage에서 스크롤 할 때마다 요소들 나타나게(opacity로)
    6. - 스크롤이 new에 도착하면 상단 이동 버튼이 나타나라
        - 상단 이동 버튼 클릭하면 맨 위로 이동
    */

    // 피드백 - 스크롤 한 곳으로 모으기!!!!!!!
    // 마우스휠은 변수 찾아서 aa++;,aa--;로 값 오르고 내리게


    // .gnb의 크기 조절 - 화면 와이드값에서 로고 크기 빼고 구하기
    let wd = $(window).width();
        $('header .gnb') .width(wd-600)
        $(window).resize(function(){
// 화면 크기가 바뀔 때마다 와이드값 다시 구하게
        let wd = $(window).width();
        $('header .gnb') .width(wd-600)
        })



    // 1. hero에서 스크롤을 위로 올렸을 때, .hero>div:nth-child(1)에 on값을 붙여라
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
        if(delta<0){
            $('.hero>div').removeClass('on')
            $('.hero>div:nth-child(2)').addClass('on')

            $('.hero .hero_t.on>div:nth-child(2)>div').removeClass('on')
            $('.hero .hero_t.on>div:nth-child(2)>div').stop().animate({},1500)
            $('.hero .hero_t.on>div:nth-child(2)>div').addClass('on')

            $('.hero>div:nth-child(4) span').css({'top':'0'})
            $('.hero>div:nth-child(4) span').stop().animate({'top':'50%'},1500)
        
            $('.hero .hero_t>div:nth-child(1)').css({'right':'-25%'})
            $('.hero .hero_t>div:nth-child(1)').stop().animate({'right':'0'},1500)
        }
        
    
        
    });


// 첫 화면에서 스크롤을 내렸을 때, 바로 .new로 이동하게 설정



// // 스크롤 제한 ON
// function scroll_on() {
//     $('.hero').on('scroll touchmove mousewheel', function(e) {
//         e.preventDefault();
//         e.stopPropagation();
//         return false;
//     });
// }

// // 스크롤 제한 OFF
// function scroll_off() {
//     $('.hero').off('scroll touchmove mousewheel');
// }


    // 2. .new .imgBox>div에 마우스를 올렸을 때, 그 div에 on값이 생겨라
    $('.new .imgBox>div').mouseenter(function(){

        $('.new .imgBox>div').removeClass('on')
        $(this).addClass('on')

    });



    // 3. 스크롤을 내려서 .cairo가 나타나면 이미지는 왼쪽에서, 텍스트는 오른쪽에서 날아와라
    // .collection 나타나면 h3 opacity 변해라
    $(window).scroll(function(){

        let cai = $('.cairo').offset().top
        let col = $('.collec').offset().top
        let sc = $(this).scrollTop()

        console.log(sc)

        if(sc>=cai-400){
            $('.cairo .box').find('img').css({'left': '15%'})
            $('.cairo .box').find('p').css({'right': '15%'})
        }

        if(sc>=col-350){

            $('.collec .group .group_1 .frag').css({'bottom':'85%'})
            $('.collec .group .group_1 h3').css({'opacity':'1'})
        }
        if(sc>=col+500){
            $('.collec .group .group_2 .frag').css({'top':'15%'})
            $('.collec .group .group_2 h3').css({'opacity':'1'})
        }

    });



    // 4. .collec .group_1 .frag ul li 의 순번을 찾고, 클릭 횟수와 순번에 따라 맞게 li에 on값을 붙여라

    let num = 0;

    $('.group_1 .frag ul').click(function(){
        
        num++;
        if(num==7)num=0;

        $('.group_1 .frag ul li').removeClass('on')
        $('.group_1 .frag ul li').eq(num).addClass('on')

        console.log(num)
    });

    $('.group_2 .frag ul').click(function(){
        
        num++;
        if(num==6)num=0;

        $('.group_2 .frag ul li').removeClass('on')
        $('.group_2 .frag ul li').eq(num).addClass('on')

        console.log(num)
    });



    // 5. 스크롤을 내려서 .heri에 도착하면 .heri .group의 자식 div 9개가 차례대로 나타나게 해라(스크롤 값에 따라)
    
    $(window).scroll(function(){
        let heri = $('.heri').offset().top
        let sc = $(this).scrollTop()

        if(sc>=heri){
            $('.heri .group').find('div').eq(0).css({'opacity':1})
        }

        if(sc>=heri+300){
            $('.heri .group').find('div').eq(1).css({'opacity':1})
        }

        if(sc>=heri+600){
            $('.heri .group').find('div').eq(2).css({'opacity':1})
        }

        if(sc>=heri+700){
            $('.heri .group').find('div').eq(5).css({'opacity':1})
        }

        if(sc>=heri+900){
            $('.heri .group').find('div').eq(3).css({'opacity':1})
        }

        if(sc>=heri+1000){
            $('.heri .group').find('div').eq(6).css({'opacity':1})
        }

        if(sc>=heri+1200){
            $('.heri .group').find('div').eq(4).css({'opacity':1})
        }

        if(sc>=heri+1500){
            $('.heri .group').find('div').eq(7).css({'opacity':1})
        }

        if(sc>=heri+1800){
            $('.heri .group').find('div').eq(8).css({'opacity':1})
        }

        // 반복문으로 쓰기

        
    });



    // 6. 상단으로 이동 버튼

        // new에 도착하면 나타나라
        $(window).scroll(function(){

            let new1 = $('.new').offset().top
            let sc = $(this).scrollTop()

            console.log(new1)
            
            if(sc>=new1-700){
                $('.topBtn').css({'display':'block'})
            }
            
            if(sc<new1-700){
                $('.topBtn').css({'display':'none'})
            }

        });


        // // sub _ hal에 도착하면 나타나라
        // $(window).scroll(function(){

        //     let hal = $('.hal').offset().top
        //     let sc = $(this).scrollTop()

        //     console.log(hal)
            
        //     if(sc>=hal-700){
        //         $('.topBtn').css({'display':'block'})
        //     }
            
        //     if(sc<hal-700){
        //         $('.topBtn').css({'display':'none'})
        //     }

        // })

        



        // 누르면 상단으로 이동해라
    const contents = document.querySelectorAll("h1");
    const firstTop = contents[0].offsetTop;

    $('.topBtn').click(function(){

        window.scroll({top:firstTop,behavior:'smooth'})

    });


    

})