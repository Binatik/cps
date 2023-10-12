function header() {
  const menu = document.querySelector(".header__menu");
  const blure = document.querySelector('.blure')
  const openMenu = document.querySelector("#open-menu");
  const closeMenu = document.querySelector("#close-menu");
  const classMenuOn = "menu--on";
  const classMenuOff = "menu--off";
  const classBlureOn = 'blure--on'
  const classBlureOff = 'blure--off'

  openMenu.addEventListener("click", () => {
    menu.classList.add(classMenuOn);
    menu.classList.remove(classMenuOff);
    blure.classList.add(classBlureOn)
    blure.classList.remove(classBlureOff)
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove(classMenuOn);
    menu.classList.add(classMenuOff);
    blure.classList.add(classBlureOff)
    blure.classList.remove(classBlureOn)
  });

  blure.addEventListener("click", () => {
    menu.classList.remove(classMenuOn);
    menu.classList.add(classMenuOff);
    blure.classList.add(classBlureOff)
    blure.classList.remove(classBlureOn)
  });
}

export { header };
