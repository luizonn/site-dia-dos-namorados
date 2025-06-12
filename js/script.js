const btnNao = document.getElementById('btn-nao');
const btnSim = document.getElementById('btn-sim');

btnNao.addEventListener('mouseenter', () => {
  const maxX = window.innerWidth - btnNao.offsetWidth;
  const maxY = window.innerHeight - btnNao.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btnNao.style.position = 'fixed';
  btnNao.style.left = `${randomX}px`;
  btnNao.style.top = `${randomY}px`;
});

btnSim.addEventListener('click', () => {
  document.body.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = 'home.html';
  }, 1000);
});
