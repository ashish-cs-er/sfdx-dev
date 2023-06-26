trigger ContactTrigger on Contact (before insert, after insert, before update, after update, before delete, after delete) {
    switch on Trigger.operationType{
        
        When BEFORE_INSERT{
            
        }
        When AFTER_INSERT{
            System.debug('Firing After Insert Trigger');
            ContactTriggerHandler.afterInsertHandler(Trigger.New);
        }
        
        When BEFORE_UPDATE{
            
        }
        When AFTER_UPDATE{
             System.debug('Firing After Update Trigger');
             ContactTriggerHandler.afterUpdateHandler(Trigger.New, Trigger.oldMap);
             ContactTriggerHandler.afterUpdateHandlerForDesc(Trigger.New, Trigger.oldMap);
             ContactTriggerHandler.afterUpdateHandlerNoOfContacts(Trigger.New, Trigger.oldMap);
        }
        
        When BEFORE_DELETE{
            
        }
        When AFTER_DELETE{
             //ContactTriggerHandler.afterUpdateHandler(Trigger.New);
        }
        
        When AFTER_UNDELETE{
             //ContactTriggerHandler.afterUpdateHandler(Trigger.New);
        }
    }
}