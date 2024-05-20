let resultado = document.querySelector("#resultado");
let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let brVerificar = document.querySelector("#brVerificar");

function verificarMaior(){
    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);
    if(valor1 > valor2){
        alert("O valor: "+valor1+" é maior.")
    }else if(valor2 > valor1){
        alert("O valor: "+valor2+" é maior.")
    }else{
        alert("O valor "+valor1+" é igual a "+valor2+".")
        
    }
}

brVerificar.onclick = function(){
    verificarMaior();
}