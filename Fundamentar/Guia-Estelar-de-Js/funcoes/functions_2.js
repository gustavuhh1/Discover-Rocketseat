console.log("Aula sobre functions 2");

// function expression
// function anonymous

// parâmetros ( parameters )
const sum = function (x, y) {
  let result = x + y;
  // console.log(result)
  return result;
};

let number1 = 15;
let number2 = 25;
sum(2, 1); // arguments -- argumentos

console.log(`o numero1 é ${number1}`);
console.log(`o numero2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);

console.log("****************Fim do Programa****************");

console.log("Aula sobre functions 3");

console.log("*Fuction Scope*");

let subject;
function createThinks() {
  subject = "study";
  return subject;
}

console.log(subject);
console.log(createThinks());
console.log(subject);

console.log("****************Fim do Programa****************");
console.log("Aula sobre functions hoisting");

sayMyName();

function sayMyName() {
  console.log("Gustavo");
}

console.log("****************Fim do Programa****************");

console.log("Aula sobre arrowfunction");

const sayMyPassword = () => {
    console.log("senha123")
}

sayMyPassword()

console.log("****************Fim do Programa****************");

console.log("Aula sobre callback function");

function sayMyDate(date){
    console.log('antes de executar a funcao callback')
    date()

    console.log('depois de executar a callback')
}

sayMyDate(
    () => {
        console.log('estou em uma callback')
    }
)
console.log("****************Fim do Programa****************");

console.log("Aula sobre function constructor");

/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name,height,isHot,isLoveOfMyLife){
    this.name = name
    this.height = height
    this.walk = function(){
        return 'esta andando'
    }
    this.isHot = isHot
    this.isLoveOfMyLife = isLoveOfMyLife

    
    
}


const person1 = new Person("Luna",1.60,true,true)
const person2 = new Person("Gustavo",1.88,true,true)
console.log(person1)
console.log(person2.walk())