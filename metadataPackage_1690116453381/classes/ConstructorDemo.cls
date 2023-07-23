public class ConstructorDemo {

    {
        System.debug('Object Initialization block');
    }
    static {
        System.debug('Static Initialization Block: ');
    }
    
    
    public ConstructorDemo(){
        System.debug('no-arg Constructor called');
    }
    
    public ConstructorDemo(Integer a){
        System.debug('Const with Integer argument called: '+a);
    }
    
    public ConstructorDemo(String b){
        System.debug('String Constructor called: '+b);
    }
    
    public ConstructorDemo(Integer a, String b){
        this();
        System.debug('this is example of constructor chaining. This will call the cons with no args'); 
        System.debug('this() has to be the first line for const chaining');
    }
}