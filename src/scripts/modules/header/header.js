function header() {
  const headerBurger = document.querySelector(".header__burger");
  const navigationBurger = document.querySelector(".navigation__burger");
  const overlay = document.querySelector(".navigation__overlay");
  const navigation = document.querySelector(".navigation__container");

  const desktopWidth = 1440;
  const width = document.body.clientWidth;

  function openNavigation() {
    navigation.classList.add(`navigation__container--open`);
    overlay.classList.add("navigation__overlay--open");
    overlay.classList.remove("visibility-hidden");
  }

  function closeNavigation() {
    navigation.classList.remove(`navigation__container--open`);
    overlay.classList.remove("navigation__overlay--open");
    overlay.classList.add("visibility-hidden");
  }

  if (width > desktopWidth) {
    closeNavigation();
  }

  headerBurger.addEventListener("click", (event) => {
    openNavigation();
  });

  navigationBurger.addEventListener("click", (event) => {
    closeNavigation();
  });

  overlay.addEventListener("click", (event) => {
    closeNavigation();
  });
}

export { header };
