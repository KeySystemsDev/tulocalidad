angular.module('tulocalidad.controllers', [])

.controller('RecomendadosCtrl', function($scope, $ionicHistory, $http, $ionicPopup, $rootScope, $state, $window, $ionicModal, $cordovaGeolocation, publicidad, estados, version, HOST_NAME, VERSION) {
    console.log('RecomendadosCtrl');

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };

    // Validar la versión que esta instalada.
    version.get( {version: VERSION} ).$promise.then(function(data) {
        if(data.consulta == true){
            var alertPopup = $ionicPopup.alert({
                title: 'Nueva actualización diponible',
                template: 'Presione actualizar para disfrutar de la nueva versión.',
                buttons: [{ text: 'Actualizar' , 
                            type: 'button-positive',
                            onTap: function() {
                                window.open("https://play.google.com/store/apps/details?id=com.ionicframework.tulocalidad511234", '_system');
                            }
                        }]
            });
        }else{
            console.log("cancel")
        }
    }, function(error) {
        if ( error.status === 0 || error.status === 404 ) {
            console.log("error");
        }
    });

    $rootScope.HOST_NAME = HOST_NAME;
    $rootScope.VERSION = VERSION;
    
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

    publicidad.get({'id_estado': localStorage.getItem('id_estado')})
       .$promise.then(function(data) {
            /*if (data.success){
                $scope.publicidades = data.consulta;
            }else{
                $ionicPopup.alert({ title:    'Mensaje de Error',
                                    template: data.msj});
            }*/
           $scope.publicidades = data;

       }, function(error) {
            if ( error.status === 0 || error.status === 404 ) {
                $ionicPopup.alert({ title:    'Error de Conexión',
                                    template: 'No es posible establecer conexión a Internet.'});
            }
       });

    $scope.RecargarPublicidad = function(){
        $http.get( $rootScope.HOST_NAME + 'movil/empresa/publicidad', {id_estado: localStorage.getItem('id_estado')})
            .success(function(publicidad) {
                $scope.publicidades = publicidad;
            })
            .error(function (data, status) {
                if ( status === 0 || status === 404 ) {
                    $ionicPopup.alert({ title:    'Mensaje de Error',
                                        template: 'Error de conexión'});
                }
            }).finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
    }

    $scope.id_publicidad = function(id_publicidad) {
        $rootScope.id_publicidad = id_publicidad;
    }    

    $scope.id_empresa = function(id_empresa) {
        $rootScope.id_empresa = id_empresa;
    }
    
});