import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo;

    tileClickHandler(event){
        const tileClick = new CustomEvent('tileclick',{detail: this.meetingRoomInfo});
        this.dispatchEvent(tileClick);
    }
}