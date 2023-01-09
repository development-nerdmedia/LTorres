AOS.init();


let navegador = navigator.userAgent;
// if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
if (navigator.userAgent.match(/iPhone/i)) {
  document.body.classList.add("iphone");
}




var data = sessionStorage.getItem('popUp');
var URLactual = window.location;

if ($(".popup.inicio").length > 0) {
  if (data === "false") {
    document.body.classList.remove("hide-scrolling");
    $(`section.popup`).hide();
  }else{  
    setTimeout(() => {
      document.querySelector('.popup').classList.add("mostrarPop");
      document.body.classList.add("hide-scrolling");
    }, 2000);
  }
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


$(".itemNoticia").hover(function () {
  $(".linea").addClass("resaltar");
}, function () {
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


document.addEventListener("click", function (e) {
  var formespacioselect = document.querySelectorAll('.formulario form select');
  if (e.target.closest(".formulario form select")) {
    // formespacioselect.forEach(function (shinyItem2) {
    //     shinyItem2.parentElement.classList.remove("active");
    // })
    // if (e.target.parentElement.classList.contains("active")) {
      // e.target.parentElement.classList.remove("active");
    // }else{
      e.target.parentElement.classList.toggle("active");
      console.log("aprietas el select");
    // }
  }
  else {
    formespacioselect.forEach(function (shinyItem2) {
        shinyItem2.parentElement.classList.remove("active")
    });
  }

  if (e.target.closest("section.formularioReferidos .container .part2 .formulario .agregar button")) {
    e.preventDefault();

    var formRef = document.querySelectorAll("section.formularioReferidos .container .part2 .formulario .refediros-grupo");    
    var buttonRef = document.querySelector("section.formularioReferidos .container .part2 .formulario .agregar button");
    var inputsref = document.querySelectorAll("section.formularioReferidos .container .part2 .formulario .refediros-grupo input");    
    var selectreft = document.querySelectorAll("section.formularioReferidos .container .part2 .formulario .refediros-grupo select");

    for (let i = 0; i < formRef.length; i++) {
      formRef[i].classList.add("active");
      formRef[i].querySelector("h4").classList.add("active");
    }

    for (let i = 0; i < inputsref.length; i++) {
      inputsref[i].classList.add("form-input");
    }

    for (let i = 0; i < selectreft.length; i++) {
      selectreft[i].classList.add("form-input");
    }

    buttonRef.classList.add("ocul");
  }


  if (e.target.closest("section.bannerInterna .part2 a.categoria")) {
    const titleProyect = e.target.getAttribute('data-category');
    localStorage.setItem('CatNovedad', `${titleProyect}`);
  }

  if (e.target.closest("li a")) {
    localStorage.setItem('CatNovedad', "none");
  }
  if (e.target.closest("header nav .navigation ul li.menu-mobile img")) {
    document.querySelector("section.menuMovil").classList.toggle("open");
    document.querySelector("header nav .navigation ul li.menu-mobile").classList.toggle("change");
  }
})



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


      const categoriaHome = document.querySelectorAll("section.home .item-slider .adelante .info .ubicacion")
      const tituloHome = document.querySelectorAll("section.home .item-slider .adelante .info h2");
      const buttonHome = document.querySelectorAll("section.home .item-slider .adelante .info a");
      setTimeout(() => {
        for (let i = 0; i < categoriaHome.length; i++) {
          categoriaHome[i].classList.add('aos-init');
          categoriaHome[i].classList.add('aos-animate');
        }
        for (let i = 0; i < tituloHome.length; i++) {
          tituloHome[i].classList.add('aos-init');
          tituloHome[i].classList.add('aos-animate');
        }
        for (let i = 0; i < buttonHome.length; i++) {
          buttonHome[i].classList.add('aos-init');
          buttonHome[i].classList.add('aos-animate');
        }
      }, 3000);

    }
  },
  swiper2: {
    init: function () {
      var swiper2 = new Swiper(".swiper2", {
        // slidesPerView: 2,
        // spaceBetween: 85,
        // centeredSlides: true,
        slidesPerView: 'auto',
        // slidesPerView: 3,
        spaceBetween: 85,
        freeMode: {
          enabled: true,
          // sticky: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        breakpoints: {
          '1441':{
            slidesPerView: 'auto',
            spaceBetween: 70,
          },
          '1281':{
            spaceBetween: 70,
          },
          '1080':{
            spaceBetween: 70,
          },
          '921':{
            spaceBetween: 40,
          },
          '769':{
            spaceBetween: 60,
            // slidesPerView: 'auto',
            // slidesPerView: false,
            freeMode: {
              enabled: true,
            },
          },
          '375':{
            spaceBetween: 100,
            // slidesPerView: 'auto',
            freeMode: {
              enabled: false,
            },
          },
        },
      });
    }
  },
  swiper3: {
    init: function () {
      var swiper3 = new Swiper(".swiper3", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
        },
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

      var categoriaNovedad = localStorage.getItem("CatNovedad");
      if (categoriaNovedad == "none") {
        document.querySelector("#categorias li").classList.add("select");
      }
      
      let listaTitle = [];
      const enlaces = document.querySelectorAll('#categorias li');
      for (let i = 0; i < enlaces.length; i++) {
        textoitem = enlaces[i].textContent;
        listaTitle.push(textoitem);
      }

      if (listaTitle.includes(categoriaNovedad)) {
        for (let y = 0; y < enlaces.length; y++) {
            if (categoriaNovedad === enlaces[y].textContent) {
                document.querySelector("#categorias li").classList.remove("select");
                enlaces[y].classList.add('select')
            }
        }
      }

      $('.item-slider2').hide();

      var categoryMain = document.querySelector('#categorias li.select').innerHTML;   

      if (categoryMain === "Todos") {
        $(`.item-slider2`).show(0);
      } else {
        $(`.item-slider2[data-category="${categoryMain}"]`).show();
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
  selectCategorias:{
    init: function () {
      var select = document.getElementById('categoryPortfolio');
      var categoriaServices = localStorage.getItem("CatNovedad");

      if (categoriaServices !== "none") {        
        document.querySelector('#categoryPortfolio [value="' + categoriaServices + '"]').selected = true;
      }      

      select.addEventListener('change', function () {
        var selectedOption = this.options[select.selectedIndex];
        var cateSelect = selectedOption.text.trimStart().trimEnd();

        $(`.item-slider2`).not(`[data-category="${cateSelect}"]`).hide();
        $(`.item-slider2[data-category="${cateSelect}"]`).show();
          if (cateSelect === "Todos") {
          $(`.item-slider2`).show();
        }
      });
      
      document.addEventListener("click", function (e) {
        if (e.target.closest("#categoryPortfolio")) {
            e.target.parentElement.classList.add("active");
        }
        else {
          document.querySelector(".contentCategorias form").classList.remove("active");
        }
      })


    }
  },
  sliderProyecto: {
    init: function () {
      var swiper = new Swiper(".slider-proyecto", {
        noSwiping: true,
        noSwipingClass: 'item-slider-proyecto',
        loop: true,
        autoplay: {
          delay: 5000,
        },
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

      gsap.registerPlugin(ScrollTrigger);
      const contadorsec = document.querySelectorAll(".contadorsec");
      
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.contadorsec',
          // markers: true,
          start: '-40% 80%',
          end: '100% 140%',
          scrub: 1,
        },
      });
      tl.to(contadorsec, { rotation: 0, duration: 0 })
      tl.fromTo(
        '.contadorsec',
        0.1,
        {
          opacity: 1
        },
        {
          opacity: 1
        }
      )
      tl.add(function () {
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
        }, 100);

        const numbermeta2 = parseInt(meta[1].textContent)
        let cantidad2 = 0;

        let tiempo2 = setInterval(() => {
          cantidad2 += 1
          numero[1].textContent = cantidad2

          if (cantidad2 >= numbermeta2) {
            clearInterval(tiempo2)
          }
        }, 1);


        const numbermeta3 = parseInt(meta[2].textContent)
        let cantidad3 = 0;

        let tiempo3 = setInterval(() => {
          cantidad3 += 1
          numero[2].textContent = cantidad3

          if (cantidad3 === numbermeta3) {
            clearInterval(tiempo3)
          }
        }, 150);
      })


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
  validateForm:{
    init: function () {

      $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });

      var formespacioinput = document.querySelectorAll('.formulario .form-input');
      var formespacioselect = document.querySelectorAll('.formulario select.form-input');
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

      if (document.getElementById("numeroDoc")) {
        $("#numeroDoc").css('opacity','0.5')
        $('#numeroDoc').prop('disabled', false);
        $('#numeroDoc').css('pointer-events', 'none');
        document.querySelector("#numeroDoc").classList.remove("formSelect");
        document.querySelector("#numeroDoc").classList.remove("wpcf7-validates-as-required");
        document.querySelector("#numeroDoc").classList.remove("form-input");
        
      $("#documento").change(function(){
        // document.querySelector("#documento").parentElement.classList.remove("active");
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
      }

      

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
          //if (formespaciocheck[i].classList.contains("activo")) {            
            //e.preventDefault();
            //console.log("a");
          //}
          if (formespaciocheck[i].checked) {
            formespaciocheck[i].parentElement.parentElement.classList.remove("falta");
          } else {
            formespaciocheck[i].parentElement.parentElement.classList.add("falta");
          }
        }
      }

      document.addEventListener("click", (e) => {
        
        if (e.target.closest(".formulario form .enviar button")) {
          localStorage.setItem('URL', URLactual);
        }

        if (e.target.closest(".labelTerminos")) {
          document.querySelector(".labelTerminos").classList.toggle("activo");
        }

        if (e.target.closest(".checkbox-box input")) {
          document.querySelector(".labelPoliticas").classList.toggle("activo");
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
    }
  },
  videoPortada:{
    init: function () {
      function mostratVideo(e) {
        var nameURL = e.target.parentElement.parentElement.querySelector(".urlvieo p").textContent;
        Swal.fire({
            showCloseButton: true,
            html:
                '<div class="video1-modal-content">' +
                '<div class="video1-modal-content__mask">' +
                '<div class="video1-modal-content__video-wrapper">' +
                '<div style="padding:56.25% 0 0 0;position:relative;">' +
                `<iframe src="${nameURL}" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>` +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
        })
      }

      document.addEventListener("click", function (e) {
        if (e.target.closest(".videoPortada")) {
          mostratVideo(e)
        }
      })

    }   
  },
  fecha:{
    init: function () {

      var fecha = new Date();
      var dia = ("0" + fecha.getDate()).slice(-2);
      var mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
      var anio = fecha.getFullYear().toString();
      var fechaFormateada = dia + "/" + mes + "/" + anio;
      
      console.log(fechaFormateada); 

      var fechainput = document.getElementById("fecha");
      fechainput.innerHTML = fechaFormateada;
    }
  }
}

if ($('.videoPortada').length > 0) {
  MyApp.videoPortada.init();
}

if ($('.home.swiper').length > 0) {
  MyApp.slider1.init();
}

if ($('.swiper2 ').length > 0) {
  MyApp.swiper2.init();
}
if ($('.swiper3 ').length > 0) {
  MyApp.swiper3.init();
}

if ($('.contadorsec').length > 0) {
  MyApp.contador.init();
}

if ($('.marquee-with-options').length > 0) {
  MyApp.marquee.init();
}

if ($('.contentCategorias ul').length > 0) {
  MyApp.contentCategorias.init();
}

if ($('.contentCategorias form').length > 0) {
  MyApp.selectCategorias.init();
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
}

if ($('.formulario').length > 0) {
  MyApp.validateForm.init();
}

if ($('.thnaks').length > 0) {
  MyApp.Gracias.init();
}
if ($('section.libro-bajada .datosCliente .fecha').length > 0) {
  MyApp.fecha.init();
}


