$(document).ready(function(){


    $(window).scroll(function(){
        
        // 로고 제이쿼리
        let sc = $(this).scrollTop()
        let ot = $('.box2').offset().top
        console.log(ot)


        if(sc>=ot-800){
            $('.logo').addClass('on')
        }
        else{
            $('.logo').removeClass('on')
        }

        // 인포 제이쿼리
        console.log(ot)
        if(sc>=ot-800){
        $("#fee").text("요금")
        $("#res").text("예약")
        $("#cos").text("고객")
        $("#owo").text("O!")
        $('.info').addClass('on')
        $('.boxE').addClass('on')
        }
        else{
        $("#fee").text("요금안내")
        $("#res").text("예약안내")
        $("#cos").text("고객지원")
        $("#owo").text("O!WORLD?")
        $('.info').removeClass('on')
        $('.boxE').removeClass('on')
        }
    });


    $('.logo').click(function(){
        $(window).scrollTop(0)
    })




        // 시설안내
        // faciltxt의 li를 클릭했을 때, 각 순번에 맞는 trailer의 ul이 보여라

    $('#faciltxt li').click(function(){

        // 변수만들기(순번찾기)
        let a = $(this).index()
        console.log(a)

        $('.box2-4 .trailer ul').hide()
        $('.box2-4 .trailer ul').eq(a).show()
        $('.facilimg div ul').find('li').css({'opacity':0})
        $('.facilimg div ul').eq(a).find('li').css({'opacity':1})

    });

        // .box2-4 .trailer의 li를 클릭했을 때, .box2-3 .facilimg li가 나타나라 (순번에 맞게)
        $('.box2-4 .trailer ul:nth-child(4) li').click(function(){

            let iiii = $(this).index()
            console.log(iiii)
            $('.box2-3 .facilimg_tra1 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra2 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra3 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra4 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra4 li').eq(iiii).css({'opacity':1})

        });

        $('.box2-4 .trailer ul:nth-child(1) li').click(function(){

            let i = $(this).index()
            console.log(i)
            $('.box2-3 .facilimg_tra1 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra2 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra3 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra4 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra1 li').eq(i).css({'opacity':1})
    
            });

        $('.box2-4 .trailer ul:nth-child(2) li').click(function(){

            let ii = $(this).index()
            console.log(ii)
            $('.box2-3 .facilimg_tra1 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra2 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra3 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra4 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra2 li').eq(ii).css({'opacity':1})
        
            });

        $('.box2-4 .trailer ul:nth-child(3) li').click(function(){

            let iii = $(this).index()
            console.log(iii)
            $('.box2-3 .facilimg_tra1 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra2 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra3 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra4 li').css({'opacity':0})
            $('.box2-3 .facilimg_tra3 li').eq(iii).css({'opacity':1})
            
            });
    
        // .facil_arrow .left를 누르면 왼쪽으로 돌고, .facil_arrow right를 누르면 오른쪽으로 돌게
        // $('.facil_arrow .left').click(function(){

        //     // let imgs = '';

        //     // for(var i = 1; i<6; i++){

        //     // imgs+='<img src="img/facil_bird00'+i+'.jpg" alt="">'
    
        //     // }

        //     let left = 1;
        //     let leftnum = 0;

        //     left++;
        //     if(left==6)left=1
        //     leftnum++;
        //     if(leftnum==5)leftnum=0
    

        //     $('#aaa').html('<img src="img/facil_bird00'+(left+leftnum)+'.jpg" alt="">');
        //     $('#bbb').html('<img src="img/facil_bird00'+(left+leftnum)+'.jpg" alt="">');
        //     $('#ccc').html('<img src="img/facil_bird00'+(left+leftnum)+'.jpg" alt="">');
            


        // })

        // $('.facil_arrow .right').click(function(){


        //     $('#aaa').html('<img src="img/facil_bird002.jpg" alt="">');
        //     $('#bbb').html('<img src="img/facil_bird003.jpg" alt="">');
        //     $('#ccc').html('<img src="img/facil_bird004.jpg" alt="">');


        // })

        // $('.facil_arrow .left').click(function(){


        // });



        // 가이드맵

    $('#guidetxt li').click(function(){

        // 변수만들기(순번찾기)
        let a =$(this).index()

        $('.guideimg ul').hide()
        $('.guideimg ul').eq(a).show()

    });

        // 가이드맵 - #guidetxt li:nth-child(1)을 누르면 #close가 나타나고, #guidetxt li:nth-child(2)을 누르면 #close가 사라져라

        $('#guidetxt li:nth-child(1)').click(function(){

            $('#close').css({'opacity':'1'})

        });

        $('#guidetxt li:nth-child(2)').click(function(){

            $('#close').css({'opacity':'0'})

        });

        // 가이드맵 - 운휴정보 버튼(#close) 눌렀을 때 .guideimg_close ul이 나타나라
    $('#close').click(function(){

        $('.guideimg_close ul').css({'display':'block'})

    });

        // 가이드맵 - .guideimg_close ul li에 마우스를 올리면 순번에 맞게 .guideimg_close ul li의 p가 나타나라(운휴정보에 해당하는) 
    $('.guideimg_close ul li').mouseover(function(){

        $(this).find('p').css({'opacity':1})
        $(this).css({'transform':'scale(1.2)'})


    });
    $('.guideimg_close ul li').mouseleave(function(){

        $(this).find('p').css({'opacity':0})
        $(this).css({'transform':'scale(1)'})

    });




        // 갤러리

    let a1 = 0;
    setInterval(function(){

            a1++;
            if(a1==3)a1=0;

            $('#trailer1 li').eq(a1-1).css({'left':'0'}).stop().animate({'left':'548px'},1500);
            $('#trailer1 li').eq(a1).css({'left':'-548px'}).stop().animate({'left':'0'},1500);

    },5000);
            
    let a2 = 0;
    setInterval(function(){

            a2++;
            if(a2==3)a2=0;

            // $('#trailer2 li').eq(a2-1).css({'right':'0'}).stop().animate({'right':'320px'},1500);
            // $('#trailer2 li').eq(a2).css({'right':'-320px'}).stop().animate({'right':'0'},1500);
            $('#trailer2 li').eq(a2-1).css({'opacity':'1'}).stop().animate({'opacity':'0'},1500);
            $('#trailer2 li').eq(a2).css({'opacity':'0'}).stop().animate({'opacity':'1'},1500);



    },5000);

    let a3 = 0;
    setInterval(function(){

            a3++;
            if(a3==3)a3=0;

            $('#trailer3 li').eq(a3-1).css({'opacity':'1'}).stop().animate({'opacity':'0'},700);
            $('#trailer3 li').eq(a3).css({'opacity':'0'}).stop().animate({'opacity':'1'},700);

    },5000);





        // 팝업 설정
    $('.popup i').click(function(){

        $('.popup').css({'display':'none'})
                        
        // 팝업은 opacity 안 됨. 다른 애들이 영향 받기 때문에
    });


    $('.road .roadtxt div:nth-child(1) a:nth-child(2)').click(function(e){
            e.preventDefault()

            $('.popup').css({'display':'block'})
            $('.popup div').removeClass('on')
            $('.popup div:nth-child(1)').addClass('on')
    });

    $('.road .roadtxt div:nth-child(1) a:nth-child(3)').click(function(e){
            e.preventDefault()

            $('.popup').css({'display':'block'})
            $('.popup div').removeClass('on')
            $('.popup div:nth-child(2)').addClass('on')
    });

    $('.road .roadtxt div:nth-child(2) a').click(function(e){
            e.preventDefault()

            $('.popup').css({'display':'block'})
            $('.popup div').removeClass('on')
            $('.popup div:nth-child(3)').addClass('on')
    });




})