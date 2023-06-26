import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { APPLICATION_SCOPE, publish, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';

export default class LmsCompA extends LightningElement {
    @wire(MessageContext)
    context;

    inputValue;

    inputHandler(event){
        console.log('Input Handler Called');
        this.inputValue = event.target.value;
    }

    pubilshMessage(event){
        const message = {
            lmsData: {
                value: this.inputValue
            }
        }
        publish(this.context, SAMPLEMC, message);
        console.log('After publish');
    }
}