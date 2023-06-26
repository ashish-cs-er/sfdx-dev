import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { APPLICATION_SCOPE, publish, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';

export default class LmsCompB extends LightningElement {
    @wire(MessageContext)
    context;

    receivedMessage;

    subscription;

    connectedCallback(){
        console.log('Connected Call Back called in B');
        this.subscribeMessage();
    }
    subscribeMessage(){
        this.subscription = subscribe(this.context, SAMPLEMC, (message)=>this.handleMessage(message), {scope: APPLICATION_SCOPE});
    }
    handleMessage(message){
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : 'No Message Published';
    }
    disconnectedCallback(){
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}