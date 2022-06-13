"use strict";

const dice = document.querySelector(".dice-container");

const getAdviceQuote = () => {
  const adviceNumber = document.querySelector(".advice-number");
  const adviceQuote = document.querySelector(".advice-quote");

  fetch("https://api.adviceslip.com/advice")
    .then((resp) => resp.json())
    .then((data) => {
      adviceNumber.textContent = `ADVICE #${data.slip.id}`;
      adviceQuote.textContent = `"${data.slip.advice}"`;
    })
    .catch((err) => (adviceQuote.textContent = "Could not fetch quote"));
};

dice.addEventListener("click", () => {
  getAdviceQuote();
});

getAdviceQuote();
