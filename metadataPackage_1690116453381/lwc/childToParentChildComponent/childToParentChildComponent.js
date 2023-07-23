import { LightningElement } from 'lwc';

export default class ChildToParentChildComponent extends LightningElement {
    counter = 0;

    handleAddClick(event){
        //these are new events the handlers for which should be added to parent
        this.dispatchEvent(new CustomEvent('add'));
    }

    handleSubClick(event){
        //these are new events the handlers for which should be added to parent
        this.dispatchEvent(new CustomEvent('sub'));
    }

    handleMulClick(event){
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('mul',{detail: factor}));
    }

}