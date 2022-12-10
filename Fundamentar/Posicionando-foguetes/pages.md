# Page layouts

- Tables
- Floats e clear
- Frameworks e Grid Systems
- Flexbox
- Grid

## Posicionamentos

Controlar onde, na página, o elemento irá ficar, alterando
o fluxo normal dos elementos

- Name: position
- Value: static|relative|absolute|fixed

## Relavtive

- top, right, bottom, left. z-index

## absolute 

Possui sua própia camada na pagina ignorando os outros
elementos existentes

## Fixed 

Fica fixo em sua posição ignorando a rolagem da pagina


# Flexbox

* Nos permite posicionar os elementos dentro da caixa.
* Controle em uma dimensão (Horizontal ou Vertical)
* Alinhamento, direcionamento, ordernar e tamanhos

```css
div.parent {
    display: flex
}
```
## flex-direction

* qual a direção do flex: horizontal ou vertical
* row | column

## alinhamento

* justify-content
* align-items

# Grid

* Posicionamento dos elementos dentro da caixa
* Posicionamento horizontal e vertical ao mesmo tempo
* Pode ser flexível ou fixo
* cria espaços para os elementos filhos habitarem