/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-10-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement, track, wire } from 'lwc';
import queryAccountsByRevenue from  "@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue"
export default class AccountFinder extends LightningElement {
    annualRevenue=null;
    handleChange(event){
        this.annualRevenue=event.detail.value;
        // console.log(this.annualRevenue);
        
    }
    reset(){
       this .annualRevenue=null;
    }

    @wire(queryAccountsByRevenue,{annualRevenue :"$annualRevenue"})
    accounts;
}

