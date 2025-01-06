const modalElem = document.querySelector('#modal-gift');
const productImg = modalElem.querySelector('.gifts__card-img img');
const productCategory = modalElem.querySelector('.h4');
const productTitle = modalElem.querySelector('.h3');
const productDescription = modalElem.querySelector('.gifts__description p');
const productExperience = modalElem.querySelector('.gifts__experience');

function printStats(stats) {
    productExperience.innerHTML = '<div class="h4 gifts__experience-h4">Adds superpowers to:</div>';

    for (const [key, value] of Object.entries(stats)) {

        const item = document.createElement('div');
        item.classList.add('experience__item');

        const itemLeft = document.createElement('div');
        itemLeft.classList.add('experience__item-left');
        itemLeft.innerHTML = `<p>${capitalizeFirstLetter(key)}</p>`

        const itemRight = document.createElement('div');
        itemRight.classList.add('experience__item-right');

        const p = document.createElement('p');
        p.innerText = value;

        const stars = document.createElement('div');
        stars.classList.add('experience__item-stars');

        const expInteger = parseInt(value[1]);

        for (let i = 0; i < expInteger; i++) {
            const starImage = document.createElement('img');
            starImage.src = 'img/svg/snowflake.svg';
            stars.append(starImage);
        }

        itemRight.append(p);
        itemRight.append(stars);

        item.append(itemLeft);
        item.append(itemRight);

        productExperience.append(item);
    };
}

const closeModal = event => {

    const target = event.target;

    if (target === modalElem ||
        ('.modal-close' && target.closest('.modal-close')) ||
        event.code === 'Escape'
    ) {

        modalElem.style.opacity = 0;

        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
            document.body.classList.remove('overflow-hidden');
        }, 300);

        window.removeEventListener('keydown', closeModal);
    }
}

const openModal = (e) => {
    e.preventDefault();

    document.body.classList.add('overflow-hidden');
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', closeModal)
};

modalElem.addEventListener('click', closeModal);

document.querySelector('.gifts').addEventListener('click', function (event) {

    let productElement = event.target.closest('.gifts__card');

    if (productElement && this.contains(productElement)) {
        const id = productElement.dataset.id;
        const giftObj = gifts[id];

        productImg.src = `img/gift-${giftObj.category.toLocaleLowerCase().replace(' ', '-')}.png`;
        productCategory.innerText = giftObj.category;
        productCategory.className = '';
        productCategory.classList.add('h4', getColor(giftObj.category));
        productTitle.innerText = giftObj.name;
        productDescription.innerText = giftObj.description;

        printStats(giftObj.superpowers)
        openModal(event);
    }
});
