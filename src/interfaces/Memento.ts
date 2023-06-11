interface Memento {
  pessoa: Pessoa
}

interface Pessoa {
  nome: string
  idade: number
}

interface ReturningRestore {
  newPessoa: Pessoa
  newPessoas: Pessoa[]
}