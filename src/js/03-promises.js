import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  console.log(delay.value, step.value, amount.value);

  for (let i = 1; i <= amount.value; i += 1) {
    setTimeout(createPromise, delay.value, i, step.value, delay.value);
  }

  event.currentTarget.reset();
}

function createPromise(position, step, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      return Promise.resolve(
        Notify.success(
          `✅ Fulfilled promise ${position} in ${
            Number(delay) + position * step
          } ms`
        )
      );
    } else {
      return Promise.reject(
        Notify.failure(
          `❌ Rejected promise ${position} in ${
            Number(delay) + position * step
          } ms`
        )
      );
    }
  }, position * step);
}
