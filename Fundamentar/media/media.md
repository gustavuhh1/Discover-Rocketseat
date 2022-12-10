# Trabalhando com Media

Como importar videos, audios e imagens para o 
html

## Tags

existe tag que não funcionam em todos os navegadores, como a tag <'video> isso é solucionado com:

### if condicional

```html
<audio src="./src/audio.mp3" 
    controls
    >
        <source src="./src/audio.mp3" type="audio/mp3">
        <source src="./src/audio.mp3" type="audio/ogg">
        <p>Seu navegador não suporta audio</p>
    </audio>
```

## SVG

SVG é a abreviatura de Scalable Vector Graphics que pode ser traduzido do inglês como gráficos vetoriais escalonáveis. Trata-se de uma linguagem XML para descrever de forma vetorial desenhos e gráficos bidimensionais, quer de forma estática, quer dinâmica ou animada.