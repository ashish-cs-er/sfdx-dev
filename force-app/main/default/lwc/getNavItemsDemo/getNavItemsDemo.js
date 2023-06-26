import { LightningElement,wire } from 'lwc';
import {getNavItems} from 'lightning/uiAppsApi';

export default class GetNavItemsDemo extends LightningElement {
    @wire(getNavItems, {
        pageSize:30
    })
    navItemHandler({data,error}){
        if(data){
            console.log(data);
        }
        if(error){
            console.log(error);
        }
    }
}