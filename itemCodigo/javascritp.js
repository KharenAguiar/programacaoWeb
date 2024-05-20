let resultado = document.querySelector("#resultado");
let codigo = document.querySelector("#numero1");
let brVerificar = document.querySelector("#brVerificar");

function Somatoria(){
    let valor = String(codigo.value);

    if(valor == "001"){
        alert("Parafuro")
    }else if(valor == "002"){
        alert("Parafuro")
    }else if(valor == "003"){
        alert("Parafuro")
    }else{
        alert("Diversos")
    }

}

brVerificar.onclick = function(){
    Somatoria();
}