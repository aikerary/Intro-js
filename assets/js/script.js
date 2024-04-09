const $=selector => document.querySelector(selector);
const $$=selector => document.querySelectorAll(selector);

// get by id name, cel , email and message
const name = $('#name');
const cel = $('#phone');
const email = $('#email');
const message = $('#message');

const form = $('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        name: name.value,
        cel: cel.value,
        email: email.value,
        message: message.value
    };
    console.log(data);
    form.reset();
});
