trigger OpportunityTrigger on Opportunity (before insert, after update) {

    switch on Trigger.operationType{
        When AFTER_UPDATE{
            OpportunityTriggerHandler.afterUpdateHandlerAccountOppAmt(Trigger.new, Trigger.OldMap);
            OpportunityTriggerHandler.afterUpdateHandlerAccountOppName(Trigger.New, Trigger.oldMap);
        }
    }
}