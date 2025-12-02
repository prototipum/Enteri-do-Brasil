const hide = document.querySelector('.hide');
const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
    loader.style.display = 'none';
    hide.style.display = 'block';
});
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