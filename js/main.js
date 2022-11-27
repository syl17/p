$(function(){
     
    $('#fullpage').fullpage({
	
        anchors: ["firstPage","secondPage","3rdPage","4thPage","5thPage","6thPage","7thPage"],
        menu: '#rightnav',
		autoScrolling: true,
		scrollHorizontally: true,
        // navigation: true,

        navigationTooltips: ['HOME', 'ABOUT','PORTFOLIO','CONTACT','FOOTER'],
        afterLoad: function(anchorLink,index){
            if(index == 2){
                if($(window).scrollTop()){
                    $('header').addClass('active');
                }else{
                    $('header').removeClass('active');
                }
                 
            };
            if(index == 3){
                $('.data>span').counterUp({
                    delay: 10,
                    time: 600
                });
                
            }

          
        }
	});


  
$('.progress-bar').loading();




const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})


$(".chover").on("mouseover",function(){
    // alert("hover");
    $(".cursor, #fp-nav ul li").stop().animate({
        width: "80px",
        height: "80px",
        opacity: 0.5,
        
    },300)

});
$(".chover").on("mouseleave",function(){
    $(".cursor").stop().animate({
        width: "15px",
        height: "15px",
        opacity: 1,
    
    })
   
})

$(".click").on("mouseover",function(){
    // alert("hover");
    $(".cursor, #fp-nav ul li").stop().animate({
        width: "100px",
        height: "100px",
        opacity: 0.6,
        
    },300)

    $('.txt_cursor').animate({
        opacity:1
    })
});
$(".click").on("mouseleave",function(){
    $(".cursor").stop().animate({
        width: "15px",
        height: "15px",
        opacity: 1,
    })
    $('.txt_cursor').animate({
        opacity:0
    },0)
})

$('.slick').slick({
    draggable: false,
    infinite: true,
    dots: false,
    // initialSlide: 0,
    arrows: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll:1,
    slickGoTo:0
  });
 
  
  $('.slick:gt(0)').hide();

  $('.tab_menu li').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    
    let num = $(this).index();
   
    $('.slick').hide();
    $('.slick').eq(num).fadeIn();
    $('.slick').slick('slickGoTo', 0);
  });

//   $('.tab_menu li').mouseover(function(){
//     $(this).addClass('on').siblings().removeClass('on');

//   });
  
 
// $('.go_top').click(function () {
//             $('html, body').stop().animate({
//                 scrollTop: 0
//             }, 500);
//         });


// $(window).scroll(function (){ 
//     var scrollValue = $(document).scrollTop(); 
//     console.log(scrollValue);

//     if(scrollValue >= 100){
//         $('.go_top').addClass('on');
//     }else{
//         $('.go_top').removeClass('on');
//     };

//     $('.go_top').on('click', function () {
//         $('html, body').stop().animate({
//             scrollTop: 0
//         }, 500);
//     });
// });

 
});