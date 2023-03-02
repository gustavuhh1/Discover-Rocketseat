console.log("Manipulando Dados")
/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
*/

/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo
*/

console.log(Number('9') + 5)

// Manipulando String e Numeros

// Transformar String em Numero e Numero em String
let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos digitos tem um numero
let word = "Paralelepipedo"
console.log(word.length)

let number1 = 1234
console.log(String(number1).length)

// Transformar um numero quebrado com 2 casa decimais e trocar ponto por virgula
let number2 = 234.3412341234
console.log(number2.toFixed(2).replace('.',","))

// Tranforme letras minusculas em maiusculas. Faça o contrário disso tambem

let word1 = "GustAvO"
console.log(word1.toUpperCase())
console.log(word1.toLowerCase())

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu quero viver o Amor!"
let MyArray = phrase.split(" ")
console.log(MyArray)
let phraseWithUnderscore = MyArray.join("_")
console.log(phraseWithUnderscore)

// Verificar se o texto contém a palavra Amor
console.log(phrase)
console.log(phrase.includes("Amor"))

// Criar Array com construtor

let MyArray1 = new Array("a","b","c")
console.log(MyArray1)

// Contar elementos de um array

console.log([
    "a",
    {type: "array"},
    function() { return "alo"}
].length)

// Transformar uma cadeia de caracteres em elementos de um array

let word2 = "manipulação"
console.log(Array.from(word2))

// Manipulando array

let techs = ["html","css","js"]

// adicionar um intem no fim
console.log(techs.push("nodedjs"))
// adicionar no começo
techs.unshift("sql")
// remover no fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
// console.log(techs.slice(1,3))
// remover 1 ou mais intem em qualquer posição do array
// techs.splice(1, 2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)
console.log(techs)