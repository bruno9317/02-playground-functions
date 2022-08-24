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
function splitSentence(frase) {
  let array = [];
  for(let index = 0; index < frase.length; index += 1){
    if(frase[index] != ' '){
      array.push(frase[index]);
    }else{
      array.push(', ')
    }
  }
  return array;
}
// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1)
  return points 
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let contador = 0;
  for(let index = 0; index < array.length; index += 1){
    if(array[index] > maiorNumero){
      maiorNumero = array[index];
    }
  }
  for(let index = 0; index < array.length; index += 1){
    if(array[index] === maiorNumero){
      contador = contador + 1;
    }
  }
  return contador
}
let array = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(array));

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
