trigger AccountTrigger on Account (before update) {
    if(Trigger.isUpdate && Trigger.isBefore){
       AccountTriggerHandler.handleBeforeUpdate(Trigger.new, Trigger.oldMap);
    }

}