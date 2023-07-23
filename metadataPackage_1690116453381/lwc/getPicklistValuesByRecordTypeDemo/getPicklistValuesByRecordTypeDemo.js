import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {
    
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    accountObjectInfo;

    ratingOption=[];
    industryOption=[];
    selectedRating="";

    @wire(getPicklistValuesByRecordType, {objectApiName: ACCOUNT_OBJECT, recordTypeId:'$accountObjectInfo.data.defaultRecordType'})
    picklistHandler({data, error}){
        if(data){
            alert('Hello From Data');
            console.log(data);
            this.ratingOption = [...this.picklistGenerator(data.picklistFieldValues.Rating)];
            this.industryOption = [...this.picklistGenerator(data.picklistFieldValues.Industry)];
        }
        if(error){
            alert('Hello From Error');
            console.log(error);
        }
    }

    picklistGenerator(data){
        return data.value.map(item=>({
            "label": item.label,
            "value": item.value
        }));
    }

    handleChange(event){
        this.selectedRating = event.target.value;
    }
}