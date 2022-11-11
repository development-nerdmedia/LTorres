document.body.addEventListener("mousemove", e => {
  gsap.to(".ht-cursor", {
    x: e.clientX,
    y: e.clientY,
  })
})

$(".item-slider2").hover(function () {
  $(".ht-cursor").addClass("mostrar");
}, function () {
  $(".ht-cursor").removeClass("mostrar");
}
);


MyApp = {
  popupInicio: {
    init: function () {
      document.body.classList.add("hide-scrolling");
      document.addEventListener("click", (e) => {
        if (e.target.closest(".popup .close")) {
          document.body.classList.remove("hide-scrolling");
          $(`section.popup`).hide();
        }
      })
    }
  },
  slider1: {
    init: function () {
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        noSwiping: true,
        noSwipingClass: 'item-slider',

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        autoplay: {
          delay: 6000,
        },
      });
    }
  },
  swiper2: {
    init: function () {
      var swiper2 = new Swiper(".swiper2", {
        slidesPerView: 3,
        spaceBetween: 85,
        centeredSlides: true,
      });
    }
  },
  marquee: {
    init: function () {
      $('.marquee-with-options').marquee({
        speed: 22000,
        gap: 60,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
      });
    }
  },
  contentCategorias: {
    init: function () {
      document.querySelector("#categorias li").classList.add("select");
      let listaTitle = [];
      const enlaces = document.querySelectorAll('#categorias li');
      for (let i = 0; i < enlaces.length; i++) {
        textoitem = enlaces[i].textContent;
        listaTitle.push(textoitem);
      }

      $('.item-slider2').hide();
      const categoryMain = document.querySelector('#categorias li.select').innerHTML;
      if (categoryMain === "Todos") {
        $(`.item-slider2`).show(0);
      } else {
        $(`.item-slider2[data-category="${categoryMain}"]`).show(0);
      }

      enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('select'));
            evento.target.classList.add('select');
            var categoria = evento.target.innerHTML;
            $(`.item-slider2`).not(`[data-category="${categoria}"]`).hide();
            $(`.item-slider2[data-category="${categoria}"]`).show();
            if (categoria === "Todos") {
                $(`.item-slider2`).show();
            }
        })
    })
    }
  }
}

if ($('.home.swiper').length > 0) {
  MyApp.slider1.init();
}

if ($('.swiper2 ').length > 0) {
  MyApp.swiper2.init();
}

if ($('.marquee-with-options').length > 0) {
  MyApp.marquee.init();
}

if ($('.contentCategorias').length > 0) {
  MyApp.contentCategorias.init();
}

if ($('.popup.inicio').length > 0) {
  MyApp.popupInicio.init();
}


