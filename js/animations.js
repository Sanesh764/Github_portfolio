export function initAnimations() {
    observeElements();
    typeWriter();
    createParticles();
    createScrollProgress();
}

function observeElements() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Don't unobserve — let them re-animate if user scrolls back
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(element);
    });
}

function typeWriter() {
    const textElement = document.querySelector('.typewriter-text');
    if (!textElement) return;

    const phrases = [
        "Full Stack Developer",
        "Problem Solver",
        "AI Enthusiast",
        "Creative Coder",
        "Open Source Contributor"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            setTimeout(() => { isDeleting = true; }, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        const typingSpeed = isDeleting ? 40 : 80;
        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 800);
}

function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 1;
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.4 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 6 + 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
            pointer-events: none;
        `;
        hero.appendChild(particle);
    }
}

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.appendChild(progressBar);

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                progressBar.style.width = scrolled + '%';
                ticking = false;
            });
            ticking = true;
        }
    });
}
