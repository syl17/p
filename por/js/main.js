$(function(){

  // gsap.to(".po1", {
  //   scrollTrigger: ".po1", 
  //   duration: 2, 
  //   rotation: 360
  // });

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

// gsap.from(".main_visual", {
//     scrollTrigger: ".main_visual", 
//     duration: 1.5, 
//     x: 3000
//   });

  // gsap.from(".nav", {
  //   scrollTrigger: ".nav", 
  //   duration: 1.5, 
  //   x: 3000
  // });

  gsap.to(".po1",{
    scrollTrigger : {
      scrub: true
    },
    y: -5000,
    scale: -20
  })
  gsap.to(".po2",{
    scrollTrigger : {
      scrub: true
    },
    y: -5000,
    scale: -20
  })

let section = document.querySelector('.intro');
let text = document.querySelector(".txt");
let innerText = document.querySelector(".inner_txt");
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    section.style.clipPath = "circle("+ value +"px at center center)";
    text.style.left = 100 - value / 5 + '%';
    innerText.style.left = 100 - value / 5 + '%';
})

  // gsap.to(".po2", {
  //   scrollTrigger: ".po2", 
  //   duration: 2, 
  //   rotation: 360
  // });
 
  //   gsap.from(".intro_txt > p",{
  //   duration: 1,
  //   y: 500,
  //   opacity: 0,
  //   scrollTrigger : {
  //     trigger: ".intro_txt > p",
  //     start: "top 90%",
  //     end: "bottom 10%",
  //     toggleActions: "play none none reverse",
  //     // toggleActions: "play none reverse reset",
  //     // markers: true
  //   },
    
  // })
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".panel:not(:last-child)", {
    yPercent: -100, 
    ease: "none",
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#layer",
      start: "top top",
      // end: "+=300%",
      scrub: true,
      pin: true
    }
  });
  
  
  gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});

  // gsap.from(".me_img",{
  //   duration: 1,
  //   y: 400,
  //   opacity: 0,
  //   scrollTrigger : {
  //     trigger: ".me_img",
  //     start: "top 30%",
  //     // end: "bottom 70%",
  //     toggleActions: "play none none reverse",
  //     // toggleActions: "play none reverse reset",
  //     // markers: true
  //   },
    
  // })
  
  $('.ct').counterUp({
    delay: 10,
    time: 1000,
   
  });
  
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
  "max-glare": 1,
  });

  gsap.from(".circle_c",{
    duration: 5,

    opacity: 0,
    scrollTrigger : {
      trigger: "#section3",
      start: "top 50%",
      // end: "bottom 10%",
      toggleActions: "play none none reverse",

      // toggleActions: "play none reverse reset",
      // markers: true
    },
    
  })
  gsap.from(".circle_c2",{
    duration: 5,

    opacity: 0,
    scrollTrigger : {
      trigger: "#section3",
      start: "top 50%",
      // end: "bottom 10%",
      toggleActions: "play none none reverse",

      // toggleActions: "play none reverse reset",
      // markers: true
    },
    
  })
  gsap.from(".card",{
    duration: 0.5,
    y: 500,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger : {
      trigger: "#section3",
      start: "top 50%",
      // end: "bottom 10%",

      toggleActions: "play none none reverse",

      // toggleActions: "play none reverse reset",
      // markers: true
    },
    
  })
  // 가로스크롤
  // gsap.registerPlugin(ScrollTrigger);
  // let horizontal = gsap.utils.toArray(".horizontal");
  
  // gsap.to(horizontal, {
  //   xPercent: -100 * ( horizontal.length -1 ),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: '#container',
  //     end: ()=> "+=" + document.querySelector("#container").offsetWidth,
  //     pin: true,
  //     scrub: 1,
  //   }
  // });
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".panel2:not(:last-child)", {
    yPercent: -100, 
    ease: "none",
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#layer2",
      start: "top top",
      // end: "+=300%",
      scrub: true,
      pin: true
    }
  });
  
  
  gsap.set(".panel2", {zIndex: (i, target, targets) => targets.length - i});

        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        const backColor = document.querySelectorAll("[data-bgcolor]");

        backColor.forEach((colorSection, i) => {
            const prevBg = i === 0 ? "" : backColor[i - 1].dataset.bgcolor;
            const prevText = i === 0 ? "" : backColor[i - 1].dataset.bgtext;

            ScrollTrigger.create({
                trigger: colorSection,
                start: 'top 50%',
                end: 'bottom 5%',
                markers: false,
                onEnter: () => gsap.to("#colorful", {
                    backgroundColor: colorSection.dataset.bgcolor,
                    color: colorSection.dataset.bgtext,
                }),
                onLeaveBack: () => gsap.to("#colorful", {
                    backgroundColor: prevBg,
                    color: prevText
                })
            });
        });


  // 화면 전환하기
  gsap.utils.toArray("#comparisonSection").forEach(section => {
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
          end: () => "+=" + section.offsetWidth, 
          scrub: true,
          pin: true,
          anticipatePin: 1
        },
        defaults: {ease: "none"}
      });
    // animate the container one way...
    tl.fromTo(section.querySelector(".after"), { yPercent: 100, x: 0}, {yPercent: 0})
      // ...and the image the opposite way (at the same time)
      .fromTo(section.querySelector(".mwork_wrap2"), {yPercent: -100, x: 0}, {yPercent: 0}, 0);
  });

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

  // 프로그래스바
  gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
  })
});