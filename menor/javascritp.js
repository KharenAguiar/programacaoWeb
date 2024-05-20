let resultado = document.querySelector("#resultado");
let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");
let numero4 = document.querySelector("#numero4");
let brVerificar = document.querySelector("#brVerificar");

function Somatoria(){
    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);
    let valor3 = Number(numero3.value);
    let valor4 = Number(numero4.value);

    if(valor1 < valor2 && valor1 < valor3 && valor1 < valor4){
        alert("O primeiro valor inserido que é "+valor1+" é menor.")

    }else if(valor2 < valor1 && valor2 < valor3 && valor2 < valor4){
        alert("O segundo valor inserido que é "+valor2+" é menor.")
            
    }else if(valor3 < valor1 && valor3 < valor2 && valor3 < valor4){
        alert("O terceiro valor inserido que é "+valor3+" é menor.")
            
    }else if(valor4 < valor1 && valor4 < valor2 && valor4 < valor3){
        alert("O quarto valor inserido que é "+valor4+" é menor.")
    }else{
        alert("Todos iguais.")
    }
}

brVerificar.onclick = function(){
    Somatoria();
}