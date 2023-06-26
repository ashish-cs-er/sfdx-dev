import { LightningElement,api } from 'lwc';
export default class ChildLWC extends LightningElement {

    @api
    messageFromChild = "Ashish"; //assign default value, but this value wiil be overridden from Parent
}