import { LightningElement, api, track } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ['red'];

    get options() {
        return [
            { label: 'Ross', value: 'green' },
            { label: 'Rachel', value: 'black' },
            { label: 'Tatlor', value: 'red' },
        ];
    }

    @api
    selectCheckBox(checkBoxVal){
        const checkBoxValFound = this.options.find(
            (cbv) =>{
                return checkBoxVal === cbv.value;
            }
        );
        if(checkBoxValFound){
            this.value = checkBoxValFound;
        }
    }
}