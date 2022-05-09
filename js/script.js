// scroll position fade out

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (!isMobile()) {

    const $ = document.querySelector.bind(document);

    // const links = $(".links");
    const name = $(".name");
    const desc = $(".desc");


    function transformLetters() {
        const scroll = window.scrollY;

        // links.style.opacity = Math.max(0, Math.min(1, -scroll / 200 + 1));
        name.style.opacity = Math.max(0, Math.min(1, -scroll / 200 + 1));
        desc.style.opacity = Math.max(0, Math.min(1, -scroll / 100 + 1));

    }
    window.addEventListener("scroll", transformLetters);
}

// popup functions

jQuery(document).ready(function () {

jQuery('.zero-popup').click(function (e) {
      e.preventDefault();
      var activePopup = jQuery('.zero-popup-box').fadeIn(250);
      var activePopup = jQuery('.zero-popup-content').addClass('zero-popup-active');
    });
    jQuery('.zero-popup-close, .zero-popup-background').click(function () {
      var inactivePopup = jQuery('.zero-popup-box').fadeOut(250);
      var inactivePopup = jQuery('.zero-popup-content').removeClass('zero-popup-active');
    });

    jQuery('.covid-popup').click(function (e) {
      e.preventDefault();
      var activePopup = jQuery('.covid-popup-box').fadeIn(250);
      var activePopup = jQuery('.covid-popup-content').addClass('covid-popup-active');
    });
    jQuery('.covid-popup-close, .covid-popup-background').click(function () {
      var inactivePopup = jQuery('.covid-popup-box').fadeOut(250);
      var inactivePopup = jQuery('.covid-popup-content').removeClass('covid-popup-active');
    });
  
    jQuery('.worldplaces-popup').click(function (e) {
      e.preventDefault();
      var activePopup = jQuery('.worldplaces-popup-box').fadeIn(250);
      var activePopup = jQuery('.worldplaces-popup-content').addClass('worldplaces-popup-active');
    });
    jQuery('.worldplaces-popup-close, .worldplaces-popup-background').click(function () {
      var inactivePopup = jQuery('.worldplaces-popup-box').fadeOut(250);
      var inactivePopup = jQuery('.worldplaces-popup-content').removeClass('worldplaces-popup-active');
    });
  
    jQuery('.unlikely-popup').click(function (e) {
      e.preventDefault();
      var activePopup = jQuery('.unlikely-popup-box').fadeIn(250);
      var activePopup = jQuery('.unlikely-popup-content').addClass('unlikely-popup-active');
    });
    jQuery('.unlikely-popup-close, .unlikely-popup-background').click(function () {
      var inactivePopup = jQuery('.unlikely-popup-box').fadeOut(250);
      var inactivePopup = jQuery('.unlikely-popup-content').removeClass('unlikely-popup-active');
    });
  
  });


// hover image variables
  var hoverDistort = new hoverEffect({
    parent: document.querySelector('.note'),
    intensity: 0.5,
    image1: 'img/note.png',
    image2: 'img/arrow.png',
    displacementImage: 'js/9.jpg'
});

var hoverDistort = new hoverEffect({
    parent: document.querySelector('.covid'),
    intensity: 0.5,
    image1: 'img/covidIcon.png',
    image2: 'img/arrow.png',
    displacementImage: 'js/8.jpg'
});

var hoverDistort = new hoverEffect({
    parent: document.querySelector('.worldplaces'),
    intensity: 0.5,
    image1: 'img/worldplacesIcon.png',
    image2: 'img/arrow.png',
    displacementImage: 'js/4.png'
});

var hoverDistort = new hoverEffect({
    parent: document.querySelector('.unlikely'),
    intensity: 0.5,
    image1: 'img/unlikelyIcon.png',
    image2: 'img/arrow.png',
    displacementImage: 'js/14.jpg'
});

// draw svg

var svgEl = document.getElementById("svgPath");
var length = svgEl.getTotalLength();

svgEl.style.strokeDasharray = length;

svgEl.style.strokeDashoffset = length;

window.addEventListener("scroll", myFunction);

function myFunction() {
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;
  svgEl.style.strokeDashoffset = length - draw;
}
