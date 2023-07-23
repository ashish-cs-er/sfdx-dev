import { LightningElement } from 'lwc';
export default class LifeCycleParent extends LightningElement {


    constructor(){
        super();
        //we can only use this.tempate to add event listerner
        console.log('Parent Constructor Called');
    }

    connectedCallback(){
        console.log('connected call back called');
    }

    renderedCallBack(){
        console.log('Parent Rendered Callback Called');
    }
}