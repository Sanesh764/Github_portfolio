export function renderProjects() {
    const projects = [
        {
            title: "Zerodha Clone",
            description: "A full-featured clone of India's largest stock brokerage platform. Pixel-perfect UI replicating Zerodha's dashboard, charts, and trading interface with fully functional frontend.",
            tech: ["React", "JavaScript", "CSS", "HTML"],
            live: null,
            code: "https://github.com/Sanesh764/ZERODHA_clone",
            gradient: "linear-gradient(135deg, #387ed1, #1e3a5f)",
            icon: "fas fa-chart-line"
        },
        {
            title: "GitHub Clone",
            description: "Full-stack GitHub clone with repository management, issue tracking, and a custom Git-like CLI supporting push, pull, add, commit, and revert commands via AWS S3.",
            tech: ["React", "Node.js", "MongoDB", "Express", "AWS S3", "JWT"],
            live: null,
            code: "https://github.com/Sanesh764/Github_clone",
            gradient: "linear-gradient(135deg, #24292e, #586069)",
            icon: "fab fa-github"
        },
        {
            title: "Wanderlust",
            description: "Airbnb-inspired vacation rental platform with full CRUD for listings, reviews & ratings, image uploads via Cloudinary, Mapbox maps, and Passport.js authentication.",
            tech: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary", "Mapbox"],
            live: "https://wanderlust-4c1x.onrender.com/listings",
            code: "https://github.com/Sanesh764/wanderlust",
            gradient: "linear-gradient(135deg, #ff385c, #e31c5f)",
            icon: "fas fa-map-marked-alt"
        },
        {
            title: "AI Chatbot",
            description: "An intelligent chatbot powered by OpenAI API with natural language processing to provide helpful, context-aware responses and real-time conversation.",
            tech: ["Node.js", "Express", "MongoDB", "OpenAI API"],
            live: "https://chatbot-git-main-saneshs-projects-caa51d20.vercel.app/",
            code: "https://github.com/Sanesh764/chatbot",
            gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
            icon: "fas fa-robot"
        },
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce platform promoting recycling by enabling buying and selling of old electronics responsibly. Features product listings, cart, and checkout.",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            live: "https://e-com-website-n17h.onrender.com/",
            code: "https://github.com/Sanesh764/E-com-website",
            gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
            icon: "fas fa-shopping-cart"
        },
        {
            title: "Simon Game",
            description: "A classic memory game where you repeat an ever-growing sequence of colors and sounds. Test your memory and beat your high score!",
            tech: ["HTML", "CSS", "JavaScript"],
            live: "https://sanesh764.github.io/SYMION_GAME/",
            code: "https://github.com/Sanesh764/SYMION_GAME",
            gradient: "linear-gradient(135deg, #fc4a1a, #f7b733)",
            icon: "fas fa-gamepad"
        }
    ];

    const projectCards = projects.map((project, index) => {
        const liveBtn = project.live
            ? `<a href="${project.live}" class="btn btn-card-primary" target="_blank" rel="noopener">
                    <i class="fas fa-external-link-alt"></i> Live Demo
               </a>`
            : '';

        const overlayBtns = project.live
            ? `<a href="${project.live}" class="overlay-btn" target="_blank" rel="noopener">
                    <i class="fas fa-external-link-alt"></i>
               </a>
               <a href="${project.code}" class="overlay-btn" target="_blank" rel="noopener">
                    <i class="fab fa-github"></i>
               </a>`
            : `<a href="${project.code}" class="overlay-btn" target="_blank" rel="noopener">
                    <i class="fab fa-github"></i>
               </a>`;

        return `
        <div class="project-card scroll-reveal" style="--delay: ${index * 0.1}s">
            <div class="project-image" style="background: ${project.gradient}">
                <i class="${project.icon}"></i>
                <div class="project-overlay">
                    ${overlayBtns}
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${liveBtn}
                    <a href="${project.code}" class="btn btn-card-secondary" target="_blank" rel="noopener">
                        <i class="fab fa-github"></i> Code
                    </a>
                </div>
            </div>
        </div>
        `;
    }).join('');

    const projectsHTML = `
        <div class="container">
            <h2 class="section-title scroll-reveal">My Projects</h2>
            <p class="section-subtitle scroll-reveal">Each project represents a step in my journey — from frontend experiments to full-stack applications.</p>
            <div class="projects-grid">
                ${projectCards}
            </div>
        </div>
    `;

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.innerHTML = projectsHTML;
        projectsSection.classList.add('section');
    }
}

export function initProjects() {
    renderProjects();
}
