var app = angular.module("tasksList", []);

(function (app) {
    "use strict";
    app.controller("peopleTasksList", function ($scope) {
        $scope.peopleTasks = [
            {name: "John Snow", description:"Protect the Wall from potential threats", done: false},
            {name: "Tyrion Lannister", description:"Arrange meeting with representative of Astapor", done: false},
            {name: "Daenerys Targaryen", description: "Prepare the conquest of Westeros strategy", done:false},
            {name: "Cersei Lannister", description: "Open the Small Council meeting", done: false},
            {name: "Edyta Lysiak", description: "Update the To Do List", done: false}
        ];
    });
})(app);

