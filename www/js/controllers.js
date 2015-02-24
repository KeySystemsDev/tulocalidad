angular.module('starter.controllers', [])

.controller('tulocalidadCtrl', function($scope, $state,  $ionicModal,$timeout,$window, Categorias) {
    $scope.gocategoria = function() {
    	$state.go('categoria');
  	};
  	$scope.goestados = function() {
    	$state.go('estados');
  	};
  	$scope.estado = localStorage.getItem('estado');

  	$ionicModal.fromTemplateUrl('contact-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
    $scope.modalDragStart = { active: true, value: 0 }
  })

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    return $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  
   $scope.dragDown = function (event) {
        if ($scope.modalDragStart.active) {
            $scope.modalDragStart = { active: false, value: event.gesture.center.pageY };
        }
        var element = angular.element('#modal'),
            windowHeight = $window.innerHeight,
            y = event.gesture.center.pageY - $scope.modalDragStart.value;
        if (y >= 0 && y <= windowHeight) {
            element.css({
                webkitTransform: 'translate3d(0,' + y + 'px,0)',
                transform: 'translate3d(0,' + y + 'px,0)'
            });
        }
    };
    $scope.resetPosition = function (event) {
        $scope.modalDragStart = { active: true, value: 0 }
        var element = angular.element('#modal'),
            y = event.gesture.center.pageY,
            windowHeight = $window.innerHeight;
        if (y >= (windowHeight * 0.5)) {
            element.css({
                transform: 'translate3d(0,' + windowHeight + 'px,0)'
            });
            $timeout(function () {
                $scope.closeModal().then(function () {
                    element.removeAttr('style');
                });
            }, 100);
        }
        else {
            $timeout(function () {
                element.removeAttr('style');
            }, 100);
        }

     };

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
