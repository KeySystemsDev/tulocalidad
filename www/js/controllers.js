angular.module('starter.controllers', [])

.controller('tulocalidadCtrl', function($scope, $state,  $ionicModal, publicidad, estados, MyService) {
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

    $scope.acerca = function(){
      $state.go('acerca');
    }

    $scope.publicidades = publicidad.get();

    $scope.id_empresa = function(id_empresa) {
        MyService.id_empresa = id_empresa;
    }
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

.controller('EmpresaDetalleCtrl', ['$scope', 'detalle_empresa', 'MyService', 'Service',
    function($scope, detalle_empresa, MyService, Service) {
        
        console.log('EmpresaDetalleCtrl');

        angular.extend($scope, {
            centerProperty: { lat: 0, lng:  0 },
            zoomProperty: 17,
            markersProperty: [{ latitude: 0, longitude: 0 }],
            clickedLatitudeProperty: null,  
            clickedLongitudeProperty: null,
        });

        $scope.empresa = detalle_empresa.get({'id_empresa': MyService.id_empresa},function (dato) {
            
            angular.forEach(dato, function () {
            
                //console.log($scope.empresa[0].positionmap_empresa);
                //console.log($scope.empresa[0].position_empresa);
                
             });

            console.log(dato[0].positionmap_empresa);
            console.log(dato[0].position_empresa);

            var centerProperty = { 'lat': '10.375725', 'lng':  '-66.955842' };
            var markersProperty = { 'latitude': '10.375725', 'longitude':  '-66.955842' };

            angular.extend($scope, {
                centerProperty: centerProperty,
                zoomProperty: 17,
                markersProperty: [markersProperty],
                clickedLatitudeProperty: null,  
                clickedLongitudeProperty: null,
            });  
        });
      
        /*angular.extend($scope, {
            centerProperty: { lat: 0, lng:  0 },
            zoomProperty: 17,
            markersProperty: [{ latitude: 0, longitude: 0 }],
            clickedLatitudeProperty: null,  
            clickedLongitudeProperty: null,
        });

        var url_rechazar = 'http://keysystems.com.ve/tulocalidad/registrar/detalle_empresa.php';
        var params = {'id_empresa': MyService.id_empresa};

        Service.getData(url_rechazar, params).then(function (response) {
            
            console.log('Service');
            console.log(response.data[0]);
            console.log(response.data[0].position_empresa);

            angular.extend($scope, {
                centerProperty: response.data[0].position_empresa,
                zoomProperty: 17,
                markersProperty: [response.data[0].positionmap_empresa],
                clickedLatitudeProperty: null,  
                clickedLongitudeProperty: null,
            });
        });*/

}]);
