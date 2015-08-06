angular.module('tulocalidad.controllers', [])

.controller('RecomendadosCtrl', function($scope, $http, $rootScope, $state, $window, $ionicModal, $cordovaGeolocation, publicidad, estados) {
    console.log('RecomendadosCtrl');
    
    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    
    $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function (position) {
              $rootScope.lat  = position.coords.latitude;
              $rootScope.long = position.coords.longitude;
        }, function(err) {
            // error
    });
    
    if (localStorage.getItem('estado') != null) {
        localStorage.getItem('estado');
        localStorage.getItem('id_estado');
    }else{
        localStorage.setItem('estado', 'Miranda');
        localStorage.setItem('id_estado', '0');
    }

    $scope.estado = localStorage.getItem('estado');

    $scope.publicidades = publicidad.get({'id_estado': localStorage.getItem('id_estado')});

    $scope.RecargarPublicidad = function(){
        $http.get('http://www.tulocalidad.com.ve/movil/empresa/publicidad', {id_estado: localStorage.getItem('id_estado')})
            .success(function(publicidad) {
                $scope.publicidades = publicidad;
            })
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
    }

    $scope.id_publicidad = function(id_publicidad) {
        $rootScope.id_publicidad = id_publicidad;
    }
    
});