var app = angular.module("tasksList", []);

(function (app) {
    "use strict";
    app.controller("peopleTasksList", function ($scope) {
        $scope.people = [
            {name: "John Snow"},
            {name: "Tyrion Lannister"},
            {name: "Daenerys Targaryen"},
            {name: "Arya Stark"},
            {name: "Cersei Lannister"},
            {name: "Edyta Lysiak"}
        ];
    });
})(app);

