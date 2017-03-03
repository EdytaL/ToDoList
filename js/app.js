var app = angular.module("tasksList", []);

(function (app) {
    "use strict";
    app.controller("peopleTasksList", function ($scope) {
        $scope.peopleTasks = [
            {name: "Jon Snow", description:"Protect the Wall from potential threats", done: false, image: "img/Jon_Snow.jpg"},
            {name: "Tyrion Lannister", description:"Arrange meeting with representative of Astapor", done: false, image: "img/Tyrion_Lannister.jpg" },
            {name: "Daenerys Targaryen", description: "Prepare the conquest of Westeros strategy", done:false, image: "img/Daenerys_Targaryen.jpg"},
            {name: "Cersei Lannister", description: "Open the Small Council meeting", done: false, image:"img/Cersei_Lannister.jpg"},
            {name: "Edyta Lysiak", description: "Update the To Do List", done: false, image:"img/Edyta_Lysiak.jpg"}
        ];
        $scope.addTask = function() {
            $scope.peopleTasks.push ({description: $scope.newTask, name: "Edyta Lysiak", done: false})
        }
    });
})(app);

