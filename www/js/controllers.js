angular.module('starter.controllers', [])

.controller('ConfiguracionCtrl', function($scope, $ionicModal, estados){
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
})

.controller('RecomendadosCtrl', function($scope, $http, $rootScope, $state, $window, $ionicModal, $cordovaGeolocation, publicidad, estados, MyService) {

    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    
    $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function (position) {
              $rootScope.lat  = position.coords.latitude;
              $rootScope.long = position.coords.longitude;
        }, function(err) {
            // error
    });
    
    if (localStorage.getItem('estado') != null) {
        localStorage.getItem('estado');
        localStorage.getItem('id_estado');
    }else{
        localStorage.setItem('estado', 'Miranda');
        localStorage.setItem('id_estado', '0');
    }

    $scope.estado = localStorage.getItem('estado');

    $scope.publicidades = publicidad.get({'id_estado': localStorage.getItem('id_estado')});

    $scope.RecargarPublicidad = function(){
        $http.get('http://www.tulocalidad.com.ve/movil/empresa/publicidad', {id_estado: localStorage.getItem('id_estado')})
            .success(function(publicidad) {
                $scope.publicidades = publicidad;
            })
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
    }

    $scope.id_empresa = function(id_empresa) {
        MyService.id_empresa = id_empresa;
    }
})

.controller('CategoriasCtrl', function($scope, $http, $ionicScrollDelegate, categoria_estado, MyService) {
    console.log('CategoriasCtrl');
    
    $scope.estado = localStorage.getItem('estado');
    $scope.categorias = categoria_estado.get({'id_estado': localStorage.getItem('id_estado')});

    $scope.RecargarCategorias = function(){
        $http.get('http://www.tulocalidad.com.ve/movil/empresa/categoria-estado', {id_estado: localStorage.getItem('id_estado')})
            .success(function(categorias) {
                $scope.categorias = categorias;
            })
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
    }

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

.controller('EmpresaCtrl', function($scope, $http, $ionicScrollDelegate, empresas_categorias, MyService) {      
    console.log('EmpresaCtrl');

    $scope.empresas = empresas_categorias.get({ 'id_estado': localStorage.getItem('id_estado'),
                                               'id_categoria': MyService.id_categoria});

    $scope.RecargarEmpresas = function(){
        $http.get('http://www.tulocalidad.com.ve/movil/empresa/empresa-categoria', {
            params: {
                id_estado: localStorage.getItem('id_estado'),
                id_categoria: MyService.id_categoria
                }
            })
            .success(function(empresas) {
                $scope.empresas = empresas;
                console.log($scope.empresas);
            })
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
    }

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

.controller('EmpresaDetalleCtrl', function($scope, $window, detalle_empresa, MyService) {
    console.log('EmpresaDetalleCtrl');

    $scope.openGeo = function(latitude, longitude) {
        $window.open('geo:' + latitude + ',' + longitude + '?z=11&q=10.349653,-67.022355(Treasure)', '_system', 'location=yes');
    };

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
