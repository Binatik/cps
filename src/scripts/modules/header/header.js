function header() {
  const textAttr = '[data-menu="off"]';
  const trigger = document.querySelector(textAttr);

  trigger.addEventListener("click", () => {
    const headerRight = document.querySelector(".header__right");
    const menu = document.querySelector(".header__menu");
    const headerSearch = document.querySelector(".header__search");
    const classMenuOn = "menu--on";
    const classMenuOff = "menu--off";
    const hidden = "hidden";

    trigger.dataset.menu = trigger.dataset.menu === "on" ? "off" : "on";

    if (trigger.dataset.menu === "off") {
      menu.classList.remove(classMenuOn);
      menu.classList.add(classMenuOff);
      headerRight.classList.remove(hidden);
      headerSearch.classList.add(hidden);
      return;
    }

    menu.classList.add(classMenuOn);
    menu.classList.remove(classMenuOff);
    headerRight.classList.add(hidden);
    headerSearch.classList.remove(hidden);
  });
}

export { header };
