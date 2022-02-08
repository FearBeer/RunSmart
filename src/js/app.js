const back = document.querySelector('.slider__back');
const next = document.querySelector('.slider__next');
const slider = document.querySelector('.slider__inner');

const sliderLength = Array.from(slider.children).length;
let currentSlide = 0;

next.addEventListener('click', () => {

    slider.children[currentSlide].classList.remove ('active');
    currentSlide++;
        if (currentSlide === sliderLength ) {
            currentSlide = 0;        
        } 
    slider.children[currentSlide].classList.add('active');
    
});

back.addEventListener('click', () => {

    slider.children[currentSlide].classList.remove ('active');
    currentSlide--;
    if (currentSlide === -1 ) {
        currentSlide = sliderLength - 1;        
    } 
    slider.children[currentSlide].classList.add('active');
    
});


(function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })     
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
})(jQuery);