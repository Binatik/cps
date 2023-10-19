function header() {
  const navbar = document.querySelector(".header__navbar");
  const openNavbar = document.querySelector(".header__open-navbar");
  const closeNavbar = document.querySelector(".navbar__close-navbar");
  const blure = document.querySelector(".blure");
  const classNavbarOn = "navbar--on";
  const classNavbarOff = "navbar--off";
  const desktopWidth = 1440;
  const width = document.body.clientWidth;
  
  if (width > desktopWidth) {
    navbar.classList.add(classNavbarOn);
    navbar.classList.remove(classNavbarOff);
  }

  openNavbar.addEventListener("click", () => {
    navbar.classList.add(classNavbarOn);
    navbar.classList.remove(classNavbarOff);
    blure.classList.add('blure--on')
  });

  closeNavbar.addEventListener("click", () => {
    navbar.classList.remove(classNavbarOn);
    navbar.classList.add(classNavbarOff);
    blure.classList.remove('blure--on')
  });

  blure.addEventListener("click", () => {
    blure.classList.remove('blure--on')
    navbar.classList.remove(classNavbarOn);
    navbar.classList.add(classNavbarOff);
  });
}

export { header };
