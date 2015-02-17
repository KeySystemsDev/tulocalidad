angular.module('starter.controllers', [])

.controller('tulocalidadCtrl', function($scope, $state) {
    $scope.gocategoria = function() {
    $state.go('categoria');
  };
})

.controller('CategoriasCtrl', function($scope, Categorias) {
    $scope.categorias = Categorias.all();
})

.controller('EmpresaCtrl', function($scope, $stateParams, Categorias) {
    $scope.categoria = Categorias.get($stateParams.categoriaId);
})

.controller('EmpresaDetalleCtrl', function($scope, $stateParams, Categorias) {
    $scope.empresa = Categorias.detalle($stateParams.categoriaId, $stateParams.empresaId);

    angular.extend($scope, {
			centerProperty: {
				lat: 11,
				lng: -66
			},
			zoomProperty: 5,
			markersProperty: [$scope.empresa.position],
			clickedLatitudeProperty: null,	
			clickedLongitudeProperty: null,
		});

    
});
