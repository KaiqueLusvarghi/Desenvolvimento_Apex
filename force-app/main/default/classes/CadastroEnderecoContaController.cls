public with sharing class CadastroEnderecoContaController {
   
    @AuraEnabled(cacheable=true)    
    public static ViaCepEndereco buscerCep(String cep) {
        return ViaCepService.buscarEnderecoPorCep(cep);
    }
}