const toggle = $('.nav-mobile-toggle')[0];

$(toggle).on('click', toggleMenu);

function toggleMenu() {
    const menu = $('.header__nav')[0],
        info = $('.header__info')[0];

    if (info) $(info).toggleClass('hidden');

    $(menu).toggleClass('shown');
    $(toggle).toggleClass('toggle-closed');
}