const giftsBlock = document.querySelector('.gifts');
const giftIds = [];
const tabs = document.querySelectorAll('.tabs .tab');
const sortedGifts = gifts
    .map((item, index) => ({ ...item, originalIndex: index }))
    .sort((a, b) => a.name.localeCompare(b.name));

sortedGifts.forEach((item) => {
    giftIds.push(item.originalIndex);
});

tabs.forEach(tab => {

    tab.addEventListener('click', function () {

        if (!this.classList.contains('active')) {
            tabs.forEach(buttonTab => {
                buttonTab.classList.remove('active');
            });
            this.classList.add('active');
            if (this.dataset.category == 'All') {
                printGifts(giftIds);
            }
            else {
                const ids = [];
                sortedGifts.forEach((value) => {
                    if (value.category == this.dataset.category)
                        ids.push(value.originalIndex);
                });
                printGifts(ids);

            }

        }
    })
});


printGifts(giftIds);