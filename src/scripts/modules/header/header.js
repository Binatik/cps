function header() {
  const openNavigation = document.querySelector('#open-navigation')
  const navigation = document.querySelector('.header__nav')

  openNavigation.addEventListener('click', (event) => {
    navigation.classList.toggle('header__nav--action--open')
  })
}

export { header };
