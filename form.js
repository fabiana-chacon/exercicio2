
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

var form = document.querySelector("#form-adiciona");

var paciente = obtemPacienteDoFormulario (form);

var pacienteTr = montaTr(paciente);

var erros = validaPaciente (paciente);

console.log (erros);

if(erros.length > 0 ){
exibeMensagensDeErro (erros);

  return;
}

adicionaPacienteNaTela(paciente);

form.reset();
var mensagensErro = document. querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTela(paciente){
var pacienteTr = montaTr(paciente);
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
}


function exibeMensagensDeErro (erros){
  var ul = document.querySelector("#mensagens-erro");
   ul.innerHTML ="";



   erros.forEach(function(erro){
  var li = document.createElement ("li");
  li.textContent = erro;
  ul.appendChild (li);
});

}


function obtemPacienteDoFormulario (form){

var paciente ={
   nome : form.nome.value,
   peso : form.peso.value,
   altura : form.altura.value,
   gordura : form.gordura.value,
   imc : calculaImc ( form.peso.value, form.altura.value)

}
   return paciente;
}
function montaTr(paciente){

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add ("paciente");


var nomeTd = montaTd (paciente.nome, "info-nome");
var pesoTd = montaTd ( paciente.peso, "info-peso");
var alturaTd = montaTd ( paciente.altura, "info-altura");
var gorduraTd = montaTd ( paciente.gordura, "info-gordura");
var imcTd = montaTd ( paciente.imc, "info-imc");


  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;


}

function montaTd(dado,classe){
var td = document.createElement("td");
td.textContent = dado;
td. classList.add(classe);
return td;

}
function validaPaciente(paciente){

  var erro =[];

if (!validaPeso(paciente.peso)){
  erro.push ("PESO INVÁLIDO");
}
if (!validaAltura(paciente.altura)){
  erro.push ( "ALTURA INVÁLIDA");
}
if (paciente.nome.length==0){
  erro.push ( "O nome do paciente não pode ficar em branco");
}

if (paciente.gordura.length ==0){
  erro.push ( "A gordura do paciente não pode ficar em branco");
}
if ( paciente.peso.length==0){
  erro.push ( "O peso não pode ficar em branco");
}
if ( paciente.altura.length==0){
  erro.push ( "A altura não pode ficar em branco");
}

return erro;
}
