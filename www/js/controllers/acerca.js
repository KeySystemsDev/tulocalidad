angular.module('tulocalidad.controllers')

.controller('AcercaCtrl', function($scope, $ionicHistory) {
    console.log("AcercaCtrl");
      
    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
});