fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
    .then(response => response.json())
    .then(jsonBody => {
        document.querySelector('#app').innerHTML = jsonBody[0].nome
        console.log(jsonBody)
    })

const data = {
    id: 'mrbrunelli',
    nome: 'Matheus',
    email: 'matheus.brunelli@gazin.com.br',
    senha: 'teste',
    cep: '87485000',
    rua: 'Rua Maria Paulone',
    numero: '175',
    bairro: 'Jardim Valentim',
    cidade: 'Douradina',
    estado: 'Paraná'
}

fetch('https://ranekapi.origamid.dev/wp-json/api/usuario', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
