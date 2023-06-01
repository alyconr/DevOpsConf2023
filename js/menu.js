function mobileMenu() {
  const menuHamburger = document.querySelector('#hamburger');
  const navMobile = document.querySelector('.mobile-nav');
  const navMobileList = document.querySelectorAll('.mobile-nav-box a');
  const hamburgerImage = document.querySelector('#hamburger');

  function toggleMenu() {
    if (navMobile.classList.contains('active')) {
      hamburgerImage.src = './assets/images/cancel.svg';
    } else {
      hamburgerImage.src = './assets/images/ham.svg';
    }
  }

  menuHamburger.addEventListener('click', () => {
    navMobile.classList.toggle('active');
    toggleMenu();
  });

  navMobileList.forEach((item) => {
    item.addEventListener('click', () => {
      navMobile.classList.remove('active');
      toggleMenu();
    });
  });
}

export default mobileMenu;
