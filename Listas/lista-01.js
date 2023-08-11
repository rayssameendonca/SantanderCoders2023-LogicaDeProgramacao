// Operadores:

// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.

function areaRetangulo() {
  const comprimentoRetangulo = parseFloat(prompt("Digite o comprimento do Retângulo:"));
  const larguraRetangulo = parseFloat(prompt("Digite a largura do Retângulo:"));
  const areaRetangulo = comprimentoRetangulo * larguraRetangulo;
  alert("A área do Retângulo é: " + areaRetangulo);
}

// ---------------

// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).

function parImpar() {
  const numero = prompt("Digite um número:");
  if (numero % 2 === 0) {
    alert("O número é par!");
  } else {
    alert("O número é ímpar!");
  }
}

// ---------------

// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".

function verificaJavaScriptString() {
  const texto = prompt("Escreva um texto:");
  if (texto.includes("JavaScript")) {
    alert('JavaScript encontrado.');
  } else {
    alert('JavaScript não encontrado.');
  }
}

// ou

function verificaJavaScriptString2() {
  const texto = prompt("Escreva um texto:");
  if (texto.match(/JavaScript/)) {
    alert('JavaScript encontrado.');
  } else {
    alert('JavaScript não encontrado.');
  }
}

// ---------------

// 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.

function compareStrings() {
  const texto1 = prompt("Digite o primeiro texto:").toLowerCase();
  const texto2 = prompt("Digite o segundo texto:").toLowerCase();
  if (texto1 == texto2) {
    alert("Os textos são iguais!");
  } else {
    alert("Os textos não são iguais!");
  }
}

// ---------------

// 5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.

function concatenarArrays(array1, array2) {
  const concatArrays = array1.concat(array2);
  console.log(concatArrays);
}

// concatenarArrays([1,2,3], [4,5,6]);

// _______________________________________________________________________

// Funções Nativas:

// 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.

function mediaArray() {
  const array = [1, 5, 6, 7, 8, 9];
  const soma = array.reduce((acumulador, numero, indice, array) => {
    return acumulador + numero;
  });
  const media = soma / array.length;
  console.log(media);
}

// ---------------

// 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".

function dataHoraFormato() {
  const data = new Date();
  const dataFormato = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  console.log(dataFormato);
}

// ou

function dataHoraFormatoBR() {
  const newData = new Date();
  console.log(newData.toLocaleString("pt-br"));
}

// ---------------

// 8- Implemente um programa que encontre o maior valor em um array usando a função Math.max().

function maiorValorArray(array) {
  const maxArray = Math.max.apply(null, array);
  console.log(maxArray);
}
// maiorValorArray([1, 2, 3, 15, 9, 5]);

// ---------------

// 9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos.

function MathRandonInt() {
  let min = parseFloat(prompt("Digite o valor mínimo para a geração de um número aleatório:"));
  let max = parseFloat(prompt("Digite o valor máximo para a geração de um número aleatório:"));
  min = Math.ceil(min); //  retorna o menor número inteiro maior ou igual a "x".
  max = Math.floor(max); //  retorna o menor número inteiro dentre o número "x".
  resposta = Math.floor(Math.random() * (max - min) + min);
  alert(`O número é: ${resposta}`);
}

// ---------------

// 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.

function verificarNumeroPrimo() {
  let power = true;
  while (power) {
    const numero = Number(prompt('Digite um número'));
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
        console.log('O número é primo.');
      } else {
        console.log('O número não é primo.');
      }
    } else {
      alert('Não é possível verificar se este número é primo.');
    }
    let powerCalcularNovamente = true;
    while (powerCalcularNovamente) {
      let calcularNovamente = Number(prompt('Deseja calcular novamente?\n1. Sim\n2. Não'));
      if (calcularNovamente === 1) {
        powerCalcularNovamente = false;
      } else if (calcularNovamente === 2) {
        power = false;
        powerCalcularNovamente = false;
      }
    }
  }
}

// _______________________________________________________________________

// Coerção e Tipos de Dados:

// 11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.

function coecao() {
  const stringVar = '5';
  const numberVar = 2;
  const multiplicacao = stringVar * numberVar;
  console.log(multiplicacao);
  console.log("O JavaScript fez uma coerção implícita, ou seja, ele converteu a string com o valor '5' para um número 5 para fazer o cálculo matemático.");
}

// ---------------

// 12- Converta a string "123" em um número inteiro e armazene-o em uma variável.

function converterString() {
  const stringNumber = '123';
  const numberInt = parseInt(stringNumber);
  console.log(numberInt);
}

// ---------------

// 13- Escreva um programa que adicione um número e uma string.

function adcionarNumeroString() {
  const numero = 3;
  const texto = 'ola';
  console.log(texto + numero);
}

// ---------------

// 14- Explique o resultado e discuta a coerção que ocorre.

function exercicio14() {
  console.log("No JavaScript o '+' é utilizado para somar, mas também é utilizado para concatenação. Ou seja, quando se utiliza o '+' ele juntos a string e o número e transformou tudo em uma string só. Se na const texto tivesse uma string com um número, ele também iria concatenar.");
}

// ---------------

// 15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.

function nullUndefined() {
  const vazio = null;
  const indefinido = undefined;
  if (vazio === indefinido) {
    console.log("São iguais.")
  } else {
    console.log("Não são iguais.")
  }
}

// ---------------

// 16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.

const numero = 3;
const texto = 'ola';
const vazio = null;
const indefinido = undefined;
const funcao = () => { return 'Hello function' };
function verificaVariavelFunction(variavel) {
  if (typeof (variavel) === 'function') {
    console.log('A variável é do tipo: função.');
  } else {
    console.log(`A variável é do tipo: ${typeof (variavel)}. Não é uma função.`);
  }
}
// console.log(verificaVariavelFunction(numero));
// console.log(verificaVariavelFunction(texto));
// console.log(verificaVariavelFunction(vazio));
// console.log(verificaVariavelFunction(indefinido));
// console.log(verificaVariavelFunction(funcao));

// _______________________________________________________________________

// Operadores Matemáticos e Lógicos:

// 18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.

function calcularExpressao() {
  const expressao = (10 + 5) * 3 / 20;
  console.log(expressao);
}

// ---------------

// 19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.

function positivoImpar() {
  const numero = parseFloat(prompt('Digite um número:'));
  if(numero > 0 && numero % 2) {
    alert('Seu número é positivo e ímpar.');
  } else if(numero > 0 && !(numero % 2)) {
    alert('Seu número é positivo e par.');
  } else if(numero < 0 && !(numero % 2)) {
    alert('Seu número é negativo e par.');
  } else {
    alert('Seu número é negativo e ímpar.');
  }
}

function positivoImpar2() {
  const numero = parseFloat(prompt('Digite um número:'));
  if(numero >= 0) {
    if(numero % 2) {
      alert('Seu número é positivo e ímpar.');
    } else {
      alert('Seu número é positivo e par.');
    }
  } else {
    if(numero % 2) {
      alert('Seu número é negativo e ímpar.');
    } else {
      alert('Seu número é negativo e par.');
    }
  }
}


// ---------------

// 20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.

function anoBissexto() {
  const ano = parseInt(prompt('Digite um ano:'));

  if(!(ano % 100) && !(ano % 400)) {
    alert('Esse ano é bissexto.');
  } else if(ano % 100 && !(ano % 4)) {
    alert('Esse ano é bissexto.');
  } else {
    alert('Esse ano não é bissexto.');
  }
}

// ---------------

// 21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos).

function permissaoClube() {
  const listaBanidos = ['joao', 'marcos', 'lucas', 'larissa'];
  const idade = parseInt(prompt('Digite sua idade:'));
  const nome = prompt('Digite seu nome:').toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "");

  if(idade >= 18 && !listaBanidos.includes(nome)) {
    alert('Pode entrar no clube.');
  } else {
    alert('Não pode entrar no clube.');
  }
}

// ---------------

// 22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.

function login() {
  const usuarios = {
    pedro: '123456',
    marcos: '6589',
    joao: '5894',
  }
  const usuario = prompt('Usuário:').toLowerCase();
  const senha = prompt('Senha:');

  if(usuarios.hasOwnProperty(usuario) && senha === usuarios[usuario]) {
    alert('Liberado');
  } else {
    alert('Usuário ou senha inválidos.')
  }
}

