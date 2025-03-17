/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-04-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import Details from '@salesforce/schema/UserProvisioningLog.Details';
import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {
    factors = [0,2,3,4,5,6];
    handleSubtract(){
        this.dispatchEvent(new CustomEvent('subtract'))
            console.log("sub dispatch");
            
        }
        handleAdd(){
            this.dispatchEvent(new CustomEvent('add'))
            console.log("Add dispatch");
    }
    handleMultiply(){
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('multiply',{
                detail :factor
        }));
    }
    handleReset(){
        this.dispatchEvent(new CustomEvent('reset'));
    }
}