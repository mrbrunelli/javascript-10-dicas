// Rest
// function showList(empresa, ...clientes) {
//     console.log(empresa)
//     console.log(clientes)
// }
// showList("Matheus", "João", "Maria", 50)

// Spread
// const numeros = [1, 2, 4, 29, 32, 2, 45, 3]
// console.log(Math.max(...numeros))

// const items = Array.from(document.querySelectorAll('li'))
// Tive que colocar ponto e virgula no queryselectorall, que estranho...
// const items = document.querySelectorAll('li');

// [...items].map(item => {
//     console.log(item)
// })
// console.log(items)

// Clonando e adicionando mais valores.
// const carro = { cor: 'Azul', portas: 4, ano: 2020 }
// const cloneCarro = { ...carro, turbo: true }

class Transporte {
    constructor() {
        this.terrestre = true
    }
    andar() {
        console.log("Andou")
    }
}

class Carro extends Transporte {
    constructor(cor, portas) {
        super()
        this.cor = cor
        this.portas = portas
    }
}

const carro = new Carro('vermelho', 4)

// O clone não trouxe os métodos da classe Transporte. 
// Porém será muito útil para pegar atributos das classes
const cloneCarro = { ...carro }

console.log(carro)
console.log(cloneCarro)