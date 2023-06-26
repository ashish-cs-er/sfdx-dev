import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubSubChildTwo extends LightningElement {
    
    connectedCallback(event){
        this.callSubscriber();
    }
    callSubscriber(){
        pubsub.subscribe('sayHello', this.subscribeCallBack);
    }
    subscribeCallBack(event){
        console.log(event);
    }
}