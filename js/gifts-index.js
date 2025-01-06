const giftsBlock = document.querySelector('.gifts');

function getRandomGifts() {
    const numbers = Array.from(Array(gifts.length).keys())
    numbers.sort(() => Math.random() - Math.random());
    return numbers.slice(0, 4);
}


const randomGiftIds = getRandomGifts();


printGifts(randomGiftIds)