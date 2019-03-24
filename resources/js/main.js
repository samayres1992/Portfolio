$(document).ready(function() {
  $(document).on('scroll', function() {
    let nav = $("nav.navbar");
    if($(this).scrollTop()>=$('#down-arrow').position().top){
      nav.css("position", "fixed");
      nav.addClass("white-nav");
      nav.find(".is-active").removeClass("is-active");
      nav.find(".work-link").parent().addClass("is-active");
    } else {
      if($(this).scrollTop() === 0) {
        nav.css("position", "absolute");
      }
      nav.removeClass("white-nav");
      nav.find(".is-active").removeClass("is-active");
      nav.find(".welcome-link").parent().addClass("is-active");
    }
    
    if($(this).scrollTop()>=$('#timeline').position().top) {
      nav.find(".is-active").removeClass("is-active");
      nav.find(".timeline-link").parent().addClass("is-active");
    }
  });

  // Portfolio card
  var swiper = new Swiper('.work-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

  /* Particles */
  particlesJS(
    "welcome", {
     "particles": {
        "number": {
          "value": 2,
          "density": {
           "enable": true,
           "value_area": 50
          }
        },
      "color": {
        "value": ["#de0061", "#00a2a5", "#a8c94d"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 4,
          "color": "rgba(119, 197, 187, 0.38)"
        },
      },
      "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 10,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "push": {
          "particles_nb": 10
        }
      }
    },

    "push": {
      "particles_nb": 2
    },
    "retina_detect": true
  });
});