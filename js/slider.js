const carousel = document.querySelector(".slider__slides");
const cardList = carousel.querySelectorAll(".slider__slide");
const arrowLeft = document.querySelector(".slider__arrow-left");
const arrowRight = document.querySelector(".slider__arrow-right");
const sliderControls = document.querySelectorAll('.slider__navigation');
const containerBody = document.querySelector(".container-body");
const container = document.querySelector(".container");

let defaultOffset = 0;
let currentOffset = defaultOffset;
let visibleArea = containerBody.scrollWidth;
let totalWidth = carousel.scrollWidth;
let clicks = (visibleArea > 768) ? 3 : 6;
let margin = parseInt(getComputedStyle(container).marginLeft, 10);

let offset = (totalWidth - visibleArea + margin * 2) / clicks;
let minOffset = -offset * clicks;
let maxOffset = 0;
let currentClick = 0;

function resizeWindow() {
    visibleArea = containerBody.scrollWidth;
    totalWidth = carousel.scrollWidth;
    clicks = (visibleArea > 768) ? 3 : 6;
    margin = parseInt(getComputedStyle(container).marginLeft, 10);
    offset = (totalWidth - visibleArea + margin * 2) / clicks;
    minOffset = -offset * clicks;

    let possibleOffsets = [];
    for (let i = 0; i < clicks; i++) {
        possibleOffsets.push(0 - offset * i);
    }
    let closest = possibleOffsets.reduce(function (prev, curr) {
        return (Math.abs(curr - currentOffset) < Math.abs(prev - currentOffset) ? curr : prev);
    });
    //currentClick = possibleOffsets.indexOf(closest);
    //currentOffset = closest;
    currentOffset = 0;
    currentClick = 0;
    carousel.style.transform = `translateX(${currentOffset}px)`;
    checkButtons();
}

function changeSlide(left = true) {
    if (left) {
        if (currentClick > 0) {
            currentOffset += offset;
            currentClick--;
        }
    }
    else {
        if (currentClick < clicks) {
            currentOffset -= offset;
            currentClick++
        }
    }
    if (currentOffset > defaultOffset) currentOffset = defaultOffset;
    checkButtons();
    carousel.style.transform = `translateX(${currentOffset}px)`;
}

function checkButtons() {
    if (currentClick > 0) arrowLeft.classList.remove('inactive')
    else arrowLeft.classList.add('inactive')
    if (currentClick < clicks) arrowRight.classList.remove('inactive')
    else arrowRight.classList.add('inactive')
}

window.addEventListener("resize", () => {
    resizeWindow();
});

arrowRight.onclick = function () {
    if (!arrowRight.classList.contains('inactive'))
        changeSlide(false);
};

arrowLeft.onclick = function () {
    if (!arrowLeft.classList.contains('inactive'))
        changeSlide();
};

