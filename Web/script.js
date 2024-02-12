document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    // Add a class to show the navbar with a fade-in effect
    navbar.classList.add('fade-in');

    // Set a timeout to remove the opacity property after the animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 1000);
});
