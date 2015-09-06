DailyHoursRecords = new Mongo.Collection("dailyhoursrecords");

DailyHoursRecords.allow({
    insert: function (userId, dailyHoursRecord) {
        return userId && dailyHoursRecord.owner === userId;
    },
    update: function (userId, dailyHoursRecord, fields, modifier) {
        return userId && dailyHoursRecord.owner === userId;
    },
    remove: function (userId, dailyHoursRecord) {
        return userId && dailyHoursRecord.owner === userId;
    }
});