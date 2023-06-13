import { Editor } from "./memento/Editor";
import { Carro } from "./prototype/Carro"
import { Cliente } from "./prototype/Cliente";
import { ImagemProxy } from "./proxy/ImagemProxy";
const instance = {
  pessoa: {
    nome: 'Maicon',
    idade: 15
  }
}
const maicon = new Editor(instance)

/* Memento */
//maicon.setContent({nome: 'Maicon', idade: 18})
//maicon.setContent({nome: 'Maicon', idade: 20})
//maicon.setContent({nome: 'Maicon', idade: 23})
//maicon.restore()
//maicon.getHistory()
//maicon.getState()

/* prototype */
// Criando um objeto original
//const carroOriginal = new Carro("Fiat", "Palio");

// Criando um cliente e clonando o objeto original
//const cliente = new Cliente(carroOriginal);
//cliente.mostrarInformacoes();

/* proxy */
//const imagemProxy = new ImagemProxy("foto.jpg");
//imagemProxy.exibir();