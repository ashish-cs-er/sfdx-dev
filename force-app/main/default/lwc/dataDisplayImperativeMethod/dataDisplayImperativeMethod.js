import { LightningElement, track, wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/AccountController.getAccountRecords';
export default class DataDisplayImperativeMethod extends LightningElement {
    @track accountRecords;
    @track errors;
    @track columns = [
        {label: 'Name', fieldName: 'Name' , type: 'text'},
        {label: 'Industry', fieldName: 'Industry' , type: 'text'},
    ];
    connectedCallback(){
        getAccountRecords()
            .then( response => {
                this.accountRecords = response;
            })
            .catch( error => {
                this.error = error;
            });
    }
}