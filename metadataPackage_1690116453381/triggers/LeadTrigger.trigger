//Lead Record
//if current status is open, we should not be able to close the Lead

trigger LeadTrigger on Lead (before insert, after insert, before update, after update) {
    switch on Trigger.operationType{
        When BEFORE_INSERT{
            //calling Apex Method
            LeadTriggerHandler.beforeInsertHandler(Trigger.new);
        }
        When AFTER_INSERT{
             LeadTriggerHandler.afterInsertHandler(Trigger.new);
        }
        When BEFORE_UPDATE{
            System.debug('BEFORE_UPDATE');
        }
        When AFTER_UPDATE{
            System.debug('AFTER_UPDATE');
        }
    }
}