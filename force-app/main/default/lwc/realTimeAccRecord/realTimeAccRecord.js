/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-25-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement, api ,wire } from 'lwc';
import { getRecord,getFieldDisplayValue} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
 const fields=['Account.Name','Account.Industry','Account.Phone']
export default class RealTimeAccRecord extends LightningElement {
    @api recordId;
 
    isEditVisible=false;
    // @wire(getRecord,{recordId:'$recordId',fields:fields})
    // acc;
    handleEdit(){
             this.isEditVisible=true;
    }
    handleCancle(){
        this.isEditVisible=false;
        
    }
    handleSuccess(){
        this.isEditVisible=false;
        let toast=new ShowToastEvent({
            title: 'Success',
            message:'Account is updated successfully ',
        })
        this.dispatchEvent(toast);
        
        
    }   


}