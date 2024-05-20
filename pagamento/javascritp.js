let resultado = document.querySelector("#resultado");
let valorA = document.querySelector("#valorA");
let valorB = document.querySelector("#valorB");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let Somatoria;
    let valor1 = Number(valorA.value);
    let valor2 = Number(valorB.value);
    Somatoria = valor1-valor2;
    resultado.textContent = String(Somatoria);
}

btSomar.onclick = function(){
    Somatoria();
}