(function () {

    "use strict";

    angular.module("LoginApp", [])
        .controller("MainController", ["$scope", MainController]);

    function MainController($scope) {
        $scope.showHelp = function () {
            console.log("Showing Help")
        }
    };

})();
