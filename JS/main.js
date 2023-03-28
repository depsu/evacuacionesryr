$('.carrusel-servicios').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout: 4300,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

$('.carrusel2').owlCarousel({
    loop:true,
    margin:10,
    pagination:false,
    dots:false,
    nav:false,
    autoplay:true,
    autoplayTimeout: 6800,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:4
        }
    }
})




var menu = document.querySelector('.hamburger');


function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}


menu.addEventListener('click', toggleMenu, false);

