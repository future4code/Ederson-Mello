// EXERCÍCIOS DE INTERPRETAÇÃO

/* Exercício 1
 a) Explique o que o código faz. Qual o teste que ele realiza? 
 Ele quer saber se o resto da divisão é igual a 0 

 b) Para que tipos de números ele imprime no console "Passou no teste"? 
 Todos os numeros pares digitados o resultado será igual a zero, assim
 a mensagem no console irá aparecer "Passou no teste".
 
 c) Para que tipos de números a mensagem é "Não passou no teste"? 
 Se digitar numeros impares sempre irá restar 1, então a mensagem do cosole
 será "Não passou no teste".
*/

/* Exercício 2
 a) Para que serve o código acima?
 Para saber o preço das frutas no supermercado

 b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
 "O preço da fruta Maça é R$ 2.25"

 c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console 
 se retirássemos o break que está logo acima do default 
 (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
 O preço da fruta  Pêra  é  R$  5
*/

/* Exercício 3
 a) O que a primeira linha está fazendo?
 Está indicando que será digitado um Number

 b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
 Se digitar 10: Esse número passou no teste. Se digitar -10: aparece um erro.

 c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
 Sim. Porque deveria ser usado if + else, para dar continuidade na sintaxe estabelicida no exercício.
*/

// EXERCÍCIO DE ESCRITA

/* Exercício 1
*/
// // A) e B)
const idadeUsuario = Number(prompt("Qual é a sua idade?"))

// // C)
if(idadeUsuario >= 18) {
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
}

/* Exercício 2
*/
const turno = prompt("Qual turno do dia você estuda? Digite (M) Para Matutino, (V) Para vespertino ou (N) Para noturno").toLowerCase().toUpperCase()

if(turno==="M") {
    console.log("Bom dia!")
}else if(turno==="V") {
    console.log("Boa tarde!")
}else if(turno==="N"){
    console.log("Boa noite!")
}

/* Exercício 3
*/

// const turno = prompt("Qual turno do dia você estuda? Digite (M) Para Matutino, (V) Para vespertino ou (N) Para noturno").toLowerCase().toUpperCase()

const verificandoTurno = () =>{
   switch (turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Esse turno não existe")
    }
}
verificandoTurno(turno)

/* Exercício 4
*/

const cinema = (filmeGenero, filmePreco) => {

    if(filmeGenero==="fantasia", filmePreco < 15){
        console.log("Bom filme!")
    }else{ 
        console.log("Escolha outro filme :(")
    }
}

const genero = prompt("Qual é o gênero do filme?").toLowerCase().toUpperCase()
const preco = prompt("Qual é o preço do filme?")

cinema(genero, preco)

// DESAFIOS

/* Exercício 1
*/

const cinema = (filmeGenero, filmePreco, lanchinho) => {

    if(filmeGenero==="fantasia", filmePreco < 15, lanchinho){
        console.log("Bom filme!")
        console.log("Aproveite seu", lanchinho)
        }else{
        console.log("Escolha outro filme :(")
    }
}

const genero = prompt("Qual é o gênero do filme?").toLowerCase().toUpperCase()
const preco = prompt("Qual é o preço do filme?")
const lanche = prompt("Qual lanchinho você vai escolher?")

cinema(genero, preco, lanche)



