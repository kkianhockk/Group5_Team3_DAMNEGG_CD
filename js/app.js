let tlMenu_1 = gsap.timeline();

// Menu1//
tlMenu_1.from("#text1-sec1", {
  y: 100,
  duration: 1,
  opacity: 0,
  stagger: 0.2, 
});

tlMenu_1.from("#img-sec2", {
  x: 100,
  duration: 1,
  opacity: 0,
  stagger: 0.2, // 元素之间的间隔动画
}, "-=0.5"); // 在前一个动画结束前0.5秒触发


tlMenu_1.from("#img2-sec2", {
  x: -100,
  duration: 2,
  opacity: 0,
  stagger: 0.2,
}, "-=0.8");


tlMenu_1.from("#icon-sec3", {
  y: 100,
  scale: 0.5,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2,
}, "-=0.3");


tlMenu_1.from("#text-sec3", {
  y: 100,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
}, "+=0.1"); 


tlMenu_2.from("#fromdown", {
    y: 100,
    duration: 0, 
    opacity: 0,
    stagger: 0.2, 
  }, "+=0.1"); 