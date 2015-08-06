angular.module('tulocalidad.controllers')

.controller('RecomendadosDetalleCtrl', function($scope, $rootScope, $cordovaSocialSharing, publicidad_detalle) {
    console.log("RecomendadosDetalleCtrl");
    
    $scope.publicidad_detalle = publicidad_detalle.get({'id_publicidad':$rootScope.id_publicidad});
    console.log($scope.publicidad_detalle);
    $scope.compartir = function(mensaje, img) {
        $cordovaSocialSharing.share(mensaje, mensaje, img, "http://tulocalidad.com.ve");
    };

    $scope.id_empresa = function(id_empresa) {
    	console.log(id_empresa);
        $rootScope.id_empresa = id_empresa;
    }
});