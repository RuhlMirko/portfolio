"use strict";

const ulElement = document.querySelector(".scroller__inner");
const tooltip = document.getElementById("tooltip");
const socialBtn = document.getElementById("social-btn");
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
  "React",
  "NextJs",
];
const langIcon = [
  '<i class="devicon-javascript-plain"></i>',
  '<i class="devicon-python-plain"></i>',
  '<i class="devicon-html5-plain"></i>',
  '<i class="devicon-css3-plain"></i>',
  '<i class="devicon-json-plain"></i>',
  '<i class="devicon-bootstrap-plain"></i>',
  '<i class="devicon-tailwindcss-plain"></i>',
  "",
  "",
  '<i class="devicon-git-plain"></i>',
  '<i class="devicon-github-plain"></i>',
  '<i class="devicon-nodejs-plain"></i>',
  '<i class="devicon-express-original"></i>',
  '<i class="devicon-react-original"></i>',
  '<i class="devicon-nextjs-original-wordmark"></i>',
];
for (let i in langList) {
  const newItem = document.createElement("li");
  newItem.innerHTML = `${langIcon[i]}  ${langList[i]}`;
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

const handleOnMouseMove = (e) => {};

/* Styling that css can't do*/
const stickyDiv = document.getElementById("index");
const stickyOffset = stickyDiv.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY >= stickyOffset) {
    stickyDiv.classList.add("fixed");
  } else {
    stickyDiv.classList.remove("fixed");
  }
});

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("index");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

function clipboard(e) {
  const email = "ruhlmirkojoel@gmail.com";
  navigator.clipboard.writeText(email);
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
