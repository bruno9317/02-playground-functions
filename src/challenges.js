// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 && valor2 === true){
    return true
  }{
    return false
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) /2
}

// Desafio 3
function splitSentence(frase) {}

// Desafio 4
function concatName(array) {
  let retorno = [];
  // for(let index = 0; index < array.length; index += 1){
    return array[0] + ', ' + array[array.length - 1]
  // }
  return retorno
}
let variavel = ['foguete', 'não', 'tem', 'ré'];

console.log(concatName(variavel));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
