public class LeadTriggerHandler {

    public static void beforeInsertHandler(List<Lead> leadsNew){
        System.debug('BEFORE_INSERT');
        for(Lead leadRecordNew: leadsNew){
            if(String.isBlank(leadRecordNew.Industry)){
                leadRecordNew.Industry = 'Other';
            }
        }
    }
    
     public static void afterInsertHandler(List<Lead> leadsNew){
        System.debug('AFTER_INSERT');
        List<Task> leadTasksList = new List<Task>();
        for(Lead leadRecord: leadsNew){
            Task leadTask = new Task();
            leadTask.Subject = 'Call the Lead';
            //leadTask.WhoId = leadRecord.OwnerId;
            leadTask.WhoId = leadRecord.Id;
            leadTask.Status = 'Open';
            leadTasksList.add(leadTask);
        }
        insert leadTasksList;
    }
    
    public static void beforeUpdateHandler(List<Lead> leadsNew){
        System.debug('BEFORE_INSERT');
        for(Lead leadRecordNew: leadsNew){
            if(String.isBlank(leadRecordNew.Industry)){
                leadRecordNew.Industry = 'Other';
            }
        }
    }
}