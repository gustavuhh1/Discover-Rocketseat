// Control flow

// if...else

let temperature = 37.5


if(temperature >= 37.5)
{
    console.log('Febre alta')
} else if(temperature < 37.5 && temperature >=37){
    console.log('Febre moderada')
} else{
    console.log('Tranquilo')
}

// switch

let expression = 'b'

switch(expression){
    case 'a':
        // codigo
        console.log('a')
        break;
    case 'b':
        // codigo para expressao b
        console.log("b");
        break;
    default:
        console.log("default");
        break;
}

// throw

function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome Obrigatorio'
    }

    console.log(name)
}

// try...catch
try{
    sayMyName('Gustavo')
}catch(e){
    console.log(e)
}

console.log('apos ao try/catch')