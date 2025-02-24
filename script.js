// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out'
});

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Loader Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    gsap.to(loader, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            loader.style.display = 'none';
            // Animate hero section elements
            gsap.from('.hero-title', {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
            gsap.from('.hero-subtitle', {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: 'power3.out'
            });
            gsap.from('.hero-cta', {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.6,
                ease: 'power3.out'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill bars animation
gsap.utils.toArray('.skill-progress').forEach(progress => {
    gsap.to(progress, {
        width: progress.style.width,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: progress,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Contact form animation
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');

    input.addEventListener('focus', () => {
        label.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            label.classList.remove('active');
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
});