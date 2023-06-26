import { LightningElement, track } from 'lwc';

export default class WelcomeTrackProperty extends LightningElement {
    @track greeting;

    handleChange(event){
        this.greeting = event.target.value;
        console.log(this.greeting);
    }
}