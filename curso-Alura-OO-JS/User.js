export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if(novoNome === '') {
            throw new Error('formato não válido')
        }

        this.#nome = novoNome
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}
        , ${this.ativo}`
    }
}

// para tornar privado os atributos da classe colocamos a #
// fora do constructor seguido do nome do atributo 
// e dentro

// const novoUser = new User('Thiago', 'thi@email.com', '2001/05/24')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// console.log(User.prototype.isPrototypeOf(novoUser))

// tecla de atalho para seleção de cada ocorrência para mudar: CTRL + D
