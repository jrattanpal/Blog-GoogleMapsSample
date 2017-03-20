public with sharing class GoogleMap {
	@AuraEnabled
    public static List<Account> getAccounts(){
        //https://releasenotes.docs.salesforce.com/en-us/summer16/release-notes/rn_general_geocodes_aloha.htm
        //https://releasenotes.docs.salesforce.com/en-us/summer16/release-notes/data_dot_com_clean_add_geocode_information_to_all_records.htm
        //https://help.salesforce.com/articleView?id=data_dot_com_clean_admin_clean_rules.htm&type=0&language=en_US
        return [select id, name, BillingLatitude, BillingLongitude from Account where BillingLatitude != null and BillingLongitude != null];
    }
}