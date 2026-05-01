export function renderHero() {
    const heroHTML = `
        <div class="hero-container">
            <div class="hero-content">
                <div class="hero-badge">
                    <i class="fas fa-rocket"></i> Open to Opportunities
                </div>
                <h1>Hi, I'm <span class="hero-name-highlight">Sanesh</span></h1>
                <p class="subtitle">
                    <span class="typewriter-text"></span><span class="typewriter-cursor">|</span>
                </p>
                <p class="intro">Passionate about building real-world applications with modern web technologies.
                    Currently pursuing B.Tech in Computer Science and turning ideas into impactful projects.</p>
                <div class="hero-buttons">
                    <a href="https://github.com/Sanesh764" class="btn btn-primary" target="_blank" rel="noopener">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/sanesh-kumar-1802b1293/" class="btn btn-secondary"
                        target="_blank" rel="noopener">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://leetcode.com/u/sanesh7644/" class="btn btn-secondary btn-leetcode"
                        target="_blank" rel="noopener">
                        <i class="fas fa-code"></i> LeetCode
                    </a>
                </div>
                <div class="hero-stats">
                    <div class="hero-stat">
                        <span class="hero-stat-number" data-target="6">0</span>+
                        <span class="hero-stat-label">Projects</span>
                    </div>
                    <div class="hero-stat">
                        <span class="hero-stat-number" data-target="200">0</span>+
                        <span class="hero-stat-label">LeetCode Solved</span>
                    </div>
                    <div class="hero-stat">
                        <span class="hero-stat-number" data-target="12">0</span>+
                        <span class="hero-stat-label">Technologies</span>
                    </div>
                    <div class="hero-stat">
                        <span class="hero-stat-number" data-target="500">0</span>+
                        <span class="hero-stat-label">GitHub Commits</span>
                    </div>
                </div>
            </div>
            <div class="hero-visual">
                <div class="code-window">
                    <div class="code-header">
                        <div class="code-dots">
                            <div class="dot red"></div>
                            <div class="dot yellow"></div>
                            <div class="dot green"></div>
                        </div>
                        <span class="code-filename">portfolio.js</span>
                    </div>
                    <div class="code-content">
                        <div class="code-line"><span class="line-number">1</span><span class="keyword">const</span> developer = {</div>
                        <div class="code-line"><span class="line-number">2</span>  name: <span class="string">"Sanesh"</span>,</div>
                        <div class="code-line"><span class="line-number">3</span>  role: <span class="string">"Full Stack Developer"</span>,</div>
                        <div class="code-line"><span class="line-number">4</span>  skills: [<span class="string">"C++"</span>, <span class="string">"JS"</span>, <span class="string">"React"</span>, <span class="string">"Node.js"</span>],</div>
                        <div class="code-line"><span class="line-number">5</span>  leetcode: <span class="string">"sanesh7644"</span>,</div>
                        <div class="code-line"><span class="line-number">6</span>  passion: <span class="string">"Building the future"</span>,</div>
                        <div class="code-line"><span class="line-number">7</span>  available: <span class="boolean">true</span></div>
                        <div class="code-line"><span class="line-number">8</span>};</div>
                        <div class="code-line"><span class="line-number">9</span><span class="comment">// Ready to innovate! 🚀</span></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    const heroSection = document.getElementById('home');
    if (heroSection) {
        heroSection.innerHTML = heroHTML;
        heroSection.classList.add('hero', 'animated-gradient');
    }
}

export function initHero() {
    renderHero();
    animateCounters();
}

function animateCounters() {
    const counters = document.querySelectorAll('.hero-stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    });
}
