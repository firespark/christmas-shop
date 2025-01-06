const arrowTop = document.querySelector(".arrow-top");

window.onscroll = function () {
    checkButton()
};

window.addEventListener('resize', () => {
    checkButton();
});

arrowTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})

function checkButton() {
    if (document.documentElement.scrollTop >= 300 && document.documentElement.scrollWidth <= 768) {
        arrowTop.style.visibility = 'visible';
        arrowTop.style.opacity = 1;
    } else {
        arrowTop.style.visibility = 'hidden';
        arrowTop.style.opacity = 0;
    }
}
