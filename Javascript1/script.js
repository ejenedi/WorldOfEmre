/*
  Name: Emre Jenedi
  Date: 09/15/2025
  What was new or challenging: I Added consecutive key tracking to prevent repeated sounds in a row
  Source: Wes Bos JavaScript30 starter
*/

const keys = document.querySelectorAll('.key');

// Track the last key pressed and consecutive count
let lastKey = null;
let consecutiveCount = 0;

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;

  // Play audio from start
  audio.currentTime = 0;
  audio.play();

  // Animation
  key.classList.remove('playing');
  void key.offsetWidth; // force reflow
  key.classList.add('playing');

  // Check consecutive presses
  if (lastKey === e.keyCode) {
    consecutiveCount++;
  } else {
    lastKey = e.keyCode;
    consecutiveCount = 1; // reset count for new key
  }

  if (consecutiveCount > 7) {
    alert(`You pressed "${key.querySelector('kbd').textContent}" more than 7 times in a row!`);
    consecutiveCount = 0;
    lastKey = null;
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
