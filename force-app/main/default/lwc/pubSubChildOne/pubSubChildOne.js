import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubSubChildOne extends LightningElement {
    buttonHandler(event){
        this.eventPublisher('Hello from Child One');
    }

    eventPublisher(data){
        pubsub.publish('sayHello', data);
    }
}