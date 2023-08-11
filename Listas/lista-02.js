// Dicionários (Objetos):

// 1- Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades.

function objetoEstudante() {
  const estudante = {
    nome: 'Julia',
    idade: 25,
    curso: 'Direito',
    notas: 86,
  }

  for(let prop in estudante) {
    console.log('Propriedade: ' + prop +  '\nValor: ' + estudante[prop]);
  }
}

function objetoEstudanteDicionario() {
  let dicionario = {};
  dicionario["nome"] = "Julia";
  dicionario["idade"] = 25;
  dicionario["curso"] = "Direito";
  dicionario["notas"] = 86;

  for(let chave in dicionario) {
    console.log('Chave: ' + chave +  '\nValor: ' + dicionario[chave]);
  }
}

// ---------------

// 2- Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente.

function paisesCapitaisDicionario() {
  let dicionario = {};
  dicionario["argentina"] = "Buenos Aires";
  dicionario["austria"] = "Viena";
  dicionario["belgica"] = "Bruxelas";
  dicionario["canada"] = "Otava";
  dicionario["chile"] = "Santiago";
  dicionario["coreia do sul"] = "Seul";
  dicionario["franca"] = "Paris";
  dicionario["maldivas"] = "Malé";
  dicionario["mexico"] = "Cidade do México";
  dicionario["portugal"] = "Lisboa";
  dicionario["estados unidos"] = "Washington, D.C.";
  dicionario["brasil"] = "Brasília";

  function nomePaises() {
    const nomePais = prompt('Escreva o nome de um país:');
    const nomePaisReset = nomePais.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
    if(typeof(dicionario[nomePaisReset]) == 'undefined') {
      alert('Não possuímos esse país no nosso banco de dados.');
    } else {
      alert('País: ' + nomePais + '\nCapital: ' + dicionario[nomePaisReset]);
    }
  }

  nomePaises();
}

// ---------------

// 3- Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas.

function frutasPrecosDicionario() {
  let dicionario = {};
  dicionario["goiaba"] = 3.5;
  dicionario["abacate"] = 2;
  dicionario["ameixa"] = 6.2;
  dicionario["banana"] = 1.5;
  dicionario["kiwi"] = 8;
  dicionario["maca"] = 4;
  dicionario["morango"] = 5.2;
  dicionario["uva"] = 7;

  function cestaFrutas() {
    let soma = 0;
    for(let chave in dicionario) {
      soma += dicionario[chave];
    }
    console.log(soma);
  }

  cestaFrutas()

}

// ---------------

// 4- Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc. Crie uma função que imprima as informações do livro em um formato legível.

function objetoLivro() {
  const livro = {
    título: 'O livro',
    autor: 'Arthur',
    'ano de publicação': 2015,
  }

  function infoLivro() {
    for(let prop in livro) {
      console.log(`${prop.charAt(0).toUpperCase()+prop.slice(1)}: ${livro[prop]}`);
    }
  }
  infoLivro();

}

// _______________________________________________________________________

// Map:

// 5- Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado.

function quadradoArrayMap() {
  const array = [1, 3, 5, 2, 15];
  const quadrado = array.map((number) => {
    return number ** 2;
  });
  console.log(quadrado);
}

// ---------------

// 6- Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula.

function palavrasArrayMap() {
  const array = ['Limão', 'Batata', 'Sopa', 'Chinelo'];
  const letra = array.map((number) => {
    return number.charAt(0).toLowerCase();
  });
  console.log(letra);
}

// ---------------

// 7- Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade. Use o método map() para calcular o valor total de cada produto (preço * quantidade).

function produtosArrayMap() {
  const array = [
    {nome: 'Chinelo', preco: 15, quantidade: 4 },
    {nome: 'Bota', preco: 50, quantidade: 3 },
    {nome: 'Tênis', preco: 40, quantidade: 8 }
  ];
  const valorTotal = array.map((number) => {
    return number.preco * number.quantidade;
  });
  // console.log(valorTotal);

  for(let i = 0; i < valorTotal.length; i++) {
    console.log('O valor total do produto "' + array[i].nome + '" é R$' + valorTotal[i]);
  }
}


// ---------------

// 8- Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32.

function temperaturaArrayMap() {
  const array = [20, 35, 13, 9, 29];
  const temperaturaFahrenheit = array.map((number, index, array) => {
    return (number * 9 / 5) + 32;
  });
  console.log(temperaturaFahrenheit);
}

// _______________________________________________________________________

// Reduce:

// 9- Dado um array de números, use o método reduce() para calcular a soma de todos os elementos.

function somaArrayReduce() {
  const array = [2, 5, 25, 86];
  const soma = array.reduce((acumulador, number) => {
    return acumulador + number;
  });
  console.log(soma);
}

// ---------------

// 10- Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string.

function concatArrayReduce() {
  const array = ['Hello', 'Word', 'JavaScript'];
  const concatenando = array.reduce((acumulador, number) => {
    return acumulador + ' ' + number;
  });
  console.log(concatenando);
}

// ---------------

// 11- Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica.

function despesasArrayReduce() {
  const array = [
    {categoria: 'Mercado', valor: 600},
    {categoria: 'Mercado', valor: 200},
    {categoria: 'Farmácia', valor: 10},
    {categoria: 'Farmácia', valor: 15},
    {categoria: 'Farmácia', valor: 30},
    {categoria: 'Luz', valor: 150}
  ];
  const somaMercado = array.reduce((acumulador, number) => {
    if(number.categoria == 'Mercado') {
      return acumulador + number.valor;
    } else {
      return acumulador;
    }
  }, 0);
  console.log('O valor total gasto na categoria "Mercado" é: R$' + somaMercado);

  const somaFarmacia = array.reduce((acumulador, number) => {
    if(number.categoria == 'Farmácia') {
      return acumulador + number.valor;
    } else {
      return acumulador;
    }
  }, 0);
  console.log('O valor total gasto na categoria "Farmácia" é: R$' + somaFarmacia);

}

// ---------------

// 12- Dado um array de números, use o método reduce() para encontrar o maior número no array.

function maiorNumeroArrayReduce() {
  const array = [80, 20, 60, 7, 132, 45];
  const maiorNumero = array.reduce((acumulador, number) => {
    if(acumulador < number) {
      acumulador = number;
    }
    return acumulador;
  });
  console.log(maiorNumero);
}

// _______________________________________________________________________

// Laços de Repetiçoes

// 13- Imprima os números de 1 a 10 utilizando um loop for.

function numeros10Loop() {
  for(let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// ---------------

// 14- Imprima os números pares de 1 a 20 utilizando um loop for.

function numerosParesLoop() {
  for(let i = 1; i <= 20; i++) {
    if(!(i % 2)){
      console.log(i);
    }
  }
}

// ---------------

// 15- Calcule a soma dos números de 1 a 50 utilizando um loop for.

function numerosSoma50Loop() {
  let soma = 0;
  for(let i = 1; i <= 50; i++) {
    soma += i;
  }
  console.log(soma);
}

// ---------------

// 16- Imprima a tabuada do 7 utilizando um loop for.

function tabuada7Loop() {
  for(let i = 1; i <= 10; i++) {
    console.log(7 * i);
  }
}

// ---------------

// 17- Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for.

// ---------------

// 18- Escreva um programa que solicite ao usuário um número e verifique se ele é primo.

// ---------------

// 19- Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores)

// ---------------

// 20- Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.

// ---------------

// 21- Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.

// ---------------

// 22- Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.

// ---------------

// 23- Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número. O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.

// ---------------

// 24- Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000.

// ---------------

// 25- Escreva um programa que calcule a média de uma lista de números. O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.

// ---------------

// 26- Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente.

// ---------------

// 27- Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário.

// ---------------

// 28- Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.

// ---------------

// 29- Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2.

// ---------------

// 30- Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado.

// _______________________________________________________________________

// Condicionais

// 31- Verificação de vogal ou consoante
// Peça ao usuário para digitar uma letra. Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante. Exiba uma mensagem indicando se a letra é uma vogal ou consoante.

// ---------------

// 32- Calculadora simples
// Peça ao usuário para digitar dois números e uma operação matemática (+, -, *, /). Use uma estrutura condicional para realizar a operação selecionada nos números dados. Exiba o resultado da operação.

// ---------------

// 33- Verificação de número primo
// Peça ao usuário para digitar um número. Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo). Exiba uma mensagem indicando se o número é primo ou não.

// ---------------

// 34- Conversão de temperatura
// Peça ao usuário para digitar uma temperatura em graus Celsius. Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário. Exiba o resultado da conversão.

// ---------------

// 35- Dia da semana por extenso
// Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana. Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado.

// ---------------

// 36- Verificação de ano bissexto
// Peça ao usuário para digitar um ano. Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400). Exiba uma mensagem indicando se o ano é bissexto ou não.

// ---------------

// 37- Contador de vogais e consoantes
// Peça ao usuário para digitar uma palavra ou frase. Use uma estrutura condicional para contar o número de vogais e consoantes na entrada. Exiba os resultados separadamente.

// ---------------

// 38- Verificação de número positivo, negativo ou zero
// Peça ao usuário para digitar um número. Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero. Exiba uma mensagem indicando a natureza do número.

// ---------------

// 39- Sistema de bilhete de cinema
// Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não"). Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10. Exiba o preço do bilhete.

// ---------------

// 40- Verificação de palíndromo
// Peça ao usuário para digitar uma palavra ou frase. Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás). Exiba uma mensagem indicando se a entrada é um palíndromo ou não.