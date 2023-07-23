public class OpportunityTriggerHandler {

    public static void afterUpdateHandlerAccountOppAmt(List<Opportunity> oppList, Map<Id, Opportunity> oppOldMap){
        Set<Id> accIdSet = new Set<Id>();
        for(Opportunity opp: oppList){
            
            if(opp.AccountId != oppOldMap.get(opp.Id).AccountId){
                if(opp.AccountId!=null){
                	accIdSet.add(opp.AccountId);
            	}
                if(oppOldMap.get(opp.Id).AccountId!=null){
                     accIdSet.add(oppOldMap.get(opp.Id).AccountId);
                }
            }
            else{
                accIdSet.add(opp.AccountId);
            }
        }
        List<AggregateResult> aggrList = [
            SELECT ACCOUNTID, SUM(AMOUNT) totalAmt from OPPORTUNITY WHERE ACCOUNTID IN:accIdSet
            GROUP BY ACCOUNTID
        ];
        List<Account> actList = new List<Account>();
        if(!aggrList.isEmpty()){
            for(AggregateResult result: aggrList){
                Account acc = new Account();
                acc.Id = (Id)result.get('ACCOUNTID');
                acc.Total_Opp_Amount__c = (Decimal) result.get('totalAmt');
                System.debug('Amount is: '+acc.Total_Opp_Amount__c);
                actList.add(acc);
            }
        }
        if(!actList.isEmpty()){
            update actList;
        }
    }

    public static void afterUpdateHandlerAccountOppName(List<Opportunity> oppList, Map<Id, Opportunity> oldOppMap){
        Set<Id> accoutnIds = new Set<Id>();
        for(Opportunity opp: oppList){
            if(oldOppMap!=null){
                if(opp.AccountId!=oldOppMap.get(opp.Id).AccountId){
                    if(opp.AccountId!=null){
                        accoutnIds.add(opp.AccountId);
                    }
                    if(oldOppMap.get(opp.Id).AccountId!=null){
                        accoutnIds.add(oldOppMap.get(opp.Id).AccountId);
                    }
                }
                else{
                    accoutnIds.add(opp.AccountId);
                }
            }
            else{
                accoutnIds.add(opp.AccountId);
            }
        }

        if(accoutnIds.size()>0){
            List<Account> updateAccountList = new List<Account>();
            LIst<Account> accList = [
            SELECT ID, Max_Opp_Name__c,(SELECT ID, NAME, AMOUNT from Opportunities WHERE AMOUNT != null order by AMOUNT DESC LIMIT 1) FROM ACCOUNT WHERE ID in :accoutnIds
            ];
            if(!accList.isEmpty()){
                for(Account acc: accList){
                    String oppNameWithMaxAmt = acc.Opportunities[0].NAME;
                    acc.Max_Opp_Name__c = oppNameWithMaxAmt;
                    updateAccountList.add(acc);
                }
                update updateAccountList;
            }
        }
            
            
    }
}