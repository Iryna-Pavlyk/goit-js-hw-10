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
  console.log(radioStateValue);
  event.target.reset();
  delayHandler(inputDelayValue);

  function delayHandler(delay) {
    if (delay > 0) {
      setTimeout(() => {
        promise;
      }, delay);
      const promise =
        radioStateValue === 'fulfilled'
          ? Promise.resolve(`✅ Fulfilled promise in ${inputDelayValue}ms`)
          : Promise.reject(`❌ Rejected promise in ${inputDelayValue}ms`);

      promise
        .then(value => {
          iziToast.show({
            message: value,
            backgroundColor: 'rgba(82, 223, 79, 0.3)',
            position: 'topCenter',
          });
        })
        .catch(value => {
          iziToast.show({
            message: value,
            backgroundColor: 'rgba(223, 79, 79, 0.3)',
            position: 'topCenter',
          });
        });
    }
  }
}
