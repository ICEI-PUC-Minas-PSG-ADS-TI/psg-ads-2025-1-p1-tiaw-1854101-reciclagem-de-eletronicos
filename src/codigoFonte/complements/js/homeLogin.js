const BASE_URL = "http://localhost:3000";

async function loginUser(email, senha) {
    try {
        const resposta = await fetch(
            `http://localhost:3000/usuarios?email=${email}&senha=${senha}`
        );

        if (resposta.status === 200) {
            // Extrai os dados retornados (sem campo senha)
            const usuario = await resposta.json();
            // Guarda o usuário logado no sessionStorage
            sessionStorage.setItem("usuario", JSON.stringify(usuario));
            return true;
        } else if (resposta.status === 401) {
            return false;
        } else {
            console.error("Erro inesperado no login:", resposta.status);
            return false;
        }
    } catch (err) {
        console.error("Falha ao conectar com backend:", err);
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

// Disponibiliza as funções globalmente, se necessário
window.loginUser = loginUser;
window.checkLoginUser = checkLoginUser;
window.logoutUser = logoutUser;