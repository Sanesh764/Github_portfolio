export function renderContact() {
    const contactHTML = `
        <div class="container">
            <h2 class="section-title scroll-reveal">Get In Touch</h2>
            <p class="section-subtitle scroll-reveal">I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.</p>

            <div class="contact-content">
                <div class="contact-form scroll-reveal">
                    <form id="contactForm" action="https://formspree.io/f/your-form-id" method="POST">
                        <div class="form-group">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" id="name" name="name" class="form-input" placeholder="Your name" required>
                        </div>
                        <div class="form-group">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" name="email" class="form-input" placeholder="you@example.com" required>
                        </div>
                        <div class="form-group">
                            <label for="message" class="form-label">Message</label>
                            <textarea id="message" name="message" class="form-input form-textarea" placeholder="Tell me about your project or idea..." required></textarea>
                        </div>
                        <button type="submit" class="btn btn-submit" id="contact-submit-btn">
                            <i class="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>

                <div class="contact-info scroll-reveal">
                    <h3>Let's Connect</h3>
                    <p class="contact-info-text">Feel free to reach out through the form or connect with me on social media. I typically respond within 24 hours.</p>
                    
                    <div class="contact-item">
                        <div class="contact-item-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div>
                            <div class="contact-item-label">Email</div>
                            <a href="mailto:sanesh7644@gmail.com" class="contact-item-value">sanesh7644@gmail.com</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-item-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <div class="contact-item-label">Location</div>
                            <span class="contact-item-value">India</span>
                        </div>
                    </div>

                    <div class="social-links">
                        <a href="https://github.com/Sanesh764" class="social-link" target="_blank" rel="noopener" aria-label="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sanesh-kumar-1802b1293/" class="social-link"
                            target="_blank" rel="noopener" aria-label="LinkedIn">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://x.com/Sanesh847" class="social-link" target="_blank" rel="noopener" aria-label="Twitter / X">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://leetcode.com/u/sanesh7644/" class="social-link social-link-leetcode" target="_blank" rel="noopener" aria-label="LeetCode">
                            <i class="fas fa-code"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.innerHTML = contactHTML;
        contactSection.classList.add('section', 'contact');
    }
}

export function initContact() {
    renderContact();
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('contact-submit-btn');
        const originalText = btn.innerHTML;
        
        // Show sending state
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        // Simulate sending (replace with real Formspree/EmailJS integration)
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            btn.classList.add('btn-success');
            form.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.classList.remove('btn-success');
            }, 3000);
        }, 1500);
    });
}
