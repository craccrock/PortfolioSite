let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.rock', 3, { y: -300 })
.fromTo('.bj1', 3, { y: -65 }, { y: -200 }, '-=3')
.fromTo('.bj2', 3, { y: -115 }, { y: -100 }, '-=3')
.to('.content', 3, {top: '0%'}, '-=3')

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%", 
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin("section")
    .addTo(controller) 