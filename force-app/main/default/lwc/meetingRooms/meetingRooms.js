import { LightningElement, track } from 'lwc';

export default class MeetingRooms extends LightningElement {
    
    @track selectedMeetingRoomInfo;
    meetingRooms = [
        {roomName: 'A01', roomCapacity:'10'},
        {roomName: 'B01', roomCapacity:'20'},
        {roomName: 'C01', roomCapacity:'30'},
        {roomName: 'D01', roomCapacity:'40'},
        {roomName: 'E01', roomCapacity:'50'},
    ];

    onTileSelectHandler(event){
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoomInfo = meetingRoomInfo.roomName;
    }
}