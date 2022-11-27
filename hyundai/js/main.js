$(function(){
    $('.kor').click(function(){
        $('.lang_list').show();
    });
    $('.lang_list').mouseleave(function(){
        $('.lang_list').hide();
    });

    $('.gnb').mouseover(function(){
        $('#header').addClass('on');
        $('.gnb_bg,.depth2').stop().slideDown(200);
    });
    $('.gnb').mouseleave(function(){
        $('#header').removeClass('on');
        $('.gnb_bg,.depth2').stop().slideUp(200);
    });

    // 동영상 슬라이드
    const swiper1 = new Swiper('.video_slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView:1,
      slidesPerGroup:1,
      // slide:3,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    
      // Navigation arrows
          navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
    //---채용인재
    const secSwiper = new Swiper('.new_slide2', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView:2,
      slidesPerGroup:2,
      // slide:3,
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type:'fraction',
        
      },
      
      
      // Navigation arrows
          navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
      const thiSwiper = new Swiper('.new_slide', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView:3,
        slidesPerGroup:3,
        loop: true,
        //slide:3,
        
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type:'fraction'
        },
        
        
        // Navigation arrows
            navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      // 스크롤바 구현
      $('.btn_scroll').click(function(){
        console.log('클릭')
        let sect1Loc = $('.section1').offset().top;
        console.log(sect1Loc);
        $('body,html').animate({'scrollTop':sect1Loc});
      });

    // section1 아이콘 hover 구현
    $('.section1 ul li').mouseover(function(){
        $(this).addClass('on').siblings().find('a').css({'filter':'brightness(60%)'});
    });
    $('.section1 ul li').mouseleave(function(){
        $(this).removeClass('on').siblings().find('a').css({'filter':'brightness(100%)'});
    });

    // section1 배경박스 보이게하기
    $(window).scroll(function (){ 
        var scrollValue = $(document).scrollTop(); 
        console.log(scrollValue);

        if(scrollValue >= 300){
            $('.section1 .bg').animate({
                left: '100%'
            },1000);
            $('.section1 .mask').animate({
                left: '100%'
            },1000);
        };
        if(scrollValue >= 700){
            $('.imgbox>.bg').animate({
                left: '100%'
            },1000);
            $('.imgbox>.mask').animate({
                left: '100%'
            },1000);
        }
    });
    // $(window).scroll(function(){
    //     let pos = $(window).scrollTop();
    //     console.log(pos);
    // // .section1_wrap 위치 찾기
    // let sec1 = $('.section1_wrap').offset().top;
    // console.log(sec1);    

    // if(sec1 <= pos+600){
    //     $('.section1_wrap').addClass('on');
    // }  
    // });

    // 공지사항 오른쪽 슬라이드
    // const myswiper2 = new Swiper('.news_slider', {
    //     // Optional parameters
    //     direction: 'horizontal',
    //     loop: true,
    //     slidesPerView: 3,
    //     slidesPerGroup: 3,
      
    //     // If we need pagination
    //     pagination: {
    //       el: '.swiper-pagination',
    //       type: 'fraction'
    //     },
      
    //     // Navigation arrows
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
      
    //     // And if we need scrollbar
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //     },
    //   });

      //패밀리사이트
      $('.family').click(function(){
        $('.family>a').toggleClass('on')
        $('.family>div').slideToggle()
 
      });
})