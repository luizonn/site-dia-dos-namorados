const perguntas = [
  {
    pergunta: "Onde foi nosso primeiro beijo?",
    alternativas: ["No cinema", "No ponto de ônibus", "No restaurante", "Na escola"],
    correta: 1
  },
  {
    pergunta: "Qual foi a primeira coisa que eu disse para você?",
    alternativas: ["'Quer sair comigo?'", "'Gostei do seu sorriso!'", "'Beijo essa boca quando?'", "'Você é linda!'"],
    correta: 2
  },
  {
    pergunta: "Qual o meu hobby favorito?",
    alternativas: ["Ler livros", "Academia", "Jpgar videogame", "Cozinhar"],
    correta: 1
  },
  {
    pergunta: "Qual foi o primeiro presente que te dei?",
    alternativas: ["Flores", "Chocolate", "Ursinho", "Colar"],
    correta: 3
  },
  {
    pergunta: "Quantos messe ficamos juntos antes de namorar?",
    alternativas: ["1", "2", "3", "4"],
    correta: 2
  },
  {
    pergunta: "Qual foi o nosso primeiro date juntos?",
    alternativas: ["Parque", "Cinema", "Hamburgueria", "Sorveteria"],
    correta: 2
  },
  {
    pergunta: "Qual o meu prato favorito?",
    alternativas: ["Pizza", "Macarrão", "Strogonoff", "Risoto"],
    correta: 1
  },
  {
    pergunta: "Qual foi nossa primeira viagem juntos?",
    alternativas: ["Mococa", "Tanabi", "Ubatuba", "Arthur Nogueira"],
    correta: 0
  },
  {
    pergunta: "Qual foi nosso primeiro filme que vimos juntos no cinema?",
    alternativas: ["Vitória", "Twister", "Assim que acaba", "Ainda estou aqui"],
    correta: 3
  },
  {
    pergunta: "Quem que ama mais?",
    alternativas: ["Você", "Você", "Você", "EU"],
    correta: 3
  }
];

let indiceAtual = 0;
let pontuacao = 0;
let respostas = [];

const perguntaEl = document.getElementById("pergunta");
const alternativasEl = document.getElementById("alternativas");
const proximaBtn = document.getElementById("proxima-btn");
const resultadoEl = document.getElementById("resultado");
const relatorioEl = document.getElementById("relatorio");
const iniciarBtn = document.getElementById("iniciar-btn");
const reiniciarBtn = document.getElementById("reiniciar-btn");
const quizContent = document.getElementById("quiz-content");

function carregarPergunta() {
  const q = perguntas[indiceAtual];
  perguntaEl.textContent = q.pergunta;
  alternativasEl.innerHTML = "";

  q.alternativas.forEach((alt, i) => {
    const li = document.createElement("li");
    li.textContent = alt;
    li.classList.add("alternativa");
    li.addEventListener("click", () => selecionarResposta(i));
    alternativasEl.appendChild(li);
  });

  proximaBtn.classList.add("hidden");
}

function selecionarResposta(selecionada) {
  const correta = perguntas[indiceAtual].correta;
  const alternativas = document.querySelectorAll(".alternativa");

  alternativas.forEach((alt, i) => {
    alt.style.pointerEvents = "none";
    if (i === correta) alt.classList.add("correta");
    if (i === selecionada && i !== correta) alt.classList.add("errada");
  });

  if (selecionada === correta) {
    pontuacao++;
    respostas.push({ correta: true });
  } else {
    respostas.push({ correta: false, certa: perguntas[indiceAtual].alternativas[correta] });
  }

  proximaBtn.classList.remove("hidden");
}

proximaBtn.addEventListener("click", () => {
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultadoFinal();
  }
});

function mostrarResultadoFinal() {
  perguntaEl.textContent = "";
  alternativasEl.innerHTML = "";
  proximaBtn.classList.add("hidden");
  quizContent.classList.add("hidden");

  resultadoEl.innerHTML = `
    <h2>Você acertou ${pontuacao} de ${perguntas.length} perguntas!</h2>
    <p>${pontuacao >= 8 ? "Uau! Você realmente me conhece ❤️" : "Hmm... temos que conversar 😅"}</p>
  `;

  const lista = document.createElement("ul");
  respostas.forEach((resposta, i) => {
    const item = document.createElement("li");
    const q = perguntas[i].pergunta;
    item.innerHTML = resposta.correta
      ? `<strong>${q}</strong> - ✅`
      : `<strong>${q}</strong> - ❌ (Correta: ${resposta.certa})`;
    lista.appendChild(item);
  });
  relatorioEl.innerHTML = "<h3>Relatório:</h3>";
  relatorioEl.appendChild(lista);
  reiniciarBtn.classList.remove("hidden");
}

reiniciarBtn.addEventListener("click", reiniciarQuiz);

function reiniciarQuiz() {
  indiceAtual = 0;
  pontuacao = 0;
  respostas = [];
  resultadoEl.textContent = "";
  relatorioEl.innerHTML = "";
  reiniciarBtn.classList.add("hidden");
  quizContent.classList.remove("hidden");
  carregarPergunta();
}

iniciarBtn.addEventListener("click", () => {
  iniciarBtn.classList.add("hidden");
  quizContent.classList.remove("hidden");
  carregarPergunta();
});
