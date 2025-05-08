document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    //Background and Xp

    document.addEventListener('DOMContentLoaded', function() {
        // Animate timeline when scrolled into view
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timeline = document.querySelector('.timeline');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-card');
                    timeline.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });
        
        timelineItems.forEach(item => {
            observer.observe(item);
        });
    });

    // Enhanced animateOnScroll function with multiple effects
    const animateOnScroll = function() {
        const animatedElements = [
            { selector: '.text-move', class: 'visible' },
            { selector: '.section-title, .section-title1', class: 'shake-animation', once: true },
            { selector: '.hero-content h1, .hero-content h2, .hero-content p', class: 'shake-animation', once: true },
            { selector: '.portfolio-item, .tool-item, .service-item, .reason-item', class: 'float-animation' },
            { selector: '.skill-item, .certificate-item, .package-item, .testimonial-item', class: 'card-tilt' }
        ];

        animatedElements.forEach(config => {
            const elements = document.querySelectorAll(config.selector);
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.classList.add(config.class);
                    
                    // Remove animation class after it plays if it should only happen once
                    if (config.once) {
                        setTimeout(() => {
                            element.classList.remove(config.class);
                        }, 1000);
                    }
                } else if (!config.once) {
                    element.classList.remove(config.class);
                }
            });
        });
    };

    // Initial check
    animateOnScroll();

    // Check on scroll with throttle
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            animateOnScroll();
        }, 50);
    }, false);

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission (example)
    

    // Newsletter form submission (example)
    const newsletterForm = document.querySelector('.footer-newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            alert(`Thank you for subscribing with ${emailInput.value}!`);
            emailInput.value = '';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Certificate slide animation
    const certificateItems = document.querySelectorAll('.certificate-item');
    
    const certObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                certObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    certificateItems.forEach(item => {
        certObserver.observe(item);
    });

});

// Add this script at the end of your body or in a separate JS file
document.addEventListener('DOMContentLoaded', function() {
    const text = "Kuene!";
    const typingText = document.getElementById('typing-text');
    const cursor = document.querySelector('.cursor');
    
    let i = 0;
    typingText.textContent = ''; // Start with empty text
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Adjust typing speed here (milliseconds)
        } else {
            // Keep the cursor blinking after typing is complete
            cursor.style.animation = 'blink 1s infinite';
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
});
