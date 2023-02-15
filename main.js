$(function(){

  // 마우스커서
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
  })

  $(".chover").on("mouseover",function(){
    // alert("hover");
    $(".cursor").stop().animate({
        width: "80px",
        height: "80px",
        // opacity: 0.5,
        
    },300)

});
$(".chover").on("mouseleave",function(){
    $(".cursor").stop().animate({
        width: "24px",
        height: "24px",
        // opacity: 1,
    
    })
   
})

$(window).scroll(function (){ 
  var scrollValue = $(document).scrollTop(); 
  console.log(scrollValue);

  if(scrollValue >= 650){
      $('.navigation > li > a').addClass('on');
  }else{
      $('.navigation > li > a').removeClass('on');
  };
  });

    gsap.to(".po1",{
        scrollTrigger : {
          scrub: true
        },
        y: -90000,
        scale: -7.5
      })
      gsap.to(".po2",{
        scrollTrigger : {
          scrub: true
        },
        y: -90000,
        scale: -7.5
      })

 
    let section = document.querySelector('.section');
    let text = document.querySelector(".text");
    let innerText = document.querySelector(".innerText");
    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        section.style.clipPath = "circle("+ value +"px at center center)";
        text.style.left = 100 - value / 5 + '%';
        innerText.style.left = 100 - value / 5 + '%';
   
    })



    gsap.from(".me_img",{
      duration: 1.5,
      opacity:0,
      x: 100,
      ease: "expo", 
      scrollTrigger : {
        trigger: ".me_img",
        // start: "top 80%",
        // end: "bottom 10%",
        toggleActions: "play none none reverse",
  
        // toggleActions: "play none reverse reset",
        // markers: true
      },
      
    })

    gsap.from(".tit2",{
      duration: 1.5,
      opacity:0,
      y: 100,
      stagger: 0.4,
      ease: "expo", 
      scrollTrigger : {
        trigger: ".tit2",
        start: "top 80%",
        // end: "bottom 10%",
        toggleActions: "play none none reverse",
        // markers: true
      },
      
    })
    // gsap.to(".panel:not(:last-child)", {
    //   yPercent: -100, 
    //   ease: "none",
    //   stagger: 0.5,
    //   scrollTrigger: {
    //     trigger: "#layer",
    //     start: "top top",
    //     // end: "+=300%",
    //     scrub: true,
    //     pin: true
    //   }
    // });
    
    
    // gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});

  
    
    $('.ct').counterUp({
      delay: 10,
      time: 1000,
     
    });
    
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 15,
      speed: 400,
      glare: true,
    "max-glare": 1,
    });
  
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(".circle_c",{
      duration: 5,
  
      opacity: 0,
      scrollTrigger : {
        trigger: ".circle_c",
        start: "top 90%",
        // end: "bottom 10%",
        toggleActions: "play none none reverse",
        // markers: true
      },
      
    })
    gsap.from(".circle_c2",{
      duration: 5,
  
      opacity: 0,
      scrollTrigger : {
        trigger: ".circle_c2",
        start: "top 90%",
        // end: "bottom 10%",
        toggleActions: "play none none reverse",
        // markers: true
      },
      
    })
    gsap.from(".card",{
      duration: 1,
      y: 200,
      opacity: 0,
      stagger: 0.4,
      scrollTrigger : {
        trigger: ".card",
        start: "top 90%",
        // end: "bottom 10%",
  
        toggleActions: "play none none reverse",
        // markers: true
      },
      
    })

    gsap.registerPlugin(ScrollTrigger);

  // gsap.to(".panel2:not(:last-child)", {
  //   yPercent: -100, 
  //   ease: "none",
  //   stagger: 0.5,
  //   scrollTrigger: {
  //     trigger: "#layer2",
  //     start: "top top",
  //     end: "+=300%",
  //     scrub: true,
  //     pin: true
  //   }
  // });
  
  
  // gsap.set(".panel2", {zIndex: (i, target, targets) => targets.length - i});

  gsap.from(".fadeup",{
    duration: 1.5,
    opacity:0,
    y: 100,
    stagger: 0.4,
    ease: "expo", 
    scrollTrigger : {
      trigger: ".fadeup",
      start: "top 80%",
      // end: "bottom 10%",
      toggleActions: "play none none reverse",
      // markers: true
    },
    
  })

  gsap.from(".fadeup2",{
    duration: 1.5,
    opacity:0,
    y: 100,
    stagger: 0.4,
    ease: "expo", 
    scrollTrigger : {
      trigger: ".fadeup2",
      start: "top 80%",
      // end: "bottom 10%",
      toggleActions: "play none none reverse",
      // markers: true
    },
    
  })

  gsap.from(".fadeup3",{
    duration: 1.5,
    opacity:0,
    y: 100,
    stagger: 0.4,
    ease: "expo", 
    scrollTrigger : {
      trigger: ".fadeup3",
      start: "top 80%",
      // end: "bottom 10%",
      toggleActions: "play none none reverse",

      // markers: true
    },
    
  })
  gsap.from(".fadeup4",{
    duration: 1.5,
    opacity:0,
    y: 100,
    stagger: 0.4,
    ease: "expo", 
    scrollTrigger : {
      trigger: ".fadeup4",
      start: "top 80%",
      // end: "bottom 10%",
      toggleActions: "play none none reverse",
      // markers: true
    },
    
  })
  gsap.from(".fadeup5",{
    duration: 1.5,
    opacity:0,
    y: 100,
    stagger: 0.4,
    ease: "expo", 
    scrollTrigger : {
      trigger: ".fadeup5",
      start: "top 80%",
      // end: "bottom 10%",
      toggleActions: "play none none reverse",

      // markers: true
    },
    
  })
  gsap.from(".fadeleft",{
    duration: 1.5,
    opacity:0,
    x: -100,
    ease: "expo", 
    scrollTrigger : {
      trigger: ".fadeleft",
      start: "top 80%",
      // end: "bottom 10%",
      toggleActions: "play none none reverse",
      // markers: true
    },
    
  })
  gsap.from(".fadeleft2",{
    duration: 1.5,
    opacity:0,
    x: -100,
    ease: "expo", 
    scrollTrigger : {
      trigger: ".fadeleft2",
      start: "top 80%",
      // end: "bottom 10%",
      toggleActions: "play none none reverse",
      // markers: true
    },
    
  })

  gsap.from(".faderight",{
    duration: 1.5,
    opacity:0,
    x: 100,
    ease: "expo", 
    scrollTrigger : {
      trigger: ".faderight",
      start: "top 80%",
      // end: "bottom 10%",
      toggleActions: "play none none reverse",
      // markers: true
    },
    
  })
  gsap.from(".faderight2",{
    duration: 1.5,
    opacity:0,
    x: 100,
    ease: "expo", 
    scrollTrigger : {
      trigger: ".faderight2",
      start: "top 80%",
      // end: "bottom 10%",
      toggleActions: "play none none reverse",
      // markers: true
    },
    
  })

  gsap.from(".faderight3",{
    duration: 1.5,
    opacity:0,
    x: 100,
    ease: "expo", 
    scrollTrigger : {
      trigger: ".faderight3",
      start: "top 80%",
      // end: "bottom 10%",
      toggleActions: "play none none reverse",
      // markers: true
    },
    
  })
  // 가로스크롤
  gsap.registerPlugin(ScrollTrigger);
  let hori = gsap.utils.toArray(".hori");
  
  gsap.to(hori, {
    xPercent: -100 * ( hori.length -1 ),
    ease: "none",
    scrollTrigger: {
      trigger: '#horizontal',
      end: ()=> "+=" + document.querySelector("#horizontal").offsetWidth,
      pin: true,
      scrub: 1,
    }
  });


gsap.from(".footer_txt > p",{
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger : {
    trigger: ".footer_txt",
    // start: "top 90%",
    // end: "bottom 10%",

    toggleActions: "play none none reverse",
    // markers: true
  },
  
})

$(window).scroll(function (){ 
  var scrollValue = $(document).scrollTop(); 
  console.log(scrollValue);

  if(scrollValue >= 1500){
      $('.go_top').addClass('on');
  }else{
      $('.go_top').removeClass('on');
  };
  $('.go_top').on('click', function () {
      $('body').stop().animate({
          scrollTop: 0
      }, 500);
  });

    // 프로그래스바
    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: { scrub: 0.3 }
    })
  });
});