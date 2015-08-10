angular.module('tulocalidad.controllers', [])

.controller('RecomendadosCtrl', function($scope, $http, $ionicPopup, $rootScope, $state, $window, $ionicModal, $cordovaGeolocation, publicidad, estados, HOST_NAME) {
    console.log('RecomendadosCtrl');

    $rootScope.HOST_NAME = HOST_NAME;
    
    //Encuentra pocion de la persona al entrar
    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    
    $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function (position) {
              $rootScope.lat  = position.coords.latitude;
              $rootScope.long = position.coords.longitude;
        }, function(err) {
            // error
    });
    //*-------------------------------------------------
    
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
        $http.get( $rootScope.HOST_NAME + 'movil/empresa/publicidad', {id_estado: localStorage.getItem('id_estado')})
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

    if( "0.0.9" == "0.1.0"){
        var confirmPopup = $ionicPopup.confirm({
            title: 'Nueva Actulizar',
            template: 'Porfavor Actulice Tulocalidad para disfrutar de nuetros servicios.'
        });
       
        confirmPopup.then(function(resultado) {
            if(resultado) {
                window.open("https://play.google.com/store/apps/details?id=com.ionicframework.tulocalidad511234", '_system');
            } else {
                console.log('Cancel');
            }
        });
        
   };
    
});