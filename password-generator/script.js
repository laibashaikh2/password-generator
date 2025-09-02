function generatePassword() {
const length = document.getElementById('length').value;
const lowercase = document.getElementById('lowercase').checked;
const uppercase = document.getElementById('uppercase').checked;
const numbers = document.getElementById('numbers').checked;
const symbols = document.getElementById('symbols').checked;


let chars = '';
if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if (numbers) chars += '0123456789';
if (symbols) chars += '!@#$%^&*()_+{}[]<>?/';


if (chars === '') {
alert('Please select at least one character set.');
return '';
}


let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * chars.length);
password += chars[randomIndex];
}
return password;
}


document.getElementById('generate').addEventListener('click', () => {
const password = generatePassword();
document.getElementById('password').value = password;
});


document.getElementById('copy').addEventListener('click', () => {
const passwordField = document.getElementById('password');
if (passwordField.value === '') {
alert('Please generate a password first!');
return;
}
passwordField.select();
document.execCommand('copy');
alert('Password copied to clipboard!');
});