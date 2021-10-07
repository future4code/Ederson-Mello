// EXERCÍCIOS DE INTERPRETAÇÃO

/* Exercício 1
  Primeiro console.log: a. undefined
  Segundo console.log: b. null
  Terceiro console.log: c. 11
  Quarto console.log: d. 3
  Quinto console.log: e. Array(11)
  Sexto console.log: f. 9
*/

/* Exercício 2
  console.log: SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

// EXERCÍCIO DE ESCRITA
 
/* Exercício 1
*/
const nomeDoUsuario = prompt("Qual é o seu nome?")
const emailDoUsuario = prompt("Qual é o seu e-mail?")
const frase = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`

console.log(frase)

// /* Exercício 2
// */
const comidasPreferidas = ["Bife", "Strogonoffe", "Burger", "Pizza", "Lasanha"]
console.log(comidasPreferidas)
console.log("Essas são minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const comidaPreferidaUsuario = prompt("Qual é a sua comida preferida?")
comidasPreferidas.splice(1, 1)
console.log(comidasPreferidas)
comidasPreferidas.push(comidaPreferidaUsuario)
console.log(comidasPreferidas)

/* Exercício 3
*/
const listaDeTarefas = []
const tarefaUm = prompt("Liste sua 1° tarefa:")
const tarefaDois = prompt("Liste sua 2° tarefa:")
const tarefaTres = prompt("Liste sua 3° tarefa:")
listaDeTarefas.push(tarefaUm, tarefaDois, tarefaTres)

console.log(listaDeTarefas)

const tarefasConcluidas = prompt("Digite qual tarefa já concluiu: 1, 2 ou 3")
console.log("Numero escolhido:", tarefasConcluidas)

const tarefaConcluida = listaDeTarefas.splice(1,1)
console.log(tarefaConcluida)

