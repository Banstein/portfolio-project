const form = document.querySelector('.contact-info');
const EMAIL_LOWERCASE = 'Please email should be lowercase characters *';
const msg = document.querySelector('.error-message');

function showMessage(message) {
  msg.innerHTML = message;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidMsg) {
  const email = input;
  if (email !== email.toLowerCase()) {
    return showError(invalidMsg);
  }
  return true;
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(document.querySelector('#user_email').value, EMAIL_LOWERCASE);
  if (emailValid) {
    form.submit();
    msg.innerHTML = '';
    form.reset();
  }
});