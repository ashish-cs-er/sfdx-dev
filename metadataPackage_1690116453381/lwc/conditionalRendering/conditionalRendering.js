import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track displayDiv = false;

    @track cityList = ['Jaipur','Chandigarh','Mohali'];

    changeHandler(event){
        this.displayDiv = !this.displayDiv;
    }
}