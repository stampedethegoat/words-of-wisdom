/* Quotes */
const quotes = [
  `Silence was wisdom's reply`,
  `Keep the efficiency high; but the tension low`,
  `Keep the heart on fire; but the head on ice`,
  `Find yourself; Find the universe`,
  `Enlightenment brings with itself a love for those in darkness`,
  `Tomorrow never comes, it is always today`,
  `Courage is a love affair with the unknown`,
];

const randomize = (floor, ceiling) => Math.floor(Math.random() * (ceiling - floor + 1) + floor);
const getQuote  = () => quotes[randomize(0, quotes.length - 1)];

/* ------------------------------ */
let date        = new Date();
let hours12     = date => (date.getHours() + 24) % 12 || 12;
let currentTime = hours12(date) + ":" + date.getMinutes();

document.querySelector('#quote').innerHTML = getQuote();
document.querySelector('#time').innerHTML = currentTime;
