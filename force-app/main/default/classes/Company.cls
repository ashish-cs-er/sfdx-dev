public class Company {

    public String companyName;
    public String ceo;
    public Integer employeeCount;
    public Decimal revenue;
    
    //list of clients
    private List<Client> customers = new List<Client>();
    
    public Company(){
        System.debug('Default Constructor Called');
    }
    public void addNewCustomer(String clientName, String website, String email,Long phone){
        Client customer = new Client(clientName, website, email, phone);
        customers.add(customer);
    }
    
    public void getAllCustomers(){
        for(Client customer: customers){
            System.debug('Client values are: '+customer.clientName+' : '+customer.website);
        }
    }
    
    private class Client{
        private String clientName;
        private String website;
        private String email;
        private Long phone;
        
        public Client(String clientName, String website, String email,Long phone){
            this.clientName = clientName;
            this.website=website;
            this.email=email;
            this.phone=phone;
        }
    }
}