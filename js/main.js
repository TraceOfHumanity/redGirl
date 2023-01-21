gsap.from('#redGirl', {
  y: '1vh',
  delay: .5,
  duration: 3,
  repeat: -1,
  scrub: true,
  yoyo: true,
  ease: "power3.inOut",
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

$('body').mousemove(function(e) {
  var amountMovedX = (e.pageX * -0.53 / 6);
  var amountMovedY = (e.pageY * -0.53 / 6);
  $('.redGirl').css('left', amountMovedX + 'px');
   $('.redGirl').css('top', amountMovedY + 'px');
});