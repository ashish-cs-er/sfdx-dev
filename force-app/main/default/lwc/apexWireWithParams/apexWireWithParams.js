import { LightningElement,wire } from 'lwc';
import filterAccountByType from '@salesforce/apex/AccountController.filterAccountByType';
export default class ApexWireWithParams extends LightningElement {
    selectedType = '';
    @wire(filterAccountByType, {type: '$selectedType'})
    filteredAccounts;
}