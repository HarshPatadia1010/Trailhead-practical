/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-05-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
import { LightningElement,api } from 'lwc';

export default class Numerator extends LightningElement {
      // counter = 0;
      // @api counter = 0;

  handleIncrement() {
    this.counter++;
  }
  handleDecrement() {
    this.counter--;
  }
  handleMultiply(event) {
    const factor = event.detail;
    this.counter *= factor;
  }
  handleReset(){
    this.counter=0;
  }
  @api
  maximizeCounter() {
    this.counter += 1000000;
  }


  _currentCount = 0;
  priorCount = 0;
  
  @api
  get counter() {
    return this._currentCount;
  }
  set counter(value) {
    this.priorCount = this._currentCount;
    this._currentCount = value;
  }

}