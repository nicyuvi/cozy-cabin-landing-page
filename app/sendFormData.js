// select contact form
const form = document.querySelector('#contact-form');
// submit btn
const submitBtn = document.querySelector('#submit-btn');
//inputs
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone');
const stateSelect = document.querySelector('#state');

export const sendFormData = async () => {
  // create new form data object
  let formData = new FormData(form);
  // error handling
  try {
    // send data to example api
    const response = await fetch('https://reqres.in/api/users', {
      // fetch options
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    // since fetch detects only network errors,
    // we manually catch other errors
    if (response.status >= 400 && response.status < 600) {
      throw new Error('Bad response from server');
    }
    // parse our response to js object
    const json = await response.json();
    // print response to console
    console.log(json);

    // disable submit btn after form submit
    submitBtn.disabled = 'true';
    //reset form after response gets back -- noredirect
    submitBtn.value = 'Thank You for Submitting!';
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phoneNumber.value = '';
    stateSelect.value = '';
  } catch (error) {
    console.log(error);
  }
};
