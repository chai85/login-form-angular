(function () {

    "use strict";

    angular.module("LoginApp", [])
        .controller("MainController", ["$scope", MainController])
        .directive("tooltip", tooltip);

    function MainController($scope) {

        $scope.passwordTip = "Password is case-sensitive";

        $scope.showHelp = function () {
            $scope.$broadcast("show-help");
        }

    };

    function tooltip() {
        return {
            scope: {
                tooltipText: '='
            },
            replace: false,
            template: "<div class = 'tooltip' style='position:absolute;top:{{top}};left:{{left}}'><span class = 'tooltip-text'>{{tooltipText}}</span><div class = 'arrow'></div></div>",
            link: function (scope, element, attrs) {
                scope.top = element.prop('offsetTop') + (element.prop('offsetHeight') / 2);
                scope.left = element.prop('offsetLeft') + (element.prop('offsetWidth') + 10);
                console.log(element.prop('offsetHeight'));
                console.log(element.prop('offsetTop'));
            }
        }
    }


})();
