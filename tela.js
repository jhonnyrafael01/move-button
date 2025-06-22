const moveButton = document.querySelector(".btn-no");
const correctlyButton = document.querySelector(".btn-yes");

function moverBotao() {
  const buttonWidth = moveButton.offsetWidth;
  const buttonHeight = moveButton.offsetHeight;
  const simButton = correctlyButton.getBoundingClientRect();
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  let top, left;

  do {
    left = Math.floor(Math.random() * (windowWidth - buttonWidth));
    top = Math.floor(Math.random() * (windowHeight - buttonHeight));
  } while (
    // Garante que não fique por cima do botão "Sim"
    left < simButton.right &&
    left + buttonWidth > simButton.left &&
    top < simButton.bottom &&
    top + buttonHeight > simButton.top
  );

  moveButton.style.position = "absolute";
  moveButton.style.left = `${left}px`;
  moveButton.style.top = `${top}px`;
}

moveButton.addEventListener("mouseover", moverBotao);
moveButton.addEventListener("click", moverBotao);

correctlyButton.addEventListener("click", function () {
  window.location.href = "resposta.html";
});
