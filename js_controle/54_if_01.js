function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerddeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerddeEuFalo()
seForVerddeEuFalo(null)
seForVerddeEuFalo(undefined)
seForVerddeEuFalo('')
seForVerddeEuFalo(0)
seForVerddeEuFalo(-1)
seForVerddeEuFalo(' ')
seForVerddeEuFalo('?')
seForVerddeEuFalo([])
seForVerddeEuFalo([1, 2])
seForVerddeEuFalo({})