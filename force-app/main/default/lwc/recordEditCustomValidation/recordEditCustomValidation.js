import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class RecordEditCustomValidation extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    inputValue="";
    handleChange(event){
        this.inputValue = event.target.value;
    }
    handleSubmit(event){
        event.preventDefault();
        const inputCmp = this.querySelector('lightning-input');
        const value = inputCmp.value;
        if(!value.includes('Australia')){
            inputCmp.setCustomValidity("The account name must include Australia");
        }
        else{
            inputCmp.setCustomValidity("");
            const fields = event.detail.fields;
            fields.Name = this.inputValue;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
        inputCmp.reportValidity();
    }

    successHandler(event){
        console.log(event.detail.id);
        const toastEvnt = new ShowToastEvent({
            title:"Account Created",
            message: "Record Created: "+event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvnt);
    }

    handleError(event){
        const toastEvnt = new ShowToastEvent({
            title:"Error Created",
            message: "Record Created: "+event.detail.message,
            variant: "error"
        });
        this.dispatchEvent(toastEvnt);
    }
}