const itens = document.querySelectorAll('.tesouro');
const mensagem = document.getElementById('mensagem');
const contador = document.getElementById('contador');
const resetarBtn = document.getElementById('resetar');

const textos = {
  1: 'Nós na festa do peão — muita diversão 🎉',
  2: 'Primeira vez na sua dela — aconchego e descoberta 🏡',
  3: 'Viagem para Mococa — família e carinho 🚗',
  4: 'Meu aniversário — surpresa e carinho 🎉',
  5: 'Viagem de fim de ano — planos e aventuras ✈️',
  6: 'Seu aniversário — sorrisos e momentos especiais 🎈',
  7: 'Aniversário de namoro — amor e celebração 🎂'
};

let encontrados = new Set();

function randomPosition(element) {
  const container = document.getElementById('caça-container');
  const contWidth = container.clientWidth;
  const contHeight = container.clientHeight;
  const elWidth = element.offsetWidth;
  const elHeight = element.offsetHeight;

  // Define posição aleatória dentro dos limites do container
  const x = Math.random() * (contWidth - elWidth);
  const y = Math.random() * (contHeight - elHeight);

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

function init() {
  encontrados.clear();
  mensagem.textContent = '';
  contador.textContent = `Itens encontrados: 0 / 7`;
  itens.forEach(item => {
    item.style.display = 'block';
    randomPosition(item);
    item.classList.remove('encontrado');
  });
}

itens.forEach(item => {
  item.addEventListener('click', () => {
    const id = item.dataset.id;
    if (!encontrados.has(id)) {
      encontrados.add(id);
      item.style.display = 'none';
      mensagem.textContent = textos[id];
      contador.textContent = `Itens encontrados: ${encontrados.size} / 7`;

      if (encontrados.size === 7) {
        mensagem.textContent = 'Parabéns! Você encontrou todos os nossos momentos especiais! 🎉💖';
      }
    }
  });
});

resetarBtn.addEventListener('click', init);

init();
