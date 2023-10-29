function collapse() {
  const collapseActions = document.querySelectorAll(".collapse-action");
  const collapses = document.querySelectorAll(".collapse");
  const collapsesFlags = [];

  collapseActions[0].addEventListener('click', (event) => {
  collapses[0].classList.toggle("collapse--open-mt30");
  })

  collapseActions.forEach((action, index) => {
    collapsesFlags.push(false);
    action.addEventListener("click", (event) => {
      collapses[index].classList.toggle("collapse--open");


      collapsesFlags[index] = !collapsesFlags[index];

      if (!collapsesFlags[index]) {
        action.textContent = "Читать далее";
        return;
      }
      action.textContent = "Cвернуть";
    });
  });
}

export { collapse };
