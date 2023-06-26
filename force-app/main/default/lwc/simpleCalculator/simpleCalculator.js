import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track firstNumber;
    @track secondNumber;
    @track resultsArray = [];

    numberChangeHandler(event){
        if(event.target.name==='firstNo'){
            this.firstNumber = event.target.value;
        }
        if(event.target.name==='secondNo'){
            this.secondNumber = event.target.value;
        }
    }

    buttonClickHandler(event){
        if(event.target.label==='Add'){
            const fNo = parseInt(this.firstNumber);
            const sNO = parseInt(this.secondNumber);
            this.currentResult = `Result of Addition is: ${(fNo+sNO)}`;
        }
        if(event.target.label==='Sub'){
            const fNo = parseInt(this.firstNumber);
            const sNO = parseInt(this.secondNumber);
            this.currentResult = `Result of Sub is: ${(fNo-sNO)}`;
        }
        if(event.target.label==='Mul'){
            const fNo = parseInt(this.firstNumber);
            const sNO = parseInt(this.secondNumber);
            this.currentResult = `Result of Mul is: ${(fNo*sNO)}`;
        }
        if(event.target.label==='Div'){
            const fNo = parseInt(this.firstNumber);
            const sNO = parseInt(this.secondNumber);
            this.currentResult = `Result of Div is: ${(fNo/sNO)}`;
        }
        this.resultsArray.push(this.currentResult);
    }
}