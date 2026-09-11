// ===== ANNIVERSARY CELEBRATION EFFECTS =====

function isAnniversary() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  console.log("Checking date: " + month + "/" + day); // DEBUG
  return month === 9 && day === 11; // TEST MODE - Change to 21 later!
}

const IS_ANNIVERSARY = isAnniversary();
console.log("Is Anniversary: " + IS_ANNIVERSARY); // DEBUG

if (IS_ANNIVERSARY) {
  console.log("ANNIVERSARY MODE ACTIVATED!"); // DEBUG
  
  // Add CSS Animations
  const css = document.createElement('style');
  css.textContent = `
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
  `;
  document.head.appendChild(css);
  
  // CONFETTI
  function makeConfetti() {
    console.log("Making confetti..."); // DEBUG
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
    console.log("Making hearts..."); // DEBUG
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
    console.log("Making petals..."); // DEBUG
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
    console.log("Making sparkles..."); // DEBUG
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
    console.log("Making fireworks..."); // DEBUG
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
  
  // ACHIEVEMENT BADGE
  function makeBadge() {
    console.log("Making badge..."); // DEBUG
    setTimeout(() => {
      const badge = document.createElement('div');
      badge.className = 'badge';
      badge.textContent = '🏆 1st Anniversary Unlocked! 🎉';
      document.body.appendChild(badge);
      
      setTimeout(() => badge.remove(), 10000);
    }, 2000);
  }
  
  // RUN ALL EFFECTS
  function startCelebration() {
    console.log("Starting celebration!"); // DEBUG
    makeConfetti();
    setTimeout(makeHearts, 300);
    setTimeout(makePetals, 600);
    setTimeout(makeSparkles, 900);
    setTimeout(makeFireworks, 1200);
    makeBadge();
  }
  
  // Activate on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startCelebration);
  } else {
    startCelebration();
  }
}
