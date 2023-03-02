/*

- Expressions
- Operators 
    Binary
    Unary
    Ternary
*/

let number = 1

console.log(number + 1)
console.log(++number)
console.log(false ? 'alo' : 'nada')

console.log("**new**")
/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String("Gustavo")
name.surName = 'Rodrigues'
let age = new Number(23)
let date = new Date('2005-04-06')

console.log(name, age, date)

console.log("**Operadores unarios**");
/*
    Operadores unários
    typeof
    delete
*/
const person = {
    name: 'Gustavo',
    age: 25,
}

console.log(person)
delete person.age
console.log(person)
console.log(typeof "mayk")

console.log('Operadores Aritimeticos: Ja sei fds')


console.log('**Grouping operator**')

let total = (2 + 3) * 5
console.log(total)

console.log('**operadores de comparaçao**')

let one = 1
let two = 2
console.log(one == two)
console.log(one == 1)

console.log(one != two)
console.log(one != 1)

console.log('Estritamente igual ou diferente')
// === Estritamente igual a
console.log( one === "1")
console.log( one === 1)

// !== Estritamente diferente de 
console.log( two !== "2")
console.log( two !==  2 )

console.log('**Operadores de atribuicao (assignment)**')
let x
x = 1

x += 3

x -= 1

x *= 2

x /= 3

x %= 2

x **= 4
console.log(x)

console.log('**Operadores Logicos**')

let pao = false
let queijo = false

// AND &&
//console.log(pao && queijo)

// OR ||
// console.log(pao || queijo)

// NOT !
// console.log(!pao)

console.log("**Condicao Ternário**");
// let cafe = true
// let leite = false

// const niceBreakfast = cafe || leite ? 'Cafe top' : 'Cafe ruim'

// console.log(niceBreakfast)

let idade = 16
const canDrive = idade >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

console.log("**String Operator**");

// comparison (comparação)
console.log( 'a' === 'a')

// concatenation (concatenação)
// Retorna a união de duas Strings
let alpha = 'alpha'
alpha += 'bet'
console.log( alpha + 345)

console.log("**Falsy e truthy**");

/*
    FALSY

    false
    0
    -0
    ""
    null
    undefined
    NaN

*/
console.log( 0 ? 'verdadeiro' : 'Falso')

/*
    Truthy

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/

console.log( -Infinity ? 'verdadeiro' : 'falso')

console.log("**Operator precedence**");

/*
// De cima para baixo, do mais importante ao menos importante.
* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
*/

console.log( 2 + 5 * 10)
console.log( 3 > 2 > 1)
console.log( 3 > 2 && 2 > 1)
