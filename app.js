const btnHamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-list');
const menuLinks = document.querySelectorAll('.menu-list a');
const closeX = document.querySelector('#x');

const frameImage = document.querySelector('#frame');
const images = ['1.webp', '2.webp', '3.jpeg', '4.jpeg', '5.webp', '6.jpeg'];


const contactForm = document.querySelector('.contact-form');
const btnContactMe = document.querySelector('#contact-me');


const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');


btnHamburger.addEventListener('click', () => {
    menuList.classList.toggle('active');
})

document.addEventListener('click', (event) => {
    if (!menuList.contains(event.target) && !btnHamburger.contains(event.target)) {
        menuList.classList.remove('active');
    }

    if (!contactForm.contains(event.target) && !btnContactMe.contains(event.target)) {
        contactForm.style.display = 'none';
    }

})

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuList.classList.remove('active');
    })
})



closeX.addEventListener('click', () => {
    menuList.classList.remove('active');
})



let currentImageIndex = 0;
frameImage.addEventListener('click', () => {
    currentImageIndex++;

    if (currentImageIndex >= 6) {
        currentImageIndex = 0;
    }
    frameImage.src = 'img/' + images[currentImageIndex];
})




btnContactMe.addEventListener('click', () => {
    if (window.innerWidth < 600) {
    contactForm.style.display = 'block';
    }
})


contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = inputName.value;
    const email = inputEmail.value;
    const message = inputMessage.value;

    const formData = {
        userName: name,
        userEmail: email,
        userMessage: message
    }

    localStorage.setItem('name', JSON.stringify(formData.userName));
    localStorage.setItem('email', JSON.stringify(formData.userEmail));
    localStorage.setItem('message', JSON.stringify(formData.userMessage));

    inputName.value = '';
    inputEmail.value = '';
    inputMessage.value = '';

    console.log('form submitted');

})