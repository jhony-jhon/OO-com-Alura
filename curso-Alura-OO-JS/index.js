import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User('Mike', 'mike@email.com', '2007/04/14')
// console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Renan', 'ren@email.com', '2005/04/03')
console.log(novoAdmin.nome)
novoAdmin.nome = ''
console.log(novoAdmin.nome)


