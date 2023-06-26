public class RectangleWithConst {

    Decimal length;
    Decimal breadth;
    Decimal area;
    
    public RectangleWithConst(Decimal l, Decimal b){
        length=l;
        breadth=b;
    }
    
    public void area(){
        area = length*breadth;
        System.debug('The area of class is: '+area);
    }
    
}