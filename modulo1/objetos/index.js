// EXERCÍCIOS DE INTERPRETAÇÃO

/* Exercício 1
a) O que vai ser impresso no console?
  Primeiro console.log: Matheus Nachtergaele
  Segundo console.log: Virginia Cavendish
  Terceiro console.log: canal: Globo, horario: 14h
*/

/* Exercício 2
a) O que vai ser impresso no console?
  Primeiro console.log: Juca
  Segundo console.log: Juba
  Terceiro console.log: Jubo

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
Ela copia os dados do objeto interior, assim podendo manipular ela, mudando
ou adicionando propriedades.
*/

/* Exercício 3
a) O que vai ser impresso no console?
  Primeiro console.log: false
  Segundo console.log: undefined
  

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
A resposta do segundo cosole deu undefined porque falta a informação da alutura 
para que o condigo funcione.
*/

// EXERCÍCIO DE ESCRITA
 
/* Exercício 1
*/
// A)
const pessoa = {
    nome: "Ederson", 
    apelidos: ["Gordo", "Edi", "Edinho"],
    mensagem: () => {
        return `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
    } 
}
console.log(pessoa.mensagem())

// B)
const outrosApelidos = {
    ...pessoa,
    apelidos: ["Dinho", "Gordinho", "Edinho"],
    mensagem: () => {
        return `Eu sou ${outrosApelidos.nome}, mas pode me chamar de: ${outrosApelidos.apelidos[0]}, ${outrosApelidos.apelidos[1]} ou ${outrosApelidos.apelidos[2]}`
    } 

}
console.log(outrosApelidos.mensagem())


// /* Exercício 2
// */
// A)
const primeiroIndividuo = {

    nome: "Ederson", 
    idade: 27,
    profissao: "Cozinheiro"
}

const SegundoIndividuo = {

    nome: "Paulo", 
    idade: 40,
    profissao: "Agronomo"
}

// b)
function minhaFuncaoUm(primeiroIndividuo) {
    const resultadoUm = ["Ederson", primeiroIndividuo.nome.length, primeiroIndividuo.idade, "Cozinheiro", primeiroIndividuo.profissao.length]
    return resultadoUm
}
console.log(minhaFuncaoUm(primeiroIndividuo))

function minhaFuncaoDois(SegundoIndividuo) {
    const resultadoDois = ["Paulo", SegundoIndividuo.nome.length, SegundoIndividuo.idade, "Agronomo", SegundoIndividuo.profissao.length]
    return resultadoDois
}
console.log(minhaFuncaoDois(SegundoIndividuo))

/* Exercício 3
*/
// A)
const carinho = []

// B)
const frutaUm = {
    nomeFrunta: "Laranja",
    valor: true,
}

const frutaDois = {
    nomeFrunta: "Abacate",
    valor: true,
}

const frutaTres = {
    nomeFrunta: "Morango",
    valor: true,
}

// C)
function adicionado_no_carinho(frutas) {
    carinho.push(frutas)
}

// D)
adicionado_no_carinho(frutaUm)
adicionado_no_carinho(frutaDois)
adicionado_no_carinho(frutaTres)


console.log(carinho)