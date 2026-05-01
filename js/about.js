export function renderAbout() {
    const aboutHTML = `
        <div class="container">
            <h2 class="section-title scroll-reveal">About Me</h2>
            <p class="section-subtitle scroll-reveal">A glimpse into who I am, what I know, and where I'm headed.</p>
            
            <!-- Profile Photo Card -->
            <div class="about-profile-card scroll-reveal">
                <div class="profile-photo-wrapper">
                    <div class="profile-photo-ring">
                        <img src="images/sanesh1.jpg" alt="Sanesh Kumar — Full Stack Developer" class="profile-photo" loading="lazy">
                    </div>
                    <div class="profile-status">
                        <span class="status-dot"></span> Available for work
                    </div>
                </div>
                <div class="profile-info">
                    <h3 class="profile-name">Sanesh Kumar</h3>
                    <p class="profile-role">Full Stack Developer</p>
                    <p class="profile-bio">B.Tech CSE student passionate about building real-world applications. 
                        I love turning ideas into impactful products through clean code and modern technologies.</p>
                    <div class="profile-tags">
                        <span class="profile-tag"><i class="fas fa-map-marker-alt"></i> India</span>
                        <span class="profile-tag"><i class="fas fa-graduation-cap"></i> B.Tech CSE</span>
                        <span class="profile-tag"><i class="fas fa-code"></i> 200+ LeetCode</span>
                        <span class="profile-tag"><i class="fas fa-briefcase"></i> Open to Work</span>
                    </div>
                </div>
            </div>

            <div class="about-content">
                <div class="about-left scroll-reveal">
                    <p class="about-text">
                        My journey in technology started with curiosity and has evolved into a deep commitment 
                        to mastering the art of software development. I've built full-stack applications ranging from 
                        GitHub and Zerodha clones to AI chatbots and e-commerce platforms.
                    </p>
                    <p class="about-text">
                        I believe in continuous learning and staying updated with the latest technologies. When I'm not
                        coding, you'll find me exploring new programming concepts, contributing to open-source projects,
                        or working on personal projects that challenge my skills.
                    </p>

                    <h3 class="about-section-heading">Skills & Technologies</h3>
                    <div class="skills-grid">
                        <div class="skill-item scroll-reveal">
                            <i class="fas fa-code"></i>
                            <div>C++</div>
                        </div>
                        <div class="skill-item scroll-reveal">
                            <i class="fas fa-project-diagram"></i>
                            <div>DSA</div>
                        </div>
                        <div class="skill-item scroll-reveal">
                            <i class="fas fa-terminal"></i>
                            <div>C</div>
                        </div>
                        <div class="skill-item scroll-reveal">
                            <i class="fas fa-coffee"></i>
                            <div>Java</div>
                        </div>
                        <div class="skill-item scroll-reveal">
                            <i class="fab fa-html5"></i>
                            <div>HTML5</div>
                        </div>
                        <div class="skill-item scroll-reveal">
                            <i class="fab fa-css3-alt"></i>
                            <div>CSS3</div>
                        </div>
                        <div class="skill-item scroll-reveal">
                            <i class="fab fa-js"></i>
                            <div>JavaScript</div>
                        </div>
                        <div class="skill-item scroll-reveal">
                            <i class="fab fa-node-js"></i>
                            <div>Node.js</div>
                        </div>
                        <div class="skill-item scroll-reveal">
                            <i class="fab fa-react"></i>
                            <div>React</div>
                        </div>
                        <div class="skill-item scroll-reveal">
                            <i class="fas fa-database"></i>
                            <div>MongoDB</div>
                        </div>
                        <div class="skill-item scroll-reveal">
                            <i class="fab fa-git-alt"></i>
                            <div>Git</div>
                        </div>
                        <div class="skill-item scroll-reveal">
                            <i class="fab fa-python"></i>
                            <div>Python</div>
                        </div>
                    </div>
                </div>

                <div class="about-right scroll-reveal">
                    <h3 class="about-section-heading">Education & Experience</h3>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-icon"><i class="fas fa-graduation-cap"></i></div>
                            <div class="timeline-body">
                                <div class="timeline-title">Bachelor of Technology — Computer Science</div>
                                <div class="timeline-subtitle">2023 – Present</div>
                                <p class="timeline-text">Pursuing B.Tech in CSE with focus on software development, data structures, and algorithms.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-icon"><i class="fas fa-laptop-code"></i></div>
                            <div class="timeline-body">
                                <div class="timeline-title">Full Stack Development Course</div>
                                <div class="timeline-subtitle">2024</div>
                                <p class="timeline-text">Completed comprehensive course covering modern web development technologies and best practices.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-icon"><i class="fas fa-code-branch"></i></div>
                            <div class="timeline-body">
                                <div class="timeline-title">Open Source Contributions</div>
                                <div class="timeline-subtitle">2024 – Present</div>
                                <p class="timeline-text">Active contributor to various open-source projects, helping build better software for the community.</p>
                            </div>
                        </div>
                    </div>

                    <h3 class="about-section-heading" style="margin-top: 2rem;">Tools I Use</h3>
                    <div class="tools-grid">
                        <div class="tool-item scroll-reveal">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </div>
                        <div class="tool-item scroll-reveal">
                            <i class="fas fa-code"></i>
                            <span>VS Code</span>
                        </div>
                        <div class="tool-item scroll-reveal">
                            <i class="fab fa-figma"></i>
                            <span>Figma</span>
                        </div>
                        <div class="tool-item scroll-reveal">
                            <i class="fas fa-terminal"></i>
                            <span>Terminal</span>
                        </div>
                        <div class="tool-item scroll-reveal">
                            <i class="fab fa-linux"></i>
                            <span>Linux</span>
                        </div>
                        <div class="tool-item scroll-reveal">
                            <i class="fas fa-cloud"></i>
                            <span>Vercel</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.innerHTML = aboutHTML;
        aboutSection.classList.add('section', 'about');
    }
}

export function initAbout() {
    renderAbout();
}
