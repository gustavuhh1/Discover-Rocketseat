# Trabalhando com fontes

Tipografia transmite mensagem

- negrito
- tamanho
- estilo

---

## Basic Font Properties

- font-family
- font-weight
- font-style
- font-size

----

## Font Family

* Tipo de fontede um elemento
* Lista de fontes e ordem de prioridade
* inclui *fallback* font

```css
p {
    font-family: "Times new roman", Times, serif
}
```

    -serif
    -sans

----

## Font Weight

* Peso da fonte

```css
span{
    font-style:bolder;
}
```

## Font Style

* estilo da fonte

```css
p{
    font-style: italic;
}
```

## Font Size

* O tamanho da fonte

```css
p {
    font-size: 18px
}
```

-----

## Web Fonts 

- fontes do  sistema x fontes da web
- como usar fontes para web?

    * @font-face
    * #import
    * link


# Mais formas de deixa bonito

* font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family

## Shorthand

```css
p {
  font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```
