function parallax(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function() {
  parallax('header', window.scrollY, 0.3);
  parallax('.circle__yellow-pink', window.scrollY, 0.5);
  parallax('.circle__teal-large', window.scrollY, 0.75);
  parallax('.circle__blue-med', window.scrollY, 0.3);
  parallax('.circle__coral', window.scrollY, 0.73);
  parallax('.circle__blue-small', window.scrollY, 0.63);
});

//WORD CHANGE
(function() {
  var words = [
      'friends...',
      'date...',
      'family...',
      'co-workers...',
      'kids...',
      'whatever!'
    ],
    i = 0;
  setInterval(function() {
    $('#changeWord').fadeOut(function() {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 1500);
})();
