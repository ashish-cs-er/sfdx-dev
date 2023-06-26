public with sharing class AccountCreationController {
    public AccountCreationController() {

    }

    @AuraEnabled
    public static Account createAccount(Account accountRecordObj){
        try {
            insert accountRecordObj;
            return accountRecordObj;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}