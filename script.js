let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}

document.querySelector('#navitem').onclick = () =>{
    navbar.classList.remove('active');
}

document.querySelector('#navitem2').onclick = () =>{
    navbar.classList.remove('active');
}

document.querySelector('#navitem3').onclick = () =>{
    navbar.classList.remove('active');
}

document.querySelector('#navitem4').onclick = () =>{
    navbar.classList.remove('active');
}

const slideshowImages = document.querySelectorAll(".slideshow img");
const nextImageDelay = 5000;
let currentImageCounter = 0;
slideshowImages[currentImageCounter].style.opacity = 1;
setInterval(nextImage, nextImageDelay)

function nextImage() {
    slideshowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = 1;
}