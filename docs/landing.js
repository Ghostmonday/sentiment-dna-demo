// ============================================
// SentimentDNA Landing Page JavaScript
// ============================================

// Animated Star Background
class StarField {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.stars = [];
        this.numStars = 200;
        this.resize();
        this.init();
        this.animate();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.stars = [];
        for (let i = 0; i < this.numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2,
                speed: Math.random() * 0.5 + 0.1,
                opacity: Math.random() * 0.5 + 0.3,
                twinkle: Math.random() * 0.02
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.stars.forEach(star => {
            // Twinkle effect
            star.opacity += star.twinkle;
            if (star.opacity > 0.8 || star.opacity < 0.2) {
                star.twinkle *= -1;
            }

            // Draw star
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            this.ctx.fill();

            // Move star
            star.y += star.speed;
            if (star.y > this.canvas.height) {
                star.y = 0;
                star.x = Math.random() * this.canvas.width;
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize star field
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('stars');
    if (canvas) {
        new StarField(canvas);
    }
});

// Live Score Animation
function animateLiveScore() {
    const scoreEl = document.getElementById('liveScore');
    if (!scoreEl) return;

    setInterval(() => {
        const baseScore = 0.87;
        const variation = (Math.random() - 0.5) * 0.1;
        const newScore = Math.min(0.99, Math.max(0.7, baseScore + variation));
        scoreEl.textContent = newScore.toFixed(2);
        scoreEl.style.color = newScore > 0.85 ? '#00ff88' : newScore > 0.7 ? '#ff9500' : '#ff006e';
    }, 2000);
}

animateLiveScore();

// Duplicate ticker for infinite scroll
function setupTicker() {
    const ticker = document.getElementById('ticker');
    if (!ticker) return;
    
    const clone = ticker.innerHTML;
    ticker.innerHTML = clone + clone;
}

setupTicker();

// Demo Section - Simulated API calls
const demoData = {
    BTC: {
        symbol: "BTC",
        score: 0.87,
        score_pct: 93.5,
        confidence: 0.92,
        regime: "trending",
        attribution: { social: 0.35, onchain: 0.45, microstructure: 0.20 },
        momentum_short: 0.08,
        momentum_long: 0.15
    },
    ETH: {
        symbol: "ETH",
        score: 0.72,
        score_pct: 86.0,
        confidence: 0.88,
        regime: "trending",
        attribution: { social: 0.42, onchain: 0.38, microstructure: 0.20 },
        momentum_short: 0.05,
        momentum_long: 0.12
    },
    SOL: {
        symbol: "SOL",
        score: -0.23,
        score_pct: 38.5,
        confidence: 0.76,
        regime: "volatile",
        attribution: { social: 0.55, onchain: 0.25, microstructure: 0.20 },
        momentum_short: -0.12,
        momentum_long: -0.08
    },
    DOGE: {
        symbol: "DOGE",
        score: 0.91,
        score_pct: 95.5,
        confidence: 0.68,
        regime: "volatile",
        attribution: { social: 0.72, onchain: 0.08, microstructure: 0.20 },
        momentum_short: 0.22,
        momentum_long: 0.18
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const symbolSelect = document.getElementById('symbolSelect');
    const fetchBtn = document.getElementById('fetchBtn');
    const demoOutput = document.getElementById('demoOutput');

    if (fetchBtn && symbolSelect && demoOutput) {
        fetchBtn.addEventListener('click', () => {
            const symbol = symbolSelect.value;
            const data = demoData[symbol];
            
            // Add loading effect
            fetchBtn.textContent = 'Fetching...';
            fetchBtn.disabled = true;
            
            setTimeout(() => {
                // Add some randomness to make it feel live
                const liveData = { ...data };
                liveData.score = parseFloat((data.score + (Math.random() - 0.5) * 0.1).toFixed(2));
                liveData.confidence = parseFloat((data.confidence + (Math.random() - 0.5) * 0.05).toFixed(2));
                liveData.momentum_short = parseFloat((data.momentum_short + (Math.random() - 0.5) * 0.05).toFixed(2));
                
                demoOutput.textContent = JSON.stringify(liveData, null, 2);
                fetchBtn.textContent = 'Fetch Sentiment';
                fetchBtn.disabled = false;
            }, 800);
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(10, 10, 15, 0.98)';
        navLinks.style.padding = '1rem';
        navLinks.style.gap = '1rem';
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card, .pipeline-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Typing effect for terminal
function typeText(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Console log easter egg
console.log(`
%c🧬 SentimentDNA
%cThe genome of price.

Looking for an API key? 
Visit: https://sentimentdna.com/signup

Built with ❤️ for traders who want signal, not noise.
`, 
'font-size: 24px; font-weight: bold; color: #00f5ff;',
'font-size: 14px; color: #888;'
);

