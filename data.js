const clientName = document.querySelector('#user_name');
const clientEmail = document.querySelector('#user_email');
const clientMessage = document.querySelector('#user_message');

function useLocalStorage() {
  const contactFormData = {
    name: clientName.value,
    email: clientEmail.value,
    message: clientMessage.value,
  };
  localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
}