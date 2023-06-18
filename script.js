function resizeBackground() {
    const header = document.querySelector('header');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const imageAspectRatio = 890 / 1920; // Замените числа на пропорции вашего фонового изображения (высота / ширина)

    header.style.height = windowWidth * imageAspectRatio + 'px';

    if (parseInt(header.style.height) > windowHeight) {
        header.style.height = '100%';
    } else {
        header.style.height = windowWidth * imageAspectRatio + 'px';
    }
}

// Вызываем функцию при загрузке и изменении размера окна
window.addEventListener('load', resizeBackground);
window.addEventListener('resize', resizeBackground);

document.addEventListener("DOMContentLoaded", function () {
    var hamburgerButton = document.querySelector(".hamburger-button");
    var navMenu = document.querySelector(".nav-menu");
    
    hamburgerButton.addEventListener("click", function () {
      this.classList.toggle("open");
      navMenu.classList.toggle("open");
    });
  });