public class SalesforceForLoop {

    public static void checkForLoop(){
        for(Integer i=0;i<5;i++){
            System.debug('Hello from i: '+i);
        }
    }
    
    public static void traverseList(){
        List<Account> accList = [select ID, Name from Account LIMIT 5];
        for(Account aList: accList){
            System.debug('Account Details are: '+aList.ID+' '+aList.Name);
        }
    }
}