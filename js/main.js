// Płynne przewijanie do sekcji
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animacja pojawiania się elementów podczas scrollowania
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
            section.classList.add('visible');
        }
    });
});
// efekt scrollowania
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// karty mozliwosc odwracania
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// efekt glowna str
window.addEventListener('scroll', () => {
    const home = document.querySelector('#home');
    const scrolled = window.pageYOffset;
    home.style.backgroundPositionY = scrolled * 0.5 + 'px';
});
// DEBUG
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });
});
document.querySelector('.start-button').addEventListener('click', function(e) {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    const offsetTop = aboutSection.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});
console.log("JavaScript loaded");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    
    const startButton = document.querySelector('.start-button');
    console.log("Start button:", startButton); // Debug 
    
    startButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("Button clicked"); // Debug 
        const aboutSection = document.querySelector('#about');
        console.log("About section:", aboutSection); // Debug 
        
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});
