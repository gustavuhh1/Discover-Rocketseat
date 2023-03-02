/*

Vamos fortalecer e aplicar os conhecimentos,
além de aprender truques e dicas para resolver
os desafios e avançar para o próximo nível

*/
// DESAFIO I
function NotaEscolar(nota) {
  let notaA = nota >= 90 && nota <= 100;
  let notaB = nota >= 80 && nota <= 89;
  let notaC = nota >= 70 && nota <= 79;
  let notaD = nota >= 60 && nota <= 69;
  let notaF = nota < 60 && nota >= 0;
  console.log(typeof nota);

  let notaFinal;

  if (notaA) {
    notaFinal = "A";
  } else if (notaB) {
    notaFinal = "B";
  } else if (notaC) {
    notaFinal = "C";
  } else if (notaD) {
    notaFinal = "D";
  } else if (notaF) {
    notaFinal = "F";
  } else {
    notaFinal = "Nota Invalida";
  }

  return notaFinal;
}

console.log(NotaEscolar(100));

// DESAFIO II
let receitas = [500, 1000, 25];
let despesas = [200, 90, 150, 500, 350];

function sum(array) {
  let somaFinal = 0;
  for (const money of array) {
    somaFinal += money;
  }
  return somaFinal;
}

function calculateBalance() {
  const somaReceitas = sum(receitas);
  const somaDespesas = sum(despesas);

  balanceFinal = somaReceitas - somaDespesas;
  itsOk = balanceFinal > 0;

  let balanceText = "negativo";
  if (itsOk) {
    balanceText = "positivo";
  }

  console.log(`Seu saldo e ${balanceText}: ${balanceFinal.toFixed(2)}R$`);
}

calculateBalance();

// DESAFIO III

function converterTemperature(grao, valor) {
  // C = (F - 32) * 5/9
  // F = C * 9/5 + 32

  console.log(grao);
  switch (grao) {
    case "c": {
      result = ((valor - 32) * 5) / 9;
      console.log(result);
      break;
    }
    case "f": {
      result = (valor * 9) / 5 + 32;
      console.log(result);
      break;
    }
    default: {
      console.log("Valor incorreto");
      break;
    }
  }
}

converterTemperature("f", 100);

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau nao identificado");
  }

  //fluxo ideal, F => C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "C";

  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => (celsius * 9) / 5 + 32;
    degreeSign = "F";
  }

  return formula(updatedDegree) + degreeSign;
}

try {
  console.log(transformDegree("212F"));
  console.log(transformDegree("100C"));
} catch (error) {
  console.log(error.message);
}

// DESAFIO IV

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionaria",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico de Babilonia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];


const totalCategories = booksByCategory.length

console.log(totalCategories)
for(let category of booksByCategory){
  console.log(`Total de livros da categoria:`, category.category)
  console.log(category.books.length)
}

function countAuthors(){
  let authors = [];

  for(let category of booksByCategory){
    for(let book of category.books){
      if(authors.indexOf(book.author) == -1){
        authors.push(book.author)
      }
    }
  }
  console.log("Total de autores: " , authors.length)
}
countAuthors()

function booksOfAugustoCury() {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if(book.author === 'Augusto Cury'){
        books.push(book.title)
      }
    }
  }
  console.log("Livros do autor: ", books);
}

booksOfAugustoCury()

function booksOfAuthor(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title);
      }
    }
  }
  console.log(`Livros do autor ${author}: ${books.join(", ")}`);
}
booksOfAuthor("Augusto Cury")