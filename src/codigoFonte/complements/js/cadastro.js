// Captura o formulário
const formCadastro = document.getElementById("formCadastro");
if (!formCadastro) {
  console.error("ERRO: Não encontrou <form id='formCadastro'> no HTML.");
}

formCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const senha = document.getElementById("password").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  // Busca usuários já cadastrados no localStorage
  const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verifica se o email já existe
  const usuarioExistente = usuariosSalvos.find(usuario => usuario.email === email);

  if (usuarioExistente) {
    alert("Já existe um usuário com esse email.");
    return;
  }

  // Cria novo usuário
  const novoUsuario = { nome, email, senha };

  // Adiciona ao array e salva novamente
  usuariosSalvos.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));

  alert("Cadastro realizado com sucesso! Agora você pode fazer login.");
  window.location.href = "loginUser.html";
});