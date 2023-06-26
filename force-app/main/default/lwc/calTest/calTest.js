import { LightningElement, track } from 'lwc';

export default class CalTest extends LightningElement {
    firstNum=0;
    secondNum=0;
    @track result=0;

    handleChange(event){
        if(event.target.name==="firstNum"){
            this.firstNum = event.target.value;
        }
        else if(event.target.name==="secondNum"){
            this.secondNum = event.target.value;
        }
        this.result = parseInt(this.firstNum)+parseInt(this.secondNum);
    }

}