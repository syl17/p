$(function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
      
        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      // // 아코디언 메뉴
      // $('.m_menu_list>li').click(function(){
      //   $(this).toggleClass('on');
      //   // $(this).siblings().removeClass('on');
      //   $(this).find('.depth2').slideToggle();
      //   $(this).siblings().find('.depth2').slideUp();
      // });
      // // 모바일 메뉴 클릭했을 때
      // $('.m_btn').click(function(){
      //   $('.m_menu_wrap').animate({'left':0},300);
      //   $('.cover').fadeIn(500);
      //   $('body').addClass('on');
      // });
      // $('.m_menu_close').click(function(){
      //   $('.m_menu_wrap').animate({'left':'-100%'},300);
      //   $('.cover').fadeOut(300);
      //   $('body').removeClass('on');
      // });

      $('.m_btn').click(function(){
        $('.m_menu_wrap').addClass('on');
        $('body').addClass('full');
        $('.cover').fadeIn();
    });

    $('.m_menu_close').click(function(){
        $('.m_menu_wrap').removeClass('on');
        $('body').removeClass('full');
        $('.cover').fadeOut();
        $('.depth2').slideUp();
        $('.m_menu_list>li').removeClass('atv');
    });

      $('.m_menu_list>li').click(function(){
        $(this).toggleClass('atv').siblings().removeClass('atv');
        $(this).find('.depth2').slideToggle();
        $(this).siblings().find('.depth2').slideUp();
      })
});