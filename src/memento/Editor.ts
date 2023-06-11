import { History } from "./History";

export class Editor implements Memento {
  pessoa: Pessoa
  pessoas: Pessoa[] | []

  constructor(params: Memento) {
    this.pessoa = {
      nome: params.pessoa.nome,
      idade: params.pessoa.idade
    }
    this.pessoas = []
  }

  setContent(novaPessoa: Pessoa): void {
    this.save(this.pessoa)
    this.pessoa = novaPessoa
  }

  getState(): void {
    console.log(this.pessoa)
  }

  getHistory(): void {
    console.log(this.pessoas)
  }

  restore(): void {
    if (this.pessoas.length < 1) {
      console.log('Sem histórico para restaurar!')
      return
    }
    const response = new History().restore(this.pessoas)
    this.pessoa = response.newPessoa
    this.pessoas = response.newPessoas
  }

  private save(antigaPessoa: Pessoa): void {
    this.pessoas = new History().save(antigaPessoa, this.pessoas)
  }
}