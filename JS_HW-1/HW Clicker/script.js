let count = 0;
let sizeIncrease = true;
let startTime;
let cps = 0;

function increaseCount() {
  count++;
  updateCountDisplay();
  updateCookieSize();
  updateCPS();
}

function updateCountDisplay() {
  document.getElementById('count').textContent = count;
}

function updateCookieSize() {
  const cookieImg = document.getElementById('demo-img');

  if (sizeIncrease) {
    cookieImg.style.width = parseInt(cookieImg.style.width) + 10 + 'px';
    cookieImg.style.height = parseInt(cookieImg.style.height) + 10 + 'px';
  } else {
    cookieImg.style.width = parseInt(cookieImg.style.width) - 10 + 'px';
    cookieImg.style.height = parseInt(cookieImg.style.height) - 10 + 'px';
  }

  sizeIncrease = !sizeIncrease;
}

function updateCPS() {
  const currentTime = new Date().getTime();
  const elapsedTime = (currentTime - startTime) / 1000; // Прошедшее время в секундах
  cps = count / elapsedTime;

  document.getElementById('cps').textContent = `Скорость клика: ${cps.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function() {
  const cookieImg = document.getElementById('demo-img');

  cookieImg.style.width = '200px';
  cookieImg.style.height = '200px';

  cookieImg.addEventListener('click', increaseCount);
  startTime = new Date().getTime();
  setInterval(updateCPS, 1000);
});