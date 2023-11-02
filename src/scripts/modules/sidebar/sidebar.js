function sidebar() {
  const sidebar = document.querySelector(".sidebar__container");
  const closeSidebar = document.querySelector(".sidebar__button-close");
  const overlay = document.querySelector(".sidebar__overlay");

  closeSidebar.addEventListener('click',(event) => {
    sidebar.classList.remove(`sidebar__container--open`);
    overlay.classList.remove("sidebar__overlay--open");
    overlay.classList.add("visibility-hidden");
  })

  overlay.addEventListener('click',(event) => {
    overlay.classList.remove(`sidebar__overlay--open`);
    sidebar.classList.remove(`sidebar__container--open`);
    overlay.classList.add("visibility-hidden");
  })
}

export {sidebar}
