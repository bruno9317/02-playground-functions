// Desafio 11
function maisRepetido(array) {
  let contador = 0;
  let maiorRepetição = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        contador += 1;
      }
    }
    if (maiorRepetição < contador) {
      maiorRepetição = contador;
      contador = 0;
    } else {
      contador = 0;
    }
  }
  return maiorRepetição;
}

function generatePhoneNumber(numero) {
  if (numero.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (maisRepetido(numero) > 2) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let index = 0; index < numero.length; index += 1) {
    if (numero[index] > 9 || numero[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  numero.splice(0, 0, '(');
  numero.splice(3, 0, ')');
  numero.splice(9, 0, '-');
  numero.splice(4, 0, ' ');
  numero = numero.toString();
  numero = numero.replace(/,/g, '');
  return numero;
}
// Desafio 12
function triangleCheck(linha1, linha2, linha3) {
  let qual = true;
  if (linha1 < linha2 + linha3 && Math.abs(linha1) > Math.abs(linha2) - Math.abs(linha3)) {
    qual = true;
  } else {
    qual = false;
  }
  return qual;
}

// Desafio 13
function hydrate(string) {
  let array = [];
  let resultado = 0;
  string = string.replace(/\D/g, '');
  for (let index = 0; index < string.length; index += 1) {
    array[index] = parseInt(string[index]);
  }
  for (let index = 0; index < array.length; index += 1) {
    resultado += array[index];
  }
  if (resultado <= 1) {
    return resultado + ' copo de água';
  }
  return resultado + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
