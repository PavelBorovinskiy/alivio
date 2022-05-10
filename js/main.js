$('.scrollto a').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 550,
        easing: 'linear'
    });
    return false;
});

