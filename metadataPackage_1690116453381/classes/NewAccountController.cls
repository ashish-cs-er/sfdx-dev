public class NewAccountController {

    public static Account insertAccount(Account act){
        insert act;
        return act;
    }
    
    public static List<Account> insertAccounts(List<Account> actList){
        insert actList;
        return actList;
    }
    
    public static List<Account> getAllAccounts(){
        return [SELECT ID, NAME FROM ACCOUNT];
    }
    
    public static void printAccounts(){
        List<Account> lst = getAllAccounts();
        for(Account act: lst){
            System.debug('Account Name is: '+act.Name);
        }
    }
    
    public static Integer getAccountSize(){
        List<Account> acts = getAllAccounts();
        return acts.size();
    }
}