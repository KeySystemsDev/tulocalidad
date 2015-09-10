angular.module('tulocalidad.controllers')

.controller('RecomendadosDetalleCtrl', function($scope, $ionicHistory, $rootScope, $http, $cordovaSocialSharing, publicidad_detalle) {
    console.log("RecomendadosDetalleCtrl");
      
    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };

    $scope.publicidad_detalle = publicidad_detalle.get({'id_publicidad':$rootScope.id_publicidad});

    $scope.compartir = function(mensaje, img, id_empresa) {
        $cordovaSocialSharing.share( mensaje, 
                                     mensaje, 
                                     $rootScope.HOST_NAME+"uploads/publicidades_high/"+img, 
                                     $rootScope.HOST_NAME+"servicios/empresa/"+id_empresa);
    };

    $scope.id_empresa = function(id_empresa) {
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