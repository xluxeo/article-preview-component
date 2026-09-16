const shareButtons = document.querySelectorAll('.js-share-trigger');
shareButtons.forEach(button => {
    button.addEventListener('click', toggleShare);
});


function toggleShare() {
    const cardFooter = document.querySelector('.c-card__footer');
    cardFooter.classList.toggle('active');
}