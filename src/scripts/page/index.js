function index() {
  const sidebar = document.querySelector(".sidebar__container");
  const actionSidebar = document.querySelector(".page__action-sidebar");
  const overlay = document.querySelector(".sidebar__overlay");

  actionSidebar.addEventListener('click',(event) => {
    sidebar.classList.add(`sidebar__container--open`);
    overlay.classList.add("sidebar__overlay--open");
    overlay.classList.remove("visibility-hidden");
  })
}

export { index }