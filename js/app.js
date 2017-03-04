var app = angular.module("tasksList", ["xeditable"]);

(function (app) {
    "use strict";
    
    app.run(function(editableOptions) {
        editableOptions.theme = 'bs3'; 
    });
    
    app.controller("peopleTasksList", function ($scope, $filter) {
        $scope.peopleList = [
            {name: "Jon Snow", image: "img/Jon_Snow.jpg"},
            {name: "Tyrion Lannister", image: "img/Tyrion_Lannister.jpg" },
            {name: "Daenerys Targaryen", image: "img/Daenerys_Targaryen.jpg"},
            {name: "Cersei Lannister", image:"img/Cersei_Lannister.jpg"},
            {name: "Edyta Lysiak", image:"img/Edyta_Lysiak.jpg"},
        ];
        
        $scope.peopleTasks = [
            {name: "Jon Snow", description:"Protect the Wall from potential threats", done: false },
            {name: "Tyrion Lannister", description:"Arrange meeting with representative of Astapor", done: false},
            {name: "Daenerys Targaryen", description: "Prepare the conquest of Westeros strategy", done:false},
            {name: "Cersei Lannister", description: "Open the Small Council meeting", done: false},
            {name: "Edyta Lysiak", description: "Update the To Do List", done: false}
        ];
       
        $scope.addTask = function() {
            $scope.peopleTasks.push ({description: $scope.newTask, name: "Edyta Lysiak", done: false});
            $scope.newTask = "";
        };
        $scope.clearCompleted = function() {
            $scope.peopleTasks =$scope.peopleTasks.filter(function(task) { 
                return !task.done
            });
        };            
    });
})(app);

