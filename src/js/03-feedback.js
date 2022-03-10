import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const emailElem = document.querySelector('label [name="email"]');
const messageElem = document.querySelector('label [name="message"]')

const S_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(formInput, 500));

function formInput() {
    const email = emailElem.value;
    const message = messageElem.value;

    const formData = {
        email,
        message,
    };

    localStorage.setItem(S_KEY, JSON.stringify(formData));
};

pageRest();

function pageRest() { 
    const savedMessage = JSON.parse(localStorage.getItem(S_KEY));
    
    if (savedMessage) {
        emailElem.value = savedMessage.email;
        messageElem.value = savedMessage.message;
    };
};

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    
    const email = emailElem.value;
    const message = messageElem.value;
    
    if (email == '' || message == '') {
        alert("Заполните все поля!");
        form.reset();
        return false;
    }
    
    const formData = {
        email,
        message,
    }
    console.log(formData);
    
    form.reset();

    localStorage.removeItem(S_KEY);
};