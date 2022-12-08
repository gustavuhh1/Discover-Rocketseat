# Introdução 

## O que significa CSS?

* Cascading Style Sheet
* Código para criar estilos no HTML
* HTML é a estrutura, e o CSS é a beleza
* Não é uma linguagem de programação;
* É uma linguagem style sheet

## Vamos ao exemplo

# Comentários 

* Não irá afetar no código
* Ajuda a lembrar blocos de códigos
* Deixa dicas para leitura
* Ajuda outros a entenderem 
* Nunca esqueça de fechar um comentário aberto

Cometários começam com '/*' e terminam com '*/'.

```css
/* Básico */
/* --------------------- */
body {
    font: 1em/150% Helvetica, Arial, sans-serif;
    margin: 0 auto;
}
``` 
* Você poderá usar para desabilitar partes do seu código

# Anatomia 
```css
h1 {
    color: blue;
    font-size: 60px;
    background: gray;
}
```
* Selector
* Declaration 
* Properties
* Proeperty Value

# Selectors

Conecta um elemento HTML com o CSS

## Tipos

* Global selector "*"
* Element/Type selector 'h1, h2, p, div'
* ID Selector '#box, #container'
* Class Selector '.red, .m-4'
* Attribute selector, Pseudo-class, Pseudo-element, e outros

# Box Model ( Caixas )

* Você irá perceber que (quase) tudo são caixas do CSS
* Posicionamentos, Tamanhos, espaçamentos, bordas, cores
* Caixa pode ficar ao lado uma da outra, ou acima
* Elementos HTML são caixa

# Hierarquia ( Cascata )

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selector, combinators e nagation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. Inline

# At-rules

* Está relacionado ao comportamento do CSS
* Começa com o sinal de '@' seguido do indetificador de valor

## Exemplos comuns

- @impport 'incluir um CSS externo'

- @media 'regras condicionais para dispositivos'

- @font-face 'fontes externas'

- @keyframes 'Animation'

# Shorthand

* junção de propriedades
* resumido
* legível

```css
{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand */
    background: #000 url(images/bg.gif) no-repeat left top;
}
```
## Detalhes

* não irá considerar propriedades anteriores
* valores não especificados irão assumir o valor padrão
* geralmente, a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes, poderemos encontrar problemas

## Propriedades que aceitam shorthand

muitas ae :)

# Funções

* nome seguido de abre e fecha parentesis
* recebe argumentos 

## Exemplos

```css
@import url("http://urlaqui.com/style.css")

{
    color: rgb(255,0,100);
    width: calc(100% - 10px)
}
```

# Vendor prefixes

Permite que browsers adicione 'features'
a fim de colocar em uso alguma novidade que vemos no CSS

## Exemplo

```css
p {
    -webkit-backcground-clip: text; /* Chrome, Safari, iOS & Android */
    -moz-background-clip: text;     /* Mozilla (Firefox) */
    -ms-background-clip: text;      /* Internet Explorer */
    -o-background-clip: text;       /* Opera */
}
```
### Consultas

.[http://ireade.github.io/which-vendor-prefix/].
.[http://caniuse.com].