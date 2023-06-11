export class Cliente {
  veiculo: VeiculoPrototype;

  constructor(veiculo: VeiculoPrototype) {
    this.veiculo = veiculo;
  }

  mostrarInformacoes(): void {
    const cloneVeiculo = this.veiculo.clone();
    cloneVeiculo.exibirInformacoes();
  }
}