var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    // Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    // Cria a tr e a td a partir do paciente extraído.
    var pacienteTr = montaTr(paciente);

    //Adiciona paciente na tabela.
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

});


//  --------------- PEGANDO OS DADOS DO FORM ATRAVÉS DE UM OBJETO------------------
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

//----------------FUNÇÃO CALLBACK--------------: é uma função que é executada quando ocorre algum evento, exemplo:
//clique de um botão, envio de um formulário, recebimento de uma resposta do back-end!

/*A função responsável por criar elementos no Javascript é a createElement().
Com ela passamos o nome da tag que queremos criar e ela nos retorna um objeto HTML que pode ser alterado 
com as propriedades do Javascript, como a .textContent e a .classList./*

/* -------------------------- FUNÇÃO ANONIMA -------------------------------
titulo.addEventListener("click" , function (){
    console.log("USANDO FUNÇÃO ANONIMA!")

});

-------------------------- FUNÇÃO NOMEADA -------------------------------
titulo.addEventListener("click" , mostraMensagem); //Criando um "escutador de eventos" para quando clicar no titulo exiba a mensagem criada na funtion abaixo.

function mostraMensagem(){
    console.log("Olá fui clicado!")
}*/
