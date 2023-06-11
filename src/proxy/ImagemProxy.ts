import { ImagemReal } from "./ImagemReal";

export class ImagemProxy implements Imagem {
  private imagemReal: ImagemReal | null;
  private arquivo: string;

  constructor(arquivo: string) {
    this.arquivo = arquivo;
    this.imagemReal = null;
  }

  exibir(): void {
    this.imagemReal === null && (this.imagemReal = new ImagemReal(this.arquivo));
    this.imagemReal.exibir();
  }
}