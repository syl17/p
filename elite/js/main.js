$(function(){
    $('.m_btn').click(function(){
      $('.m_menu_wrap').animate({'left':0});
      $('.cover').fadeIn();
      $('body,html').css('overflow','hidden');
    });

    $('.cover').click(function(){
      $('.m_menu_wrap').animate({'left':'-100%'},500);
      $('.cover').fadeOut();
      $('body,html').css('overflow','auto');

    });

    $('.visual').slick({
        autoplay: true,
        dots:true
      });

      $('.notice_slide').slick({
        autoplay: true,
        dots:true,
        arrows:false
      });
// 윈도우 창 브라우저 조절 상관없이 
let num = $(window).width();
console.log(num);

if(num <= 749){
 $('main .visual .slick-arrow').hide();
 $('main .visual .slick-dots').show();
 // 메인이미지 교체 부분
 $('.visual1 img').attr('src','images/visual01_m.jpg');
 $('.visual2 img').attr('src','images/visual02_m.jpg');
 $('.visual3 img').attr('src','images/visual03_m.jpg');
 $('.visual4 img').attr('src','images/visual04_m.jpg');
 // section1이미지 교체
 $('.box1 img').attr('src','images/img_story01_m.jpg');
 $('.box2 img').attr('src','images/img_story02_m.jpg');
 $('.box3 img').attr('src','images/img_story03_m.jpg'); 
 //이벤트슬라이드 이미지 교체
 $('.notice_slide .notice1 img').attr('src','images/img_blogevent160816_m.jpg')
 $('.notice_slide .notice2 img').attr('src','images/img_facebookevent160816_m.jpg')
 $('.notice_slide .notice3 img').attr('src','images/img_renewalevent1_m.jpg')
 $('.notice_slide .notice4 img').attr('src','images/img_renewalevent2_m.jpg')
}else{
 $('main .visual .slick-arrow').show();
 $('main .visual .slick-dots').hide();
  // 메인이미지 교체 부분
  $('.visual1 img').attr('src','images/visual01.jpg');
  $('.visual2 img').attr('src','images/visual02.jpg');
  $('.visual3 img').attr('src','images/visual03.jpg');
  $('.visual4 img').attr('src','images/visual04.jpg');
  $('.box1 img').attr('src','images/img_story01.jpg');
  $('.box2 img').attr('src','images/img_story02.jpg');
  $('.box3 img').attr('src','images/img_story03.jpg'); 
   // section1이미지 교체
 $('.box1 img').attr('src','images/img_story01.jpg');
 $('.box2 img').attr('src','images/img_story02.jpg');
 $('.box3 img').attr('src','images/img_story03.jpg'); 
  //이벤트슬라이드 이미지 교체
  $('.notice_slide .notice1 img').attr('src','images/img_blogevent160816.jpg')
  $('.notice_slide .notice2 img').attr('src','images/img_facebookevent160816.jpg')
  $('.notice_slide .notice3 img').attr('src','images/img_renewalevent1.jpg')
  $('.notice_slide .notice4 img').attr('src','images/img_renewalevent2.jpg') 
}
//윈도우 창 브라우저를 사이즈 조절했을 때 이벤트

$(window).resize(function(){
   let num = $(this).width();
   console.log(num);

   if(num <= 749){
    $('main .visual .slick-arrow').hide();
    $('main .visual .slick-dots').show();
    // 메인이미지 교체 부분
    $('.visual1 img').attr('src','images/visual01_m.jpg');
    $('.visual2 img').attr('src','images/visual02_m.jpg');
    $('.visual3 img').attr('src','images/visual03_m.jpg');
    $('.visual4 img').attr('src','images/visual04_m.jpg');
    // section1이미지 교체
    $('.box1 img').attr('src','images/img_story01_m.jpg');
    $('.box2 img').attr('src','images/img_story02_m.jpg');
    $('.box3 img').attr('src','images/img_story03_m.jpg');
    //이벤트슬라이드 이미지 교체
    $('.notice_slide .notice1 img').attr('src','images/img_blogevent160816_m.jpg')
    $('.notice_slide .notice2 img').attr('src','images/img_facebookevent160816_m.jpg')
    $('.notice_slide .notice3 img').attr('src','images/img_renewalevent1_m.jpg')
    $('.notice_slide .notice4 img').attr('src','images/img_renewalevent2_m.jpg')
   }else{
    $('main .visual .slick-arrow').show();
    $('main .visual .slick-dots').hide();
     // 메인이미지 교체 부분
     $('.visual1 img').attr('src','images/visual01.jpg');
     $('.visual2 img').attr('src','images/visual02.jpg');
     $('.visual3 img').attr('src','images/visual03.jpg');
     $('.visual4 img').attr('src','images/visual04.jpg');
     // section1이미지 교체
    $('.box1 img').attr('src','images/img_story01.jpg');
    $('.box2 img').attr('src','images/img_story02.jpg');
    $('.box3 img').attr('src','images/img_story03.jpg');
    //이벤트슬라이드 이미지 교체
    $('.notice_slide .notice1 img').attr('src','images/img_blogevent160816.jpg')
    $('.notice_slide .notice2 img').attr('src','images/img_facebookevent160816.jpg')
    $('.notice_slide .notice3 img').attr('src','images/img_renewalevent1.jpg')
    $('.notice_slide .notice4 img').attr('src','images/img_renewalevent2.jpg')
   }


  });
// 위로 올라가는 버튼
$('footer .btn_top').click(function(){
  $('body,html').animate({'scrollTop':0},500);
})





});