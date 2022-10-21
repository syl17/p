$(function(){
    $('.btn_sh').click(function(){
        $('.search_form').stop().slideToggle(200);
    });
    $('.search_form').mouseleave(function(){
        $('.search_form').stop().slideUp(200);
    });
    $('.btn_work').click(function(){
        $('.btn_work').toggleClass('on');
        $('.btn_company').removeClass('on');
        $('.work_list').toggle();
        $('.company_list').hide();
    });
    $('.btn_company').click(function(){
        $('.btn_company').toggleClass('on');
        $('.btn_work').removeClass('on');
        $('.company_list').toggle();
        $('.work_list').hide();
    });

    $('.link_close').click(function(){
        $('.company_list,.work_list').hide();
        $('.btn_work,.btn_company').removeClass('on');
    });

    $('.btn_close').click(function(){
        $('.allmenu_wrap').hide();
    });
    $('.close').click(function(){
        $('.modal_wrap').hide();
    });
    $('.menu').click(function(){
        $('.allmenu_wrap').show();
    });

    $('.gnb').mouseover(function(){
        $('.item,.gnb_bg').stop().slideDown(300);
    });
    $('.gnb').mouseleave(function(){
        $('.item,.gnb_bg').stop().slideUp(200);
    });


    // 메인슬라이드
    $(document).ready(function(){
        $('.visual').slick({
          autoplay: true,
        //   좌우버튼 안나오게(next,previous)
          arrows:false,
        //   fade효과
          fade:true
        });
      });
      
    // 화살표 클릭 이동
    $('main').slick({
        draggable: false,
        infinite: false,
        dots: false,
        arrows:false,
        initialSlide: 0
    });

      $('.slide_i').click(function(){
        $('main').slick('slickGoTo', 0);
    });
    $('.slide_n').click(function(){
        $('main').slick('slickGoTo', 1);
    });
    $('.slide_s').click(function(){
        $('main').slick('slickGoTo', 2);
    });
    //   $('.mask1').mouseover(function(){
    //     $('.visual1').fadeIn();
    //     // $('.visual2').hide();
    //     // $('.visual3').hide();
    //   });


    //   $('.mask2').mouseover(function(){
    //     $('.visual2').fadeIn();
    //     $('.visual1').hide();
    //     $('.visual3').hide();
    //   });

    //   $('.mask3').mouseover(function(){
    //     $('.visual3').fadeIn();
    //     // $('.visual1').hide();
    //     // $('.visual2').hide();
    //   });

	// $('.mask1,.mask2,.mask3').mouseover(function(e){
    //     // 하이퍼링크 설정 막는 방법
    //     e.preventDefault()
    //     $('.mask1,.mask2,.mask3').removeClass('on');
    //     $(this).addClass('on');

	// 	 // 인덱스 값 알아내기
	// 	 let num = $(this).index();
	// 	 console.log(num);
	// 	 $('.visual').hide();
	// 	 $('.visual').eq(num).show();
	// });
	// $('.visual:gt(0)').hide();

    //   배열선언
      let video_tit = ['D TOWER','Canakkale 1915 Bridge','Petrochemical Plant'];
      let video_sub = ['도시를 개발하다.','세계 6번째 현수교 기술자립국, 세계최고의 기술력, DL이앤씨.','1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년.'];
      let video_list = ['https://www.youtube.com/embed/lAJ3SGjbdr4','https://www.youtube.com/embed/vM8b0CZd2Ww','https://www.youtube.com/embed/gehtA1gfXPc']
    //   닫기버튼 클릭하면 modal_wrap 서서히 사라지게
    $('.close').click(function(){
        $('.modal_wrap').fadeOut(300);
    })
    // list>li를 클릭하면 클릭한 번째의 값이 모달팝업으로 뜨게
    $('.list li').click(function(){
        // this 여러 요소 중에서 선택된 요소 값을 값는 내장변수
        let num = $(this).index()
        console.log(num);
        // text함수 -> 변수에 있는 값을 tag에 값을 기억시킬 때
        $('.tit h2').text(video_tit[num]);
        $('.tit p').text(video_sub[num]);
        // attr -> 해당 태그 안에서 속상값을 가져올 때 사용
        $('.tit iframe').attr('src',video_list[num]);

        // 모달팝업 띄우기
        $('.modal_wrap').fadeIn(300);

        // 이전 버튼을 클릭하면
        $('.btn_list .prev').click(function(){
            if(num==0){
                num =2;
            }else{
                num--;
            }
            $('.tit h2').text(video_tit[num]);
            $('.tit p').text(video_sub[num]);
            $('.tit iframe').attr('src',video_list[num]);
        });
        // 다음 버튼을 클릭하면
        $('.btn_list .next').click(function(){
            if(num==2){
                num =0;
            }else{
                num++;
            }
            $('.tit h2').text(video_tit[num]);
            $('.tit p').text(video_sub[num]);
            $('.tit iframe').attr('src',video_list[num]);
        });
    });

    // 모달 슬라이드
      $('.sitemap_slide').slick({
        autoplay: true,
        arrows:false,
        disableOnInteraction:false,
        draggable:false,
        dots:true
      });

      $('.pause').click(function(){
        $('.pause').hide();
        $('.play').show();
        $('.sitemap_slide').slick('slickPause');
    })
    $('.play').click(function(){
        $('.play').hide();
        $('.pause').show();
        $('.sitemap_slide').slick('slickPlay');
    })
    //이미지 마우스 호버
      $('.pr_menu_all').mouseenter(function(){
        $(this).addClass('on');
    });
    $('.pr_menu_all').mouseleave(function(){
        $(this).removeClass('on');
    });

     // news 아이콘 hover 구현
     $('.box_txt').mouseover(function(){
        $(this).addClass('on').siblings().find('a').css({'opacity':'0.4'});
    });
    $('.box_txt').mouseleave(function(){
        $(this).removeClass('on').siblings().find('a').css({'opacity':'1'});
    });
});