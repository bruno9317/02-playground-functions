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
  contador = 0;
  for(let index = 0; index < frase.length; index += 1){
    if(frase[index] == ' '){
      contador = contador + 1;
    }
  }
  let array = frase.split(' ', contador + 1);
  return array
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
  let maiorNumero = array[0];
  let contador = 0;
  for(let index = 1; index < array.length; index += 1){
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
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1;
  let distancia2;

  distancia1 =  cat1 - mouse;
  distancia2 =  cat2 - mouse;
  if(distancia1 < 0){
    distancia1 = distancia1 * (-1);
  }
  if(distancia2 < 0){
    distancia2 = distancia2 * (-1);
  }
  
  if(distancia1 < distancia2){
    return 'cat1'
  }else if(distancia1 > distancia2){
    return 'cat2'
  }{
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let arrayString = [];
  for(let index = 0; index < arrayNumber.length; index += 1){
    if(arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 != 0 ){
      arrayString.push('fizz');
    }else if(arrayNumber[index] % 3 != 0 && arrayNumber[index] % 5 === 0){
      arrayString.push('buzz');
    }else if(arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0){
      arrayString.push('fizzBuzz');
    }else{
      arrayString.push('bug!');
    }
  }
  return arrayString
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
