$(document).ready(function(){

    /* 해야 할 것
    1. 인트로에서 재생 버튼 누르면 플레이어 안으로 확대되어 들어가기
    2. 메인/프로필에서 마우스 따라다니는 원 만들어서 다른 사진 보여주기
    3. 프로필에서 잔나비/인스타그램/유튜브 클릭하면 바로가기 팝업 뜨기
    4. - song에서 스탑/플레이 버튼에 맞게 노래 재생/멈춤
        - lp 안에 트랙리스트 누르면 노래 바뀌게
        - prev, next 버튼 누르면 이전/다음 lp로 바뀌게
    5. - photo에서 카메라 셔터 누르면 photo002에 on값 생기게
        - 스크롤 할 때마다 사진들 날아오게
    6. - 아카이브에서 메뉴 누르면 article에 on값 생기게
        - lyrics에서 이전/다음 버튼 누르면 .lyric .txt ul에 on값 생기게
        - video 영상 바뀌게/멈추게
    */



        $(window).mousemove(function(e){

            let x = e.pageX
            let y = e.pageY
    
            $('.cursorF').css({'left':x,'top':y})
    
        })







}); // 끝