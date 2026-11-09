const prompt = require('prompt-sync')();

class Corrida {
    constructor(trajeto, formadepagamento, statusdacorrida, tipodeveiculo) {
        this.trajeto = trajeto; // propriedade
        this.formadepagamento = formadepagamento; // propriedade
        this.statusdacorrida = statusdacorrida; // propriedade
        this.tipodeveiculo = tipodeveiculo // propriedade
    }
}        
    const minhaCorrida = new Corrida("trajeto", "formadepagamento", "statusdacorrida", "tipodeveiculo" );   
console.log(`Corrida: ${minhaCorrida.trajeto}, Pagamento: ${minhaCorrida.formadepagamento}, Status: ${minhaCorrida.statusdacorrida}, TipoVeiculo: ${minhaCorrida.tipodeveiculo}`);

    //aceitarMotorista()



