// Método convencional para criar funções
// function upperName(name) {
//     return name.toUpperCase()
// }

// Segunda forma, passar uma função em uma variável
// const upperName = function (name) {
//     return name.toUpperCase()
// }

// Método indicado, Arrow Function. Não preciso passar o parâmetro dentro de parrênteses.
// A não ser que eu tenha mais de um argumento para passar.
// const upperName = name => {
//     return name.toUpperCase()
// }

// Arrow Function menos verboso. Quando o corpo só tem uma linha eu posso passar na mesma linha.
// const upperName = name => name.toUpperCase()

// // Outro exemplo. Função para contar caracteres, passando tudo na mesma linha.
// const countLetters = word => word.length
// console.log(countLetters('Matheus'))

class Menu {
    constructor(menu) {
        this.menuElement = document.querySelector(menu)
        this.activeClass = 'active'
    }
    addActiveEvent() {
        this.menuElement.addEventListener('click', (event) => {
            event.target.classList.add('active')
        })
    }
}

const menu = new Menu('.principal')
menu.addActiveEvent()
console.log(menu)