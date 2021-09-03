const myForm = document.querySelector('#message-form');
const message = document.querySelector('#message');
const error = document.querySelector('.feedback');
const messageContent = document.querySelector('.message-content');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(message.value === '') {
        error.classList.add('show');

        setTimeout(() => error.classList.remove('show'), 2000);
    } else {
        messageContent.textContent = message.value

    }
    
}