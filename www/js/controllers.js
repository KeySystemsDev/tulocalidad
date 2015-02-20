angular.module('starter.controllers', [])

.controller('tulocalidadCtrl', function($scope, $state) {
    $scope.gocategoria = function() {
    $state.go('categoria');
  };
})

.controller('CategoriasCtrl', function($scope, Categorias) {
    $scope.categorias = Categorias.all();
    $scope.isVisible = false;
	$scope.search = function() {
		$scope.isVisible = ! $scope.isVisible;
	};
})

.controller('EmpresaCtrl', function($scope, $stateParams, Categorias) {
    $scope.categoria = Categorias.get($stateParams.categoriaId);
})

.controller('EmpresaDetalleCtrl', function($scope, $stateParams, Categorias) {
    $scope.empresa = Categorias.detalle($stateParams.categoriaId, $stateParams.empresaId);

    angular.extend($scope, {
			centerProperty: $scope.empresa.positionmap,
			zoomProperty: 17,
			markersProperty: [$scope.empresa.position],
			clickedLatitudeProperty: null,	
			clickedLongitudeProperty: null,
		});

    
});
