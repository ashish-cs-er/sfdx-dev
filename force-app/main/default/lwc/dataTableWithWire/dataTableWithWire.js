import { LightningElement, api, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
export default class DataTableWithWire extends LightningElement {
    @track data;
    @track error;
    @track columns = [
        {label: 'Label' , fieldName: 'Name', type:'text'},
        {label: 'Phone' , fieldName: 'Phone', type:'phone'},
        {label: 'Industry' , fieldName: 'Industry', type:'text'}
    ];

    @wire (getAccounts) wiredAccounts({error, data}){
        if(data){
            this.data = data;
            this.error = undefined;
        }
        else if(error){
            this.error = error;
            this.data = undefined;
        }
    }
}