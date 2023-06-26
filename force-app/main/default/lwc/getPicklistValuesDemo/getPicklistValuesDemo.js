import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import {getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi';
export default class GetPicklistValuesDemo extends LightningElement {

    industryOptions = [];
    selectedIndustry="";

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    accountInfo;

    @wire(getPicklistValues, {recordTypeId: '$accountInfo.data.defaultRecordTypeId',fieldApiName: INDUSTRY_FIELD})
    industryPicklist({data, error}){
        if(data){
            console.log(data);
            //alert("Data: "+data);
            this.industryOptions = [...this.generatePicklist(data)];
        }
        if(error){
            console.log(error);
            alert("error: "+error);
        }
    }
    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }
    generatePicklist(data){
        return data.values.map( item => ({
            label: item.label, 
            value: item.value
        }));
    }
}