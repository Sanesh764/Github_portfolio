export function renderNavbar() {
    const navbarHTML = `
    <div class="nav-container">
        <a href="#home" class="logo">
            <span class="logo-bracket">&lt;</span>Sanesh<span class="logo-bracket"> /&gt;</span>
        </a>
        <ul class="nav-menu">
            <li><a href="#home" class="nav-link">Home</a></li>
            <li><a href="#projects" class="nav-link">Projects</a></li>
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
            <li><button class="theme-toggle" aria-label="Toggle theme"><i class="fas fa-moon"></i></button></li>
        </ul>
        <button class="mobile-menu-toggle" aria-label="Toggle menu"><i class="fas fa-bars"></i></button>
    </div>
    `;
    const navElement = document.querySelector('.navbar');
    if (navElement) {
        navElement.innerHTML = navbarHTML;
    }
}

export function initNavbar() {
    renderNavbar();
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile Menu Toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }

    // Close mobile menu on nav link click + smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle?.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';

            const href = link.getAttribute('href');
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
        });
    });

    // Throttled scroll handler for navbar background + active section
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                // Navbar shadow on scroll
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }

                // Active section highlight
                const sections = document.querySelectorAll('section[id]');
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.clientHeight;
                    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });

                ticking = false;
            });
            ticking = true;
        }
    });
}
