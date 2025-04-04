"use strict";

const ulElement = document.querySelector(".scroller__inner");
const langList = [
  "Javascript",
  "Python",
  "Html",
  "CSS",
  "Json",
  "bootstrap5",
  "Tailwind",
  "tkinter",
  "ttkbootstrap",
];
for (let i in langList) {
  const newItem = document.createElement("li");
  newItem.innerText = langList[i];
  console.log(newItem);
  ulElement.appendChild(newItem);
}

const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
  });
}

/*
const numItems = langList.length;
const totalDuration = 30; // in seconds
const styleSheet = document.styleSheets[0];

for (let i in langList) {
  const newItem = document.createElement("div");
  newItem.classList.add(`item`, `item-${i}`);
  newItem.innerHTML = `<span>${langList[i]}</span>`;

  marqueElement.appendChild(newItem);

  const delay = (totalDuration / numItems) * (numItems - (Number(i) + 1)) * -1;
  const rule = `.item-${i} { animation-delay: ${delay}s; }`;
  styleSheet.insertRule(rule, styleSheet.cssRules.length);
}
*/
