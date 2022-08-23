const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const usrnameInput = document.querySelector('#usrname');
const emailInput = document.querySelector('#email');
const userInfo = document.querySelector('#users');
const msg = document.querySelector('.msg')

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === '' || usrnameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please fill all fields';

    setTimeout(() => msg.remove(), 4000)
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${usrnameInput.value} : ${emailInput.value}`));

    userInfo.appendChild(li);

    nameInput.value = '';
    usrnameInput.value = '';
    emailInput.value = '';
  }
}