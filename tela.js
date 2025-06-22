const moveButton = document.querySelector(".btn-no");
const correctlyButton = document.querySelector(".btn-yes");

let mouseX = 0;
let mouseY = 0;

const margemTela = 50; // margem mínima das bordas da tela
const margemSim = 120; // distância mínima do botão "Sim"

// Atualiza posição do mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  verificarDistancia();
});

function verificarDistancia() {
  const btnRect = moveButton.getBoundingClientRect();
  const btnSimRect = correctlyButton.getBoundingClientRect();

  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  const dx = btnCenterX - mouseX;
  const dy = btnCenterY - mouseY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const threshold = 150;
  if (distance < threshold) {
    const angle = Math.atan2(dy, dx);
    const moveDistance = 200;

    let newX = btnRect.left + Math.cos(angle) * moveDistance;
    let newY = btnRect.top + Math.sin(angle) * moveDistance;

    // Limites da tela com margem
    const minX = margemTela;
    const minY = margemTela;
    const maxX = window.innerWidth - btnRect.width - margemTela;
    const maxY = window.innerHeight - btnRect.height - margemTela;

    newX = Math.max(minX, Math.min(newX, maxX));
    newY = Math.max(minY, Math.min(newY, maxY));

    // Verifica se está perto demais do botão "Sim"
    const distFromYesX = newX + btnRect.width / 2 - (btnSimRect.left + btnSimRect.width / 2);
    const distFromYesY = newY + btnRect.height / 2 - (btnSimRect.top + btnSimRect.height / 2);
    const distFromYes = Math.sqrt(distFromYesX ** 2 + distFromYesY ** 2);

    if (distFromYes < margemSim) {
      // Tenta outra direção aleatória se estiver perto do "Sim"
      const randomAngle = Math.random() * Math.PI * 2;
      newX = btnRect.left + Math.cos(randomAngle) * moveDistance;
      newY = btnRect.top + Math.sin(randomAngle) * moveDistance;

      newX = Math.max(minX, Math.min(newX, maxX));
      newY = Math.max(minY, Math.min(newY, maxY));
    }
    
    moveButton.style.position = "absolute";
    moveButton.style.width = `${btnRect.width}px`;
    moveButton.style.height = `${btnRect.height}px`;
    moveButton.style.left = `${newX}px`;
    moveButton.style.top = `${newY}px`;
  }
}

correctlyButton.addEventListener("click", function () {
  alert("Resposta correta! Vamo comer um Hamburgão");
});
