// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade-in animation when sections come into view
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Button click ripple effect
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        ripple.style.left = `${e.clientX - this.offsetLeft}px`;
        ripple.style.top = `${e.clientY - this.offsetTop}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
