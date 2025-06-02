const dados = {
    "titulo": "Classificação e registro de Lixo Eletrônico",
    "botao": {
      "texto": "Registrar Item",
      "acao": "abrirFormularioClassificacao"
    },
    "descricao": [
      "Ajude na separação correta dos tipos de lixo eletrônico.",
      "Classifique e registre o tipo de item que será descartado.",
      "Seu registro contribui para uma coleta mais eficiente."
    ],
    "imagem": {
      "src": "complements/img/icone.png",
      "alt": "Imagem de separação de lixo eletrônico"
    }
  };
  
  function criarCard(dados) {
    const card = document.getElementById('classificacaoCard');
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
    botao.onclick = abrirFormularioClassificacao;
    botao.className = 'btn btn-success w-100';
    card.appendChild(botao);
  }
  
  function abrirFormularioClassificacao() {
    document.getElementById('formulario').style.display = 'block';
    document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    criarCard(dados);
  });
  