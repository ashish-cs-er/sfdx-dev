import { LightningElement, api, track } from 'lwc';

export default class PublicMethodParent extends LightningElement {

    @track value;

    checkboxSelectHandler(event){
        const childComponent = this.template.querySelector('c-public-method-child');
        childComponent.selectCheckBox(this.value);
    }
}