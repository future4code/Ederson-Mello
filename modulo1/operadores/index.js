// EXERCÍCIOS DE INTERPRETAÇÃO

/* Exercício 1
  Primeiro console.log: a. false
  Segundo console.log: b. false
  Terceiro console.log: c. true
  Quarto console.log: d. boolean
*/

/* Exercício 2
  O programa está reconhecendo como String e não como Number
  então ele não está calculado e o resultado está apenas adicionando como string
  Falta colocar Number
*/

/* Exercício 3
  let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log("Resultado:", soma)
*/

// EXERCÍCIO DE ESCRITA
 
/* Exercício 1
*/
const suaIdade = prompt("Qual é a sua idade?")
const idadeAmigo = prompt("Qual é a idade de seu melhor amigo?")

console.log("Sua idade é maior do que a do seu melhor amigo:", suaIdade > idadeAmigo)
console.log("A diferença de idade é de:", suaIdade % idadeAmigo, "anos.")

/* Exercício 2
*/
const numeroPar = prompt("Insira um número par:")
console.log(numeroPar % 2)
// c) todos os numeros pares colocados sempre retornarão por usar resto da divisão em 0
// d) todos os numeros impares colocados sempre retornarão por usar resto da divisão em 1

/* Exercício 3
*/
const suaIdade = prompt("Qual é a sua idade?")

console.log("Idade em meses:", suaIdade * 12)
console.log("Idade em dias:", suaIdade * 365)
console.log("Idade em horas:", suaIdade * 24)

/* Exercício 4
*/
const numeroPrimeiro = prompt("Digite o primeiro número:")
const numeroSegundo = prompt("Digite o segundo número:")

console.log("O primeiro numero é maior que segundo?", numeroPrimeiro > numeroSegundo)
console.log("O primeiro numero é igual ao segundo?", numeroPrimeiro === numeroSegundo)
console.log("O primeiro numero é divisível pelo segundo?", numeroPrimeiro % numeroSegundo !== 0)
console.log("O segundo numero é divisível pelo primeiro?", numeroSegundo % numeroPrimeiro !== 0)