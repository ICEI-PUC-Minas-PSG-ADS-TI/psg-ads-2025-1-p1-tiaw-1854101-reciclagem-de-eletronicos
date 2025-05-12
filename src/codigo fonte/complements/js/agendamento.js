const dados = {
  "titulo": "Agendamento de Coleta de Lixo Eletrônico",
  "botao": {
    "texto": "Agendar Coleta",
    "acao": "abrirFormularioAgendamento"
  },
  "descricao": [
    "Descarte seus eletrônicos com responsabilidade ambiental.",
    "Agende a coleta diretamente da sua casa ou empresa, sem complicações.",
    "Empresas de reciclagem autorizadas farão a retirada no local."
  ],
  "imagem": {
    "src": "img/lixo.jpg",
    "alt": "Imagem de equipamentos eletrônicos em uma lixeira de reciclagem"
  }
};

function criarCard(dados) {
  const card = document.getElementById('agendamentoCard');
  card.className = 'card p-4 shadow-sm'; 

  const titulo = document.createElement('h2');
  titulo.textContent = dados.titulo;
  titulo.className = 'mb-3';
  card.appendChild(titulo);

  dados.descricao.forEach(texto => {
    const paragrafo = document.createElement('p');
    paragrafo.className = 'descricao';
    paragrafo.textContent = texto;
    card.appendChild(paragrafo);
  });

  const imagem = document.createElement('img');
  imagem.src = dados.imagem.src;
  imagem.alt = dados.imagem.alt;
  imagem.className = 'img-fluid rounded my-3'; 
  card.appendChild(imagem);

  const botao = document.createElement('button');
  botao.textContent = dados.botao.texto;
  botao.onclick = abrirFormularioAgendamento;
  botao.className = 'btn btn-success w-100'; 
  card.appendChild(botao);
}

function abrirFormularioAgendamento() {
  document.getElementById('formulario').style.display = 'block';
  document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' }); 
}

document.addEventListener("DOMContentLoaded", function () {
  criarCard(dados);
});
