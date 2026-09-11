// ===== ANNIVERSARY CELEBRATION CODE =====
// This file handles all anniversary features for September 21

function isAnniversary() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  // TEST MODE: Check for today (Sept 11) - Change to 21 after testing!
  return month === 9 && day === 11;
}

const IS_ANNIVERSARY = isAnniversary();

function createConfetti() {
  const colors = ['#ff4d6d', '#ff1d3b', '#c9184a', '#800f2f', '#ffb3c1'];
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animation = `floatUp ${3 + Math.random() * 2}s ease-in forwards`;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

function showAnniversaryPopup() {
  const popup = document.getElementById('anniversary-popup');
  const overlay = document.getElementById('anniversary-overlay');
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function closeAnniversaryPopup() {
  const popup = document.getElementById('anniversary-popup');
  const overlay = document.getElementById('anniversary-overlay');
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

function createFireworks() {
  const colors = ['#ff4d6d', '#ff69b4', '#ffb3c1', '#c9184a', '#ff1d3b'];
  
  for (let i = 0; i < 8; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.5);

    for (let j = 0; j < 30; j++) {
      const particle = document.createElement('div');
      particle.className = 'firework-particle';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.width = '5px';
      particle.style.height = '5px';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      const angle = (j / 30) * Math.PI * 2;
      const velocity = 5 + Math.random() * 5;
      const tx = Math.cos(angle) * velocity * 30;
      const ty = Math.sin(angle) * velocity * 30;

      particle.style.setProperty('--tx', tx + 'px');
      particle.style.setProperty('--ty', ty + 'px');

      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    }
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
    petal.style.opacity = '0.7';
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
    sparkle.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
    
    count++;
    if (count > 30) clearInterval(timer);
  }, 300);
}

function insertAnniversaryCard() {
  const container = document.querySelector('.container');
  
  const card = document.createElement('div');
  card.className = 'card anniversary-card';
  card.style.marginTop = '24px';
  card.style.borderColor = '#ff4d6d';
  card.innerHTML = `
    <h2>🎉 1st Anniversary Celebration 🎉</h2>
    <div class="date">September 21, 2026</div>
    
    <div class="slideshow-container">
      <img src="./jpg/couple1.jpeg" alt="Memory 1" class="slide active">
      <img src="./jpg/couple2.jpeg" alt="Memory 2" class="slide">
      <img src="./jpg/meet up pic.jpeg" alt="Memory 3" class="slide">
      <img src="./jpg/photo4.jpg" alt="Memory 4" class="slide">
      <img src="./jpg/photo5.jpg" alt="Memory 5" class="slide">
      <img src="./jpg/photo6.jpg" alt="Memory 6" class="slide">
      <img src="./jpg/photo7.jpg" alt="Memory 7" class="slide">
      <img src="./jpg/photo8.jpg" alt="Memory 8" class="slide">
      <img src="./jpg/photo9.jpg" alt="Memory 9" class="slide">
      <img src="./jpg/photo10.jpg" alt="Memory 10" class="slide">
      <div class="slide-counter">
        <span id="slide-current">1</span> / <span id="slide-total">5</span>
      </div>
    </div>

    <p style="margin-top: 20px;">
      <strong>One Amazing Year Together!</strong>
    </p>
    <p>
      From our first surprise meet on July 15, 2026, to this beautiful moment - every day with you has been a blessing.
    </p>
    <p style="font-style: italic; color: #c9184a;">
      "You are my favorite person, my happiness, my peace, and my forever." 💖
    </p>
    <p style="margin-top: 15px; font-weight: 600;">
      Here's to more memories, more love, and more moments together!
    </p>
    <p style="font-size: 1.3rem; margin-top: 15px;">
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
