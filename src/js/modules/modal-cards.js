const openButtons = $('.card'),
    modal = $('.my-modal')[0];

openButtons.on('click', showModal);

function showModal() {
    const $card = $(this),
     //   imgSrc = $card.find('img').attr('src'),
        mealName = $card.find('.title__main').text(),
        price = Math.floor(Math.random() * 9) + 3;

    $(modal)
        .css('display', 'flex')
        .css('top', $(document).scrollTop() );
    //    .find('img').attr('src', imgSrc);

    $(modal).find('.title__main').text(mealName);
    $(modal).find('.my-modal__price').text(price + '$');
    $('body').css('overflow', 'hidden');
}

function hideModal() {
    $(modal).css('display', 'none');
    $('body').css('overflow', 'visible');
}
// Awesome!
$(modal).on('click', function(event) {
    if ( $(event.target).hasClass('my-modal') ) hideModal();
});

$(window).on('resize', function watchModalPosition() {
    if ($(modal).css('display') !== 'none') {
        $(modal).css('top', $(document).scrollTop());
    }
});

$(document).keydown(function(key) {
    if (key.keyCode === 27) hideModal();
});