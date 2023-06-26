public class ContactTriggerHandler {
    //afterInsertHandler
   
    public static void beforeUpdateHandler(List<Contact> contactList){
        
    }
    
    public static void afterInsertHandler(List<Contact> contactList){
        Set<Id> accountIds = new Set<Id>();
        List<Account> accountsToUpdate = new List<Account>();
        for(Contact contactRecord: contactList){
            
            if(String.isNotBlank(contactRecord.AccountId)){
                 accountIds.add(contactRecord.AccountId);
                 System.debug('Value of Account ID is: '+contactRecord.AccountId);
            }
        }
         ContactToAccountService.updateAccountsWithActiveContacts(accountIds);
    }
    
    public static void afterUpdateHandler(List<Contact> contactList, Map<Id, Contact> contactsMap){
        Set<Id> accountIds = new Set<Id>();
        for(Contact contactRecord: contactList){
            if(String.isNotBlank(contactRecord.AccountId)
              			&& 
               	contactsMap.get(contactRecord.Id).Active__c != contactRecord.Active__c){
                	accountIds.add(contactRecord.AccountId);
                	System.debug('Value of Account ID is: '+contactRecord.AccountId);
            }
            
            if(contactsMap.get(contactRecord.Id).AccountId!= contactRecord.AccountId){
                if(String.isNotBlank(contactRecord.AccountId)){
                    accountIds.add(contactRecord.AccountId);
                }
                if(String.isNotBlank(contactsMap.get(contactRecord.Id).AccountId)){
                    accountIds.add(contactsMap.get(contactRecord.Id).AccountId);
                } 
             }
                
         }//first for loop ends here
       	 ContactToAccountService.updateAccountsWithActiveContacts(accountIds);
    }
    
    public static void afterUpdateHandlerForDesc(List<Contact> newContactsList, Map<Id, Contact> oldContactsMap){
        Set<Id> acctIds = new Set<Id>();
        for(Contact con: newContactsList){
            if(con.AccountId != null && oldContactsMap.get(con.Id).Description != con.Description){
                acctIds.add(con.AccountId);
            }
        }
        if(acctIds.size()>0){
            Map<Id, Account> accMap = new Map<Id, Account>([select Id, Description from Account where ID in :acctIds]);
            List<Account> accList = new List<Account>();
            for(Contact cont: newContactsList){
                Account acc = accMap.get(cont.AccountId);
                acc.Description = cont.Description;
                accList.add(acc);
            }
            if(accList.size()>0){
                update accList;
            }
        }
        
    }
    
    public static void afterUpdateHandlerNoOfContacts(List<Contact> newContactsList, Map<Id, Contact> oldContactsMap){
        Set<Id> acctIds = new Set<Id>();
        for(Contact con: newContactsList){
            if(String.isNotBlank(con.AccountId)){
                acctIds.add(con.AccountId);
            }
            if(String.isNotBlank(oldContactsMap.get(con.Id).AccountId)){
                acctIds.add(oldContactsMap.get(con.Id).AccountId);
            }            
        }
        if(acctIds.size()>0){
            List<Account> accToUpd = new List<Account>();
            List<Account> accountList = [SELECT ID, NAME, No_Of_Contacts__c,(SELECT ID, NAME FROM CONTACTS) FROM ACCOUNT WHERE ID in :acctIds];
            for(Account accountRec: accountList){
                accountRec.No_Of_Contacts__c = accountRec.contacts.size();
                accToUpd.add(accountRec);
            }
            update accToUpd;
        }
        
        
    }
}