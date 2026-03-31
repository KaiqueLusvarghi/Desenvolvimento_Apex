public with sharing class AccountService {
    public static void reativarContas(List<Account> accs, Map<Id, Account> oldAccs){
        for(Account conta: accs){
            Account contaOld = oldAccs.get(conta.Id);
            if(conta.Ativo__c == false && contaOld.Ativo__c == false){
                conta.Ativo__c = true; //Reativando a conta     
                
            }

        }

    }
}