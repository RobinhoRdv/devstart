class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas
  }

  calculaCategoria() {

    if (this.idade >= 16) return 'Adulto'
    if (this.idade >= 14) return 'Intermediario'
    if (this.idade >= 12) return 'Juvenil'
    if (this.idade >= 9) return 'Infantil'

    return 'Sem Categoria'
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura)
  }

  calculaMediaValida() {
    const notasSorted = this.notas.sort()
    return (notasSorted[1] + notasSorted[2] + notasSorted[3]) / 3
  }

  obtemNomeAtleta() {
    return this.nome
  }

  obtemIdadeAtleta() {
    return this.idade
  }

  obtemPesoAtleta() {
    return this.peso
  }

  obtemNotasAtleta() {
    return this.notas.join(',')
  }

  obtemCategoria() {
    return this.calculaCategoria()
  }

  obtemIMC() {
    return this.calculaIMC()
  }

  obtemMediaValida() {
    return this.calculaMediaValida()
  }
}

// Declara o atleta
const atleta = new Atleta(
  'Cesar Abascal',
  30,
  80,
  1.7,
  [10, 9.34, 8.42, 10, 7.88]
)

console.log(
  `
  Nome: ${atleta.obtemNomeAtleta()}
  Idade: ${atleta.obtemIdadeAtleta()}
  Peso: ${atleta.obtemPesoAtleta()}
  Altura: ${atleta.altura}
  Notas: ${atleta.obtemNotasAtleta()}
  Categoria: ${atleta.obtemCategoria()}
  IMC: ${atleta.obtemIMC()}
  Média valida: ${atleta.obtemMediaValida()}
  `
)
