 function gerarCodigo() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let codigo = '';
            for (let i = 0; i < 12; i++) {
                codigo += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return codigo;
        }

        const btn = document.getElementById('gerarBtn');
        const comprovanteDiv = document.getElementById('comprovante');
        const mensagemP = document.getElementById('mensagem');

        btn.addEventListener('click', () => {
            const codigo = gerarCodigo();
            comprovanteDiv.textContent = codigo;
            comprovanteDiv.style.display = 'inline-block';

            mensagemP.textContent = 'Registro realizado com sucesso!';
            mensagemP.style.display = 'block';
        });