import { LightningElement } from 'lwc';
export default class C2pModalComponent extends LightningElement {

    closeHandler(event){
        const myEvent = new CustomEvent('close',{
            bubbles: true,
            detail: "Modal Closed Successfully"
        });
        this.dispatchEvent(myEvent);
    }
}