$(function(){
    $(".lang").click(function(){
		$(this).toggleClass("on");
	});

	$('.gnb>li').mouseover(function(){
		$(this).find('.depth2').stop().slideDown();
	})
	$('.gnb>li').mouseleave(function(){
		$(this).find('.depth2').stop().slideUp();
	})

	$(".popup_close").click(function(){
		$('.popup_button').hide();
	});

	// $('.lang').click(function(){
    //     $('.lang').toggleClass('langon');
    //     $('.lang>li:last-child').slideToggle();
    // });
	
	$('.menu').click(function(){
        $('.menu').toggleClass('open');
        $('.allmenu').slideToggle(400);
    });
	// btnmenu = 0;
	// $(".menu").click(function(){
	// 	if(btnmenu == 0){
	// 		$(this).addClass("openmenu");
	// 		$(".menu").slideDown();
	// 		$(".depth2").stop().slideUp();
	// 		btnmenu = 1;
	// 	}else{
	// 		$(this).removeClass("openmenu");
	// 		$(".menu").slideUp();
	// 		btnmenu = 0;		
	// 	}		
	// })

	$('.tab_menu li,.popclose,.this_lang,.btn_fam').click(function(e){
        // 하이퍼링크 설정 막는 방법
        e.preventDefault()
        $('.tab_menu li,.popclose,.this_lang,.btn_fam').removeClass('on');
        $(this).addClass('on');

		 // 인덱스 값 알아내기
		 let num = $(this).index();
		 console.log(num);
		 $('.tab_list').hide();
		 $('.tab_list').eq(num).show();
	});
	$('.tab_list:gt(0)').hide();

	$('.tab_list').slick({
        autoplay: false,
        slidesToShow:7,
        slidesToScroll:3,
        arrows:false,
        dots:false,
        variableWidth:true,
		infinite:false,
	});

	$('.btn_fam').click(function(){
		$('.fam_list').slideToggle();
	});

	
});