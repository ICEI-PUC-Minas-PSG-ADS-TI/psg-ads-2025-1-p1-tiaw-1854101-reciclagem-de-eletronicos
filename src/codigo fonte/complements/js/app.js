const dados= {
    usuarios: [
        {id:1, nome:"Lucas", login:"lucas00", senha:"123456", email:"joao@gmail.com"},
        {id:1, nome:"Pedro", login:"pedro01", senha:"123456", email:"pedro@gmail.com"}

    ]
};


//Variável para armazenar usuário logado
let usuario = null;

function checkLogiUser(){
    const usuarioStr = sessionStorage.getItem('usuario');

    if(!usuarioStr){
        location.href = "cadastroUser.html";
    }
    
    usuario = JSON.parse(usuarioStr);
    return true
}

function logoutUser(){
    sessionStorage.clear();
    location.href = "cadastroUser.html";
}

function loginUser(email, senha){
    const usuarioObj = dados.usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    if(!usuarioObj){
        return false;
    }
    else{
        sessionStorage.setItem('usuario', JSON.stringify(usuarioObj));
        return true;
    }
}