const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

const fotos = document.querySelectorAll('.foto');

fotos.forEach(foto => {
  foto.addEventListener('click', () => {
    const imgSrc = foto.querySelector('img').src;
    const title = foto.getAttribute('data-title');
    const text = foto.getAttribute('data-description');

    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalText.textContent = text;

    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

function atualizarCronometro() {
  const inicio = new Date('2023-08-09T00:00:00');
  const agora = new Date();

  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();

  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  document.getElementById("anos").textContent = anos;
  document.getElementById("meses").textContent = meses;
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
  document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0');
}

setInterval(atualizarCronometro, 1000);
atualizarCronometro();

let prevScroll = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > prevScroll && currentScroll > 100) {
    // Rola para baixo -> esconder header
    header.style.top = "-100px";
  } else {
    // Rola para cima -> mostrar header
    header.style.top = "0";
  }

  prevScroll = currentScroll;
});
