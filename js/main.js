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


  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 3,
    spaceBetween: 85,
    // centeredSlides: true,
  });