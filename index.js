const number = document.getElementById('number');

const buttonIncrement = document.getElementById('buttonIncrement');
const buttonZero = document.getElementById('buttonZero');
const buttonDecrement = document.getElementById('buttonDecrement');
const buttonDecrementPlus = document.getElementById('buttonDecrementPlus');
const buttonIncrementPlus = document.getElementById('buttonIncrementPlus');

const incrementNumber = () => {
  const newNumber = Number(number.innerText) + 1;
  number.innerText = newNumber;
};

const incrementNumberPlus = () => {
  const newNumber = Number(number.innerText) + 2;
  number.innerText = newNumber;
};

const decrementNumber = () => {
  const newNumber = Number(number.innerText) - 1;

  if (newNumber < 0) {
    return (number.innerText = 0);
  }

  return (number.innerText = newNumber);
};

const decrementNumberPlus = () => {
  const newNumber = Number(number.innerText) - 2;

  if (newNumber <= 1) {
    return (number.innerText = 0);
  }

  return (number.innerText = newNumber);

}
buttonIncrement.addEventListener('click', incrementNumber);

buttonZero.addEventListener('click', () => (number.innerText = 0));

buttonDecrement.addEventListener('click', decrementNumber);

buttonIncrementPlus.addEventListener('click', incrementNumberPlus);

buttonDecrementPlus.addEventListener('click', decrementNumberPlus)
