export class ImagemReal implements Imagem {
  private arquivo: string;

  constructor(arquivo: string) {
    this.arquivo = arquivo;
    this.carregarImagem();
  }

  private carregarImagem(): void {
    console.log(`Carregando imagem: ${this.arquivo}`);
  }

  exibir(): void {
    console.log(`Exibindo imagem: ${this.arquivo}`);
  }
}
