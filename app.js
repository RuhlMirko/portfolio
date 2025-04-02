"use strict";

const marqueElement = document.querySelector("#marquee .wrapper");

console.log(marqueElement);

const newItem = document.createElement("div");
newItem.classList.add = "item";
newItem.insertAdjacentHTML =
  '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />';

marqueElement.appendChild(newItem);
//<div class="item"></div>
