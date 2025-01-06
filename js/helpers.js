function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function printGifts(giftArray) {
    giftsBlock.innerHTML = '';
    giftArray.forEach(giftId => {
        const gift = gifts[giftId];
        const card = document.createElement('div');
        card.classList.add('gifts__card');
        card.dataset.id = giftId;

        const cardImg = document.createElement('div');
        cardImg.classList.add('gifts__card-img');

        const img = document.createElement('img');
        img.src = `img/gift-${gift.category.toLocaleLowerCase().replace(' ', '-')}.png`;

        cardImg.append(img);

        const cardCaption = document.createElement('div');
        cardCaption.classList.add('gifts__caption');

        const h4 = document.createElement('div');
        h4.classList.add('h4', getColor(gift.category));
        h4.innerText = gift.category;

        const h3 = document.createElement('div');
        h3.classList.add('h3', 'gifts__caption-h3');
        h3.innerText = gift.name;

        cardCaption.append(h4);
        cardCaption.append(h3);

        card.append(cardImg);
        card.append(cardCaption);

        giftsBlock.append(card);
    });
}

function getColor(category) {
    switch (category) {
        case 'For Work':
            return 'color-purple';

        case 'For Health':
            return 'color-green';

        case 'For Harmony':
            return 'color-pink';

        default:
            return '';
    }
    
}