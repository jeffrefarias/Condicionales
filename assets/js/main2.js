
// EJERCICIO 2

const cantEnamorado = document.querySelector("#florkEnamorado").value;
const cantMamado = document.querySelector("#florkMamado").value;
const cantRandom = document.querySelector("#florkRandom").value;
// const boton = document.querySelector("#btnCalcular");
const Alert = document.querySelector("#alerta");

const result = Number(cantEnamorado) + Number(cantMamado) + Number(cantRandom)


btnCalcular.addEventListener("click", function(){
    // console.log("Boton");

    if (cantEnamorado === "" || cantMamado === "" || cantRandom === "") {
        document.querySelector("#alerta").innerHTML = "No has seleccionado ningún sticker";

      } else if (isNaN(cantEnamorado) || isNaN(cantMamado) || isNaN(cantRandom)) {
        document.querySelector("#alerta").innerHTML =
          "Favor de ingresar números validos";
        document.querySelector("#alerta").style.color = "red";
      } else if (cantEnamorado < 0 || cantMamado < 0 || cantRandom < 0) {
        document.querySelector("#alerta").innerHTML =
          "Los números deben ser mayor a 0";
        document.querySelector("#alerta").style.color = "red";
      } else if (result <= 10) {
        document.querySelector("#alerta").innerHTML =
          "Has escogido " + result + " stickers";
        document.querySelector("#alerta").style.color = "white";
      } else {
        document.querySelector("#alerta").innerHTML =
          "No puedes llevar más de 10 stickers, y tienes: " + result ;
        document.querySelector("#alerta").style.color = "red";
      }

});

