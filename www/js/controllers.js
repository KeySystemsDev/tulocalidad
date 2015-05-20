angular.module('starter.controllers', [])

.controller('ConfiguracionCtrl', function(){

})

.controller('tulocalidadCtrl', function($scope, $state,  $ionicModal, publicidad, estados, MyService) {
    $scope.gocategoria = function() {
        $state.go('categoria');
    };
    $scope.goestados = function() {
        $state.go('estados');
    };
    
    if (localStorage.getItem('estado') != null) {
        localStorage.getItem('estado');
        localStorage.getItem('id_estado');
    }else{
        localStorage.setItem('estado', 'Miranda');
        localStorage.setItem('id_estado', '0');
    }

    $scope.estado = localStorage.getItem('estado');
    $scope.id_estado = localStorage.getItem('id_estado');

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
        localStorage.setItem('id_estado', $scope.predeterminada.id.id_estado);
        $scope.estado = localStorage.getItem('estado');
        document.location.reload();
    };

    $scope.acerca = function(){
        $state.go('acerca');
    }

    $scope.publicidades = publicidad.get({'id_estado': localStorage.getItem('id_estado')});

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

.controller('EmpresaDetalleCtrl', function($scope, detalle_empresa, MyService) {
    console.log('EmpresaDetalleCtrl');

    

    $scope.empresa = detalle_empresa.get({'id_empresa': MyService.id_empresa},
        
        function (empresa) {
            
            $scope.map = {  center: 
                                {   latitude: empresa[0].positionmap_empresa_latitude, 
                                    longitude:  empresa[0].positionmap_empresa_longitude
                                },
                            marker: 
                                {   latitude: empresa[0].positionmap_empresa_latitude, 
                                    longitude:  empresa[0].positionmap_empresa_longitude
                                }, 
                            zoom: 17, 
                            id: 0,
                            options: {scrollwheel: false}
                        };
        }
    );

});
