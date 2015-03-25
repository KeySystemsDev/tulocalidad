angular.module('starter.controllers', [])

.controller('tulocalidadCtrl', function($scope, $state,  $ionicModal, publicidad, estados) {
    $scope.gocategoria = function() {
      $state.go('categoria');
    };
    $scope.goestados = function() {
      $state.go('estados');
    };
  
    $scope.estado = (localStorage.getItem('estado')) != null ? localStorage.getItem('estado') : localStorage.setItem('estado', 'Miranda');
    $scope.estado = (localStorage.getItem('estadoid')) != null ? localStorage.getItem('estado') : localStorage.setItem('estadoid', '0');
    
    $scope.estadoId = localStorage.getItem('estadoid');

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

    $scope.closeModal = function() {
    return $scope.modal.hide();
    };

    $scope.estados = estados.get();

    $scope.predeterminada = {id: '0'};
    $scope.seleccionandoEstado = function() {
      //console.log($scope.predeterminada.id.id);
      localStorage.setItem('estado', $scope.predeterminada.id.nombre_estado);
      localStorage.setItem('estadoid', $scope.predeterminada.id.id_estado);
      localStorage.setItem('id_estado', $scope.predeterminada.id.id_estado);
      $scope.estado = localStorage.getItem('estado');
      console.log(localStorage.getItem('estadoid'));
      document.location.reload();
    };

    $scope.publicidad = publicidad.publicidad_empresas();

    $scope.acerca = function(){
      $state.go('acerca');
    }

    var isoOptions = {
        masonry: {
        columnWidth: 50
        }
    };

    $( function() {
        // init isotope
        var $container = $('.isotope').isotope( isoOptions );
        var isActive = true;
    });
})

.controller('CategoriasCtrl', function($scope, $ionicScrollDelegate, categoria_estado, MyService) {
    console.log('CategoriasCtrl');
    
    $scope.estado = localStorage.getItem('estado');
    $scope.categorias = categoria_estado.get({'id_estado': localStorage.getItem('id_estado')});
    $scope.isVisible = false;
  
    $scope.searchcategoria = function() {
        $scope.query = {};
        $scope.isVisible = ! $scope.isVisible;
        $ionicScrollDelegate.scrollTop();
    };

    $scope.id_categoria = function(id_categoria) {
        MyService.id_categoria = id_categoria;
    }
})

.controller('EmpresaCtrl', function($scope, $ionicScrollDelegate, empresas_categorias, MyService) {      
    console.log('EmpresaCtrl');

    $scope.empresas = empresas_categorias.get({ 'id_estado': localStorage.getItem('id_estado'),
                                                'id_categoria': MyService.id_categoria});

    $scope.estado = localStorage.getItem('estado');

    $scope.isVisible = false;
    $scope.searchempresa = function() {
      $scope.query = {};
      $scope.isVisible = ! $scope.isVisible;
      $ionicScrollDelegate.scrollTop();
    };

    $scope.id_empresa = function(id_empresa) {
        MyService.id_empresa = id_empresa;
    }
})

.controller('EmpresaDetalleCtrl', function($scope, detalle_empresa, MyService) {
    console.log('EmpresaDetalleCtrl');

    $scope.empresa = detalle_empresa.get({'id_empresa': MyService.id_empresa});

    angular.extend($scope, {
      centerProperty: { lat: 10.375725, lng:  -66.955842},
      zoomProperty: 17,
      markersProperty: [{ latitude: 10.375725, longitude:  -66.955842 }],
      clickedLatitudeProperty: null,  
      clickedLongitudeProperty: null,
    });

    
});
