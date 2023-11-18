const gabrielKendi = {
    nome: "Gabriel",
    sobrenome: "Kendi",
    idade: 18,
    endereco: {
        rua: "Casa do caralho",
        numero: 666,
        complemento: "Do lado da venezuela"
    }
}

let {nome, sobrenome, idade, endereco:{rua}} = gabrielKendi;
