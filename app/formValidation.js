// client side form validation

// form
const contactForm = document.querySelector('#contact-form');
// submit btn
const submitBtn = document.querySelector('#submit-btn');

//inputs
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone');
const stateSelect = document.querySelector('#state');

// error divs
const firstNameError = document.querySelector('.first-name-error');
const lastNameError = document.querySelector('.last-name-error');
const emailError = document.querySelector('.email-error');
const phoneError = document.querySelector('.phone-error');
const stateSelectError = document.querySelector('.state-error');

// form validate function
export const formValidate = () => {
  contactForm.addEventListener('submit', (e) => {
    // array to hold our error messages
    // this gets reassigned to empty array every time we attempt a submit
    let errorMessages = [];

    // check if first name input is filled out
    if (firstName.value.length === 0) {
      errorMessages.push('first name error');
      firstNameError.innerHTML = 'Please enter your first name';
    } else firstNameError.innerHTML = '';

    // check if last name input is filled out
    if (lastName.value.length === 0) {
      errorMessages.push('first name error');
      lastNameError.innerHTML = 'Please enter your last name';
    } else lastNameError.innerHTML = '';

    // Verify email regex
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // test regex against input value
    if (emailRegex.test(email.value) === false) {
      errorMessages.push('email error');
      emailError.innerHTML = 'Not a valid email';
    } else emailError.innerHTML = '';

    //Verify phone number regex
    const phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneNumberRegex.test(phoneNumber.value) === false) {
      errorMessages.push('phone error');
      phoneError.innerHTML =
        'Please enter phone number in the format: "xxx-xxx-xxxx"';
    } else phoneError.innerHTML = '';

    // check if state select is filled out
    if (stateSelect.value.length === 0) {
      errorMessages.push('state select error');
      stateSelectError.innerHTML = 'Please select a state';
      stateSelectError.innerHTML = 'Please select a state';
    } else stateSelectError.innerHTML = '';

    //If there are errors then prevent form submit
    if (errorMessages.length > 0) {
      e.preventDefault();
    } else {
      e.preventDefault();
      //reset form on submit -- noredirect
      submitBtn.value = 'Thank You for Submitting!';
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      phoneNumber.value = '';
      stateSelect.value = '';
    }
  });
};
