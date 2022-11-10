$(function(){
    $('.visual').slick({
        autoplay: true,  
        dots:true  
      });
    
    $('.gnb>li').mouseover(function(){
      $('.depth2,.bg').stop().slideDown()
    }); $('.gnb>li').mouseleave(function(){
      $('.depth2,.bg').stop().slideUp()
    });

    // 탭메뉴
    $(".tab>li").click(function(){
      let num = $(this).index();
      console.log(num);
      $(".tab>li").removeClass("on");
      $(this).addClass("on");
  });


    //   $(".tab_manu li").click(function(){
    //     let num = $(this).index();
      
    //     console.log(num);
        
    //     $(".tab_manu li").removeClass("on");
        
    //     $(this).addClass("on");

    //     $(".list").hide();
    //     $(".list").eq(num).show();
    // });

});