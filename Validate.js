const form = document.querySelector('.contacts-form');
const EMAIL_LOWERCASE = 'Please email should be lowercase characters *';

function showMessage(message) {
  const msg = document.querySelector('.error-msg');
  msg.innerText = message;
//   input.className = type ? 'success' : 'error';
//   return type;
// }

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidMsg) {
  const email = input;
  if (email !== email.toLowerCase()) {
    return showError(input, invalidMsg)
  }
  return true;
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.nextElementSibling.user_email, EMAIL_LOWERCASE);
  if (emailValid) {
    form.submit();
    form.reset();
  }
})