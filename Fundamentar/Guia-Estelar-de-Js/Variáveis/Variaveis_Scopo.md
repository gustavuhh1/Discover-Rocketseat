# Variáveis

- Nomes simbólicos para receber algum valora
- Atalhos de códigos
- Indentificadores
- 3 palavras reservadas para criar uma varável

  - var
  - let
  - const

- Js é uma linguagem dinâmica e fracamente tipada

## Para criar nomes

- JS é case-sensitive (sensível ao caso)
- JS aceita a cadeia de caracteres Unicode

* Posso:

  - Iniciar com esses caracteres especiais: $ \_
  - Iniciar com letras
  - Colocar acentos
  - Letras maísculas e minúsculas fazem diferença

* Não posso:

  - Iniciar com números
  - Colocar espaços vazios no nome

* Ideal:
  - Criar nomes que fazem sentido
  - Que explique o que a variável é ou faz
  - camelCase
  - snake_case
  - Escrever em inglês

# Scope

- Escopo determina a visibilidade de alguma variável no JS

# Block statement

```js
// vamos iniciar um bloco
{
  // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## var

```js
// var é global e poderá funcionar fora de um escopo de bloco
console.log("> existe x antes do bloco ?", x);

{
  var x = 10;
}

console.lgo("> existe x depois do bloco? ", x);
```

## let e const
