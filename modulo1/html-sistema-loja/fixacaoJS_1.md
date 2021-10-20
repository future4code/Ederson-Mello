### Exercicio JS

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
// Escreva seu código aqui
  let salarioFixo = 2000
  let comissão = qtdeCarrosVendidos * 100 + valorTotalVendas * 0.05
  return salarioFixo + comissão
}