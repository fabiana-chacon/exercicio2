
var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector ("table");

tabela.addEventListener("dblclick",function (event){
event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){

    event.target.parentNode.remove();
  },700);


  });



//pacientes.forEach(function(paciente){
  //paciente. addEventListener ("dblclick", function(){
  //console.log("fui clicado com um duplo click");
    //this.remove();
