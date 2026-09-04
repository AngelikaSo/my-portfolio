document.querySelectorAll('details[name="web-details"]').forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.open) {
      e.preventDefault();
    }
  });
});

const burger = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  navList.classList.toggle("open");
});
