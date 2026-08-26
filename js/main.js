// cards -->

const reviewCards = document.querySelectorAll('.reviews__card');
const reviewsSection = document.querySelector('.reviews');

const reviewsObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        reviewCards.forEach((reviewCard, index) => {

            setTimeout(() => {
                reviewCard.classList.add('show');
            }, index * 120);

        });

        reviewsObserver.disconnect();

    });

}, {
    threshold: 0.2
});

reviewsObserver.observe(reviewsSection);

const headerTab = document.querySelectorAll('.categories__list-item');
const itemTab = document.querySelectorAll('.categories__cards');

for (let item of headerTab) {
    item.addEventListener('click', function () {

        for (let head of headerTab) {
            head.classList.remove('active');
        }

        item.classList.add('active');


        for (let element of itemTab) {
            element.classList.add('hidden');
        }

        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove('hidden');

        const cards = content.querySelectorAll('.categories__card');
        cards.forEach(card => {
            card.classList.add('hide');
        });
        cards.forEach((card, index) => {

            setTimeout(() => {

                card.classList.remove('hide');

            }, index * 200);

        });

    })
}

// <-- cards

// ------------------------ //

// popup -->

const openBtn = document.getElementById('openBtn');
const popup = document.getElementById('myPopup');
const closeBtn = document.getElementById('closeBtn');

// Открыть по клику на кнопку
openBtn.addEventListener('click', () => {
    popup.classList.add('active');
    document.body.classList.add('overflow');
});

// Закрыть по клику на крестик/кнопку закрытия
closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    document.body.classList.remove('overflow');
});

// Закрыть при клике на темный фон вокруг окна
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('active');
        document.body.classList.remove('overflow');
    }
});

// <-- popup

// ------------------------ //

// accordeon -->

const accordeon = document.querySelectorAll('.accordeon');
const accordeonTitles = document.querySelectorAll('.accordeon__item-title');

accordeonTitles.forEach.call(accordeonTitles, function(accordeonTitle) {
  accordeonTitle.addEventListener('click', function() {
      const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

      accordeonTitle.classList.toggle('accordeon__item-title--active');
      currentText.classList.toggle('accordeon__text--visible');

      if(currentText.classList.contains('accordeon__text--visible')) {
        currentText.style.maxHeight = currentText.scrollHeight + '40px'
      } else {
        currentText.style.maxHeight = null
      }

  });
});

// <-- accordeon
