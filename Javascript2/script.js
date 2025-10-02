/* 
   Emre Jenedi
  Date: 09/27/2025
*/
const panels = document.querySelectorAll('.panel');
const resetBtn = document.getElementById('resetBtn');
const open3Btn = document.getElementById('open3Btn');
const open5Btn = document.getElementById('open5Btn');
const sequenceBtn = document.getElementById('sequenceBtn');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    panels.forEach(p => p.classList.remove('open'));
    panel.classList.add('open');
  });
});

resetBtn.addEventListener('click', () => {
  panels.forEach(p => p.classList.remove('open'));
});

open3Btn.addEventListener('click', () => {
  panels.forEach(p => p.classList.remove('open'));
  panels[2].classList.add('open');
});

open5Btn.addEventListener('click', () => {
  panels.forEach(p => p.classList.remove('open'));
  panels[4].classList.add('open');
});

sequenceBtn.addEventListener('click', async () => {
  for (let i=0; i<panels.length; i++){
    panels.forEach(p => p.classList.remove('open'));
    panels[i].classList.add('open');
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  panels.forEach(p => p.classList.remove('open'));
});
