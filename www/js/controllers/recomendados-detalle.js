angular.module('tulocalidad.controllers')

.controller('RecomendadosDetalleCtrl', function($scope, $rootScope, publicidad_detalle) {
    console.log("RecomendadosDetalleCtrl");
    
    $scope.publicidad_detalle = publicidad_detalle.get({'id_publicidad':$rootScope.id_publicidad});

});