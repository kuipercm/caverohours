angular.module("caverohours").controller('InvullenCtrl', function($scope, $meteor) {
    var self = this;

    self.categories = [
        {id: 1, name: 'Klant uren 100%', description: 'Standaard uren bij de klant'},
        {id: 2, name: 'Klant uren 150%', description: 'Uren bij de klant op 150%'},
        {id: 3, name: 'Klant uren 200%', description: 'Uren bij de klant op 200%'},
        {id: 4, name: 'Klant uren anders', description: 'Uren bij de klant tegen bijzonder tarief. Opgeven alsjeblieft.'},
        {id: 5, name: 'Reistijd', description: 'Uren voor reistijd. Let op, dit is alleen te boeken onder bijzondere voorwaarden.'},
        {id: 6, name: 'Verlof', description: 'Gebruik voor vakanties, etc. Voor bijzondere dagen gebruik de categorie \'Buitengewoon verlof\'.'},
        {id: 7, name: 'Feestdag', description: 'Voor nationale feestdagen.'},
        {id: 8, name: 'Buitengewoon verlof', description: 'Voor bijzonder verlof zoals huwelijk, overlijden, etc.'},
        {id: 9, name: 'Ziek', description: 'Voor ziekteverzuim.'},
        {id: 10, name: 'Arts bezoek', description: 'Gebruik voor het bezoeken van arts of tandarts wat niet compenseerbaar is.'},
        {id: 11, name: 'HR gerelateerd', description: 'Voor HR gerelateerde zaken zoals het voeren van interviews, etc.'},
        {id: 12, name: 'Opleiding', description: 'Gebruik voor het boeken van tijd die voor opleiding gebruikt wordt.'},
        {id: 13, name: 'Overige', description: 'Voor overige zaken. Specificeer in commentaar.'},
    ];

    self.daysThisMonth = function() {
        var startOfMonth = moment().date(1);
        var endOfMonth = moment().date(moment().daysInMonth());
        var range = moment.range(startOfMonth, endOfMonth);

        var daysThisMonth = [];
        range.by('days', function(singleDate) {
            daysThisMonth.push({
                date: singleDate,
                dayNumber: singleDate.date()

            });
        });

        return daysThisMonth;
    }();

});