import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
export default class DeleteRecordDemo extends LightningElement {
    recordId;
    changeHandler(event){
        this.recordId = event.target.value;
    }

    deleteHandler(event){
        deleteRecord(this.recordId)
            .then(result =>{
                console.log('Deleted Successfullly');
            })
            .catch(error=>{
                console.log('Error');
            })
    }
}