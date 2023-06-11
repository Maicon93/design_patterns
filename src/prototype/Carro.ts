export class Carro implements VeiculoPrototype {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  clone(): VeiculoPrototype {
    console.log("Clonando o carro...");
    return new Carro(this.marca, this.modelo);
  }

  exibirInformacoes(): void {
    console.log(`Carro: ${this.marca} ${this.modelo}`);
  }
}