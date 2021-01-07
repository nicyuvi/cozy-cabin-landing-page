// variables
const hamBtn = document.querySelector('.hamburger');
const hamMenu = document.querySelector('#mobile-nav-links');

export const navBar = () => {
  hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('active');
    hamMenu.classList.toggle('active');
  });
};
