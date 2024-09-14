let formData = {
    email: "",
    message: "",
}

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageArea = form.querySelector('textarea');

const STORAGE_KEY = "feedback-form-state";

const data = JSON.parse(localStorage.getItem(STORAGE_KEY))
if (data) {
    emailInput.value = data.email;
    messageArea.value = data.message;

    formData.email = data.email;
    formData.message = data.message;
}

form.addEventListener('input', handelData);
function handelData () {
    const formData = {
        email: emailInput.value.trim(),
        message: messageArea.value.trim()
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  
}

form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault();

  
    if (formData.email === '' || formData.message === '') {
        alert ('Fill please all fields');
        return
    }
    console.log(formData);
    
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = {
        email: "",
        message: ""
    }
}
