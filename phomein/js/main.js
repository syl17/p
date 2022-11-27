$(function(){
    $('#fullpage').fullpage({
		//options here
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
		menu: '#right_nav',
		autoScrolling:true,
		scrollHorizontally: true,
        afterLoad: function(anchorLink,index){
            if(index == 1){
                $('#vid').get(0).currentTime = 0;
            }
            if(index == 2){
                $('.ct').counterUp({
                    delay: 10,
                    time: 1000
                });
            }
            if(index == 3){
                $('.dt span').counterUp({
                    delay: 10,
                    time: 500
                });
            }
            if(index == 8){
                $('header').addClass('on');
            }else{
                $('header').removeClass('on');
            }

	    }
    });


    $('.header_inner .gnb>li').mouseenter(function(){
            $('.depth2').stop().slideDown();
            $('.header_inner').css({'height':90,'background-color':'rgba(0, 0, 0, 0.9)','padding-bottom':260})
            $('header').css({'border':'none'});
    })
    
    $('.header_inner').mouseleave(function(){
            $('.depth2').stop().slideUp();
            $('.header_inner').css({'height':90,'padding-bottom':0,'background-color':'rgba(0, 0, 0, 0)'})
            $('header').css({'border-bottom':'1px solid rgba(255, 255, 255, 0.2)'});
       
    })

    $('.visual').slick({
        // slide: 'div',
        dots: true,
        arrows: false,
        // slideToScroll: true,
        // draggable: true,
        
        customPaging: function(slider, i) {
            var tit = $(slider.$slides[i]).find('.visual-dot-nav').html();
            return '<div class="pager-tit" class=' + i + '>'+ tit + '</div>';
         },
            fade: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 40000,
            pauseOnHover: false,
            pauseOnFocus: false,
    });

    
    $('.visual').on('afterChange',function(event,slick,currentSlide,nextSlide){
        $("#vid").get(0).currentTime = 0;
        
         if(currentSlide == 0) {
            $('.visual').slick('slickSetOption','autoplaySpeed','40000');
            $('#vid').trigger('play');
         } else {
            $('.visual').slick('slickSetOption','autoplaySpeed','8000');
            $('#vid').trigger('pause');
         };
     });

     $('.slick-dots>li').mouseenter(function(){
        let idx = $(this).index();
        $('.visual').slick('slickGoTo',idx);
        $('.visual').slick('slickSetOption', 'autoplay', false).slick('slickPause');

    }).mouseleave(function(){
        $('.visual').slick('slickSetOption', 'autoplay', true).slick('slickPlay');
    })
    
})