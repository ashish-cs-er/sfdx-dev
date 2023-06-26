public class ContactToAccountService {

    public static void updateAccountsWithActiveContacts(Set<Id> accountIds){
        Map<Id, Account> accountsToUpdate = new Map<Id, Account>();
        List<Account> withActiveZero = new List<Account>();
        if(accountIds.size()>0){
             List<AggregateResult> results = [
                     select AccountID, COUNT(ID) totalContacts 
                     from Contact 
                     Where active__c=true 
                     And AccountId IN :accountIds
                     group by AccountID
                 ];
            for(AggregateResult result: results){
                String accountId = String.valueOf(result.get('AccountID'));
                Integer totalContacts = Integer.valueOf(result.get('totalContacts'));
                System.debug('Total Contacts are: '+totalContacts);
                Account act = new Account(ID=accountId, Active_Contacts__c=totalContacts);
                accountsToUpdate.put(accountId, act) ;
            }
            
            for(Id actIds: accountIds){
                if(!accountsToUpdate.containsKey(actIds)){
                   Account acct = new Account(Id=actIds, Active_Contacts__c=0);
                   accountsToUpdate.put(actIds, acct);
                }
            }
        }
        update accountsToUpdate.values();
    }
}