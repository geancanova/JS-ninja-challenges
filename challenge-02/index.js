// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
const add = (x, y) => x + y;

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const plusFive = add(3, 2) + 5;

// Qual o valor atualizado dessa variável?
console.log(plusFive); // 10

// Declare uma nova variável, sem valor.
let empty;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
const addValue = val => `O valor da variável agora é ${empty = val}`;

// Invoque a função criada acima.
addValue(10);

// Qual o retorno da função? (Use comentários de bloco).
console.log(addValue(10)); // O valor da variável agora é 10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
const checkArgs = (x, y, z) => x && y && z ? (x * y * z) + 2 : 'Preencha todos os valores corretamente!'
;

// Invoque a função criada acima, passando só dois números como argumento.
checkArgs(2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
checkArgs(2, 3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 20

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
const condArgs = function (x, y, z) {
  if (arguments.length === 1)
    return x;

  else if (arguments.length === 2)
    return x + y;

  else if (arguments.length === 3)
    return (x + y) / z;

  else if (!arguments.length)
    return false;

  else
    return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
condArgs(2); // 2
condArgs(2, 3); // 5
condArgs(2, 3, 4); // 1.25
condArgs(); // false
condArgs(2, 3, 4, 5); //null
