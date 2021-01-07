// variables
const hamBtn = document.querySelector('.hamburger');
const hamMenu = document.querySelector('#mobile-nav-links');
const desktopNavBar = document.querySelector('#desktop-nav');

export const navBar = () => {
  hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('active');
    hamMenu.classList.toggle('active');
  });

  document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 250) {
      desktopNavBar.style.backgroundColor = '#023047';
    } else desktopNavBar.style.backgroundColor = 'transparent';
  });
};
