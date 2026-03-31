public with sharing class AccountTriggerHandler {
    public static void handleBeforeUpdate(List<Account> accs, Map<Id, Account> oldAccs) {
        AccountService.reativarContas(accs, oldAccs);


    }
}