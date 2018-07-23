const mySwiper = new Swiper('.swiper-container', {
    speed: 700,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<div class=' + className + '>0' + (index + 1)+ '</div>';
        }
    }
});
