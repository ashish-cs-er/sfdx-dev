import { LightningElement } from 'lwc';

export default class ChildToParentParentComponent extends LightningElement {
    counter = 0;

    handleAdd(event){
        this.counter++;
    }
    handleSub(event){
       this.counter--;
    }

    handleMul(event){
        const factor = event.detail;
        this.counter = this.counter*factor;
    }
}