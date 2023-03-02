// Estrutura de repetição
// for
// break - para a execucao
// continue pula o resto do codigo e volta pra cima
for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log("fim");

// while
let i = 789132890378907;
while (i > 10) {
  console.log(i);

  i /= 35;
}
console.log("Fim");
// for...of
let name = "Gustavo";
let names = ["Joao", "Paulo", "Pedro"];

for (let char of name) {
  console.log(char);
}

for (let person of names) {
  console.log(person);
}

console.log("Fim");

// for...in

let person = {
  name: "John",
  age: 30,
  weight: 88.6,
};

for (let property in person) {
  console.log(property);
  console.log(person[property]);
}
