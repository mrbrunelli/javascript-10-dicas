const menu = {
    class: ".principal",
    ativar() {
        // Eu posso utilizar menu ou this.
        const menuElement = document.querySelector(this.class)
        console.log(menuElement)
    }
}

// Retorna a TAG nav do DOM
menu.ativar()