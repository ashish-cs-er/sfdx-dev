import { LightningElement, wire } from 'lwc';
import {publish, MessageContext} from 'lightning/messageService';
import COUNTER_FILE from '@salesforce/messageChannel/updatecounter__c'; 

export default class Demopub extends LightningElement {
    @wire(MessageContext)
    messageContext;

    handleAddition(event){
        const payload = {
            operator: 'add',
            constant: 1
        };

        publish(this.messageContext, COUNTER_FILE, payload);
    }
    handleSubtraction(event){
        const payload = {
            operator: 'subtract',
            constant: 1
        };
    }
    handleMultliplication(event){
        const payload = {
            operator: 'multiply',
            constant: 2
        };
    }
}