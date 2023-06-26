public class AccountTriggerHandler {

    public static void afterUpdateContactHandler(List<Account> actList, Map<Id, Account> accountMap){
        Set<Id> accountIds = new Set<Id>();
        Set<Id> contacts = new Set<Id>();
        for(Account accountRecord: actList){
            if(accountRecord.BillingStreet != accountMap.get(accountRecord.Id).BillingStreet){
                contacts.add(accountRecord.Id);
                accountIds.add(accountRecord.Id);
            }
        }
        if(accountIds.size()>0){
            List<Account> accountWithContacts = [
                Select ID, Name, BillingStreet, (Select ID, Name from Contacts) FROM ACCOUNT Where ID in :accountIds
            ];
            List<Contact> contactList = new List<Contact>();
            for(Account acc: accountWithContacts){
                List<Contact> contactOfAccounts = acc.contacts;
                for(Contact contactToUpdate: contactOfAccounts){
                    contactToUpdate.MailingStreet = acc.BillingStreet;
                    contactList.add(contactToUpdate);
                }
            }
            if(contactList.size()>0){
                update contactList;
            }
        }
    }
}