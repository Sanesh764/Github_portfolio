export function renderFooter() {
    const year = new Date().getFullYear();
    const footerHTML = `
        <div class="footer-top">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <div class="footer-logo"><span class="logo-bracket">&lt;</span>Sanesh<span class="logo-bracket"> /&gt;</span></div>
                        <p class="footer-tagline">Building digital experiences with passion and precision.</p>
                    </div>
                    <div class="footer-links-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-links-col">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="https://github.com/Sanesh764" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/sanesh-kumar-1802b1293/" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                            <li><a href="https://x.com/Sanesh847" target="_blank" rel="noopener"><i class="fab fa-twitter"></i> Twitter / X</a></li>
                            <li><a href="https://leetcode.com/u/sanesh7644/" target="_blank" rel="noopener"><i class="fas fa-code"></i> LeetCode</a></li>
                            <li><a href="mailto:sanesh7644@gmail.com"><i class="fas fa-envelope"></i> Email</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p>&copy; ${year} Sanesh. Crafted with <span class="heart">&hearts;</span> and lots of coffee.</p>
            </div>
        </div>
    `;
    const footerElement = document.querySelector('.footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
}

export function initFooter() {
    renderFooter();
}
