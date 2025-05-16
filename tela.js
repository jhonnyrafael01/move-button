const moveButton = document.querySelector(".btn-no");
const correctlyButton = document.querySelector(".btn-yes");

let mouseX = 0;
let mouseY = 0;

// Atualiza posição do mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Loop de movimento contínuo
function moverSuavemente() {
  const btnRect = moveButton.getBoundingClientRect();
  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  const dx = btnCenterX - mouseX;
  const dy = btnCenterY - mouseY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const threshold = 150; // distância mínima para ativar fuga
  if (distance < threshold) {
    const angle = Math.atan2(dy, dx);
    const moveSpeed = (threshold - distance) * 0.1;

    let newX = btnRect.left + Math.cos(angle) * moveSpeed;
    let newY = btnRect.top + Math.sin(angle) * moveSpeed;

    // Limites da tela
    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    moveButton.style.position = "absolute";
    moveButton.style.left = `${newX}px`;
    moveButton.style.top = `${newY}px`;
  }

  requestAnimationFrame(moverSuavemente);
}

requestAnimationFrame(moverSuavemente);

correctlyButton.addEventListener("click", function () {
  alert("Resposta correta! Vamo comer um Hamburgão");
});
