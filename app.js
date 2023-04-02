gsap.registerPlugin(ScrollTrigger);

gsap.to('.box', {
    x: 700,
    duration: 5,
    scrollTrigger: {
        trigger: '.box',
        start: 'top center',
        markers: true
    }
})