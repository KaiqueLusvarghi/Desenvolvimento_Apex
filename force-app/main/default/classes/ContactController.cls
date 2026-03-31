public class ContactController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsByAccountId(String accountId){
                return [
                    SELECT Id, Name, Email, Phone, Title
                    FROM Contact
                    WHERE AccountId = :accountId];

    }
}