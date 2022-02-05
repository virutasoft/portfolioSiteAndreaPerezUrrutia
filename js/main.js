// change bg header
function scrollHeader(){
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader);
}

// MODAL SERVICES
const modalViews = document.querySelectorAll('.services__modal'),modalBtns = document.querySelectorAll('.services__button'),
modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    });
});

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal');
        });
    });
});
// MODAL SERVICES

// MIXITUP FILTER PORTFOLIO
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 600
    }
});
// MIXITUP FILTER PORTFOLIO

// active link work
const linkWork = document.querySelectorAll('.work__item')
function activeWork() {
    linkWork.forEach(l=>l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))
// active link work

// swiper slide
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop:true,
    grabCursor:true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,

        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },

  });
// swiper slide
