$(function(){
    $('.lang').click(function(){
        $('.eng').slideToggle();
    });

    $('.gnb>li').mouseover(function(){
        $('.depthbg,.depth2').stop().slideDown();
    });
    $('.gnb>li').mouseleave(function(){
        $('.depthbg,.depth2').stop().slideUp();
    });

    // 메인 슬라이드
    var swiper = new Swiper('.swiper',{
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        touchRatio:0,
        autoplay: {//자동슬라이드 (false-비활성화)          
            delay: 5000, // 시간 설정          
            disableOnInteraction: false, // false-스와이프 후 자동 재생},
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true, // 버튼 클릭 여부
        },
        loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보이지 않는 현상 수정
        effect : 'fade',
        on : {
            slideNextTransitionStart : function() {
                $('.swiper-slide .box_wrap').removeClass('on');
                $('.swiper-slide-active .box_wrap').addClass('on');
            }
        }
    });
    // 모바일 메뉴
    $('.mbtn').click(function(){
        $('.mbtn').toggleClass('active');
        $('.mgnbList').toggleClass('on');
        $('.mdep1').removeClass('on');
        $('.mdep2').slideUp();
    });
    $('.mdep2').hide();
    $('.mdep1').click(function(){
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).find('div').slideToggle();
        $(this).siblings().find('div').slideUp();
    });
      // intro hover
      $('.txt').mouseenter(function(){
        $(this).stop().addClass('on');
    });
    $('.txt').mouseleave(function(){
        $(this).stop().removeClass('on');
    })
      // 애니메이션
      $(window).scroll(function (){ 
        var scrollValue = $(document).scrollTop(); 
        console.log(scrollValue);

        if(scrollValue >= 500){
            $('.square2').addClass('on')
            $('.go_top').addClass('on');
        }else{
            $('.go_top').removeClass('on');
        };
        if(scrollValue >= 1000){
            $('.square3').addClass('on')
        };
        $('.go_top').on('click', function () {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 500);
        });
    });
    // 패밀리사이트
    $('.family>ul').hide();
    $('.family>button').click(function(){
        $('.family>ul').slideToggle();
        $('.family>button').toggleClass('on');
    })
});
