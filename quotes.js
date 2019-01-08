let quotes = [
  `Silence was wisdom's reply`,
  `Keep the efficiency high; but the tension low`,
  `Keep the heart on fire; but the head on ice`,
  `Find yourself; Find the universe`,
  `Enlightenment brings with itself a love for those in darkness`,
  `Tomorrow never comes, it is always today`,
  `Courage is a love affair with the unknown`,
];

let randomize = (floor, ceiling) => Math.floor(Math.random() * (ceiling - floor + 1) + floor);
let getQuote  = () => quotes[randomize(0, quotes.length - 1)];

document.querySelector('#quote').innerHTML = getQuote();
