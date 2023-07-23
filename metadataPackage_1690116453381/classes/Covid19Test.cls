@isTest
public class Covid19Test {

    @isTest
    public static void treatPatientTest(){
        Covid19 jaipur = new Covid19(10);
        //check if the count is 10 or not
        System.assertEquals(10, jaipur.getTreated(), 'Its does not matches');
        
        Covid19 hyd = new Covid19(20);
        System.assertEquals(20, hyd.getTreated(), 'Its does not matches');
        //check for recovered in country field
        System.assertEquals(30,Covid19.recoveredInCountry , 'Something went wrong. Values out of sync');
    }
    
    
}