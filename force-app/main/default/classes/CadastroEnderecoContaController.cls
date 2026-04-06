public with sharing class CadastroEnderecoContaController {
   
    @AuraEnabled(cacheable=false)    
    public static ViaCepEndereco buscerCep(String cep) {
        return ViaCepService.buscarEnderecoPorCep(cep);
    }
    @AuraEnabled
    public static void salvarEndereco(Id contaId, String endereco){
        ViaCepEndereco objEndereco = (ViaCepEndereco)JSON.deserialize(endereco, ViaCepEndereco.class);
        Account conta = new Account();
        conta.Id = contaId;
        conta.BillingStreet = objEndereco.logradouro;
        conta.BillingCity = objEndereco.localidade;
        conta.BillingState = objEndereco.uf;
        conta.BillingPostalCode = objEndereco.cep;


        update conta;
       
    }
}