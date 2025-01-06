const menuRight = document.querySelector('.menu-right');
const menuBurger = document.querySelector('.burger');
const menuLinks = document.querySelectorAll('.nav-menu-mobile li');


function showHideMenu() {
    document.body.classList.toggle('overflow-hidden');
    menuRight.classList.toggle('opened');
    menuBurger.classList.toggle('opened');

    if (menuRight.classList.contains('hide-nav') ||
        (!menuRight.classList.contains('show-nav') && !menuRight.classList.contains('hide-nav'))
    ) {
        menuRight.classList.remove('hide-nav');
        menuRight.classList.add('show-nav');
    }
    else {
        menuRight.classList.remove('show-nav');
        menuRight.classList.add('hide-nav');
    }

    if (menuBurger.classList.contains('hide-burger') ||
        (!menuBurger.classList.contains('show-burger') && !menuBurger.classList.contains('hide-burger'))
    ) {
        menuBurger.classList.remove('hide-burger');
        menuBurger.classList.add('show-burger');
    }
    else {
        menuBurger.classList.remove('show-burger');
        menuBurger.classList.add('hide-burger');
    }
}

menuBurger.onclick = function () {
    showHideMenu();
};

menuLinks.forEach(link => {
    link.addEventListener('click', showHideMenu);
});

document.addEventListener('keydown', function(e) {
	if( e.code === 'Escape' ){
		document.body.classList.remove('overflow-hidden');
        menuRight.classList.remove('opened');
        menuBurger.classList.remove('opened');
        menuBurger.classList.remove('show-burger');
        menuBurger.classList.add('hide-burger');
        menuRight.classList.remove('show-nav');
        menuRight.classList.add('hide-nav');
	}
});

window.addEventListener('resize', () => {
    if (document.documentElement.scrollWidth < 768) {
        menuRight.classList.remove('hide-nav');
        menuBurger.classList.remove('hide-burger');

    }
    else {
        if (menuRight.classList.contains('opened')) {
            document.body.classList.remove('overflow-hidden');
            menuRight.classList.remove('opened');
            menuRight.classList.remove('show-nav');
            menuBurger.classList.remove('opened');
            menuBurger.classList.remove('show-burger');
        }
    }
});
