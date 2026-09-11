// ===== ANNIVERSARY CELEBRATION - FRESH BUILD =====

function isAnniversary() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return month === 9 && day === 11; // TEST - Change to 21 later
}

const IS_ANNIVERSARY = isAnniversary();

if (IS_ANNIVERSARY) {
  console.log("🎉 ANNIVERSARY MODE ACTIVATED!");
  
  // Add CSS for effects
  const css = document.createElement('style');
  css.textContent = `
    .anniversary-effect {
      position: fixed;
      pointer-events: none;
      z-index: 100;
    }
    
    @keyframes fall-down {
      0% {
        opacity: 1;
        transform: translateY(0) rotate(0deg);
      }
      100% {
        opacity: 0;
        transform: translateY(100vh) rotate(720deg);
      }
    }

    .flower-effect {
      animation: fall-down 4s ease-in forwards;
      font-size: 2.5rem;
    }

    .heart-effect {
      animation: fall-down 3s linear forwards;
      font-size: 3rem;
    }
  `;
  document.head.appendChild(css);
  
  // Create effects
  function createEffects() {
    // Flowers 🌹
    for (let i = 0; i < 20; i++) {
      const flower = document.createElement('div');
      flower.className = 'anniversary-effect flower-effect';
      flower.textContent = '🌹';
      flower.style.left = Math.random() * 100 + '%';
      flower.style.top = '-60px';
      document.body.appendChild(flower);
      setTimeout(() => flower.remove(), 4500);
    }
    
    // Hearts ❤️
    for (let i = 0; i < 25; i++) {
      const heart = document.createElement('div');
      heart.className = 'anniversary-effect heart-effect';
      heart.textContent = '❤️';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.top = '-60px';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 3500);
    }
  }
  
  // Activate on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      createEffects();
      // Repeat every 10 seconds
      setInterval(createEffects, 10000);
    });
  } else {
    createEffects();
    // Repeat every 10 seconds
    setInterval(createEffects, 10000);
  }
}
