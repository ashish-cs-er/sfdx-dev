import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/AccountCreationController.createAccount';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import NavigationMixin from 'lightning/navigation';

export default class AccountCreationUsingAPex extends NavigationMixin(LightningElement) {
    @track accountRecord = {
        Name: ACCOUNT_NAME,
        Type: ACCOUNT_TYPE,
        Phone: ACCOUNT_PHONE
    }

    @track accountid;

    @track error;

    handleChange(event){
        if(event.target.name==='name'){
            this.accountRecord.Name = event.target.value;
        }
        else if(event.target.name==='type'){
            this.accountRecord.Type = event.target.value;
        }
        else if(event.target.name==='phone'){
            this.accountRecord.Phone = event.target.value;
        }
    }

    handleSaveAccount(){
        createAccount({accountRecordObj: this.accountRecord})
            .then(response => {
                this.accountRecord = {};
                this.accountid = response.id;
                const evnt = new ShowToastEvent({
                    title : 'Created',
                    message: 'Account',
                    variant: 'success'
                });
                this.dispatchEvent(evnt);
            })
            .catch( err => {
                this.error = error.message.body;
            });
    }
}