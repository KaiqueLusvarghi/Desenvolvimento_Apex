public class DesativarContasBatch implements Database.Batchable<SObject>{
    public Database.QueryLocator start(Database.BatchableContext bc){
        
        Date oneHourAgo = System.today().addDays(-1); //Pegando data e hora atual e no addDays eu pego 1 dia anterior

        return Database.getQueryLocator([
            SELECT Id, Ativo__c
            FROM Account
            WHERE LastModifiedDate <= :oneHourAgo //Pegando contas que foram modificadas a mais de 1 dia atrás
        ]);
    }

    public void execute(Database.BatchableContext bc, List<Account> records){
        for(Account acc : records){
            acc.Ativo__c = false; //Desativando as contas
        }
        update records; //Atualizando as contas

    }

    public void finish(Database.BatchableContext bc){
        System.debug('Batch finalizado');
    }   
}