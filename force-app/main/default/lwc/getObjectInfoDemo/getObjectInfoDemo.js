import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getObjectInfos} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
export default class GetObjectInfoDemo extends LightningElement {

    objectInfo;
    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];

    @wire(getObjectInfo,{ACCOUNT_OBJECT})
    getAccountObjectInfo({data,error}){
        if(data){

            console.log("Metadata about object"+data);
            this.objectInfo = data;
        }
        if(error){
            console.log("There is an error");
            console.log(error);
        }
    }

    @wire(getObjectInfos, {objectApiName: '$objectApiNames'})
    objectInfoHandler({data,error}){
        if(data){
            console.log(data);
        }
        if(error){
            console.log("There is an error");
        }
    }
}