moveButton.addEventListener("click", () => {
  const btnRect = moveButton.getBoundingClientRect();
  const btnSimRect = correctlyButton.getBoundingClientRect();
  const moveDistance = 200;

  let newX, newY;
  let attempts = 0;
  const maxAttempts = 20;
  let posicaoValida = false;

  while (!posicaoValida && attempts < maxAttempts) {
    const randomAngle = Math.random() * Math.PI * 2;
    newX = btnRect.left + Math.cos(randomAngle) * moveDistance;
    newY = btnRect.top + Math.sin(randomAngle) * moveDistance;

    // Limites com margem
    const minX = margemTela;
    const minY = margemTela;
    const maxX = window.innerWidth - btnRect.width - margemTela;
    const maxY = window.innerHeight - btnRect.height - margemTela;

    newX = Math.max(minX, Math.min(newX, maxX));
    newY = Math.max(minY, Math.min(newY, maxY));

    // Verifica se está longe o suficiente do botão "Sim"
    const distFromYesX = newX + btnRect.width / 2 - (btnSimRect.left + btnSimRect.width / 2);
    const distFromYesY = newY + btnRect.height / 2 - (btnSimRect.top + btnSimRect.height / 2);
    const distFromYes = Math.sqrt(distFromYesX ** 2 + distFromYesY ** 2);

    // Verifica se é diferente da posição atual
    const deltaX = Math.abs(newX - btnRect.left);
    const deltaY = Math.abs(newY - btnRect.top);
    const distMove = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    if (distFromYes > margemSim && distMove > 20) {
      posicaoValida = true;
    }

    attempts++;
  }

  moveButton.style.position = "absolute";
  moveButton.style.left = `${newX}px`;
  moveButton.style.top = `${newY}px`;
});
