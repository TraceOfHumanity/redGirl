gsap.from('#redGirl', {
  y: '2vh',
  delay: .5,
  duration: 3,
  repeat: -1,
  scrub: true,
  yoyo: true,
  ease: "power3.inOut",
  
})
gsap.from('.container', {
x: '-50vw',
delay: 1,
opacity: 0,
duration: .5,


})
gsap.to('#Vector82_2', {
  stagger: 5,
  duration: 0.15,
  repeat: -1,
  repeatDelay: 4,
  opacity: 0,
  scrub: true,
})
gsap.to('#Vector_10_2', {
  stagger: 5,
  duration: 0.15,
  repeat: -1,
  repeatDelay: 4,
  opacity: 0,
  scrub: true,
})

$('.body').on('mousemove', (e) => {
  const x = e.pageX / $(window).width();
  const y = e.pageY / $(window).height();
  $('.bg').css('transform',
    'translatex(-' + x * 30 + 'px)'
  );
  $('#redGirl').css(
    'transform',
    'translate(+' + x * 30 + 'px, -' + y * 0 + 'px)'
  );
})


