import { LightningElement } from 'lwc';
export default class HelloConditionalRendering extends LightningElement {

    isVisible=false;
    handleClick(event){
        if(event.target.label==='Show Data'){
            this.isVisible = true;
        }
    }
}