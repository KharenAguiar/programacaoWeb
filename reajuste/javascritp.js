let resultado = document.querySelector("#resultado");
let saldo = document.querySelector("#saldo");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let Somatoria;
    let valor1 = Number(saldo.value);
    Somatoria = valor1+(valor1*0.01);
    resultado.textContent = String(Somatoria);
}

btSomar.onclick = function(){
    Somatoria();
}