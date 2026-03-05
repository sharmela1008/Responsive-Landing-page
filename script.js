// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
        navbar.style.flexDirection = "column";
    }
});

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Scroll Animation
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add("show");
        }
    });
});