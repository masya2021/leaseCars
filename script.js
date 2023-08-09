const burgerBtn = document.querySelector(".burger");
const navigationMenu = document.querySelector(".navigation__list");
const navigationLink = document.querySelectorAll(".navigation__link");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger__active");
  navigationMenu.classList.toggle("navigation_active");
  document.body.classList.toggle("lock");

  navigationLink.forEach((li) => {
    li.addEventListener("click", () => {
      navigationMenu.classList.remove("navigation_active");
      burgerBtn.classList.remove("burger__active");
      document.body.classList.remove("lock");
    });
  });
});
