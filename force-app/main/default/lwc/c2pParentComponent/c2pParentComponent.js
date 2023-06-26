import { LightningElement } from 'lwc';
export default class C2pParentComponent extends LightningElement {

    showModal = false;
    msg;
    clickHandler(event){
        this.showModal = true;
    }

    closeHandler(event){
        this.showModal = false;
        this.msg = event.detail;
        console.log(event.detail);
    }
}