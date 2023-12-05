const user = {
    nome: "Jhony",
    email: "jhony@email.com",
    nascimento: "1998/05/25",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

// user.exibirInfos()
// const exibir = user.exibirInfos
// exibir();

const admin = {
    nome: "Eliana",
    email: "eli@email.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

