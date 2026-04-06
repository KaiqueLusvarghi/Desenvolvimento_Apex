import { LightningElement, api } from 'lwc';
import buscerCep from '@salesforce/apex/CadastroEnderecoContaController.buscerCep';
import salvarEndereco from '@salesforce/apex/CadastroEnderecoContaController.salvarEndereco';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CadastroEnderecoConta extends LightningElement {
endereco;
cep;
@api recordId;

    connectedCallback() {
    console.log(this.recordId);    
    }

    handleCepChange(event) {
        this.cep = event.detail.value;
        
    }

    handleBuscarCep() {
        buscerCep({ cep:this.cep })
            .then((endereco) => {
                this.endereco = endereco;
                this.ShowToastEvent('Sucesso', 'Endereço encontrado com sucesso!', 'success');
            }).catch((error) => {
                this.ShowToastEvent('Error!', 'Não foi possível encontrar o endereço para o CEP informado.', 'error');
            });
            
    }
    handleChangeEndereco(event) {
    const field = event.target.dataset.field;
    const value = event.detail.value;                        
    this.endereco = { ...this.endereco, [field]: value };    
}

    handleSalvarEndereco(){
        salvarEndereco({ 
            contaId: this.recordId, 
            endereco: JSON.stringify(this.endereco) 
        }).then(() => {
            this.ShowToastEvent('Sucesso', 'CEP Salvo com Sucesso!', 'success');
        }).catch((error) => {
            this.ShowToastEvent('Error!', 'Erro ao Salvar o Endereço.',error.body.message,'error');
        });

    }

    ShowToastEvent(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: variant
            })
        );
    }
}




   