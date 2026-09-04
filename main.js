document.querySelectorAll('details[name="web-details"]').forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.open) {
      e.preventDefault();
    }
  });
});

const burger = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");
const img = document.getElementById("hamburger");

burger.addEventListener("click", () => {
  navList.classList.toggle("open");
  if (navList.classList.contains("open")) {
    img.src = "assets/close-icon.svg";
  } else {
    img.src = "assets/hamburger-menu.svg";
  }
});
