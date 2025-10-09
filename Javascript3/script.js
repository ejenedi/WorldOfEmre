/* 
   Emre Jenedi
  Date: 10/08/2025
*/

 
    const hero = document.querySelector('.hero');
    const text = hero.querySelector('h1');
    const walk = 500;
    const counter = document.querySelector('.counter');
    const countDisplay = document.getElementById('count');
    const modeBtn = document.getElementById('modeBtn');
    const resetBtn = document.getElementById('resetBtn');
    let clickCount = 0;
    let mode = 'sun';

    function shadow(e) {
      const { offsetWidth: width, offsetHeight: height } = hero;
      let { offsetX: x, offsetY: y } = e;
      if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      }
      const xWalk = Math.round((x / width * walk) - (walk / 2));
      const yWalk = Math.round((y / height * walk) - (walk / 2));
      text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
      `;
    }

    hero.addEventListener('mousemove', shadow);

    hero.addEventListener('click', function(e) {
      clickCount++;
      countDisplay.textContent = clickCount;
      counter.classList.add('bump');
      setTimeout(() => counter.classList.remove('bump'), 200);

      const img = document.createElement('img');
      img.src = mode === 'sun' ? 'sun.png' : 'moon.png';
      img.classList.add(mode);
      img.style.left = `${e.pageX}px`;
      img.style.top = `${e.pageY}px`;
      document.body.appendChild(img);

      setTimeout(() => {
        img.style.opacity = '0';
        img.style.transform = 'translate(-50%, -70%) scale(1.3)';
        setTimeout(() => img.remove(), 800);
      }, 1000);
    });

    modeBtn.addEventListener('click', () => {
      mode = mode === 'sun' ? 'moon' : 'sun';
      modeBtn.textContent = `Mode: ${mode === 'sun' ? '☀️ Sun' : '🌙 Moon'}`;
    });

    resetBtn.addEventListener('click', () => {
      clickCount = 0;
      countDisplay.textContent = clickCount;
      document.querySelectorAll('.sun, .moon').forEach(el => el.remove());
    });
  