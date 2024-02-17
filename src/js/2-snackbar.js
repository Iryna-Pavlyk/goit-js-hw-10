// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const inputDelayValue = event.target.elements.delay.value;
  //   console.log(inputDelayValue);
  const radioStateValue = event.target.elements.state.value;
  //   console.log(radioStateValue);
  event.target.reset();

  const promise = radioStateValue.checked
    ? Promise.resolve(`✅ Fulfilled promise in ${inputDelayValue}ms`)
    : Promise.reject(`❌ Rejected promise in ${inputDelayValue}ms`);

  promise
    .then(
      iziToast.show({
        title: `✅ Fulfilled promise in ${inputDelayValue}ms`,
      })
    )
    .catch(
      iziToast.show({
        title: `❌ Rejected promise in ${inputDelayValue}ms`,
      })
    );
}
