document.querySelectorAll(".menu").forEach((menu) => {
  menu.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  });
});
