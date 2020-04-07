
// Array
const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas a Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
]

// Filter
const precosFiltro = precos.filter(preco => preco.includes('R$'))

// Map
const precoNumeros = precosFiltro.map(preco => Number(preco.replace('R$ ', '')))

// Reduce
const total = precoNumeros.reduce((acc, item) => acc + item)

console.log(total)