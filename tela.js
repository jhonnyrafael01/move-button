moveButton.addEventListener("click", () => {
  const btnRect = moveButton.getBoundingClientRect();
  const btnSimRect = correctlyButton.getBoundingClientRect();

  let newX, newY;
  const moveDistance = 200;

  let tentativa = 0;
  let posicaoValida = false;

  while (!posicaoValida && tentativa < 20) {
    const randomAngle = Math.random() * Math.PI * 2;
    newX = btnRect.left + Math.cos(randomAngle) * moveDistance;
    newY = btnRect.top + Math.sin(randomAngle) * moveDistance;

    // Limites da tela com margem
    const minX = margemTela;
    const minY = margemTela;
    const maxX = window.innerWidth - btnRect.width - margemTela;
    const maxY = window.innerHeight - btnRect.height - margemTela;

    newX = Math.max(minX, Math.min(newX, maxX));
    newY = Math.max(minY, Math.min(newY, maxY));

    // Verifica se é diferente o suficiente da posição atual
    const deltaX = Math.abs(newX - btnRect.left);
    const deltaY = Math.abs(newY - btnRect.top);
    const dist = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    const distFromYesX = newX + btnRect.width / 2 - (btnSimRect.left + btnSimRect.width / 2);
    const distFromYesY = newY + btnRect.height / 2 - (btnSimRect.top + btnSimRect.height / 2);
    const distFromYes = Math.sqrt(distFromYesX ** 2 + distFromYesY ** 2);

    if (dist > 50 && distFromYes >= margemSim) {
      posicaoValida = true;
    }

    tentativa++;
  }

  moveButton.style.position = "absolute";
  moveButton.style.width = `${btnRect.width}px`;
  moveButton.style.height = `${btnRect.height}px`;
  moveButton.style.left = `${newX}px`;
  moveButton.style.top = `${newY}px`;
});
