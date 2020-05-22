const imprimirResultado = function(nota) {
    if(nota >=7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // Ele validará como falso, pois uma string em comparação com um numero será falsa