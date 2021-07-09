const headerWrap = document.querySelector("#header-wrap");
const navButton = document.querySelector(".nav__button");
const navIconOpen = document.querySelector(".js-nav-open");
const navIconClose = document.querySelector(".js-nav-close");

navButton.addEventListener("click", function () {
  navIconOpen.classList.toggle("nav__icon--hidden");
  navIconClose.classList.toggle("nav__icon--hidden");
  headerWrap.classList.toggle("header__wrap--respond");
  console.log("Icon hidden");
});
