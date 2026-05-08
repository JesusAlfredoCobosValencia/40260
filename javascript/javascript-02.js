let resultado = document.getElementById("resultado");
let botones = document.getElementsByTagName("button");

for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        if (boton.className != "operadores")
            boton.addEventListener("click", pintar);
        else
            boton.addEventListener("click", pintar2);
    }
}

function pintar(e) {
    console.log(e.target.innerText);
    resultado.value += e.target.innerText;
}

let operadores = document.getElementsByClassName("operadores");
for (const key in operadores) {
    if (Object.prototype.hasOwnProperty.call(operadores, key)) {
        const boton = operadores[key];
        boton.addEventListener("click", pintar2);
    }
}

let prm1, prm2, operacion;

function pintar2(e) {
    console.log(e.target.innerText);
    if (e.target.innerText == "+" || e.target.innerText == "-" || e.target.innerText == "*" || e.target.innerText == "/") {
        prm1 = resultado.value;
        operacion = e.target.innerText;
        resultado.value = "";
    }
    if (e.target.innerText == "Ce") {
        resultado.value = "";
    }
    if (e.target.innerText == "=") {
        igual();
    }
}

function igual() {
    prm2 = resultado.value;
    switch (operacion) {
        case "+":
            resultado.value = parseFloat(prm1) + parseFloat(prm2);
            break;
        case "-":
            resultado.value = parseFloat(prm1) - parseFloat(prm2);
            break;
        case "*":
            resultado.value = parseFloat(prm1) * parseFloat(prm2);
            break;
        case "/":
            if (prm2 == "0") {
                resultado.value = "Error";
            } else {
                resultado.value = parseFloat(prm1) / parseFloat(prm2);
            }
            break;
    }
}