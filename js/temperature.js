(function(exports){
  
"use strict";

function Medida(valor,tipo) {
  this.valor = valor || "0";
  this.tipo = tipo;
  this.mostrar = function mostrar() {
    converted.innerHTML = "Se ha introducido una medida";
  }
}

Temperatura.prototype = new Medida();

function Temperatura(valor,tipo) {
  this.valor = valor || "0"; //¿Se tienen que volver a declarar?
  this.tipo = tipo;
  var result;
  this.calcular = function calcular(valor,tipo) {
    if(this.tipo == 'c' || this.tipo == 'C') {
      result = (this.valor *9/5)+32;
      result = result + " Farenheit";
    }
    else {
      result = (this.valor - 32)*5/9;
      result = result + " Celsius";
    }
    converted.innerHTML = result;
  }
  this.getValores = function getValores(valor,tipo) {
    return this.valor + this.tipo;
  }

}

exports.Temperatura = Temperatura;

exports.calculate = function calculate() {

  var original = document.getElementById("original");
  var temp = original.value;
  //var regex = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfFgG])\s*$/i;
  var regex = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([aAbBcCdDeEfFgG])\s*$/i;

  var m = temp.match(regex);

  if(m) {
    var num = m[1];
    num = parseFloat(num);
    var type = m[2];

   if (type == 'c' || type == 'C' || type == 'f' || type == 'F') {
     var temperatura = new Temperatura(num,type);
     temperatura.calcular();
   }

   else {
     var medida = new Medida(num,type);
     medida.mostrar();
   }
  }
}

})(this);