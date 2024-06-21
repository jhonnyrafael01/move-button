var moveButton = document.querySelector("button:nth-child(2)");
var correctlyButton = document.querySelector("button:first-child");

function qualquerNome() {
  var vertical = calcularPosicao("vertical");
  var horizontal = calcularPosicao("horizontal");
  moveButton.style.position = "absolute";
  moveButton.style.left = vertical + "vw";
  moveButton.style.top = horizontal + "vh";
}

function calcularPosicao(tipo) {
  var min = 4; 
  var max = 45;
  var position;

  do {
    position = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (tipo === "vertical" && position >= 20 && position <= 60);

  return position;
}

moveButton.addEventListener("mouseover", qualquerNome);
moveButton.addEventListener("click", qualquerNome);

correctlyButton.addEventListener("click", function () {
  alert("Resposta correta! Vamo comer um Hamurgão");
});
