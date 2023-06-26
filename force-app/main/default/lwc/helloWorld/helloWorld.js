import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track dynamicGreeting = 'World';

    greetingChangeHandler(event){
        if(event.target.label==='Greeting'){
            this.dynamicGreeting = event.target.value;
        }
    }
}