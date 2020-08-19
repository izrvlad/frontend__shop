$(document).ready(function () {
    $('.slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false
            },
            480:{
                items:1
            }
        }
    });
    $('.carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1

            },
            480:{
                items:2
            },
            680:{
                items:3
            },
            1024:{
                items:4
            }
        }
    });
const search = document.querySelector('.icons__search');
const body = document.querySelector('body');
search.addEventListener('click',function (event) {
    event.stopPropagation();
    this.classList.add('icons__search--active')
})
body.addEventListener('click', function () {
   search.classList.remove('icons__search--active')
})
});