angular.module('starter.controllers', [])

.controller('tulocalidadCtrl', function($scope, $state,  $ionicModal,$timeout,$window, Categorias) {
    $scope.gocategoria = function() {
    	$state.go('categoria');
  	};
  	$scope.goestados = function() {
    	$state.go('estados');
  	};
  	$scope.estado = localStorage.getItem('estado');

  	$ionicModal.fromTemplateUrl('templates/estados-modal.html', {
    	scope: $scope,
    	animation: 'slide-in-up'
  			}).then(function(modal) {
    			$scope.modal = modal;
    			$scope.modalDragStart = { active: true, value: 0 }
  	})

  	$scope.openModal = function() {
    	$scope.modal.show()
  	}

    $scope.estados = Categorias.estadoall();
    $scope.predeterminada = {id: '0'};
	$scope.seleccionandoEstado = function() {
		//console.log($scope.predeterminada.id.id);
		localStorage.setItem('estado', $scope.predeterminada.id.estado);
		localStorage.setItem('estadoid', $scope.predeterminada.id.id);
		$scope.estado = localStorage.getItem('estado');
		console.log(localStorage.getItem('estadoid'));
		document.location.reload();
	};
})

.controller('EstadosCtrl', function($scope, Categorias,$state) {
    $scope.estados = Categorias.estadoall();
    $scope.predeterminada = {id: '0'};
	$scope.seleccionandoEstado = function() {
		//console.log($scope.predeterminada.id.id);
		localStorage.setItem('estado', $scope.predeterminada.id.estado);
		localStorage.setItem('estadoid', $scope.predeterminada.id.id);
		$scope.estado = localStorage.getItem('estado');
		console.log(localStorage.getItem('estadoid'));	
		document.location.reload();
		
	};

	$scope.tulocalidad = function(){
		$state.go('tulocalidad');
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
