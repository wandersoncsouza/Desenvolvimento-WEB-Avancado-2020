{{{{ var sera = 'Será?' }}}}
console.log(sera)               // a variável "var", será visível em qualquer nível desde que não seja uma function.

function teste(){
    var local = 123
    console.log(local)          // Visível à este escopo
}

teste()
console.log(local)              // A varriável local não estará visível a este escopo