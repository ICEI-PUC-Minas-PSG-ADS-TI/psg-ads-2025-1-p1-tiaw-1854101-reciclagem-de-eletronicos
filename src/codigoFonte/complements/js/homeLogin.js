function loginUser(email, senha) {
  const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Procura um usuário com email e senha corretos
  const usuarioEncontrado = usuariosSalvos.find(
    (usuario) => usuario.email === email && usuario.senha === senha
  );

  if (usuarioEncontrado) {
    // Salva o usuário logado na sessão
    sessionStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
    return true;
  } else {
    return false;
  }
}

function checkLoginUser() {
  const usuarioStr = sessionStorage.getItem("usuario");
  if (!usuarioStr) {
    window.location.href = "loginUser.html";
    return false;
  }
  return true;
}

function logoutUser() {
  sessionStorage.clear();
  window.location.href = "loginUser.html";
}

// Exporta globalmente para usar chamadas no HTML
window.loginUser = loginUser;
window.checkLoginUser = checkLoginUser;
window.logoutUser = logoutUser;