$(document).ready(function(){
    AOS.init();

    //sec-1, sec-6 swiper로 수정
    var swiper = new Swiper(".customSwiper", {
        slidesPerView:'auto',
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        speed: 3000,

        autoplay: {
            delay: 0,
            // pauseOnMouseEnter: true,
            disableOnInteraction: false,
            },

            on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
                });
        
                this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
                });
            }
        },



            
    });
    

    //sec-4 스와이퍼
    var swiper = new Swiper(".sec-4-swiper", {
        // slidesPerView: 2,
        // spaceBetween: 0,
        // slidesPerGroup: 2,

        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      


    var ww = $(window).width();
    var wh = $(window).height();

    //background color 변경
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        console.log(sct);

        if(sct < 100){
            $('.header').removeClass('active');
        }else{
            $('.header').addClass('active');
        }

        var sec2 = $('.sec-2').offset().top;
        var sec6 = $('.sec-6').offset().top;
        
        if(sct >= sec2 && sct < sec6){
            console.log('됨');
            $('#wrap').css({'background-color':'#F26A3F'});
        }else if(sct >= sec6){
            $('#wrap').css({'background-color':'#FFB7C4'})
        }else{
            $('#wrap').css({'background-color':''});
        }
        // else if(sec6 == 0){
        //     $('#wrap').css({'background-color':'#FFB7C4'})
        // }


        //쌤 - header 는 active 추가로
        //쌤 - 배경색 은 offset 값으로
        
        //header fixed
        // if(sct >= 200){
        //     $('.header').addClass('active');
        // }

        //배경 색 바꾸기
        // if(sct >= 2300 && sct < 6200){
        //     $('#wrap').css({'background-color':'#F26A3F'});
        // }else if(sct >= 6200){
        //     $('#wrap').css({'background-color':'#FFB7C4'});
        // }else{
        //     $('#wrap').css({'background-color':''});
        // }
        //menu line 200 이상에서 없애고싶은데 스크롤 이벤트 어떻게 해야할지



        // if(sct > 0){
        //     $('#wrap').css({'background-color':'#8E1F44'})
        // }else if(sct >= 2500 && sct < 4600){
        //     $('#wrap').css({'background-color':''})
        // }else if(sct >= 4600 && sct ){
        //     $('#wrap').css({'background-color':'#FFB7C4'})
        // }else if(sct > 5600){
        //     $('#wrap').css({'background-color':''})
        // }else if(sct > 7200){
        //     $('#wrap').css({'background-color':'#FFB7C4'})
        // }else{}
    });

    //banner line animation
    $('.menu li a').mouseenter(function(){
        $(this).children('.menu-line').addClass('active');
    });
    $('.menu li a').mouseleave(function(){
        $(this).children('.menu-line').removeClass('active');
    });

    //animate 호버 시 멈춤
    // $('.animate-wrap').mouseenter(function(){
    //     $('.animate-slider-box').css({'animation':'none'});
    // });
    // $('.animate-wrap').mouseleave(function(){
    //     $('.animate-slider-box').css({'animation':''});
    // });


    //card animation
    $('.card.box1').click(function(){
        $(this).addClass('active');
        $(this).siblings('.card.box2').addClass('on')
    });
    $('.card.box2').click(function(){
        $(this).removeClass('on')
        $(this).addClass('active');
        $(this).siblings('.card.box1').css({'z-index':'1'})
        $(this).siblings('.card.box3').addClass('on')
    });
    $('.card.box3').click(function(){
        $(this).siblings().removeClass('active')
        $(this).siblings('.card.box1').css({'z-index':''})
        $(this).removeClass('on')
    });

    //sec-3 animate
    // $('.sec-3 svg').mouseenter(function(){
    //     $(this).addClass('active');
    // });
    // $('.sec-3 svg').mouseleave(function(){
    //     $(this).removeClass('active');
    // });


    //sec-1 background
    $('.sec-1 .slide').hover(function(){
        $(this).children('.background::before').css({'opacity':'1'})
    });


    //sec-6 img-box
    // $('.sec-6 .slide').hover(function(){
    //     $(this).children('.img-box').css({
    //         'animation-name': 'slide',
    //         'animation-duration':'1s'})
    //     $(this).siblings().children('.img-box').css({
    //         'animation':'none'
    //     })
    // });
    // $('.sec-6 .slide').mouseenter(function(){
    //     $(this).children('.img-box').css({
    //         'animation':'none'
    //     })
    // });


    //760이하 menu 튀어나오기
    $('.menu-btn').click(function(){
        $('.menu-m').slideToggle();
        $(this).toggleClass('active');
        $('.menu-box-m').toggleClass('on');
    });




}); //end