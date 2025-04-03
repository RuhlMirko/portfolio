"use strict";

const marqueElement = document.querySelector("#marquee .wrapper");
const langList = ["Javascript", "Python", "Html", "CSS", "Json"];

for (let i in langList) {
  const newItem = document.createElement("div");
  newItem.classList.add(`item`, `item-${i}`);
  newItem.textContent = langList[i];

  marqueElement.appendChild(newItem);
}

//<div class="item"></div>
