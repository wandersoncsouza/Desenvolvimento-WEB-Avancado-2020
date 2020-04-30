const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)  // conta a quantidade de elementos do array

valores.push({id:3}, false, null, 'teste')  // adicionar novos elementos no array
console.log(valores)

console.log(valores.pop()) // retira ultimo elemento do array
console.log(valores)
// outra forma de remover um elemento do array é o delete
delete valores[0]
console.log(valores)

// imprimir o tipo do array
console.log(typeof valores)
