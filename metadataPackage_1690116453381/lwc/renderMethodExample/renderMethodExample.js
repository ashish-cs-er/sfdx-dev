import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './renderMethodExample.html';
export default class RenderMethodExample extends LightningElement {

    template='';

    handleClick(){
        if(this.template==signinTemplate){
            this.template=signupTemplate;
        }
        else{
            this.template = signinTemplate;
        }
    }
    render(){
        return this.template==signinTemplate ? signinTemplate :
            this.template==signupTemplate ? signupTemplate : renderTemplate;
    }
}