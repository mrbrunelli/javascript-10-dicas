// Maneira super verbosa. Vou precisar ficar repetindo event sempre que quiser acessar algum elemento novo.
// function handleMouseMove(event) {
//     const clientX = event.clientX
//     const clientY = event.clientY
//     console.log(clientX, clientY)
// }

// Desestruturação
// function handleMouseMove(event) {
//     const { clientX, clientY } = event
// Se eu quiser eu posso renomear.
//     const { clientX: x, clientY: y }
//     console.log(clientX, clientY)
// }

// Melhorando a desestruturação
function handleMouseMove({ clientX, clientY }) {
    console.log(clientX, clientY)
}

// Outro exemplo sem desestruturação
// const frutas = ["Banana", "Uva"]
// const fruta1 = frutas[0]
// console.log(fruta1)

// Desestruturação em array
const frutas = ["Banana", "Uva"]
const [fruta1, fruta2] = frutas
console.log(fruta1, fruta2)


document.documentElement.addEventListener('mousemove', handleMouseMove)