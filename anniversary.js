// ===== ANNIVERSARY CELEBRATION - BEAUTIFUL ROMANTIC EFFECTS =====

function isAnniversary() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return month === 9 && day === 11; // TEST - Change to 21 later
}

const IS_ANNIVERSARY = isAnniversary();

if (IS_ANNIVERSARY) {
  console.log("🎉 ANNIVERSARY MODE ACTIVATED!");
  
  // Add CSS for romantic effects
  const css = document.createElement('style');
  css.textContent = `
    .anniversary-effect {
      position: fixed;
      pointer-events: none;
      z-index: 100;
    }
    
    @keyframes slow-fall {
      0% {
        opacity: 1;
        transform: translateY(0) translateX(0) rotate(0deg);
      }
      50% {
        transform: translateY(50vh) translateX(100px) rotate(180deg);
      }
      100% {
        opacity: 0;
        transform: translateY(100vh) translateX(-50px) rotate(360deg);
      }
    }

    @keyframes slow-fall-left {
      0% {
        opacity: 1;
        transform: translateY(0) translateX(0) rotate(0deg);
      }
      50% {
        transform: translateY(50vh) translateX(-100px) rotate(180deg);
      }
      100% {
        opacity: 0;
        transform: translateY(100vh) translateX(50px) rotate(360deg);
      }
    }

    .flower-effect {
      animation: slow-fall 7s ease-in forwards;
      font-size: 2.8rem;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
    }

    .flower-effect-left {
      animation: slow-fall-left 7s ease-in forwards;
      font-size: 2.8rem;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
    }

    .heart-effect {
      animation: slow-fall 6s ease-in forwards;
      font-size: 3.2rem;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
    }

    .heart-effect-left {
      animation: slow-fall-left 6s ease-in forwards;
      font-size: 3.2rem;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
    }

    .sparkle-effect {
      animation: slow-fall 8s ease-in forwards;
      font-size: 2.5rem;
    }

    .sparkle-effect-left {
      animation: slow-fall-left 8s ease-in forwards;
      font-size: 2.5rem;
    }
  `;
  document.head.appendChild(css);
  
  // Different flowers array
  const flowers = ['🌹', '🌸', '🌺', '🌻', '🌷', '🌼'];
  
  // Different hearts array
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞', '💘'];
  
  // Different sparkles
  const sparkles = ['✨', '💫', '⭐', '🌟'];
  
  // Create effects ONE BY ONE (romantic & slow)
  function createEffects() {
    let delay = 0;
    
    // FLOWERS - 12 different flowers, one by one
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        const flowerDiv = document.createElement('div');
        const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
        const isLeft = Math.random() > 0.5;
        
        flowerDiv.className = isLeft ? 'anniversary-effect flower-effect-left' : 'anniversary-effect flower-effect';
        flowerDiv.textContent = randomFlower;
        flowerDiv.style.left = Math.random() * 100 + '%';
        flowerDiv.style.top = '-60px';
        document.body.appendChild(flowerDiv);
        setTimeout(() => flowerDiv.remove(), 7500);
      }, delay);
      delay += 350; // Stagger by 350ms
    }
    
    // HEARTS - 14 different hearts, one by one
    for (let i = 0; i < 14; i++) {
      setTimeout(() => {
        const heartDiv = document.createElement('div');
        const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
        const isLeft = Math.random() > 0.5;
        
        heartDiv.className = isLeft ? 'anniversary-effect heart-effect-left' : 'anniversary-effect heart-effect';
        heartDiv.textContent = randomHeart;
        heartDiv.style.left = Math.random() * 100 + '%';
        heartDiv.style.top = '-60px';
        document.body.appendChild(heartDiv);
        setTimeout(() => heartDiv.remove(), 6500);
      }, delay);
      delay += 280; // Stagger by 280ms
    }

    // SPARKLES - 8 sparkles mixed in
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const sparkleDiv = document.createElement('div');
        const randomSparkle = sparkles[Math.floor(Math.random() * sparkles.length)];
        const isLeft = Math.random() > 0.5;
        
        sparkleDiv.className = isLeft ? 'anniversary-effect sparkle-effect-left' : 'anniversary-effect sparkle-effect';
        sparkleDiv.textContent = randomSparkle;
        sparkleDiv.style.left = Math.random() * 100 + '%';
        sparkleDiv.style.top = '-60px';
        document.body.appendChild(sparkleDiv);
        setTimeout(() => sparkleDiv.remove(), 8500);
      }, delay);
      delay += 500; // Stagger by 500ms
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
