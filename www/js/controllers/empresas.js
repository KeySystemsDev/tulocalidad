angular.module('tulocalidad.controllers')

.controller('EmpresaCtrl', function($scope, $rootScope, $http, $ionicScrollDelegate, empresas_categorias) {      
    console.log('EmpresaCtrl');

    $scope.empresas = empresas_categorias.get({ 'id_estado': localStorage.getItem('id_estado'),
                                               'id_categoria': $rootScope.id_categoria});

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
        $rootScope.id_empresa = id_empresa;
    }
});