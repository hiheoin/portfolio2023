$(document).ready(function(){

    // .hal>div:nth-child(2)>div:nth-child(2) i:nth-child(2)를 클릭하면 다음 사진, .hal>div:nth-child(2)>div:nth-child(2) i:nth-child(1)를 클릭하면 이전 사진으로
    $('.hal>div:nth-child(2)>div:nth-child(2) i').click(function(){
        let hal = $(this).index()

        console.log(hal)

        $('.hal>div:nth-child(2)>div:nth-child(1) img').removeClass('on')
        $('.hal>div:nth-child(2)>div:nth-child(1) img').eq(hal).addClass('on')

    });

    








}); //끝