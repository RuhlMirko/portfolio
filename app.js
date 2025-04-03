"use strict";

const marqueElement = document.querySelector("#marquee .wrapper");
const langList = ["Javascript", "Python", "Html", "CSS", "Json"];

const numItems = 5;
const totalDuration = 30; // in seconds
const styleSheet = document.styleSheets[0];

for (let i in langList) {
  const newItem = document.createElement("div");
  newItem.classList.add(`item`, `item-${i}`);
  newItem.textContent = langList[i];

  marqueElement.appendChild(newItem);

  const delay = (totalDuration / numItems) * (numItems - (Number(i) + 1)) * -1;
  const rule = `.item-${i} { animation-delay: ${delay}s; }`;
  styleSheet.insertRule(rule, styleSheet.cssRules.length);
}
