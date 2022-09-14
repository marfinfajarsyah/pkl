const menuToggle = document.querySelector('.ck');
const navbar = document.querySelector('.link-navbar-kiri')


menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('slide');
})