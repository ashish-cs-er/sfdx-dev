import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class GetListUiDemo extends LightningElement {
    contacts=[];
    pageToken=null;
    nextPageToken=null;
    previousPageToken =null;
    @wire(getListUi, 
        {objectApiName: CONTACT_OBJECT,
        listViewApiName: 'AllContacts',
        pageSize: 10,
        pageToken: '$pageToken'
    })
    listViewHandler({data, error}){
        if(data){
            console.log(data);
            this.contacts = data.records.records;
            this.nextPageToken = data.nextPageToken;
            this.previousPageToken = data.previousPageToken;
        }

        if(error){
            console.log(error);
        }
    }


    handleNext(){
        this.pageToken = this.nextPageToken;
    }
    handlePrevious(){
        this.pageToken = this.previousPageToken;
    }
}