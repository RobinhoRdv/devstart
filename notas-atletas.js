const atletas = [
  {
    nome: 'Cesar Abascal',
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: 'Fernando Puntel',
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: 'Daiane Jelinsky',
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: 'Bruno Castro',
    notas: [10, 10, 10, 9, 9.5]
  }
]

for (let i = 0; i < atletas.length; i++) {
  const atleta = atletas[i]
  const notasSorted = atleta.notas.sort()
  const media = (notasSorted[1] + notasSorted[2] + notasSorted[3]) / 3

  console.log(
    `
    Atleta: ${atleta.nome}
    Notas Obtidas: ${atleta.notas.join(',')}
    Média Valida: ${media}
    `
  )
}