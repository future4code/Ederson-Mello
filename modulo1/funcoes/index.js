// EXERCÍCIOS DE INTERPRETAÇÃO

/* Exercício 1
 a) O que vai ser impresso no console?
 
 console.log: 10
 console.log: 50

 b) b) O que aconteceria se retirasse os dois `console.log` 
 e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
 
 Ficaria tudo em branco, pois o console.log serve para a visualização do resultado da função.
*/

/* Exercício 2
 a. Explique o que essa função faz e qual é sua utilidade:

 A utilidade desta função é retornar true ou false. Pois ele determina se um
 conjunto de caracteres poderá ser encontrado dentro de outra string.

 b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
      i.   Eu gosto de cenoura: true
     ii.  CENOURA é bom pra vista: true
     iii. Cenouras crescem na terra: true

*/

// EXERCÍCIO DE ESCRITA

/* Exercício 1
*/
// a)
function imprimirSemParametro() {
    console.log("Eu sou Ederson, tenho 27 anos, moro em Itaqui e sou estudante.")
}

imprimirSemParametro()

// b)
function quatroParamentros(nome, idade, endereco, profissao) {
    console.log("Eu sou", nome, "tenho", idade, "anos, moro em", endereco, "e sou", profissao)
}
quatroParamentros("Jessica,", 30, "Rua 20 de Setembro 1789", "cozinheira.")

/* Exercício 2
*/
// a)
function somar(priemiroNumero, segundoNumero) {
    const soma = priemiroNumero + segundoNumero
    return soma
}

const resultado = somar(5, 8)
// console.log(resultado)

// b)
function valorNumero(numeroA, numeroB) {
    const resultadoOperacao = numeroA >= numeroB
    return resultadoOperacao
}

const boleano = valorNumero(5, 4)
console.log(boleano)

// c)
function valor(numero) {
    const resultado = numero % 2 === 0
    return resultado
}

const eBoleano = valor(3)
console.log(eBoleano)


// d)
function umParamentros(mensagem) {
   console.log(mensagem)
    }

umParamentros("Seja bem-vindo a cidade de Itaqui!".length)
umParamentros("Seja bem-vindo a cidade de Itaqui!".toUpperCase())


/* Exercício 3
*/
const numeroUm = Number(prompt("Digite o primeiro número:"))
const numeroDois = Number(prompt("Digite o segundo número:"))
function somar (numeroUm, numeroDois) {
    const soma = numeroUm + numeroDois
    return soma
}
function subtrair (numeroUm, numeroDois) {
    const subtracao = numeroUm - numeroDois
    return subtracao
}
function multiplicar (numeroUm, numeroDois) {
    const multiplicacao = numeroUm * numeroDois
    return multiplicacao
}
function dividir (numeroUm, numeroDois) {
    const divisao = numeroUm / numeroDois
    return divisao
}
console.log("Números inseridos:", numeroUm, "e", numeroDois)
console.log("Soma:", somar(numeroUm, numeroDois))
console.log("Diferença:", subtrair(numeroUm, numeroDois))
console.log("Multiplicação:", multiplicar(numeroUm, numeroDois))
console.log("Divisão:", dividir(numeroUm, numeroDois))
