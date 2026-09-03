document.querySelectorAll('details[name="web-details"]').forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.open) {
      e.preventDefault();
    }
  });
});
