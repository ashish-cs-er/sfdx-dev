trigger AccountTrigger on Account (after update) {
    switch on Trigger.operationType{
        When AFTER_UPDATE{
            AccountTriggerHandler.afterUpdateContactHandler(Trigger.New, Trigger.OldMap);
        }
    }
}