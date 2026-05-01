import { initNavbar } from './navbar.js';
import { initTheme } from './theme.js';
import { initHero } from './hero.js';
import { initProjects } from './projects.js';
import { initAbout } from './about.js';
import { initContact } from './contact.js';
import { initFooter } from './footer.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    // Show preloader
    createPreloader();

    // Render navbar FIRST so theme toggle exists
    initNavbar();
    initTheme(); // Now safe — toggle button exists
    initHero();
    initProjects();
    initAbout();
    initContact();
    initFooter();
    initBackToTop();
    initAnimations(); // Initialize animations after elements are rendered
});

// Remove preloader once everything is loaded
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => preloader.remove(), 600);
    }
    document.body.classList.add('loaded');
});

function createPreloader() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="preloader-spinner"></div>
            <div class="preloader-text">Sanesh</div>
        </div>
    `;
    document.body.appendChild(preloader);
}

function initBackToTop() {
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);

    // Throttled scroll handler
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                btn.classList.toggle('visible', window.scrollY > 400);
                ticking = false;
            });
            ticking = true;
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
