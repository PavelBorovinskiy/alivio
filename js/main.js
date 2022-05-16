
/**
 * Плавная прокрутка по якарям
 */
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

/**
 * Анимация бургер меню
 */
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');

/**
 * Открытие бургер меню
 */
const mobileNav = document.querySelector('.mobile-nav');


mobileNavButton.addEventListener('click', (e) => {
  
    e.preventDefault();
    mobileNavIcon.classList.toggle('active')
    mobileNav.classList.toggle('active')
    
    document.body.classList.toggle('no-scroll')
    closseNav()
});

/**
 * Переход по ссылкам и закрытие бургер меню
 */




function closseNav (){
    const navLink = document.querySelectorAll('.mobile-nav__link');
    navLink.forEach(link =>{
        link.addEventListener('click', ()=>{
            mobileNavIcon.classList.remove('active')
            mobileNav.classList.remove('active')

            document.body.classList.remove('no-scroll')
        })
    })
}

