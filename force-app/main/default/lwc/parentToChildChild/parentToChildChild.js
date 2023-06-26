import { LightningElement, api, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
export default class ParentToChildChild extends LightningElement {
    @track accRecords;
    @track error;
    @wire (getAccounts) accountRecords({data, error}){
        if(data){
            this.accRecords = this.data;
            this.error = undefined;
        }
        else if(error){
            this.error = error;
            this.data = undefined;
        }
    }
}