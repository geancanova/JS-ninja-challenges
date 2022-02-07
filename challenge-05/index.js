/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const arr = [2, 4, 6, 8, 10];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const returnArr = arr => arr;

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArr(arr[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const findIndex = (arr, i) => arr[i];

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const newArr = ['mamoud', 'terence', 4, 'demerval', 23]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
findIndex(newArr, 0);
findIndex(newArr, 1);
findIndex(newArr, 2);
findIndex(newArr, 3);
findIndex(newArr, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
const book = bookName => {
  const books = {
    oChamadoDeCthulhuEOutrosContos: {
      quantidadeDePaginas: 327,
      autor: 'H. P. Lovecraft',
      editora: 'Darkside Books'
    },
    AndroidesSonhamComOvelhasEletricas: {
      quantidadeDePaginas: 288,
      autor: 'Philip K. Dick',
      editora: 'Aleph'
    },
    SacoDeOssos: {
      quantidadeDePaginas: 392,
      autor: 'Stephen King',
      editora: 'Suma'
    }
  };

  return bookName ? books[bookName] : books;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Saco de Ossos tem ${book(SacoDeOssos).quantidadeDePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Saco de Ossos é ${book(SacoDeOssos).autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Saco De Ossos foi publicado pela editora ${book(SacoDeOssos).editora}.`);
