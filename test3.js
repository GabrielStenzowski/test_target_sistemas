// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

let jsonData = `{
  "faturamento": [67000, 36678, 29229, 27165, 19849, 0, 0, 34500, 39800, 0]
}`

let dados = JSON.parse(jsonData)

let faturamento = dados.faturamento
let totalFaturamento = 0
let diasComFaturamento = 0

let menorFaturamento = Math.min(...faturamento.filter((f) => f > 0))
let maiorFaturamento = Math.max(...faturamento.filter((f) => f > 0))

faturamento.forEach((valor) => {
  if (valor > 0) {
    totalFaturamento += valor
    diasComFaturamento++
  }
})

let mediaFaturamento = totalFaturamento / diasComFaturamento

let diasAcimaDaMedia = faturamento.filter((f) => f > mediaFaturamento).length

console.log(`Menor Faturamento: ${menorFaturamento}`)
console.log(`Maior Faturamento: ${maiorFaturamento}`)
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`)
