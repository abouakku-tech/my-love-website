// ===== ANNIVERSARY CELEBRATION =====

function isAnniversary() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return month === 9 && day === 11; // TEST - Change to 21 later
}

const IS_ANNIVERSARY = isAnniversary();

if (IS_ANNIVERSARY) {
  // Add CSS for effects
  const css = document.createElement('style');
  css.textContent = `
    .effect-confetti { position: fixed; pointer-events: none; z-index: 100; }
    .effect-heart { position: fixed; pointer-events: none; z-index: 50; }
    .effect-petal { position: fixed; pointer-events: none; z-index: 50; }
    .effect-sparkle { position: fixed; pointer-events: none; z-index: 40; }
    
    @keyframes fall-down {
      to { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
  `;
  document.head.appendChild(css);
  
  function createEffects() {
    // Confetti
    for (let i = 0; i < 60; i++) {
      const c = document.createElement('div');
      c.className = 'effect-confetti';
      c.textContent = '🎊';
      c.style.left = Math.random() * 100 + '%';
      c.style.top = '-50px';
      c.style.fontSize = '1.5rem';
      c.style.animation = `fall-down ${2 + Math.random() * 2}s ease-in forwards`;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 5000);
    }
    
    // Hearts
    for (let i = 0; i < 25; i++) {
      const h = document.createElement('div');
      h.className = 'effect-heart';
      h.textContent = '❤️';
      h.style.left = Math.random() * 100 + '%';
      h.style.top = '-50px';
      h.style.fontSize = '2.5rem';
      h.style.animation = `fall-down ${3 + Math.random()}s linear forwards`;
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 5000);
    }
    
    // Rose Petals
    for (let i = 0; i < 15; i++) {
      const p = document.createElement('div');
      p.className = 'effect-petal';
      p.textContent = '🌹';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = '-50px';
      p.style.fontSize = '2rem';
      p.style.animation = `fall-down ${5 + Math.random() * 2}s ease-in forwards`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 7000);
    }
    
    // Sparkles
    for (let i = 0; i < 30; i++) {
      const s = document.createElement('div');
      s.className = 'effect-sparkle';
      s.textContent = '✨';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.fontSize = '1.5rem';
      s.style.opacity = '0.7';
      s.style.animation = `fall-down ${3}s ease-in forwards`;
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 3500);
    }
    
    // Fireworks
    for (let i = 0; i < 20; i++) {
      const f = document.createElement('div');
      f.className = 'effect-confetti';
      f.textContent = '🎆';
      f.style.left = Math.random() * 100 + '%';
      f.style.top = Math.random() * 40 + '%';
      f.style.fontSize = '2rem';
      f.style.animation = `fall-down ${2}s ease-in forwards`;
      document.body.appendChild(f);
      setTimeout(() => f.remove(), 2500);
    }
  }
  
  // Run on load and repeat every 30 seconds
  function start() {
    createEffects();
    setInterval(createEffects, 30000);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
}