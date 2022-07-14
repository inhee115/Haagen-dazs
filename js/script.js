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

    });


    //banner line animation
    $('.menu li a').mouseenter(function(){
        $(this).children('.menu-line').addClass('active');
    });
    $('.menu li a').mouseleave(function(){
        $(this).children('.menu-line').removeClass('active');
    });


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


    //sec-1 background
    $('.sec-1 .slide').hover(function(){
        $(this).children('.background::before').css({'opacity':'1'})
    });


    //760이하 menu 튀어나오기
    $('.menu-btn').click(function(){
        $('.menu-m').slideToggle();
        $(this).toggleClass('active');
        $('.menu-box-m').toggleClass('on');
    });




}); //end
