// EXERCÍCIOS DE INTERPRETAÇÃO

/* Exercício 1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?
 O codigo está verificando no loop qual numéro está representando o valor de i, dado que esse número 
 deve ser mair que 5. O resultado do consele deu 10 (descobri pois rodei o codigo)
*/

/* Exercício 2 - Leia o código abaixo:
 a) O que vai ser impresso no console?
  19 | 21 | 23 | 25 | 27 | 30 //Resultado um abaixo do outro
  
 b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 
 é suficiente? Se sim, o que poderia ser usado para fazer isso?
    O for...of... é suficiente sim, para acessar cada elemento só basta apagar > 18.
*/

/* Exercício 3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
 *
 **
 ***
 ****
*/

// EXERCÍCIO DE ESCRITA

/* Exercício 1
*/
const bichosEstimacaoUsuario = Number(prompt("Quantos bichos de estimação você tem?"))
// // a) 
if(bichosEstimacaoUsuario === 0){
    console.log("Que pena! Você pode adotar um pet!")
     
}
// b)
const quaisBichosEstimacao = []
for (i = 0; i < bichosEstimacaoUsuario; i++) {
    quaisBichosEstimacao.push(prompt("Quais são eles?"))
}
// c)
console.log(quaisBichosEstimacao)

/* Exercício 2
*/
// a)
let array_original = [3, 5, 8, 10, 23, 48, 51, 63, 72]
let i = 0
while(i < array_original.length){
    array_original = array_original
    i = i+0
}
console.log(array_original[i]+0)

// b)
let array_original = [3, 5, 8, 10, 23, 48, 51, 63, 72]
let i = 0
while (i < array_original.length){
    console.log(array_original[i]/10)
    i = i+1
}

// c)
let array_original = [3, 5, 8, 10, 23, 48, 51, 63, 72]
let i = 0
let novo_array = []
while (i < array_original.length){
    if(array_original[i] % 2 === 0){
        let par = array_original[i]
        novo_array.push(par)
    }
 i++
}
console.log(novo_array)

// d)
let array_original = [3, 5, 8, 10, 23, 48, 51, 63, 72]
let i = 0
let novo_array = []
while (i < array_original.length){
    if(array_original[i]){
        novo_array.push(`O elemento do indice ${i} é ${array_original[i]}`)
    }
 i++
}
console.log(novo_array)

// e)
let array_original = [3, 5, 8, 10, 23, 48, 51, 63, 72]
let valorMaximo = [72]
let valorMinimo = [3]
let i = 0
let novo_array = []
while (i < array_original.length){
    if(array_original){
        novo_array = (`O mairo número é ${valorMaximo} e o menor número é ${valorMinimo}`)
    }
 i++
}
console.log(novo_array)



