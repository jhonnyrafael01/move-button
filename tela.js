var moveButton = document.querySelector("button:nth-child(2)");
console.log('part 1')
var correctlyButton = document.querySelector("button:first-child");

moveButton.addEventListener("click", function () {
    var vertical = Math.floor(Math.random() * 400);
    var horizontal = Math.floor(Math.random() * 400);
    moveButton.style.position = "absolute";
    moveButton.style.left = vertical + "px";
    moveButton.style.top = horizontal + "px";
  });

moveButton.addEventListener("mouseover", function () {
  var vertical = Math.floor(Math.random() * 400);
  var horizontal = Math.floor(Math.random() * 400);
  moveButton.style.position = "absolute";
  moveButton.style.left = vertical + "px";
  moveButton.style.top = horizontal + "px";
});

correctlyButton.addEventListener("click", function () {
  alert("Resposta correta! Vamos comer um hamburgão");
});
