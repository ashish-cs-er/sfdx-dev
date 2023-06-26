import { LightningElement } from 'lwc';
export default class QuerySelectorDemo extends LightningElement {

    userNames = ["John","Smith","Jimmy","Aman"];

    handleClick(event){
        const ele = this.template.querySelector('h1');
        console.log('Hello');
        console.log(ele.innerText);

        const allUsers = this.template.querySelectorAll(".name");
        Array.from(allUsers).forEach( item=> {
            console.log(item.innerText);
            console.log("Item is here");
        });
    }
}