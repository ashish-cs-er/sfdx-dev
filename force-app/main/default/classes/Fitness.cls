public class Fitness {

    public static Decimal calculateBMI(Decimal weight, Decimal height){
        Decimal result = weight/(height*height);
        return result;
    }
    
    public static Decimal calculatePace(Decimal distance, Decimal min){
        Decimal hours = min/60;
        return distance/hours;
    }
}