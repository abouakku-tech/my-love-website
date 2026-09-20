// ===== ANNIVERSARY EFFECTS - ALWAYS ON =====

console.log("🎉 ANNIVERSARY EFFECTS LOADED AND ACTIVE!");

// Create styles for falling elements
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
  @keyframes fallAnimation {
    0% {
      opacity: 1;
      transform: translateY(-50px) translateX(0px) rotate(0deg);
    }
    100% {
      opacity: 0;
      transform: translateY(100vh) translateX(100px) rotate(360deg);
    }
  }

  @keyframes sparkleAnimation {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  .anniversary-emoji {
    position: fixed;
    pointer-events: none;
    z-index: 9999;
  }

  .anniversary-flower {
    font-size: 3rem;
    animation: fallAnimation 8s linear forwards;
  }

  .anniversary-heart {
    font-size: 3.5rem;
    animation: fallAnimation 7s linear forwards;
  }

  .anniversary-sparkle {
    font-size: 2rem;
    animation: sparkleAnimation 2s ease-in-out infinite, fallAnimation 6s linear forwards;
  }
`;

document.head.appendChild(styleSheet);
console.log("✅ Styles added!");

// Emoji arrays
const flowers = ['🌹', '🌸', '🌺', '🌻', '🌷', '🌼'];
const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞', '💘'];
const sparkles = ['✨', '💫', '⭐', '🌟'];

// Function to create falling emoji
function createFallingEmoji(emoji, className) {
  const element = document.createElement('div');
  element.className = 'anniversary-emoji ' + className;
  element.textContent = emoji;
  element.style.left = Math.random() * 100 + '%';
  element.style.top = '-100px';
  
  document.body.appendChild(element);
  console.log("✨ Created: " + emoji);
  
  // Remove after animation
  setTimeout(() => {
    element.remove();
  }, 8500);
}

// Main effects function
function startAnniversaryEffects() {
  console.log("🎊 STARTING ANNIVERSARY EFFECTS!");
  
  let delayTime = 0;
  
  // Create flowers one by one
  for (let i = 0; i < flowers.length; i++) {
    setTimeout(() => {
      createFallingEmoji(flowers[i], 'anniversary-flower');
    }, delayTime);
    delayTime += 400;
  }
  
  // Create hearts one by one
  for (let i = 0; i < hearts.length; i++) {
    setTimeout(() => {
      createFallingEmoji(hearts[i], 'anniversary-heart');
    }, delayTime);
    delayTime += 350;
  }
  
  // Create sparkles one by one
  for (let i = 0; i < sparkles.length; i++) {
    setTimeout(() => {
      createFallingEmoji(sparkles[i], 'anniversary-sparkle');
    }, delayTime);
    delayTime += 300;
  }
}

// Start effects when page is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log("📄 Page loaded - starting effects!");
    startAnniversaryEffects();
    // Repeat every 10 seconds
    setInterval(startAnniversaryEffects, 10000);
  });
} else {
  console.log("📄 Page already loaded - starting effects!");
  startAnniversaryEffects();
  // Repeat every 10 seconds
  setInterval(startAnniversaryEffects, 10000);
}

console.log("✅ ANNIVERSARY EFFECTS SETUP COMPLETE!");
