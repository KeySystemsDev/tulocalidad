angular.module('tulocalidad.controllers')

.controller('RecomendadosDetalleCtrl', function($scope, $ionicHistory, $rootScope, $http, $cordovaSocialSharing, publicidad_detalle) {
    console.log("RecomendadosDetalleCtrl");
      
    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };

    $scope.publicidad_detalle = publicidad_detalle.get({'id_publicidad':$rootScope.id_publicidad});

    $scope.compartir = function(mensaje, img) {
        $cordovaSocialSharing.share( mensaje, 
                                     mensaje, 
                                     $rootScope.HOST_NAME+"uploads/publicidades_low//"+img, 
                                     $rootScope.HOST_NAME);
    };

    $scope.id_empresa = function(id_empresa) {
    	console.log(id_empresa);
        $rootScope.id_empresa = id_empresa;
    }

    $scope.RecargarPublicidad = function(){
        $http.get( $rootScope.HOST_NAME + 'movil/detalle_publicidad',{
            params: {
                id_publicidad: $rootScope.id_publicidad
                }
            })
            .success(function(publicidad) {
                $scope.publicidad_detalle= publicidad;
                console.log(publicidad);
            })
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
    }
});