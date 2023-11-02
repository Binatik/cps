function index() {
  const actionSupport = document.querySelector('[data-openDialog="support"]');
  const actionForm = document.querySelector('[data-openDialog="form"]');

  const closeSideBarAll = document.querySelectorAll(".sidebar__button-close");
  const sidebarContainer = document.querySelectorAll('.sidebar__container')
  const overlay = document.querySelector(".sidebar__overlay");

  actionForm.addEventListener('click',(event) => {
    sidebarContainer[0].classList.add(`sidebar__container--open`);
    overlay.classList.add("sidebar__overlay--open");
    overlay.classList.remove("visibility-hidden");
  })

  actionSupport.addEventListener('click',(event) => {
    sidebarContainer[1].classList.add(`sidebar__container--open`);
    overlay.classList.add("sidebar__overlay--open");
    overlay.classList.remove("visibility-hidden");
  })

  closeSideBarAll.forEach((closeSideBar, index) => {
    closeSideBar.addEventListener('click',(event) => {
      sidebarContainer[index].classList.remove(`sidebar__container--open`);
      overlay.classList.remove("sidebar__overlay--open");
      overlay.classList.add("visibility-hidden");
    })

    overlay.addEventListener('click',(event) => {
      sidebarContainer[index].classList.remove(`sidebar__container--open`);
      overlay.classList.remove(`sidebar__overlay--open`);
      overlay.classList.add("visibility-hidden");
    })
  })
}

export { index }