import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import COUNTER_FILE from '@salesforce/messageChannel/updatecounter__c'
export default class Demosub extends LightningElement {

    counter=0;
    subscription=null;
    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel(){
        this.subscription = subscribe(this.messageContext, COUNTER_FILE, 
            (message) => this.handleMessage(message)
            );
    }
    handleMessage(message){
        if(message.operator=='add'){
            this.counter = this.counter+message.constant;
        }
        else if(message.operator=='subtract'){
            console.log('I am in sub');
            this.counter = this.counter - message.constant;
        }
        else if(message.operator=='multiply'){
            console.log('I am in mul');
            this.counter = this.counter * message.constant;
        }
    }

}