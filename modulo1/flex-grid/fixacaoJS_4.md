function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  // Escreva seu código aqui
  let ocorrencias = 0
  for(let i = 0; i <= arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      ocorrencias++
    }
    console.log(ocorrencias)
  }
  console.log(`O número ${numeroEscolhido} aparece ${ocorrencias}x`)
}
let arryNumeros = [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5]
ocorrencias(arryNumeros, 4)