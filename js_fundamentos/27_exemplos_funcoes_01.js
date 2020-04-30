// Funcao sem retorno em JS
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)


// Funcao com retorno
function soma(a, b = 0){
  return a + b
}
console.log(soma(2,3)). // retornando o calculo passado por parâmetro
console.log(soma(2))    // retorna o 2 + 0, onde b já foi declarado anteriormente e não há solicitação por parâmetro