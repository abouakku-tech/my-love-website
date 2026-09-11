// ===== ANNIVERSARY EFFECTS =====

const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();

console.log("📅 Today: " + month + "/" + day);

if (month === 9 && day === 21) {
  console.log("✅ ANNIVERSARY MODE ACTIVATED!");
  
  // Add CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall-right {
      0% { opacity: 1; transform: translateY(0) rotate(0deg); }
      100% { opacity: 0; transform: translateY(100vh) rotate(360deg); }
    }
    @keyframes fall-left {
      0% { opacity: 1; transform: translateY(0) rotate(0deg); }
      100% { opacity: 0; transform: translateY(100vh) rotate(-360deg); }
    }
    .ann-flower { position: fixed; font-size: 2.5rem; pointer-events: none; z-index: 100; }
    .ann-heart { position: fixed; font-size: 3rem; pointer-events: none; z-index: 100; }
  `;
  document.head.appendChild(style);
  
  // Arrays
  const flowers = ['🌹', '🌸', '🌺', '🌻', '🌷', '🌼'];
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞', '💘'];
  
  function playEffects() {
    console.log("▶️ Playing effects!");
    let timing = 0;
    
    // Create 12 flowers
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        const f = document.createElement('div');
        f.className = 'ann-flower';
        f.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        f.style.left = Math.random() * 100 + '%';
        f.style.top = '-50px';
        f.style.animation = (i % 2 === 0 ? 'fall-right' : 'fall-left') + ' 7s ease-in forwards';
        document.body.appendChild(f);
        setTimeout(() => f.remove(), 7500);
      }, timing);
      timing += 350;
    }
    
    // Create 14 hearts
    for (let i = 0; i < 14; i++) {
      setTimeout(() => {
        const h = document.createElement('div');
        h.className = 'ann-heart';
        h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        h.style.left = Math.random() * 100 + '%';
        h.style.top = '-50px';
        h.style.animation = (i % 2 === 0 ? 'fall-right' : 'fall-left') + ' 6s ease-in forwards';
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 6500);
      }, timing);
      timing += 280;
    }
  }
  
  // Start
  playEffects();
  console.log("🔄 Repeating every 10 seconds");
  setInterval(playEffects, 10000);
} else {
  console.log("❌ Not anniversary yet. Today: " + month + "/" + day);
}
