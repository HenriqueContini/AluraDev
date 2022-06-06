var botaoMenu = document.querySelector('.menu');
var nav = document.querySelector('.nav__container');

botaoMenu.addEventListener('click', () => {
    nav.classList.toggle('nav__container--ativo');
    botaoMenu.classList.toggle('menu-icon-x');
});