$(document).ready(function () {
    $("#cpf").mask("000.000.000-00");
});

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#botao");
      
      btn.click();
    
    }
  });

function validar() {
    var cpfinput = document.getElementById("cpf");
    var cpf = cpfinput.value;
    cpf = cpf.replaceAll(".", "");
    cpf = cpf.replaceAll("-", "");

    if(cpf.length == 11) {
        var numeros = cpf.split("");
        var comparador = numeros[0];
    
        //for(var i = 0; i<10; i++) {
            //if(numeros[i] == numeros[i+1]) {
                //iguais++;
            //}
        //}

        //Passo 1



    var cpfSoma = eval(numeros[0] * 1 + numeros[1] * 2 + numeros[2] * 3 + numeros[3] * 4 + numeros[4] * 5 + numeros[5] * 6 + numeros[6] * 7 + numeros[7] * 8 + numeros[8] * 9);

    var cpfResto = cpfSoma%11;

    if(cpfResto == 10) {
        cpfResto = 0;
    }

    //Passo 2

    var cpfSoma2 = eval(numeros[0] * 0 + numeros[1] * 1 + numeros[2] * 2 + numeros[3] * 3 + numeros[4] * 4 + numeros[5] * 5 + numeros[6] * 6 + numeros[7] * 7 + numeros[8] * 8 + numeros[9] * 9);

    var cpfResto2 = cpfSoma2%11;

    //console.log(cpfSoma);

    //console.log(cpfResto);

    //console.log(cpfResto2);

    if(cpfResto == numeros[9] && cpfResto2 == numeros[10] && !numeros.every(el =>(el === comparador))) {
        let resultado = document.getElementById("resultado");
        document.getElementById("resultado").innerHTML = "É VÁLIDO"

        resultado.style.color = "green";
    } else if(!numeros.every(el =>(el === comparador))) {
        let resultado = document.getElementById("resultado");
        document.getElementById("resultado").innerHTML = "NÃO É VÁLIDO"
        resultado.style.color = "red";
    } else {
        alert("Digite um CPF válido!");
    }
    } else {
        alert("Digite um CPF válido!");
    }
}