public with sharing class CalculateNumbers {
    public CalculateNumbers() {

    }

    @AuraEnabled
    public static Integer getAdditionResult(Integer firstNo, Integer secondNo){
        return (firstNo+secondNo);
    }
}