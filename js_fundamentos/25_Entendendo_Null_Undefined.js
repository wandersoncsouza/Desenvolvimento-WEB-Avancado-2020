const a = { name: 'Teste' }
a
const b = a     // b recebe o endereço de 'a'
b.name = 'Opa'  // b atribui ao objeto 'name' o conteúdo "Opa"
a

let valor       // Não inicializada
console.log(valor)

valor = null    // Variável declarada porém com ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined   // Atribuindo manualmente o 'undefined' para preço - evitar isso
console.log(!!produto.preco)    // transformando em boolean
console.log(produto)

produto.preco = null        // produto sem preço
console.log(!!produto.preco)
console.log(produto)