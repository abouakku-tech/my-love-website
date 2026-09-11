// ===== ANNIVERSARY CELEBRATION - REPEATING EFFECTS + CARD =====

function isAnniversary() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return month === 9 && day === 11; // TEST MODE - Change to 21 later!
}

const IS_ANNIVERSARY = isAnniversary();

if (IS_ANNIVERSARY) {
  console.log("🎉 ANNIVERSARY MODE ACTIVATED!");
  
  // Add CSS Animations
  const css = document.createElement('style');
  css.textContent = `
    /* CONFETTI */
    .confetti-piece {
      position: fixed;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 100;
    }
    
    @keyframes confetti-fall {
      0% {
        opacity: 1;
        transform: translateY(0) rotate(0deg);
      }
      100% {
        opacity: 0;
        transform: translateY(100vh) rotate(720deg);
      }
    }

    /* HEARTS */
    .heart-emoji {
      position: fixed;
      font-size: 3rem;
      pointer-events: none;
      z-index: 50;
    }
    
    @keyframes heart-fall {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(100vh);
      }
    }

    /* PETALS */
    .petal-emoji {
      position: fixed;
      font-size: 2.5rem;
      pointer-events: none;
      z-index: 50;
    }
    
    @keyframes petal-fall {
      0% {
        opacity: 1;
        transform: translateY(0) rotate(0deg);
      }
      100% {
        opacity: 0;
        transform: translateY(100vh) rotate(360deg);
      }
    }

    /* SPARKLES */
    .sparkle-emoji {
      position: fixed;
      font-size: 2rem;
      pointer-events: none;
      z-index: 40;
      animation: twinkle 2s infinite;
    }
    
    @keyframes twinkle {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }

    /* FIREWORKS */
    .fire-emoji {
      position: fixed;
      font-size: 2rem;
      pointer-events: none;
      z-index: 50;
    }
    
    @keyframes fire-burst {
      0% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate(var(--tx), var(--ty)) scale(0);
      }
    }

    /* BADGE */
    .badge {
      position: fixed;
      bottom: 50px;
      right: 50px;
      background: linear-gradient(135deg, #ff4d6d, #c9184a);
      color: white;
      padding: 20px 30px;
      border-radius: 16px;
      font-weight: 700;
      font-size: 1rem;
      z-index: 300;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
      animation: badge-slide 0.8s ease-out;
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

    /* ANNIVERSARY CARD POPUP */
    .anniversary-popup {
      display: block !important;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #fff5f7, #ffebf0);
      padding: 40px;
      border-radius: 28px;
      text-align: center;
      z-index: 2000;
      border: 3px solid #ff4d6d;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 500px;
      width: 90%;
      animation: popup-show 0.5s ease-out;
    }

    @keyframes popup-show {
      from {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0;
      }
      to {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }

    #anniversary-overlay {
      display: block !important;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1999;
    }

    .anniversary-popup h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      color: #c9184a;
      margin-bottom: 15px;
    }

    .anniversary-popup .date {
      font-size: 1.2rem;
      color: #ff4d6d;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .anniversary-popup p {
      font-size: 1rem;
      color: #555;
      line-height: 1.6;
      margin: 10px 0;
    }

    .close-popup {
      background: linear-gradient(135deg, #ff4d6d, #c9184a);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 20px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      margin-top: 20px;
    }

    .close-popup:hover {
      opacity: 0.9;
    }
  `;
  document.head.appendChild(css);
  
  // CONFETTI
  function makeConfetti() {
    const colors = ['#ff4d6d', '#c9184a', '#ff1d3b', '#ffb3c1', '#ff69b4', '#ffeb3b'];
    
    for (let i = 0; i < 100; i++) {
      const conf = document.createElement('div');
      conf.className = 'confetti-piece';
      conf.style.left = Math.random() * window.innerWidth + 'px';
      conf.style.top = (Math.random() * -100) + 'px';
      conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      conf.style.animation = `confetti-fall ${2 + Math.random() * 2}s ease-in forwards`;
      document.body.appendChild(conf);
      
      setTimeout(() => conf.remove(), 5000);
    }
  }
  
  // HEARTS
  function makeHearts() {
    let count = 0;
    const heart_interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart-emoji';
      heart.textContent = '❤️';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = '-50px';
      heart.style.animation = `heart-fall ${3 + Math.random()}s linear forwards`;
      document.body.appendChild(heart);
      
      setTimeout(() => heart.remove(), 5000);
      count++;
      if (count >= 40) clearInterval(heart_interval);
    }, 100);
  }
  
  // ROSE PETALS
  function makePetals() {
    let count = 0;
    const petal_interval = setInterval(() => {
      const petal = document.createElement('div');
      petal.className = 'petal-emoji';
      petal.textContent = '🌹';
      petal.style.left = Math.random() * window.innerWidth + 'px';
      petal.style.top = '-50px';
      petal.style.animation = `petal-fall ${5 + Math.random() * 2}s ease-in forwards`;
      document.body.appendChild(petal);
      
      setTimeout(() => petal.remove(), 8000);
      count++;
      if (count >= 30) clearInterval(petal_interval);
    }, 150);
  }
  
  // SPARKLES
  function makeSparkles() {
    for (let i = 0; i < 50; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle-emoji';
      sparkle.textContent = '✨';
      sparkle.style.left = Math.random() * window.innerWidth + 'px';
      sparkle.style.top = Math.random() * window.innerHeight + 'px';
      document.body.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 4000);
    }
  }
  
  // FIREWORKS
  function makeFireworks() {
    for (let burst = 0; burst < 6; burst++) {
      setTimeout(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.5;
        
        for (let i = 0; i < 20; i++) {
          const fire = document.createElement('div');
          fire.className = 'fire-emoji';
          fire.textContent = '🎆';
          fire.style.left = x + 'px';
          fire.style.top = y + 'px';
          
          const angle = (i / 20) * Math.PI * 2;
          const dist = 150;
          const tx = Math.cos(angle) * dist;
          const ty = Math.sin(angle) * dist;
          
          fire.style.setProperty('--tx', tx + 'px');
          fire.style.setProperty('--ty', ty + 'px');
          fire.style.animation = `fire-burst 1s ease-out forwards`;
          document.body.appendChild(fire);
          
          setTimeout(() => fire.remove(), 1500);
        }
      }, burst * 400);
    }
  }
  
  
      // Start photo slideshow
      startPhotoSlideshow();
    }
  }

  // PHOTO SLIDESHOW
  function startPhotoSlideshow() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.anniversary-slide');
    const slideCount = document.getElementById('anniversary-slide-count');
    
    if (slides.length === 0) return;
    
    const rotateSlides = () => {
      // Remove active from all
      slides.forEach(slide => slide.classList.remove('anniversary-slide-active'));
      
      // Add active to current
      slides[currentSlide].classList.add('anniversary-slide-active');
      slideCount.textContent = currentSlide + 1;
      
      // Move to next
      currentSlide = (currentSlide + 1) % slides.length;
    };
    
    // Rotate every 5 seconds
    setInterval(rotateSlides, 5000);
  }
  
  // ACHIEVEMENT BADGE
  function makeBadge() {
    setTimeout(() => {
      const badge = document.createElement('div');
      badge.className = 'badge';
      badge.textContent = '🏆 1st Anniversary! 🎉';
      document.body.appendChild(badge);
      
      setTimeout(() => badge.remove(), 10000);
    }, 2000);
  }
  
  // RUN ALL EFFECTS
  function runCelebration() {
    console.log("🎊 Running celebration effects...");
    makeConfetti();
    setTimeout(makeHearts, 300);
    setTimeout(makePetals, 600);
    setTimeout(makeSparkles, 900);
    setTimeout(makeFireworks, 1200);
    makeBadge();
    showAnniversaryPopup();
  }
  
  // Activate on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      runCelebration();
      // REPEAT EVERY 10 SECONDS
      setInterval(runCelebration, 30000);
    });
  } else {
    runCelebration();
    // REPEAT EVERY 10 SECONDS
    setInterval(runCelebration, 30000);
  }
}
