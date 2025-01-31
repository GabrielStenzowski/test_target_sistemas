// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
const fs = require('fs')

// Ler o arquivo JSON
const rawData = fs.readFileSync('dados.json')
const faturamento = JSON.parse(rawData)

// Filtrar dias com faturamento maior que zero
const diasUteis = faturamento.filter((dia) => dia.valor > 0)

// Encontrar menor e maior faturamento
const menorFaturamento = Math.min(...diasUteis.map((dia) => dia.valor))
const maiorFaturamento = Math.max(...diasUteis.map((dia) => dia.valor))

// Calcular a média mensal (ignorando dias sem faturamento)
const somaFaturamento = diasUteis.reduce((acc, dia) => acc + dia.valor, 0)
const mediaMensal = somaFaturamento / diasUteis.length

// Contar os dias com faturamento acima da média
const diasAcimaDaMedia = diasUteis.filter(
  (dia) => dia.valor > mediaMensal
).length

// Exibir resultados
console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`)
console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`)
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`)
