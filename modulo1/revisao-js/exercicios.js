// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array[array.length()]
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let mairoNumero = 0

    for(let i = 0; i < array.length; i++) {
        if(array[i] > mairoNumero) {
            numeroMaior = array[i]
        }
    }
    return mairoNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let quantidade = n
    let nPrimeiros = 0
    let array = []
    for (i = 0; i < quantidade; i++) {
        array.push(nPrimeiros)
        nPrimeiros = nPrimeiros + 2
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayOrdenado = array.sort((a, b) => a - b);

    let segundoMaior = arrayOrdenado[arrayOrdenado.length - 2]
    let segundoMenor = arrayOrdenado[1]

    let arrayResultado = [segundoMaior, segundoMenor]

    return arrayResultado
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}