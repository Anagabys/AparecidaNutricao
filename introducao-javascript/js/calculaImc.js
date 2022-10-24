var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) //Varrendo a lista de pacientes de acordo com tamanho, usando a prop lenght.
{
    var paciente = pacientes[i]; // Para cada iteração do loop a a variavel paciente assumirá o valor de acordo com indice *i*. (Na primeira iteração todos pacientes serão 0, na segunda iteração todos pacientes serão 1, sucessivamente.)

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    console.log(tdPeso); //Deve conter o td que tem o peso.
    console.log(peso); 
    console.log(tdAltura);
    console.log(altura);

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido"); //Modificando o estilo, com a propriedade style, quando o estilo tiver mais de uma palavra usar padrão camelCase.
    }

    if (altura <= 0 || altura > 3.00) {
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido"); //Modificando o estilo , com a criação de uma classe especifica no CSS, e usando através da prop classList.add()
    }

    if ( alturaValida && pesoValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
  

}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}



/*else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}

//var imc = peso/ (altura*altura);Calculo do IMC, e atribuição para a variável imc.
//tdImc.textContent = imc; Inserindo o resultado do cálculo na tabela.




//console.log(document.querySelector("h1")); IMPRIMIR O ELEMENTO SELECIONADO
//console.log(titulo.textContent); //IRÁ CAPTURAR APENAS O TEXTO.

//document.querySelector(".titulo");

//var titulo= document.querySelector = (".titulo")//Atribui um novo valor a variável titulo.

//var primeiroPaciente = document.querySelector("#primeiro-paciente");
//console.log(primeiroPaciente);*/