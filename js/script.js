let elResult = document.querySelector('.result');
let elHours = document.querySelector('.hours');
let elMinutes = document.querySelector('.minutes');
let elSeconds = document.querySelector('.seconds');

function zeroAdding(num, digit) {
  let zero = "";
  for (let i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
};

setInterval(function () {
  const date = new Date();
  const years = date.getFullYear();
  const months = zeroAdding(date.getMonth() + 1, 2);
  const days = zeroAdding(date.getDate(), 2);
  const hours = zeroAdding(date.getHours(), 2);
  const minutes = zeroAdding(date.getMinutes(), 2);
  const seconds = zeroAdding(date.getSeconds(), 2);

  elResult.textContent = `${years}-${months}-${days}`;
  elHours.textContent = `${hours}:`;
  elMinutes.textContent = `${minutes}:`;
  elSeconds.textContent = seconds;
}, 1000);
