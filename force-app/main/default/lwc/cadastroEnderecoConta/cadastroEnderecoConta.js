import { LightningElement } from 'lwc';
import buscerCep from '@salesforce/apex/CadastroEnderecoContaController.buscerCep';

export default class CadastroEnderecoConta extends LightningElement {

cep;

    handleCepChange(event) {
        this.cep = event.target.value;
        
    }

    handleBuscarCep() {
        buscerCep({ cep: this.cep })
            .then(endereco => {
                console.log(JSON.stringify(endereco));
            })
            .catch(error => {
                console.error('Erro ao buscar CEP: ' + error);
            });


    }
}




   