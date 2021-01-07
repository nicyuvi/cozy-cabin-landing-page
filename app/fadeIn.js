// get elements with fade class
const fadeElements = document.querySelectorAll('.fade');

// observer options
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.25,
};

// observer callback
function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    if (
      // fade right to left
      entry.isIntersecting &&
      entry.target.classList.contains('fadeOutRight')
    ) {
      // fade in observed elements that are in view
      entry.target.classList.add('fadeInLeft');
    } else if (
      // fade left to right
      entry.isIntersecting &&
      entry.target.classList.contains('fadeOutLeft')
    ) {
      entry.target.classList.add('fadeInRight');
    } else if (
      // fade down to up
      entry.isIntersecting &&
      entry.target.classList.contains('fadeOutDown')
    ) {
      entry.target.classList.add('fadeInUp');
    }
  });
}

// instantiate intersectionObserver
const observer = new IntersectionObserver(observerCallback, observerOptions);

// invoke on each fade element
export default fadeElements.forEach((element) => observer.observe(element));
