import { LightningElement, api, track, wire } from 'lwc';
import calculateSum from '@salesforce/apex/CalculateNumbers.getAdditionResult';
export default class CalculateTwoNumbers extends LightningElement {
    @track fNum;
    @track sNum;
    @track result;
    @track error;
    
    handleChange(event){
        if(event.target.name==='fNum'){
            this.fNum = event.target.value;
        }
        else if(event.target.name==='sNum'){
            this.sNum = event.target.value;
        }
    }

    handleClick(event){
        calculateSum({firstNo: this.fNum, secondNo: this.sNum })
            .then(response => {
                this.result = response;
            })
            .catch(error => {
                this.error = error;
            });
    }
}