const tg = window.Telegram.WebApp;
tg.expand();  // развернуть WebApp на весь экран

let secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const hintEl = document.getElementById('hint');
const resultEl = document.getElementById('result');
const guessInput = document.getElementById('guess');
const checkBtn = document.getElementById('check');

checkBtn.addEventListener('click', () => {
  const val = Number(guessInput.value);
  if (!val) return;
  attempts++;
  if (val === secret) {
    resultEl.textContent = `✔️ Угадали за ${attempts} попыток!`;
    sendBtn.disabled = false;
  } else if (val < secret) {
    hintEl.textContent = '→ Больше';
  } else {
    hintEl.textContent = '← Меньше';
  }
});

sendBtn.addEventListener('click', () => {
  const payload = { attempts, secret };
  tg.sendData(JSON.stringify(payload));
});
