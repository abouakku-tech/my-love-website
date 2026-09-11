// ===== ANNIVERSARY CELEBRATION CODE =====

function isAnniversary() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return month === 9 && day === 11; // TEST MODE - Change to 21 later
}

const IS_ANNIVERSARY = isAnniversary();

// Add CSS Styles ONCE
if (IS_ANNIVERSARY) {
  const style = document.createElement('style');
  style.textContent = `
    /* Prevent page shake */
    html { overflow-y: scroll; }

    /* Confetti */
    .confetti {
      position: fixed;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 100;
    }
    
    @keyframes confetti-fall {
      to {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }

    /* Heart Rain */
    .heart-rain {
      position: fixed;
      font-size: 2.5rem;
      pointer-events: none;
      z-index: 50;
    }
    
    @keyframes heart-drop {
      to {
        transform: translateY(100vh);
        opacity: 0;
      }
    }

    /* Rose Petals */
    .rose-petal {
      position: fixed;
      font-size: 2rem;
      pointer-events: none;
      z-index: 50;
    }
    
    @keyframes petal-drift {
      to {
        transform: translateY(100vh) rotateZ(360deg);
        opacity: 0;
      }
    }

    /* Sparkles */
    .sparkle {
      position: fixed;
      font-size: 1.5rem;
      pointer-events: none;
      z-index: 40;
    }
    
    @keyframes sparkle-glow {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }

    /* Achievement Badge */
    .achievement-badge {
      position: fixed;
      bottom: 40px;
      right: 40px;
      background: linear-gradient(135deg, #ff4d6d, #c9184a);
      color: white;
      padding: 20px 30px;
      border-radius: 16px;
      font-weight: 700;
      font-size: 1.1rem;
      z-index: 300;
      box-shadow: 0 15px 40px rgba(201, 24, 74, 0.5);
      animation: badge-slide 0.6s ease-out;
    }
    
    @keyframes badge-slide {
      from {
        transform: translateX(500px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
}

// CONFETTI EFFECT
function createConfetti() {
  if (!IS_ANNIVERSARY) return;
  
  const colors = ['#ff4d6d', '#c9184a', '#ff1d3b', '#ffb3c1', '#ffeb3b'];
  
  for (let i = 0; i < 80; i++) {
    const conf = document.createElement('div');
    conf.className = 'confetti';
    conf.style.left = Math.random() * window.innerWidth + 'px';
    conf.style.top = (Math.random() * -50 - 20) + 'px';
    conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    conf.style.animation = `confetti-fall ${2 + Math.random() * 2}s ease-in forwards`;
    document.body.appendChild(conf);
    
    setTimeout(() => conf.remove(), 5000);
  }
}

// HEART RAIN
function createHeartRain() {
  if (!IS_ANNIVERSARY) return;
  
  let count = 0;
  const drop = setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart-rain';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '-60px';
    heart.style.animation = `heart-drop ${3 + Math.random() * 1}s linear forwards`;
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 5000);
    
    count++;
    if (count >= 30) clearInterval(drop);
  }, 150);
}

// ROSE PETALS
function createRosePetals() {
  if (!IS_ANNIVERSARY) return;
  
  let count = 0;
  const drop = setInterval(() => {
    const petal = document.createElement('div');
    petal.className = 'rose-petal';
    petal.textContent = '🌹';
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.top = '-60px';
    petal.style.animation = `petal-drift ${5 + Math.random() * 2}s ease-in forwards`;
    document.body.appendChild(petal);
    
    setTimeout(() => petal.remove(), 8000);
    
    count++;
    if (count >= 25) clearInterval(drop);
  }, 200);
}

// SPARKLES
function createSparkles() {
  if (!IS_ANNIVERSARY) return;
  
  for (let i = 0; i < 40; i++) {
    const spark = document.createElement('div');
    spark.className = 'sparkle';
    spark.textContent = '✨';
    spark.style.left = Math.random() * window.innerWidth + 'px';
    spark.style.top = Math.random() * window.innerHeight + 'px';
    spark.style.animation = `sparkle-glow ${1 + Math.random() * 1}s ease-in-out`;
    document.body.appendChild(spark);
    
    setTimeout(() => spark.remove(), 3000);
  }
}

// ACHIEVEMENT BADGE
function showAchievementBadge() {
  if (!IS_ANNIVERSARY) return;
  
  const badge = document.createElement('div');
  badge.className = 'achievement-badge';
  badge.textContent = '🏆 1st Anniversary Unlocked! 🎉';
  document.body.appendChild(badge);
  
  setTimeout(() => badge.remove(), 10000);
}

// SHOW ANNIVERSARY POPUP
function showPopup() {
  if (!IS_ANNIVERSARY) return;
  
  const popup = document.getElementById('anniversary-popup');
  const overlay = document.getElementById('anniversary-overlay');
  
  if (popup && overlay) {
    overlay.style.display = 'block';
    popup.style.display = 'block';
  }
}

// ACTIVATE ALL EFFECTS
function activateAnniversary() {
  if (!IS_ANNIVERSARY) return;
  
  // Start all effects
  createConfetti();
  setTimeout(() => showPopup(), 800);
  setTimeout(() => createHeartRain(), 500);
  createRosePetals();
  setTimeout(() => createSparkles(), 1200);
  setTimeout(() => showAchievementBadge(), 2000);
}

// Run when page loads
window.addEventListener('load', activateAnniversary);
