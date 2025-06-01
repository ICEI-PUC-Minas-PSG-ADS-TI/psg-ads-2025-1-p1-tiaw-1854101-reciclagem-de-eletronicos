const BASE_URL = "http://localhost:3000";

// Captura o formulário pelo ID
const formCadastro = document.getElementById("formCadastro");
if (!formCadastro) {
  console.error("ERRO: Não encontrou <form id='formCadastro'> no HTML.");
}

formCadastro.addEventListener("submit", async function (event) {
  event.preventDefault();

  // Pega valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const senha = document.getElementById("password").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  //Envia o nome email e senha para o backend
  const payload = { nome, email, senha };

  try {
    const resposta = await fetch(`${BASE_URL}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (resposta.status === 201) {
      //Cadastro realizado com sucesso
      alert("Cadastro realizado com sucesso! Agora você pode fazer login.");
      window.location.href = "loginUser.html";
    } else if (resposta.status === 409 || resposta.status === 400) {
      //Erro no cadastro
      const erroJson = await resposta.json();
      alert(erroJson.erro || "Já existe um usuário com esse email.");
    } else {
      console.error("Erro inesperado no cadastro:", resposta.status);
      alert("Não foi possível cadastrar no momento. Tente novamente mais tarde.");
    }
  } catch (err) {
    console.error("Falha de rede ao cadastrar:", err);
    alert("Erro ao conectar com o servidor. Tente novamente mais tarde.");
  }
});