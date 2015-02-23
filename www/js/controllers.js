angular.module('starter.controllers', [])

.controller('tulocalidadCtrl', function($scope, $state) {
    $scope.gocategoria = function() {
    	$state.go('categoria');
  	};
  	$scope.goestados = function() {
    	$state.go('estados');
  	};
})

.controller('EstadosCtrl', function($scope, Categorias) {
    $scope.estados = Categorias.estadoall();
    $scope.predeterminada = {id: '0'};
	$scope.seleccionandoEstado = function() {
		//console.log($scope.predeterminada.id.id);
		localStorage.setItem('estado', $scope.predeterminada.id.estado);
		localStorage.setItem('estadoid', $scope.predeterminada.id.id);
		$scope.estado = localStorage.getItem('estado');
		console.log(localStorage.getItem('estadoid'));
	};
		
	$scope.estado = localStorage.getItem('estado');
})

.controller('CategoriasCtrl', function($scope, Categorias) {
    $scope.categorias = Categorias.all();
    $scope.isVisible = false;
	$scope.searchcategoria = function() {
		$scope.query = {};
		$scope.isVisible = ! $scope.isVisible;
	};
})

.controller('EmpresaCtrl', function($scope, $stateParams, Categorias) {      
    $scope.estadoId = localStorage.getItem('estadoid');
    $scope.categoria = Categorias.get($stateParams.categoriaId);
    
    $scope.isVisible = false;
	$scope.searchempresa = function() {
		$scope.query = {};
		$scope.isVisible = ! $scope.isVisible;
	};
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
