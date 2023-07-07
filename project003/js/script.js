$(document).ready(function(){

    /* 해야 할 것
    1. 인트로에서 재생 버튼 누르면 플레이어 안으로 확대되어 들어가기
    2. 메인/프로필에서 마우스 따라다니는 원 만들어서 다른 사진 보여주기
    3. - 프로필에서 잔나비/인스타그램/유튜브 클릭하면 바로가기 팝업 뜨기
        - 프로필에서 클릭 가능한 영역(a링크)에 들어가면 커서 색 바뀌게
    4. - song에서 스탑/플레이 버튼에 맞게 노래 재생/멈춤
        - lp 안에 트랙리스트 누르면 노래 바뀌게
        - prev, next 버튼 누르면 이전/다음 lp로 바뀌게
    5. - photo에서 카메라 셔터 누르면 photo002에 on값 생기게
        - 스크롤 할 때마다 사진들 날아오게
    6. - 아카이브에서 메뉴 누르면 article에 on값 생기게
        - lyrics에서 이전/다음 버튼 누르면 .lyric .txt ul에 on값 생기게
        - video 영상 바뀌게/멈추게
    */

        // intro에서 재생버튼 누르면 intro는 커져서 없어지고 index002가 100%되게
        $('.intro div span').click(function(){
            $('.intro').css({'transform':'scale(3.0)','z-index':0,'top':'20%'})
            $('.index002').css({'width':'100vw','height':'100vh','left':'0','transform':'scale(1.0)','z-index':1})
        });

        // index002에서 .back_2>div:nth-child(5)에 호버하면 6도 움직이게
        $('.back_2>div:nth-child(5)').mouseenter(function(){
            $(this).addClass('on')
            $('.back_2>div:nth-child(4)').addClass('on')
            $('.back_2>div:nth-child(6)').css({'transform':'rotate(360deg)'})
        });
        $('.back_2>div:nth-child(5)').mouseleave(function(){
            $(this).removeClass('on')
            $('.back_2>div:nth-child(4)').removeClass('on')
            $('.back_2>div:nth-child(6)').css({'transform':'rotate(0)'})
        });
        // .back>div:nth-child(2)에 호버하면 3이 위로
        $('.back>div:nth-child(2)').mouseenter(function(){
            $('.back>div:nth-child(3)').addClass('on')
        })
        $('.back>div:nth-child(2)').mouseleave(function(){
            $('.back>div:nth-child(3)').removeClass('on')
        })

        // index002에서 폴라로이드에 마우스엔터하면 글자들 움직여라
        $('.main_jh>div:nth-child(5)').mouseenter(function(){
            $('.txtArt>div').eq(0).addClass('left')
            $('.txtArt>div').eq(2).addClass('left')
            $('.txtArt>div').eq(4).addClass('left')
            $('.txtArt>div').eq(6).addClass('left')
            $('.txtArt>div').eq(8).addClass('left')
            $('.txtArt>div').eq(10).addClass('left')
            $('.txtArt>div').eq(12).addClass('left')

            $('.txtArt>div').eq(1).addClass('right')
            $('.txtArt>div').eq(3).addClass('right')
            $('.txtArt>div').eq(5).addClass('right')
            $('.txtArt>div').eq(7).addClass('right')
            $('.txtArt>div').eq(9).addClass('right')
            $('.txtArt>div').eq(11).addClass('right')
        });
        $('.main_jh>div:nth-child(5)').mouseleave(function(){
            $('.txtArt>div').removeClass('left')
            $('.txtArt>div').removeClass('right')
        })


        // .cursorF가 마우스를 따라다녀라(프로필 영역)
        $(window).mousemove(function(e){

            let x = e.pageX
            let y = e.pageY
    
            $('.cursorF').css({'left':x,'top':y})
            $('.cursorP').css({'left':x,'top':y})
    
        });

    

        // song에서 prev버튼을 누르면 이전 div에 on, next를 누르면 다음 div에 on
            // addClass 사용
            // let lp = 0;
            // $('.song .lp>div>div:nth-child(3) span').eq(1).click(function(){

            //     lp++;
            //     if(lp==5)lp=0;

            //     $('.song .lp>div').removeClass('on')
            //     $('.song .lp>div').eq(lp).addClass('on')

            //     console.log(lp)
            // });

            // $('.song .lp>div>div:nth-child(3) span').eq(0).click(function(){

            //     lp--;
            //     if(lp==-1)lp=4;

            //     $('.song .lp>div').removeClass('on')
            //     $('.song .lp>div').eq(lp).addClass('on')

            //     console.log(lp)
            // });

            $('.song .lp>div:nth-child(1)>div:nth-child(3) span').eq(0).click(function(){
                $('.song .lp>div').removeClass('on')
                $('.song').removeClass('js')
                $('.song').removeClass('hn')
                $('.song').removeClass('mh')
                $('.song').removeClass('soone')
                $('.song').addClass('sotwo')
                $('.song .lp>div').eq(4).addClass('on')
                // 헤더 색 변경
                $('.sub2_header').css({'border-color':'#1C311E'})
                $('.sub2_header>ul>li:nth-child(1)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #1C311E'})
                $('.sub2_header>ul>li:nth-child(2)>ul>li>a').css({'color':'#1C311E','-webkit-text-stroke': '1px #1C311E'})
                $('.sub2_header>ul>li:nth-child(3)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #1C311E'})
                // 엘피 트랙리스트 색 변경
                $('.song .lp>div>div:nth-child(1) ul li').css({'color':'#272424'})
                $('.song .lp>div>div:nth-child(1) ul li b').css({'color':'#272424'})
            });
            $('.song .lp>div:nth-child(1)>div:nth-child(3) span').eq(1).click(function(){
                $('.song .lp>div').removeClass('on')
                $('.song').removeClass('sotwo')
                $('.song').removeClass('hn')
                $('.song').removeClass('mh')
                $('.song').removeClass('soone')
                $('.song').addClass('js')
                $('.song .lp>div').eq(1).addClass('on')
                // 헤더 색 변경
                $('.sub2_header').css({'border-color':'#DE8F01'})
                $('.sub2_header>ul>li:nth-child(1)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #DE8F01'})
                $('.sub2_header>ul>li:nth-child(2)>ul>li>a').css({'color':'#DE8F01','-webkit-text-stroke': '1px #DE8F01'})
                $('.sub2_header>ul>li:nth-child(3)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #DE8F01'})
                // 엘피 트랙리스트 색 변경
                $('.song .lp>div>div:nth-child(1) ul li').css({'color':'#fff'})
                $('.song .lp>div>div:nth-child(1) ul li b').css({'color':'#FBD733'})
            });
            $('.song .lp>div:nth-child(2)>div:nth-child(3) span').eq(0).click(function(){
                $('.song .lp>div').removeClass('on')
                $('.song').removeClass('js')
                $('.song').removeClass('hn')
                $('.song').removeClass('sotwo')
                $('.song').removeClass('soone')
                $('.song').addClass('mh')
                $('.song .lp>div').eq(0).addClass('on')
                // 헤더 색 변경
                $('.sub2_header').css({'border-color':'#1C311E'})
                $('.sub2_header>ul>li:nth-child(1)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #1C311E'})
                $('.sub2_header>ul>li:nth-child(2)>ul>li>a').css({'color':'#1C311E','-webkit-text-stroke': '1px #1C311E'})
                $('.sub2_header>ul>li:nth-child(3)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #1C311E'})
                // 엘피 트랙리스트 색 변경
                $('.song .lp>div>div:nth-child(1) ul li').css({'color':'#272424'})
                $('.song .lp>div>div:nth-child(1) ul li b').css({'color':'#272424'})
            });
            $('.song .lp>div:nth-child(2)>div:nth-child(3) span').eq(1).click(function(){
                $('.song .lp>div').removeClass('on')
                $('.song').removeClass('js')
                $('.song').removeClass('hn')
                $('.song').removeClass('mh')
                $('.song').removeClass('sotwo')
                $('.song').addClass('soone')
                $('.song .lp>div').eq(2).addClass('on')
                // 헤더 색 변경
                $('.sub2_header').css({'border-color':'#003A90'})
                $('.sub2_header>ul>li:nth-child(1)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #003A90'})
                $('.sub2_header>ul>li:nth-child(2)>ul>li>a').css({'color':'#003A90','-webkit-text-stroke': '1px #003A90'})
                $('.sub2_header>ul>li:nth-child(3)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #003A90'})
                // 엘피 트랙리스트 색 변경
                $('.song .lp>div>div:nth-child(1) ul li').css({'color':'#272424'})
                $('.song .lp>div>div:nth-child(1) ul li b').css({'color':'#272424'})
            });
            $('.song .lp>div:nth-child(3)>div:nth-child(3) span').eq(0).click(function(){
                $('.song .lp>div').removeClass('on')
                $('.song').removeClass('sotwo')
                $('.song').removeClass('hn')
                $('.song').removeClass('mh')
                $('.song').removeClass('soone')
                $('.song').addClass('js')
                $('.song .lp>div').eq(1).addClass('on')
                // 헤더 색 변경
                $('.sub2_header').css({'border-color':'#DE8F01'})
                $('.sub2_header>ul>li:nth-child(1)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #DE8F01'})
                $('.sub2_header>ul>li:nth-child(2)>ul>li>a').css({'color':'#DE8F01','-webkit-text-stroke': '1px #DE8F01'})
                $('.sub2_header>ul>li:nth-child(3)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #DE8F01'})
                // 엘피 트랙리스트 색 변경
                $('.song .lp>div>div:nth-child(1) ul li').css({'color':'#fff'})
                $('.song .lp>div>div:nth-child(1) ul li b').css({'color':'#FBD733'})
            });
            $('.song .lp>div:nth-child(3)>div:nth-child(3) span').eq(1).click(function(){
                $('.song .lp>div').removeClass('on')
                $('.song').removeClass('js')
                $('.song').removeClass('sotwo')
                $('.song').removeClass('mh')
                $('.song').removeClass('soone')
                $('.song').addClass('hn')
                $('.song .lp>div').eq(3).addClass('on')
                // 헤더 색 변경
                $('.sub2_header').css({'border-color':'#AE2C34'})
                $('.sub2_header>ul>li:nth-child(1)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #AE2C34'})
                $('.sub2_header>ul>li:nth-child(2)>ul>li>a').css({'color':'#AE2C34','-webkit-text-stroke': '1px #AE2C34'})
                $('.sub2_header>ul>li:nth-child(3)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #AE2C34'})
                // 엘피 트랙리스트 색 변경
                $('.song .lp>div>div:nth-child(1) ul li').css({'color':'#fff'})
                $('.song .lp>div>div:nth-child(1) ul li b').css({'color':'#fff'})
            });
            $('.song .lp>div:nth-child(4)>div:nth-child(3) span').eq(0).click(function(){
                $('.song .lp>div').removeClass('on')
                $('.song').removeClass('js')
                $('.song').removeClass('hn')
                $('.song').removeClass('mh')
                $('.song').removeClass('sotwo')
                $('.song').addClass('soone')
                $('.song .lp>div').eq(2).addClass('on')
                // 헤더 색 변경
                $('.sub2_header').css({'border-color':'#003A90'})
                $('.sub2_header>ul>li:nth-child(1)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #003A90'})
                $('.sub2_header>ul>li:nth-child(2)>ul>li>a').css({'color':'#003A90','-webkit-text-stroke': '1px #003A90'})
                $('.sub2_header>ul>li:nth-child(3)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #003A90'})
                // 엘피 트랙리스트 색 변경
                $('.song .lp>div>div:nth-child(1) ul li').css({'color':'#272424'})
                $('.song .lp>div>div:nth-child(1) ul li b').css({'color':'#272424'})
            });
            $('.song .lp>div:nth-child(4)>div:nth-child(3) span').eq(1).click(function(){
                $('.song .lp>div').removeClass('on')
                $('.song').removeClass('js')
                $('.song').removeClass('hn')
                $('.song').removeClass('mh')
                $('.song').removeClass('soone')
                $('.song').addClass('sotwo')
                $('.song .lp>div').eq(4).addClass('on')
                // 헤더 색 변경
                $('.sub2_header').css({'border-color':'#1C311E'})
                $('.sub2_header>ul>li:nth-child(1)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #1C311E'})
                $('.sub2_header>ul>li:nth-child(2)>ul>li>a').css({'color':'#1C311E','-webkit-text-stroke': '1px #1C311E'})
                $('.sub2_header>ul>li:nth-child(3)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #1C311E'})
                // 엘피 트랙리스트 색 변경
                $('.song .lp>div>div:nth-child(1) ul li').css({'color':'#272424'})
                $('.song .lp>div>div:nth-child(1) ul li b').css({'color':'#272424'})
            });
            $('.song .lp>div:nth-child(5)>div:nth-child(3) span').eq(0).click(function(){
                $('.song .lp>div').removeClass('on')
                $('.song').removeClass('js')
                $('.song').removeClass('sotwo')
                $('.song').removeClass('mh')
                $('.song').removeClass('soone')
                $('.song').addClass('hn')
                $('.song .lp>div').eq(3).addClass('on')
                // 헤더 색 변경
                $('.sub2_header').css({'border-color':'#AE2C34'})
                $('.sub2_header>ul>li:nth-child(1)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #AE2C34'})
                $('.sub2_header>ul>li:nth-child(2)>ul>li>a').css({'color':'#AE2C34','-webkit-text-stroke': '1px #AE2C34'})
                $('.sub2_header>ul>li:nth-child(3)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #AE2C34'})
                // 엘피 트랙리스트 색 변경
                $('.song .lp>div>div:nth-child(1) ul li').css({'color':'#fff'})
                $('.song .lp>div>div:nth-child(1) ul li b').css({'color':'#fff'})
            });
            $('.song .lp>div:nth-child(5)>div:nth-child(3) span').eq(1).click(function(){
                $('.song .lp>div').removeClass('on')
                $('.song').removeClass('js')
                $('.song').removeClass('hn')
                $('.song').removeClass('sotwo')
                $('.song').removeClass('soone')
                $('.song').addClass('mh')
                $('.song .lp>div').eq(0).addClass('on')
                // 헤더 색 변경
                $('.sub2_header').css({'border-color':'#1C311E'})
                $('.sub2_header>ul>li:nth-child(1)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #1C311E'})
                $('.sub2_header>ul>li:nth-child(2)>ul>li>a').css({'color':'#1C311E','-webkit-text-stroke': '1px #1C311E'})
                $('.sub2_header>ul>li:nth-child(3)>ul>li>a').css({'color':'#fff','-webkit-text-stroke': '2px #1C311E'})
                // 엘피 트랙리스트 색 변경
                $('.song .lp>div>div:nth-child(1) ul li').css({'color':'#272424'})
                $('.song .lp>div>div:nth-child(1) ul li b').css({'color':'#272424'})
            });
            
        // song에서 스탑/플레이버튼을 누르면 lp회전이 멈추고 재생
            // addClass사용
            let play = 0;
            $('.song .stic>div:nth-child(2)').click(function(){

                play++;
                if(play==2)play=0;

                console.log(play)

                $('.song .stic>div>div').removeClass('on')
                $('.song .stic>div>div').eq(play-1).addClass('on')

                // 1 정지 0 재생

                if(play==1){
                    $('.song .lp>div.on>div:nth-child(1)').addClass('on')
                    }
                if(play==0){
                    $('.song .lp>div.on>div:nth-child(1)').removeClass('on')
                    }

                $('.song .lp>div:nth-child(1)>div:nth-child(3) span').eq(0).click(function(){
                    // 플레이버튼으로 리셋
                    $('.song .stic>div>div').removeClass('on')
                    $('.song .stic>div>div').eq(1).addClass('on')
                    $('.song .lp>div.on>div:nth-child(1)').removeClass('on')
                    play==1;
                });
                $('.song .lp>div:nth-child(1)>div:nth-child(3) span').eq(1).click(function(){
                    // 플레이버튼으로 리셋
                    $('.song .stic>div>div').removeClass('on')
                    $('.song .stic>div>div').eq(1).addClass('on')
                    $('.song .lp>div.on>div:nth-child(1)').removeClass('on')
                    play==1;
                });
                $('.song .lp>div:nth-child(2)>div:nth-child(3) span').eq(0).click(function(){
                    // 플레이버튼으로 리셋
                    $('.song .stic>div>div').removeClass('on')
                    $('.song .stic>div>div').eq(1).addClass('on')
                    $('.song .lp>div.on>div:nth-child(1)').removeClass('on')
                    play==1;
                });
                $('.song .lp>div:nth-child(2)>div:nth-child(3) span').eq(1).click(function(){
                    // 플레이버튼으로 리셋
                    $('.song .stic>div>div').removeClass('on')
                    $('.song .stic>div>div').eq(1).addClass('on')
                    $('.song .lp>div.on>div:nth-child(1)').removeClass('on')
                    play==1;
                });
                $('.song .lp>div:nth-child(3)>div:nth-child(3) span').eq(0).click(function(){
                    // 플레이버튼으로 리셋
                    $('.song .stic>div>div').removeClass('on')
                    $('.song .stic>div>div').eq(1).addClass('on')
                    $('.song .lp>div.on>div:nth-child(1)').removeClass('on')
                    play==1;
                });
                $('.song .lp>div:nth-child(3)>div:nth-child(3) span').eq(1).click(function(){
                    // 플레이버튼으로 리셋
                    $('.song .stic>div>div').removeClass('on')
                    $('.song .stic>div>div').eq(1).addClass('on')
                    $('.song .lp>div.on>div:nth-child(1)').removeClass('on')
                    play==1;
                });
                $('.song .lp>div:nth-child(4)>div:nth-child(3) span').eq(0).click(function(){
                    // 플레이버튼으로 리셋
                    $('.song .stic>div>div').removeClass('on')
                    $('.song .stic>div>div').eq(1).addClass('on')
                    $('.song .lp>div.on>div:nth-child(1)').removeClass('on')
                    play==1;
                });
                $('.song .lp>div:nth-child(4)>div:nth-child(3) span').eq(1).click(function(){
                    // 플레이버튼으로 리셋
                    $('.song .stic>div>div').removeClass('on')
                    $('.song .stic>div>div').eq(1).addClass('on')
                    $('.song .lp>div.on>div:nth-child(1)').removeClass('on')
                    play==1;
                });
                $('.song .lp>div:nth-child(5)>div:nth-child(3) span').eq(0).click(function(){
                    // 플레이버튼으로 리셋
                    $('.song .stic>div>div').removeClass('on')
                    $('.song .stic>div>div').eq(1).addClass('on')
                    $('.song .lp>div.on>div:nth-child(1)').removeClass('on')
                    play==1;
                });
                $('.song .lp>div:nth-child(5)>div:nth-child(3) span').eq(1).click(function(){
                    // 플레이버튼으로 리셋
                    $('.song .stic>div>div').removeClass('on')
                    $('.song .stic>div>div').eq(1).addClass('on')
                    $('.song .lp>div.on>div:nth-child(1)').removeClass('on')
                    play==1;
                });

                if(play==1){
                    $('.song .lp>div.on>div:nth-child(1)').addClass('on')
                    }
                if(play==0){
                    $('.song .lp>div.on>div:nth-child(1)').removeClass('on')
                    }

            });

        

        // photo에서 카메라 셔터 누르면 photo002에 on값 생기게 & photo002에서 위로 마우스휠 하면 photo001 나오게
            $('.photo001 .cam>div:nth-child(1)').click(function(){
                $('.photo article').removeClass('on')
                $('.photo article').eq(1).addClass('on')
                // .photo002>div:nth-child(1) {width: 15%;
                //     position: fixed;
                //     right: 15%;
                //     top: 20%;}
                // .photo002>div:nth-child(2) {width: 17%;
                //     position: fixed;
                //     right: 28%;
                //     top: 6%;}
                // .photo002>div:nth-child(3) {width: 14%;
                //     position: fixed;
                //     left: 27.5%;
                //     top: 2%;}
                // .photo002>div:nth-child(4) {width: 14%;
                //     position: fixed;
                //     left: 15%;
                //     top: 18%;}
                // .photo002>div:nth-child(5) {width: 17%;
                //     position: fixed;
                //     left: 23%;
                //     bottom: 4%;}
                // .photo002>div:nth-child(6) {width: 17%;
                //     position: fixed;
                //     left: 40%;
                //     top: 25%;}
                // .photo002>div:nth-child(7) {width: 30%;
                //     position: fixed;
                //     right: 17%;
                //     bottom: 7%;}
                $('.photo002>div:nth-child(1)').stop().animate({'right':'15%'},2200)
                $('.photo002>div:nth-child(2)').stop().animate({'top':'6%'},2200)
                $('.photo002>div:nth-child(3)').stop().animate({'top':'2%'},2200)
                $('.photo002>div:nth-child(4)').stop().animate({'left':'15%'},2200)
                $('.photo002>div:nth-child(5)').stop().animate({'bottom':'4%'},2200)
                $('.photo002>div:nth-child(6)').stop().animate({'top':'24%'},2200)
                $('.photo002>div:nth-child(7)').stop().animate({'right':'12%'},2200)
                $('.photo002>div:nth-child(17)').stop().animate({'opacity':'1','right':'5%'},2200)
            });

            // .photo002>div:nth-child(17) 클릭하면 article.ep(0)에 addClass
            $('.photo002>div:nth-child(17)').click(function(){
                $('.photo article').removeClass('on')
                $('.photo article').eq(0).addClass('on')
            })

        // photo002에서 마우스 휠 하면 사진들 하나씩 날아오게
            $('.photo .photo002').mousewheel(function(event,delta){
                if(delta>0){
                    $('.photo002>div:nth-child(8)').stop().animate({'top':'-50%'},2000)
                    $('.photo002>div:nth-child(9)').stop().animate({'top':'-100%'},2000)
                    $('.photo002>div:nth-child(10)').stop().animate({'top':'-50%'},2000)
                    $('.photo002>div:nth-child(11)').stop().animate({'left':'-50%','top':'-50%'},2000)
                    $('.photo002>div:nth-child(12)').stop().animate({'bottom':'-50%'},2000)
                    $('.photo002>div:nth-child(13)').stop().animate({'bottom':'-100%'},2000)
                    $('.photo002>div:nth-child(14)').stop().animate({'right':'-50%','bottom':'-50%'},2000)
                    $('.photo002>div:nth-child(15)').stop().animate({'left':'-100%'},2000)
                    $('.photo002>div:nth-child(16)').stop().animate({'right':'-50%'},2000)
                }
                    // .photo002>div:nth-child(8) {width: 15%;
                    //     position: fixed;
                    //     right: 11%;
                    //     top: 4%;}
                    // .photo002>div:nth-child(9) {width: 15%;
                    //     position: fixed;
                    //     right: 24%;
                    //     top: 18%;}
                    // .photo002>div:nth-child(10) {width: 15%;
                    //     position: fixed;
                    //     right: 37%;
                    //     top: 10%;}
                    // .photo002>div:nth-child(11) {width: 15%;
                    //     position: fixed;
                    //     left: 18%;
                    //     top: 8%;}
                    // .photo002>div:nth-child(12) {width: 23%;
                    //     position: fixed;
                    //     left: 12%;
                    //     bottom: 5%;}
                    // .photo002>div:nth-child(13) {width: 17%;
                    //     position: fixed;
                    //     right: 40%;
                    //     bottom: 4%;}
                    // .photo002>div:nth-child(14) {width: 15%;
                    //     position: fixed;
                    //     right: 17%;
                    //     bottom: 6%;}
                    // .photo002>div:nth-child(15) {width: 20%;
                    //     position: fixed;
                    //     left: 30%;
                    //     top: 20%;}
                    // .photo002>div:nth-child(16) {width: 20%;
                    //     position: fixed;
                    //     right: 5%;
                    //     bottom: 3%;}     
                if(delta<0){
                    $('.photo002>div:nth-child(8)').stop().animate({'top':'4%'},2000)
                    $('.photo002>div:nth-child(9)').stop().animate({'top':'18%'},2000)
                    $('.photo002>div:nth-child(10)').stop().animate({'top':'10%'},2000)
                    $('.photo002>div:nth-child(11)').stop().animate({'left':'18%','top':'8%'},2000)
                    $('.photo002>div:nth-child(12)').stop().animate({'bottom':'5%'},2000)
                    $('.photo002>div:nth-child(13)').stop().animate({'bottom':'4%'},2000)
                    $('.photo002>div:nth-child(14)').stop().animate({'right':'17%','bottom':'6%'},2000)
                    $('.photo002>div:nth-child(15)').stop().animate({'left':'30%'},2000)
                    $('.photo002>div:nth-child(16)').stop().animate({'right':'5%'},2000)
                }
            });

        

        // archive에서 menu에 클릭한 본인만 색이 바뀌어라
            $('.menu ul li').click(function(){
                $('.menu ul li').removeClass('on')
                $(this).addClass('on')

                let arc = $(this).index();
                $('.archive article').removeClass('on')
                $('.archive article').eq(arc+1).addClass('on')

            });

        // archive-concert 스크롤 하면 포스터가 앞뒤로 움직이게
        // $(window).scroll(function(){

        //     let sc = $(this).scrollLeft()

        //     console.log(sc)

        // })



        $('.archive .concert').mousewheel(function(event, delta){
            
            let sc = $(this).scrollLeft()
            console.log(sc)
            this.scrollLeft -= (delta*40);
            
        });

        // lyric에서 버튼을 누르면 이전/다음 가사로 바뀌어라
            let lyric = 0;
            // 이전
            $('.archive .lyric .frame div:nth-child(2) li').eq(0).click(function(){
                
                lyric--;
                if(lyric==-1)lyric=5;
                $('.archive .lyric .txt ul').removeClass('on')
                $('.archive .lyric .txt ul').eq(lyric).addClass('on')
            })
            // 다음
            $('.archive .lyric .frame div:nth-child(2) li').eq(1).click(function(){
                lyric++;
                if(lyric==6)lyric=0;
                $('.archive .lyric .txt ul').removeClass('on')
                $('.archive .lyric .txt ul').eq(lyric).addClass('on')
            })


        // profile에서 클릭 가능한 영역에 들어가면 cursorF 보더가 바뀌게
        $('.profile .txt span:nth-child(2) span').mouseenter(function(){
            $('.cursorF').addClass('on')
        });
        $('.profile .txt span:nth-child(2) span').mouseleave(function(){
            $('.cursorF').removeClass('on')
        });
        $('.sub1_header>ul>li>ul>li>a').mouseenter(function(){
            $('.cursorF').addClass('in')
        });
        $('.sub1_header>ul>li>ul>li>a').mouseleave(function(){
            $('.cursorF').removeClass('in')
        });
        $('#profile .btn').mouseenter(function(){
            $('.cursorF').addClass('out')
        });
        $('#profile .btn').mouseleave(function(){
            $('.cursorF').removeClass('out')
        });
        $('.profile .img>div:nth-child(3)').mouseenter(function(){
            $('.cursorF').addClass('big')
        });
        $('.profile .img>div:nth-child(3)').mouseleave(function(){
            $('.cursorF').removeClass('big')
        });
            // 팝업영역에서 보더값 사라지게
        $('.profile .popUp>div').mouseenter(function(){
            $('.cursorF').addClass('out')
        });
        $('.profile .popUp>div').mouseleave(function(){
            $('.cursorF').removeClass('out')
        });
        
        // .profile .txt>span:nth-child(2) span 세 개 중에 하나 누르면 팝업이 나타나게
        $('.profile .txt .jan').click(function(){
            $('.profile .popUp').addClass('on')
            $('.popUp>div').removeClass('on')
            $('.popUp>div').eq(0).addClass('on')
        });
        $('.profile .txt .insta').click(function(){
            $('.profile .popUp').addClass('on')
            $('.popUp>div').removeClass('on')
            $('.popUp>div').eq(1).addClass('on')
        });
        $('.profile .txt .you').click(function(){
            $('.profile .popUp').addClass('on')
            $('.popUp>div').removeClass('on')
            $('.popUp>div').eq(2).addClass('on')
        });
        $('.popUp .close').click(function(){
            
            $('.popUp>div').removeClass('on')
            $('.profile .popUp').removeClass('on')
        });


        // .video에서 .archive .video .frame 의 .prev/.next 누를 때마다 영상 바뀌게
        let v = 0;
        $('.video .frame .prev').click(function(){
            v--;
            if(v==-1)v=4;

            $('.video .vid>div').removeClass('on')
            $('.video .vid>div').eq(v).addClass('on')
        });
        $('.video .frame .next').click(function(){
            v++;
            if(v==5)v=0;
            
            $('.video .vid>div').removeClass('on')
            $('.video .vid>div').eq(v).addClass('on')
        });



        // .video에서 .play 누를 때마다 멈췄다가 재생
        let vid = 0;
        $('.video .frame .btn').click(function(){
            
            vid++;
            if(vid==2)vid=0;

            console.log(vid)
            
            if(vid==1){
                $('.vid>div.on video').get(0).play()
                $('.video .frame .btn img').removeClass('on')
                $('.video .frame .btn img').eq(1).addClass('on')
            }
            if(vid==0){
                $('.vid>div.on video').get(0).pause()
                $('.video .frame .btn img').removeClass('on')
                $('.video .frame .btn img').eq(0).addClass('on')
            }
            
        });


}); // 끝