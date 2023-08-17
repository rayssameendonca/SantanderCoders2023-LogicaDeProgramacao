// 1- Crie uma função que calcule a soma de dois números.

function somar(a, b) {
  return a + b;
}
// somar(2, 2); // 4

// ---------------

// 2- Escreva uma função que calcule o produto de três números.

function multiplicar(a, b, c) {
  return a * b * c;
}
// multiplicar(2, 2, 2); // 8

// ---------------

// 3- Crie uma função que verifique se um número é par ou ímpar.

function parImpar(numero) {
  if(numero % 2) {
    return 'O número é ímpar.';
  } else {
    return 'O número par.'
  }
}
// parImpar(2); //'O número é par.'
// parImpar(3); // 'O número é ímpar.'

// ---------------

// 4- Escreva uma função que inverta uma string (por exemplo, "hello" se torna "olleh").

function inverterString(string) {
  const stringArray = string.split('');
  let stringReverse = '';
  for(let i = stringArray.length - 1; i >= 0; i--) {
    stringReverse += stringArray[i];
  }
  return stringReverse;
}
// inverterString('batata'); // 'atatab'
// inverterString('hello'); // 'olleh'

// ---------------

// 5- Crie uma função que retorne o maior valor de um array de números.

const arrayTesteMaiorVallor = [80, 20, 60, 7, 132, 45];
function maiorVallorArray(array) {
  const maiorNumero = array.reduce((acumulador, number) => {
    if(acumulador < number) {
      acumulador = number;
    }
    return acumulador;
  });
  console.log(maiorNumero);
}
// maiorVallorArray(arrayTesteMaiorVallor); // 132
// maiorVallorArray([1, 2, 55, 3, 7]); // 55

// ---------------

// 6- Escreva uma função que calcule a média de um array de números.

const arrayTesteMediaArray = [1, 27, 65, 80];
function mediaArray(array) {
  const soma = array.reduce((acumulador, numero) => {
    return acumulador + numero;
  });
  const media = soma / array.length;
  return media;
}
// mediaArray(arrayTesteMediaArray); // 43.25
// mediaArray([2, 2, 2]); // 2

// ---------------

// 7- Crie uma função que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente).

function palindromo(palavra) {
  const palavraArray = palavra.split('');
  let palavraReverse = '';
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraReverse += palavraArray[i];
  }
  if (palavraReverse === palavra) {
    return 'A palavra ' + palavra.toUpperCase() + ' é um palíndromo.';
  } else {
    return 'A palavra ' + palavra.toUpperCase() + ' não é um palíndromo.';
  }
}
// palindromo('arara'); // 'A palavra ARARA é um palíndromo.'
// palindromo('amarelo'); // 'A palavra AMARELO não é um palíndromo.'

// ---------------

// 8- Escreva uma função que conte quantas vezes uma determinada letra aparece em uma string.

function letraEmString(letra, string) {
  const letras = string.split('');
  let contador = 0;
  letras.forEach(elemento => {
    if(elemento.includes(letra)) {
      contador++;
    }
  });
  return 'A palavra "' + string + '" contem ' + contador + ' letras "' + letra + '".';
}
// letraEmString('a', 'arara'); // 'A palavra "arara" contem 3 letras "a".'
// letraEmString('e', 'paralelepipedo'); // 'A palavra "paralelepipedo" contem 3 letras "e".'

// ---------------

// 9- Crie uma função que calcule o fatorial de um número.

function fatorialNumero(numero) {
  let somaFatorial = 1;
  for(let i = numero; i >= 1; i--) {
    somaFatorial = somaFatorial * i;
  }
  return 'O fatorial do número ' + numero + ' é ' + somaFatorial + '.';
}
// fatorialNumero(5); // 'O fatorial do número 5 é 120.'
// fatorialNumero(10); // 'O fatorial do número 10 é 3628800.'

// ---------------

// 10- Escreva uma função que converta graus Celsius para Fahrenheit.

function CelsiusFahrenheit(temperatura) {
  return temperatura + 'ºC é igual a ' + ((temperatura * 9 / 5) + 32) + 'ºF.';
}
// CelsiusFahrenheit(32); // '32ºC é igual a 89.6ºF.'
// CelsiusFahrenheit(0); // '0ºC é igual a 32ºF.'

// ---------------

// 11- Crie uma função que encontre o valor mínimo e máximo em um array de números.

const arrayTesteMinMaxArray = [5, 4, 55, 32, 45];
function minMaxArray(array) {
  const min = array.reduce((acumulador, numero) => {
    if(acumulador > numero) {
      acumulador = numero;
    }
    return acumulador;
  });
  const max = array.reduce((acumulador, numero) => {
    if(acumulador < numero) {
      acumulador = numero;
    }
    return acumulador;
  });
  return 'O menor valor da array é ' + min + ' e o maior valor da array é ' + max + '.';
}
// minMaxArray(arrayTesteMinMaxArray); // 'O menor valor da array é 4 e o maior valor da array é 55.'
// minMaxArray([7, 25, 64, 125, 3]); // 'O menor valor da array é 3 e o maior valor da array é 125.'

// ---------------

// 12- Escreva uma função que calcule a sequência de Fibonacci até um determinado número de termos.

function fibonacci(numeroDeTermos) {
  let numeroimp = 1;
  let numeropar = 0;
  let arraySequencia = [];
  for(let i = 0; i < numeroDeTermos; i++) {
    if(i < 2) {
      arraySequencia.push(i);
    } else {
      if(i % 2) {
        numeroimp += numeropar;
        arraySequencia.push(numeroimp);
      } else {
        numeropar += numeroimp;
        arraySequencia.push(numeropar);
      }
    }
  }
  return arraySequencia;
}
// fibonacci(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// fibonacci(20); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]

// ---------------

// 13- Crie uma função que verifique se um número é primo.

function verificarNumeroPrimo(numero) {
  let divisor = numero;
  let contador = 0;
  if (numero >= 0) {
    for (i = numero; i >= 0; i--) {
      if (numero % divisor === 0) {
        contador++;
      }
      divisor--;
    }
    if (contador === 2) {
      return 'O número é primo.';
    } else {
      return 'O número não é primo.';
    }
  } else {
    alert('Não é possível verificar se este número é primo.');
  }
}
// verificarNumeroPrimo(13); // 'O número é primo.'
// verificarNumeroPrimo(6); // 'O número não é primo.'

// ---------------

// 14- Escreva uma função que remova os elementos duplicados de um array.


// ---------------

// 15- Crie uma função que ordene um array de números em ordem crescente.

// ---------------

// 16- Escreva uma função que retorne o número de dias entre duas datas.

// ---------------

// 17- Crie uma função que calcule o raio de um círculo com base em sua área.

// ---------------

// 18- Escreva uma função que encontre o segundo maior valor em um array de números.

// ---------------

// 19- Crie uma função que converta um valor em dólares para outra moeda com base em uma taxa de câmbio.

// ---------------

// 20- Escreva uma função que verifique se duas strings são anagramas (contêm as mesmas letras, mas em ordens diferentes).