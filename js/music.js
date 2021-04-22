document.getElementById("button1")
        .addEventListener("click", function() {
  document.getElementById("pregunta1").hidden = true;
  document.getElementById("pregunta2").hidden = false;
});

document.getElementById("button2")
        .addEventListener("click", function() {
  document.getElementById("pregunta2").hidden = true;
  document.getElementById("pregunta3").hidden = false;
});

document.getElementById("button3")
        .addEventListener("click", function() {
  document.getElementById("pregunta3").hidden = true;
  document.getElementById("results").hidden = false;
});

function getInputValue() {
  //variable preguntas y puntaje//
  var inputVal1 = document.querySelector('input[name="question1"]:checked').value;
  var inputVal2 = document.querySelector('input[name="question2"]:checked').value;
  var inputVal3 = document.querySelector('input[name="question3"]:checked').value;
  var correct =0;

if (inputVal1 == "chuckBerry") {
    correct++;
}
if (inputVal2 == "6070") {
    correct++;
}
if (inputVal3 == "vincentPrice") {
    correct++;
}
alert('respondiste correctamente ' + correct + ' de 3 preguntas');
//document.write("Obtuviste" + correct)
}