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
  "Git",
  "github",
  "NodeJs",
  "ExpressJs",
  "ReactJs",
  "NextJs",
];
for (let i in langList) {
  const newItem = document.createElement("li");
  newItem.innerText = langList[i];
  ulElement.appendChild(newItem);
}

const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = ulElement;
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(clone);
    });
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
