/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-10-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class AccountListControllerLwc {
        @AuraEnabled(cacheable=true)
        public static List<Account> queryAccountsByRevenue(Decimal annualRevenue) {
            return [
                SELECT Name
                FROM Account
                WHERE AnnualRevenue >= :annualRevenue
            ];
        }
    }
