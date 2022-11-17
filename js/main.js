AOS.init();
var data = sessionStorage.getItem('popUp');
var URLactual = window.location;
if (data === "false") {
  document.body.classList.remove("hide-scrolling");
  $(`section.popup`).hide();
}else{  
  setTimeout(() => {
    document.querySelector('.popup').classList.add("mostrarPop");
    document.body.classList.add("hide-scrolling");
  }, 2000);
}

if ($(".popup.inicio").length > 0) {
  document.body.classList.remove("hide-scrolling");
}else{
  document.body.classList.remove("hide-scrolling");
}


document.body.addEventListener("mousemove", e => {
  gsap.to(".ht-cursor", {
    x: e.clientX,
    y: e.clientY,
  })
  gsap.to(".ht-cursor2", {
    x: e.clientX,
    y: e.clientY,
  })
  gsap.to(".ht-cursor3", {
    x: e.clientX,
    y: e.clientY,
  })
  gsap.to(".ht-cursor4", {
    x: e.clientX,
    y: e.clientY,
  })
})

$(".item-slider2").hover(function () {
  $(".ht-cursor").addClass("mostrar");
  $(".linea").addClass("resaltar");
}, function () {
  $(".ht-cursor").removeClass("mostrar");
  $(".linea").removeClass("resaltar");
});


$(".call").hover(function () {
  $(".ht-cursor2").addClass("mostrar");
}, function () {
  $(".ht-cursor2").removeClass("mostrar");
});

$(".call.interna").hover(function () {
  $(".ht-cursor3").addClass("mostrar");
}, function () {
  $(".ht-cursor3").removeClass("mostrar");
});

$(".itemNoticia").hover(function () {
  $(".ht-cursor4").addClass("mostrar");
}, function () {
  $(".ht-cursor4").removeClass("mostrar");
});



/* efecto de desplazamiento de los botones de menú */

const menuItems = document.querySelectorAll(
  'a[href^="#"]'
);

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget) - 110;
  scrollToPosition(to);
}

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 600;

  const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
          return (distance / 2) * time * time * time * time + from;
      return (
          (-distance / 2) * ((time -= 2) * time * time * time - 2) + from
      );
  };

  const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
          clearInterval(timer);
      }
      window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}

/* END efecto de desplazamiento de los botones de menú */

MyApp = {
  popupInicio: {
    init: function () {
      document.addEventListener("click", (e) => {
        if (e.target.closest(".popup .close")) {
          document.body.classList.remove("hide-scrolling");
          $(`section.popup`).hide();
          sessionStorage.setItem('popUp', 'false');
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
        // slidesPerView: 3,
        // spaceBetween: 85,
        // centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 85,
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
  },
  sliderProyecto: {
    init: function () {
      var swiper = new Swiper(".slider-proyecto", {
        noSwiping: true,
        noSwipingClass: 'item-slider-proyecto',
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  },
  contador: {
    init: function () {

      // function Contador() {
        /* Nuevo metodo unitario */
        const numero = document.querySelectorAll(".contadorsec .contadores .contador h4")
        const meta = document.querySelectorAll(".contadorsec .contadores .contador span.meta")
        const numbermeta = parseInt(meta[0].textContent)
        let cantidad = 0;

        let tiempo = setInterval(() => {
          cantidad += 1
          numero[0].textContent = cantidad

          if (cantidad === numbermeta) {
            clearInterval(tiempo)
          }
        }, 60);

        const numbermeta2 = parseInt(meta[1].textContent)
        let cantidad2 = 0;

        let tiempo2 = setInterval(() => {
          cantidad2 += 1
          numero[1].textContent = cantidad2

          if (cantidad2 === numbermeta2) {
            clearInterval(tiempo2)
          }
        }, 30);


        const numbermeta3 = parseInt(meta[2].textContent)
        let cantidad3 = 0;

        let tiempo3 = setInterval(() => {
          cantidad3 += 1
          numero[2].textContent = cantidad3

          if (cantidad3 === numbermeta3) {
            clearInterval(tiempo3)
          }
        }, 38);
      // }



      // window.addEventListener("scroll", () => {
      //   let windowBottom = window.pageYOffset + window.innerHeight;
      //   const contenedor = document.querySelector(".contadorsec")
      //   // document.querySelectorAll(".contadorsec").forEach(el => {
      //     let objectBottom = contenedor.offsetTop + contenedor.offsetHeight;
      //     if (objectBottom < windowBottom) {
      //       Contador();
      //     }
      //   // });
      // })

      /* Con un for */

      // const contadores = document.querySelectorAll(".contadorsec .contadores .contador");

      // for (let i = 0; i < contadores.length; i++) {
      //   var numero = contadores[i].querySelector("h4")
      //   var meta = parseInt(contadores[i].querySelector("span.meta").textContent)
      //   let cantidad = 0;

      //   let tiempo = setInterval(() => {
      //     cantidad+=1
      //     numero.textContent = cantidad

      //     if (cantidad === meta) {
      //       clearInterval(tiempo)
      //     }
      //   }, 80);
      // }
    }
  },
  historia:{
    init: function () {
      if ($(".lineaContent").length > 0) {
        $(".lineaContent").stick_in_parent({
            offset_top: 350,
        });
      }
    }
  },
  imgReferidos:{
    init: function () {
      if ($(".imgScroll").length > 0) {
        $(".imgScroll").stick_in_parent({
            offset_top: 150,
        });
      }
    }
  },
  formularioReferidos:{
    init: function () {
      document.addEventListener("click", (e) => {
        if (e.target.closest(".labelTerminos")) {
          document.querySelector(".labelTerminos").classList.toggle("activo");
        }
        if (e.target.closest(".labelPoliticas")) {
          document.querySelector(".labelPoliticas").classList.toggle("activo");
        }
      });
    }
  },
  validateForm:{
    init: function () {

      $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });

      var formespacioinput = document.querySelectorAll('.formulario .form-input');
      var formespacioselect = document.querySelectorAll('.formulario select');
      var formespaciocheck = document.querySelectorAll(".formulario input[type='checkbox']");


      function validateSelect(e) {
        
        for (let i = 0; i < formespacioselect.length; i++) {
          if (formespacioselect[i].classList.contains("default")) {            
          }else{
            if (formespacioselect[i].value == "") {
              formespacioselect[i].classList.add("falta");
              e.preventDefault();
            }else{
              formespacioselect[i].classList.remove("falta");
            }
          }
          
        }
      }

      $("#numeroDoc").css('opacity','0.5')
      $('#numeroDoc').prop('disabled', false);
      $('#numeroDoc').css('pointer-events', 'none');
      document.querySelector("#numeroDoc").classList.remove("formSelect");
      document.querySelector("#numeroDoc").classList.remove("wpcf7-validates-as-required");
      document.querySelector("#numeroDoc").classList.remove("form-input");

      $("#documento").change(function(){
        if ($("#documento").val() !== '') {
          $("#numeroDoc").css('opacity','1');
          $('#numeroDoc').css('pointer-events', 'auto');
          document.querySelector("#numeroDoc").classList.add("form-input");
        }else{
              $("#numeroDoc").css('opacity','0.5')
              $('#numeroDoc').prop('disabled', false);
              $('#numeroDoc').val('');
              $('#numeroDoc').css('pointer-events', 'none');
              document.querySelector("#numeroDoc").classList.remove("form-input");
              document.querySelector("#numeroDoc").classList.remove("falta");
        }
      })

      function validateInput(e) {
        formespacioinput = document.querySelectorAll('.formulario .form-input');
        for (let y = 0; y < formespacioinput.length; y++) {
            if (!formespacioinput[y].value) {
                formespacioinput[y].classList.add("falta");
                e.preventDefault();
            } else {
                formespacioinput[y].classList.remove("falta");
            }
        }
      }

      function validateCheck(e){
        formespaciocheck = document.querySelectorAll(".formulario input[type='checkbox']");
        for (let i = 0; i < formespaciocheck.length; i++) {
          if (formespaciocheck[i].classList.contains("activo")) {            
            e.preventDefault();
          }
        }
      }

      document.addEventListener("click", (e) => {
        
        if (e.target.closest(".formulario form .enviar button")) {
          localStorage.setItem('URL', URLactual);
        }

        if (e.target.closest(".formulario form .enviar button[type='submit']")) {
          validateInput(e);
          validateSelect(e);
          if ($(".checkbox-box").length > 0) {
            validateCheck(e);
          }
        }
      })
    }
  },
  Gracias:{
    init: function () {
      var link = localStorage.getItem("URL");
        $('.thnaks .close').attr("href", link);
        console.log(localStorage.getItem("URL"));
    }
  }
}

if ($('.home.swiper').length > 0) {
  MyApp.slider1.init();
}

if ($('.swiper2 ').length > 0) {
  MyApp.swiper2.init();
}

if ($('.contadorsec').length > 0) {
  MyApp.contador.init();
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

if ($('.slider-proyecto').length > 0) {
  MyApp.sliderProyecto.init();
}

if ($('.historia').length > 0) {
  MyApp.historia.init();
}

if ($('.formularioReferidos').length > 0) {
  MyApp.imgReferidos.init();
  MyApp.formularioReferidos.init();
}

if ($('.formulario').length > 0) {
  MyApp.validateForm.init();
}

if ($('.thnaks').length > 0) {
  MyApp.Gracias.init();
}


