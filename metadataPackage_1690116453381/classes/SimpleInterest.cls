public class SimpleInterest {
    
    public static void calculate(Decimal principal, Decimal rate, Decimal t){
        Decimal SI = principal*rate*t/100;
        System.debug('Hello: '+SI);
    }
    
}