function showHeaderOnTop() {
    const header = document.querySelector('.header');
    document.addEventListener('scroll', () => {
        if (window.scrollY > 90) {
            header.classList.add('header_fixed');
        } else {
            header.classList.remove('header_fixed');
        }
    });
};
showHeaderOnTop();