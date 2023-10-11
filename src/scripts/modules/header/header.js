function header() {
  const textAttr = '[data-menu="off"]';
  const trigger = document.querySelector(textAttr);

  trigger.addEventListener("click", () => {
    const classNameOn = "menu--on";
    const classNameOff = "menu--off";
    const menu = document.querySelector(".header__menu");


    trigger.dataset.menu = trigger.dataset.menu === "on" ? "off" : "on";

    if (trigger.dataset.menu === 'off') {
      menu.classList.remove(classNameOn);
      menu.classList.add(classNameOff);
      return;
    }

    menu.classList.add(classNameOn);
    menu.classList.remove(classNameOff);
  });
}

export { header };
