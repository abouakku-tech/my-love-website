// ===== ANNIVERSARY EFFECTS =====

const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();

console.log("📅 TODAY'S DATE: " + month + "/" + day);
console.log("🎂 ANNIVERSARY DATE: 9/21");
console.log("🔍 Checking: month === 9? " + (month === 9) + " | day === 14? " + (day === 14));

// Check if it's anniversary (Sept 14 for TESTING)
if (month === 9 && day === 14) {
  console.log("✅ ✅ ✅ ANNIVERSARY MODE ACTIVATED! ✅ ✅ ✅");
  
  // Add CSS with better styling
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall-down {
      0% { 
        opacity: 1; 
        transform: translateY(-100px) translateX(0px) rotate(0deg);
      }
      100% { 
        opacity: 0; 
        transform: translateY(100vh) translateX(100px) rotate(360deg);
      }
    }
    
    @keyframes sparkle {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    
    .ann-emoji {
      position: fixed !important;
      pointer-events: none !important;
      z-index: 9999 !important;
      will-change: transform;
    }
    
    .ann-flower {
      font-size: 2.5rem;
      animation: fall-down 8s ease-in forwards !important;
    }
    
    .ann-heart {
      font-size: 3rem;
      animation: fall-down 7s ease-in forwards !important;
    }
    
    .ann-sparkle {
      font-size: 1.5rem;
      animation: sparkle 2s ease-in-out infinite, fall-down 6s ease-in forwards !important;
    }
  `;
  document.head.appendChild(style);
  console.log("✅ CSS styles added");
  
  // Arrays
  const flowers = ['🌹', '🌸', '🌺', '🌻', '🌷', '🌼'];
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞', '💘'];
  const sparkles = ['✨', '💫', '⭐', '🌟'];
  
  function createEmoji(emoji, className) {
    const el = document.createElement('div');
    el.className = 'ann-emoji ' + className;
    el.textContent = emoji;
    el.style.left = Math.random() * 100 + '%';
    el.style.top = '-100px';
    el.style.opacity = '1';
    
    document.body.appendChild(el);
    console.log("✨ Created " + className + ": " + emoji);
    
    setTimeout(() => {
      if (el.parentNode) {
        el.remove();
      }
    }, 8500);
  }
  
  function playEffects() {
    console.log("▶️ Playing effects now!");
    let delay = 0;
    
    // Create flowers one by one
    flowers.forEach((flower, i) => {
      setTimeout(() => {
        createEmoji(flower, 'ann-flower');
      }, delay);
      delay += 400;
    });
    
    // Create hearts one by one
    hearts.forEach((heart, i) => {
      setTimeout(() => {
        createEmoji(heart, 'ann-heart');
      }, delay);
      delay += 350;
    });
    
    // Create sparkles
    sparkles.forEach((sparkle, i) => {
      setTimeout(() => {
        createEmoji(sparkle, 'ann-sparkle');
      }, delay);
      delay += 300;
    });
  }
  
  // Wait for page to fully load, then start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      console.log("📄 Page loaded, starting effects!");
      playEffects();
      setInterval(playEffects, 10000);
    });
  } else {
    console.log("📄 Page already loaded, starting effects!");
    playEffects();
    setInterval(playEffects, 10000);
  }
  
} else {
  console.log("❌ ❌ ❌ ANNIVERSARY MODE OFF ❌ ❌ ❌");
  console.log("Today is " + month + "/" + day + " - NOT the test date");
}