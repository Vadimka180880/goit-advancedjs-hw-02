import { save, load } from './localStorage';

const form = document.querySelector('.js-feedback-form');
const formData = {
email: '',
message: '',
};

const fillForm = () => {
const savedData = load('feedback-form-state');
if (!savedData) return;

form.email.value = savedData.email || '';
form.message.value = savedData.message || '';
Object.assign(formData, savedData);
};

form.addEventListener('input', (event) => {
const { name, value } = event.target;
formData[name] = value.trim();
save('feedback-form-state', formData);
});

form.addEventListener('submit', (event) => {
event.preventDefault();

if (!formData.email || !formData.message) {
alert('Будь ласка, заповніть усі поля');
return;
}

console.log(formData);

localStorage.removeItem('feedback-form-state');
form.reset();
formData.email = '';
formData.message = '';
});

fillForm();