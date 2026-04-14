import { LightningElement, api,track } from 'lwc';
import buscerCep from '@salesforce/apex/CadastroEnderecoContaController.buscerCep';
import salvarEndereco from '@salesforce/apex/CadastroEnderecoContaController.salvarEndereco';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CadastroEnderecoConta extends LightningElement {
endereco;
cep;
@api recordId;
@track botaoDesabilitado = true;
@track isLoading = false;
error;

    connectedCallback() {
    console.log(this.recordId);    
    }

    handleCepChange(event) {
        this.cep = event.detail.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        this.botaoDesabilitado = this.cep.length !== 8; // Habilita o botão apenas se o CEP tiver 8 dígitos
        
    }

    handleBuscarCep() {
        if (this.cep.length !== 8) return; // 👈 fix 1

        this.isLoading = true; // 👈 fix 2 - ativa o loading
    buscerCep({ cep: this.cep })
        .then((endereco) => {
            // Verifica se retornou algo válido 👇
            if (!endereco) {
                this.ShowToastEvent('Erro!', 'CEP inválido ou não encontrado.', 'error');
                return;
            }

            this.endereco = endereco;
            this.ShowToastEvent('Sucesso', 'Endereço encontrado com sucesso!', 'success');
        })
        .catch((error) => {
            this.ShowToastEvent('Erro!', 'Não foi possível encontrar o endereço para o CEP informado.', 'error');
        })
        .finally(() => {
            this.isLoading = false; // Esconde o spinner após a resposta
        });
}
    handleChangeEndereco(event) {
    const field = event.target.dataset.field;
    const value = event.detail.value;                        
    this.endereco = { ...this.endereco, [field]: value };    
}

    handleSalvarEndereco(){
        

        //verificando se os campos obrigatórios estão preenchidos
        const camposObrigatorios = ['logradouro', 'bairro', 'localidade', 'estado'];
        const camposVazio = camposObrigatorios.some(campo => !this.endereco[campo] );

        if (camposVazio) {
            this.ShowToastEvent('Erro!', 'Por favor, preencha todos os campos ! .', 'error');
            return;
        }
        this.isLoading = true; // Ativa o spinner

        salvarEndereco({ 
            contaId: this.recordId, 
            endereco: JSON.stringify(this.endereco) 
        }).then(() => {
            this.ShowToastEvent('Sucesso', 'CEP Salvo com Sucesso!', 'success');
             this.endereco = null;
            this.cep = '';
            this.botaoDesabilitado = true;
        }).catch((error) => {
            console.error('Erro completo:', JSON.stringify(error));
            this.ShowToastEvent('Error!', 'Erro ao Salvar o Endereço.',error.body.message,'error');
        })
        .finally(() => {
            this.isLoading = false; // Esconde o spinner após a resposta
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




   