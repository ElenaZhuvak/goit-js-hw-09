let formData = {
    email: "",
    message: "",
}

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageArea = form.querySelector('textarea');

const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', handelData);
function handelData () {
    formData.email = emailInput.value.trim();
    formData.message = messageArea.value.trim();

    formData = {
        email: formData.email,
        message: formData.message
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  
}

form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
  
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