let resultado = document.querySelector("#resultado");
let ValorQuilo = document.querySelector("#ValorQuilo");
let QuiloProduto = document.querySelector("#QuiloProduto");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let valor = Number(ValorQuilo.value);
    let produto = Number(QuiloProduto.value);
    let grama = 1;
    let resultado1 = ((valor) * (produto * grama))
    resultado.textContent = String(resultado1);
}

btSomar.onclick = function(){
    Somatoria();
}


// 1000 * 100
// 200 * x
// x = 200/1000