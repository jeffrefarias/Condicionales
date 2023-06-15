


  btnValidar.addEventListener("click", function(){
    //EJERCICIO 3

  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;
  const num3 = document.querySelector("#num3").value;

     if (num1 === "9" && num2 === "1" && num3 === "1") {
        document.querySelector("#alerta").innerHTML = "PASSWORD CORRECTO";
        document.querySelector("#alerta").style.color = "green";
      } else if (num1 === "7" && num2 === "1" && num3 === "4") {
        document.querySelector("#alerta").innerHTML = "PASSWORD CORRECTO";
        document.querySelector("#alerta").style.color = "green";
      } else {
        document.querySelector("#alerta").innerHTML =
          "PASSWORD INCORRECTO";
        document.querySelector("#alerta").style.color = "red";
      }

  });