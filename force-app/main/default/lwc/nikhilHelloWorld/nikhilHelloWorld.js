import { LightningElement, track } from 'lwc';
export default class NikhilHelloWorld extends LightningElement {
   
    age=30; //local property initialized to 30

    fullName = "Nikhil Krakra";

    
    @track address={
        city: 'Melbourne',
        country: 'Australia',
        postcode: '123456'
    };

    //lets create getter for this
    //we cannot directly array with index on our template
    //we need to define getter for this
    users = ["Ashish","Aman","Raj","Manoj"];

    //methods are reusable blocks of code used inside the class
    changeHandler(event){
        if(event.target.name==='fullName'){
            this.fullName = event.target.value;
        }
        else if(event.target.name==='city'){
            this.address.city = event.target.value;
        }
    }

    get firstUser(){
        return this.users[0];
    }
}