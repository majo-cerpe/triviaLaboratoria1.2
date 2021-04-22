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
    // EXPERIMENTOS FALLIDOS DE CREAR VARIABLES QUE RECOGIERAN LA OPCIÓN CLICKEADA POR EL USUARIO
    //var inputVal1 = document.getElementById("pregunta1").value;
    //var inputVal2 = document.getElementById("pregunta2").value;
    //var inputVal3 = document.getElementById("pregunta3").value;
    //var correct = 0;

    //var question1 = document.question1.value;
    //var question2 = document.question2.value;
    //var question3 = document.question3.value;
    //var correct = 0;

    //var question1 = document.question1.value;
    //var question2 = document.question2.value;
    //var question3 = document.question3.value;
    //document.getElementsByName('question1').value;

    //variable preguntas y puntaje//
    var inputVal1 = document.querySelector('input[name="question1"]:checked').value;
    var inputVal2 = document.querySelector('input[name="question2"]:checked').value;
    var inputVal3 = document.querySelector('input[name="question3"]:checked').value;
    var correct =0;

    //Respuestas correctas//
    if (inputVal1 == "quentinTarantino") {
        correct++;
    }
    if (inputVal2 == "greenBook") {
        correct++;
    }
    if (inputVal3 == "losInfiltrados") {
        correct++;
    }
    alert('Respondiste correctamente ' + correct + ' de 3 preguntas');
    //document.write("Obtuviste" + correct)
}