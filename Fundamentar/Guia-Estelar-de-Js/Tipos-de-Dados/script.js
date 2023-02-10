/*
    String

    ""// aspas duplas
    ''// aspas simples
    ``// templete literals ou template strings

*/

console.log("Strings");
let varia = 3;
console.log(`Gustavo ${1 + 1}`);
console.log(`Gustavo ${varia}`);

/* 
    Number

    33 // inteiros
    12.5 // reias - float
    NaN // not a number
    Infinity // infinito
*/
console.log(12 + 3);
console.log(12.5 + 12);
console.log(12.5 / "asdf");
console.log(12.5 === Infinity);
console.log(Infinity);

/*
    Boolean

    * Somente 2 valores

        true  // verdadeiro
        false // falso
*/
console.log("Boolean")
console.log(false == true)

/*
* undefined // Indefinido

* null
    * nulo
    * objeto que não possui nada dentro
    * difrente de indefinido

*/

console.log("null é igual a undefined ?")
console.log(null === undefined)

/*
* Object
    * Objeto
    * Propriedades / Atributos
    * Funcionalidades / Métodos

{ propiedade: "valor"}
*/

console.log("Objeto")
console.log({
    name: "Gustavo",
    idade: 36,
    andar: function(){
        console.log('andar')
    }
})

/*
* Array (Vetores)
    * Uma lista
    * Agrupamento de dados
    
    ["Gustavo", 36]
*/
console.log("Array")
console.log([
    "leite",
    "Ovos",
    2,
    3
])