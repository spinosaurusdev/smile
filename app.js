const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const menuBg = document.getElementById("menuBg");
const copyRg = document.getElementById("copyrg");
const currentLang = window.location.pathname.split("/")[1];
const langLinks = document.querySelectorAll("#language-menu a");

// Toggle menu with the same button
menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
  menuBg.classList.toggle("active");
  menuBtn.classList.toggle("active");
  copyRg.classList.toggle("open");
});

// Allow closing the menu by clicking outside the menu
menuBg.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  menuBg.classList.remove("active");
  menuBtn.classList.remove("active");
  copyRg.classList.remove("open");
});

//Script for the image carousel

const images = document.querySelectorAll(".carousel img");
let current = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) img.classList.add("active");
  });
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % images.length;
  showImage(current);
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

// Automatic change every 5 seconds
setInterval(() => {
  current = (current + 1) % images.length;
  showImage(current);
}, 5000);

// Highlight the active language in the language menu
langLinks.forEach((link) => {
  if (link.getAttribute("data-lang") === currentLang) {
    // Add a class to highlight the active language.
    link.classList.add("active-lang");
  } else {
    link.classList.remove("active-lang");
  }
});
