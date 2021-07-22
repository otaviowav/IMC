// @ts-nocheck
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var female = document.getElementById("f");
var male = document.getElementById("m");

document.getElementById("submit").addEventListener("click", validadeForm);

function validadeForm() {
    if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
        alert("Todos os campos são requeridos!");
        document.getElementById("submit").removeEventListener("click", calculateIMC);
    } else {
        calculateIMC();
    }
}

function calculateIMC() {
    var arrayPerson = [age.value, height.value, weight.value];
    if (male.checked) {
        arrayPerson.push("male");
    } else if (female.checked) {
        arrayPerson.push("female");
    }

    var imc = Number(arrayPerson[2]) / (Number(arrayPerson[1]) / 100 * Number(arrayPerson[1]) / 100);

    var result = '';
    if (imc < 18.5) {
        result = 'Abaixo do peso normal';
    } else if (imc >= 18.5 && imc <= 24.9) {
        result = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        result = 'Acima do peso';
    } else if (imc >= 30 && imc <= 34.9) {
        result = 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.9) {
        result = 'Obesidade grau II';
    } else if (imc > 40) {
        result = 'Obesidade morbida';
    }

    var h1 = document.createElement('h1');
    var h2 = document.createElement('h2');

    var t = document.createTextNode(result);
    var b = document.createTextNode('IMC: ');
    var r = document.createTextNode(parseFloat(imc).toFixed(2) + ' kg/m²');

    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);

    document.body.appendChild(h1);
    document.body.appendChild(h2);

    document.getElementById("submit").removeEventListener("click", calculateIMC);
    document.getElementById("submit").removeEventListener("click", validadeForm);
}

document.getElementById("submit").addEventListener("click", calculateIMC);