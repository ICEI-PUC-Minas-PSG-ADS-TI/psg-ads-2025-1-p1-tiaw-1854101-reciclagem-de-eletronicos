
    const rewards = [
      { id: 1, name: "10% de desconto em loja ecológica", cost: 50 },
      { id: 2, name: "Serviço de coleta de recicláveis gratuito", cost: 100 },
      { id: 3, name: "Produto sustentável gratuito", cost: 200 }
    ];

    let userPoints = 0;

    function registrarDescarte() {
      userPoints += 10;
      document.getElementById('points').innerText = userPoints;
      atualizarRecompensas();
    }

    function trocarPontos(rewardCost) {
      if(userPoints >= rewardCost) {
        userPoints -= rewardCost;
        document.getElementById('points').innerText = userPoints;
        alert("Recompensa resgatada com sucesso!");
        atualizarRecompensas();
      } else {
        alert("Pontos insuficientes!");
      }
    }

    function atualizarRecompensas() {
      const rewardsList = document.getElementById('rewards-list');
      rewardsList.innerHTML = '';
      rewards.forEach(reward => {
        const rewardDiv = document.createElement('div');
        rewardDiv.className = 'reward-item';
        rewardDiv.innerHTML = `
          <strong>${reward.name}</strong><br>
          Custo: ${reward.cost} pontos<br>
          <button onclick="trocarPontos(${reward.cost})">Trocar</button>
        `;
        rewardsList.appendChild(rewardDiv);
      });
    }

    atualizarRecompensas();