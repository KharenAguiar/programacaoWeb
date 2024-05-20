let h3rsultado = document.querySelector("#h3rsultado");
let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");
let brVerificar = document.querySelector("#brVerificar");

function Calcular(){
    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);
    let valor3 = Number(numero3.value);

    let pesoum = 3;
    let pesodois = 2;
    let pesotres = 5;

    let mediaAritmetico = (valor1 + valor2 + valor3)/3;

    let mediaPesos = (valor1*pesoum) + (valor2*pesodois) + (valor3*pesotres)/ (pesoum + pesodois + pesotres);

    let somaPesos = 3+2+5;

    // media ponderada
    let mediaPonderada = mediaPesos / somaPesos;

    // media das medias
    let mediaMedias = somaMediar/2;

    h3rsultado.innerHTML = 
    "Media Aritmetica: "+mediaAritmetico+"<br>"+
    "Media Ponderada: "+mediaPesos+"<br>"+
    "Soma das medias: "+mediaPonderada+"<br>"+
    "Media das medias: "+mediaMedias+"<br>";
}

brVerificar.onclick = function(){
    Somatoria();
}