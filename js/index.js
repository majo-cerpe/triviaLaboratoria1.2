
document.getElementById("welcomeButton")
    .addEventListener("click", function () {
        var nombre = document.getElementById('nombre').value;
        if (nombre == "") {
        alert('Ingresa tu nombre por favor')
        } else {
            alert("Hola " + nombre);
        document.getElementById("welcome").hidden = true;
        document.getElementById("topic").hidden = false;
        }
        

    });



   