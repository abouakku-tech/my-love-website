// ===== ANNIVERSARY CELEBRATION CODE WITH EFFECTS =====

function isAnniversary() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  // TEST MODE: Check for today (Sept 11) - Change to 21 after testing!
  return month === 9 && day === 11;
}

const IS_ANNIVERSARY = isAnniversary();

// Add CSS Styles for all animations
function addAnniversaryStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Confetti Animation */
    .confetti {
      position: fixed;
      width: 10px;
      height: 10px;
      pointer-events: none;
      z-index: 100;
    }
    
    @keyframes floatUp {
      to {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }

    /* Fireworks Animation */
    .firework-particle {
      position: fixed;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 100;
      animation: explode 1s ease-out forwards;
    }
    
    @keyframes explode {
      to {
        transform: translate(var(--tx), var(--ty));
        opacity: 0;
      }
    }

    /* Heart Rain Animation */
    .heart-rain {
      position: fixed;
      font-size: 2rem;
      pointer-events: none;
      z-index: 50;
      animation: fall 4s ease-in forwards;
    }
    
    @keyframes fall {
      to {
        transform: translateY(100vh);
        opacity: 0;
      }
    }

    /* Rose Petals Animation */
    .rose-petal {
      position: fixed;
      font-size: 1.8rem;
      pointer-events: none;
      z-index: 50;
      animation: petal-fall 8s ease-in forwards;
    }
    
    @keyframes petal-fall {
      0% {
        transform: translateY(0) rotateZ(0deg);
        opacity: 0.7;
      }
      100% {
        transform: translateY(100vh) rotateZ(360deg) translateX(100px);
        opacity: 0;
      }
    }

    /* Sparkles Animation */
    .sparkle {
      position: fixed;
      pointer-events: none;
      z-index: 40;
      animation: twinkle 1s ease-in-out;
    }
    
    @keyframes twinkle {
      0%, 100% { opacity: 0; }
      50% { opacity: 1; }
    }

    /* Achievement Badge */
    .achievement-badge {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: linear-gradient(135deg, #ff4d6d, #c9184a);
      color: white;
      padding: 20px 30px;
      border-radius: 16px;
      font-weight: 700;
      z-index: 200;
      box-shadow: 0 10px 30px rgba(201, 24, 74, 0.4);
      animation: badge-bounce 0.8s ease-out forwards;
    }
    
    @keyframes badge-bounce {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    /* Slideshow Styles */
    .slideshow-container {
      position: relative;
      width: 100%;
      max-width: 500px;
      margin: 20px auto;
      border-radius: 12px;
      overflow: hidden;
      background: #f0f0f0;
    }

    .slide {
      display: none;
      width: 100%;
      height: 300px;
      object-fit: cover;
      animation: fade-in 0.5s ease-in;
    }

    .slide.active {
      display: block;
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .slide-counter {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
    }
  `;
  document.head.appendChild(style);
}

function createConfetti() {
  const colors = ['#ff4d6d', '#ff1d3b', '#c9184a', '#800f2f', '#ffb3c1', '#ffeb3b'];
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animation = `floatUp ${3 + Math.random() * 2}s ease-in forwards`;
    confetti.style.borderRadius = '50%';
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

function showAnniversaryPopup() {
  const popup = document.getElementById('anniversary-popup');
  const overlay = document.getElementById('anniversary-overlay');
  if (popup && overlay) {
    popup.style.display = 'block';
    overlay.style.display = 'block';
  }
}

function createFireworks() {
  const colors = ['#ff4d6d', '#ff69b4', '#ffb3c1', '#c9184a', '#ff1d3b', '#ffeb3b'];
  
  for (let burst = 0; burst < 8; burst++) {
    setTimeout(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * (window.innerHeight * 0.5);

      for (let j = 0; j < 30; j++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';

        const angle = (j / 30) * Math.PI * 2;
        const velocity = 5 + Math.random() * 5;
        const tx = Math.cos(angle) * velocity * 30;
        const ty = Math.sin(angle) * velocity * 30;

        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
      }
    }, burst * 300);
  }
}

function createHeartRain() {
  let count = 0;
  const timer = setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart-rain';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '-50px';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
    
    count++;
    if (count > 30) clearInterval(timer);
  }, 200);
}

function createRosePetals() {
  let count = 0;
  const timer = setInterval(() => {
    const petal = document.createElement('div');
    petal.className = 'rose-petal';
    petal.textContent = '🌹';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.top = '-50px';
    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 8000);
    
    count++;
    if (count > 20) clearInterval(timer);
  }, 300);
}

function createSparkles() {
  let count = 0;
  const timer = setInterval(() => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✨';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
    
    count++;
    if (count > 50) clearInterval(timer);
  }, 200);
}

function insertAnniversaryCard() {
  const container = document.querySelector('.container');
  if (!container) return;
  
  const card = document.createElement('div');
  card.className = 'card anniversary-card';
  card.style.marginTop = '24px';
  card.style.borderColor = '#ff4d6d';
  card.innerHTML = `
    <h2>🎉 1st Anniversary Celebration 🎉</h2>
    <div class="date" style="font-size: 1.3rem; font-weight: 700; color: #ff4d6d; margin-bottom: 15px;">September 21, 2026</div>
    
    <div class="slideshow-container">
      <img src="couple1.jpeg" alt="Memory 1" class="slide active">
      <img src="couple2.jpeg" alt="Memory 2" class="slide">
      <img src="meet up pic.jpeg" alt="Memory 3" class="slide">
      <img src="why I love you for pituce.jpg" alt="Memory 4" class="slide">
      <div class="slide-counter">
        <span id="slide-current">1</span> / <span id="slide-total">4</span>
      </div>
    </div>

    <p style="margin-top: 20px; font-weight: 600; font-size: 1.2rem;">
      One Amazing Year Together!
    </p>
    <p>
      From our first surprise meet on July 15, 2026, to this beautiful moment - every day with you has been a blessing.
    </p>
    <p style="font-style: italic; color: #c9184a; font-size: 1.1rem;">
      "You are my favorite person, my happiness, my peace, and my forever." 💖
    </p>
    <p style="margin-top: 15px; font-weight: 600;">
      Here's to more memories, more love, and more moments together!
    </p>
    <p style="font-size: 1.3rem; margin-top: 15px; color: #c9184a; font-weight: 700;">
      I Love You Forever, Izu ❤️
    </p>
  `;

  container.insertBefore(card, container.firstChild);

  let currentSlide = 0;
  const slides = card.querySelectorAll('.slide');
  const slideCounter = card.querySelector('#slide-current');
  const slideTotalCounter = card.querySelector('#slide-total');
  const totalSlides = slides.length;
  
  slideTotalCounter.textContent = totalSlides;

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
    slideCounter.textContent = currentSlide + 1;
  }, 5000);
}

function showAchievementBadge() {
  const badge = document.createElement('div');
  badge.className = 'achievement-badge';
  badge.innerHTML = '🏆 1st Anniversary Unlocked! 🎉';
  document.body.appendChild(badge);

  setTimeout(() => {
    badge.style.animation = 'badge-bounce 0.8s ease-in reverse forwards';
    setTimeout(() => badge.remove(), 800);
  }, 8000);
}

function activateAnniversaryMode() {
  if (!IS_ANNIVERSARY) return;

  addAnniversaryStyles();
  createConfetti();
  setTimeout(showAnniversaryPopup, 500);
  setTimeout(createFireworks, 1500);
  createHeartRain();
  createRosePetals();
  createSparkles();
  setTimeout(insertAnniversaryCard, 1000);
  showAchievementBadge();
}

// Activate when page loads
window.addEventListener('load', activateAnniversaryMode);
