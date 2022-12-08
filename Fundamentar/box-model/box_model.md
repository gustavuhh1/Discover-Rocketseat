# Box Model

- Fundamental para fazer layouts para a web
- Maior facilidade para aplicar o CSS

## O que é?

Uma caixa retangular.
Essa caixa possui propriedade de uma caixa (2D)

- Tamanho (largura x altura)    width | height
- Conteúdo                      content
- Bordas                        border
- Preenchimento interno         padding
- Espaços fora da caixa         margin

*Cada elemento na sua página, será considerado uma caixa.*

## box-sizing

Como será calculado o tamanho total da caixa?

- content-box|border-box

```css
div {
    box-sizing: border-box;
}
```
# Display block vs inline

Como as caixas se comportam em relação as outras caixas
Comportamento externo das caixas

## Block 

* Ocupa toda a linha, colocando o próximo elemento abaixo desse
* width e height são respeitados
* padding, margin, border irão funcionar normalmente

## Display Inline

* Os elementos ficam ao lado do outro e não empurram outros elementos para baixo
* width e height não funcionam, somente valores horizontais de margin


