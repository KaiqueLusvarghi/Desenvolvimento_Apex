public with sharing class DesativarContasScheduler implements Schedulable {
   public void execute(SchedulableContext SC) {

    Database.executeBatch(new DesativarContasBatch(), 200); //Executando o batch e passando o tamanho do lote como 200

    //DesativarContasScheduler desativarContasSch = new DesativarContasScheduler();

//String sch = '0 0 2 * * ?'; // Todos os dias às 2h
//String jobID = System.schedule('DesativarContasScheduler', sch, desativarContasSch);
     
   }
}

