export class History {
  save(pessoa: Pessoa, pessoas: Pessoa[]): Pessoa[] {
    pessoas.push(pessoa)
    return pessoas
  }

  restore(pessoas: Pessoa[]): ReturningRestore {
    const newPessoa: Pessoa = pessoas.pop() || {nome: '', idade: 0}
    const newPessoas = pessoas
    const params = {
      newPessoa: newPessoa,
      newPessoas
    }
    return params
  }
}