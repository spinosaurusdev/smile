const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const menuBg = document.getElementById("menuBg");

// Alternar menu con el mismo botón
menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
  menuBg.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

// Permitir cerrar el menú haciendo clic fuera del menú
menuBg.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  menuBg.classList.remove("active");
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

// Cambio automático cada 3 segundos
setInterval(() => {
  current = (current + 1) % images.length;
  showImage(current);
}, 3000);
