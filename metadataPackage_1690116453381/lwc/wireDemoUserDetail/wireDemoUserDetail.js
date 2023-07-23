import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import ID from '@salesforce/user/Id';
export default class WireDemoUserDetail extends LightningElement {
    userId = ID;
    userDetail;
    @wire(getRecord, {recordId: '$userId', fields:['User.Name','User.Email']})
    userDetailHandler({data, error}){
       if(data){
        console.log(data.fields);
        this.userDetail = data.fields;
       }
       else if(error){
        console.log("Error");
       }
    }
}