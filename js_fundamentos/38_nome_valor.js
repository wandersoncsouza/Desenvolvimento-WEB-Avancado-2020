const saudacao = 'Opa'

function exec(){
    const saudacao = 'falaaa'
    return saudacao 
}

// Objetos são grupos aninhados de nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal', 
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)