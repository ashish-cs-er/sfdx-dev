import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    //private property
    //non reactive, will not create any type of data binding
    cardTitle = 'BMI Calculator';

    height;
    weight;

    @track bmi;

    changePropertyHandler(event){
        this.cardTitle = "Hello There";
        console.log('card title is: '+this.cardTitle);
        console.log('property value has changed but not the card title');
    }

    handleChange(event){
        if(event.target.name==='height'){
            console.log('height changed');
            this.height = parseFloat(event.target.value);
        }
        if(event.target.name==='weight'){
            console.log('weight changed');
            this.weight = parseFloat(event.target.value);
        }
    }

    calculateBMI(event){
        console.log('button clicked');
        this.bmi = this.weight/(this.height*this.height);
    }
}