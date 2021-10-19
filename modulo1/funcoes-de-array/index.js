// EXERCÍCIOS DE INTERPRETAÇÃO

/* Exercício 1 - Leia o código abaixo
 a) O que vai ser impresso no console?
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
*/

/* Exercício 2 - Leia o código abaixo
 a) O que vai ser impresso no console?
  ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']
*/

/* Exercício 3 - Leia o código abaixo
 a) O que vai ser impresso no console?
 {nome: 'Amanda Rangel', apelido: 'Mandi'}
 {nome: 'Laís Petra', apelido: 'Laura'}
*/

// EXERCÍCIO DE ESCRITA

/* Exercício 1
*/
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a)
 const novoArrayA = pets.map((item) => {
     return item.nome

})

 console.log(novoArrayA)

// b)
 const novoArrayB = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
 console.log(novoArrayB)

// c)
 const novoArrayC = pets.filter((item, index, array) => {
    if(item.raca === "Poodle"){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
    }
}) 

/* Exercício 2
*/

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a)
const itemA = produtos.map((item) => {
    return item.nome
})
console.log(itemA)

// b)
const itemB = produtos.map((item) => {
    return console.log(`nome: ${item.nome}, preço: ${item.preco * 0.95.toFixed(2)}`)

})
// c)
const itemC = produtos.filter((item) => {
    return item.nome 
})
 console.log(itemC.includes("Yêp"))

// d)
const itemD = produtos.filter((item, index, array) => {
    if(item.raca === includes("Ype")){
        console.log(`"Compre ${item.nome} por R$${item.preco}!`)
    }
}) 