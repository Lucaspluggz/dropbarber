var swiper = new Swiper(".slide-conteudo", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grapCursor: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,  
        },
        520: {
            slidesPerView: 2,  
        },
        950: {
            slidesPerView: 3,  
        },

    }
  });