import { LightningElement,wire,api, track } from 'lwc';
import {getRecord, getFieldValue, getFieldDisplayValue} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
export default class GetRecordDemo extends LightningElement {
    @api recordId;
    @track accountInfo;
    name;
    annualRevenue;
    @wire(getRecord, {recordId: '$recordId', 
    fields: [NAME_FIELD, OWNER_NAME_FIELD, ANNUAL_REVENUE_FIELD]})
    accountHandler({data,error}){
        if(data){
            console.log(data);
            this.accountInfo = data;
            this.name = getFieldValue(data,NAME_FIELD);
            this.annualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD);
        }
    }
}