// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa      // extrair nome e idade do objeto pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // atribuição de nome para n e idade para I do objeto pessoa
console.log(n, i)

const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)