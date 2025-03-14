const btnHamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-list');
const menuLinks = document.querySelectorAll('.menu-list a');
const closeX = document.querySelector('#x');

btnHamburger.addEventListener('click', () => {
    menuList.classList.toggle('active');
})

document.addEventListener('click', (event) => {
    if (!menuList.contains(event.target) && !btnHamburger.contains(event.target)) {
        menuList.classList.remove('active');
    }
})

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuList.classList.remove('active');
    })
})

closeX.addEventListener('click', ()=>{
    menuList.classList.remove('active');
})


const frameImage = document.querySelector('#frame');
const images = ['1.webp', '2.webp', '3.jpeg', '4.jpeg', '5.webp', '6.jpeg'];
let currentImageIndex = 0;

document.addEventListener('click', () => {
    currentImageIndex++;

    if (currentImageIndex >= 6) {
        currentImageIndex = 0;
    }
    frameImage.src = 'img/' + images[currentImageIndex];
})
