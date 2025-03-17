/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-25-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class ContactController {
     @AuraEnabled(cacheable=true)
     public static List<Contact> getContacts() {
        throw new AuraHandledException('Forced error');
       /* return [
            SELECT FirstName, LastName, Email, Phone
            FROM Contact 
            WITH SECURITY_ENFORCED
       ];*/
     }
}