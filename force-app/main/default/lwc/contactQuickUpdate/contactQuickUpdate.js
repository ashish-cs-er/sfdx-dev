import { LightningElement, api } from 'lwc';
import Contact_Phone from '@salesforce/schema/Contact.Phone';
import Contact_Email from '@salesforce/schema/Contact.Email';
import Contact_LastName from '@salesforce/schema/Contact.LastName';
import Contact_FirstName from '@salesforce/schema/Contact.FirstName';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ContactQuickUpdate extends LightningElement {
    @api recordId;
    @api objectApiName;
    fieldList = [Contact_FirstName, Contact_LastName, Contact_Email,Contact_Phone ];

    handleContactUpdate(event){
        const evt = new ShowToastEvent({
            title: 'Contact Updated',
            message: 'Record id: '+event.detail.id,
            variant: 'success'
        });

        this.dispatchEvent(evt);
    }
}