// Função em JS First-Class Object (Citizens)
// Hight-order function

// Criar de forma literal
function fun1(){}

// Armazenar em uma variável
const fun2 = function () {}

// Armazenar em um array 
const array = [function(a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

// Passar a função como parâmetro
function run(fun){
    fun()
}
run(function(){ console.log('Executando...') })

// Função pode retornar/conter outra função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)