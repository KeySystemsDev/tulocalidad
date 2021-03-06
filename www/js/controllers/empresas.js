angular.module('tulocalidad.controllers')

.controller('EmpresaCtrl', function($scope, $ionicHistory, $rootScope, $http, $ionicScrollDelegate, empresas_categorias) {      
    console.log('EmpresaCtrl');

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };

    $scope.empresas = empresas_categorias.get({ 'id_estado': localStorage.getItem('id_estado'),
                                               'id_categoria': $rootScope.id_categoria});

    $scope.RecargarEmpresas = function(){
        $http.get( $rootScope.HOST_NAME + 'movil/empresa/empresa-categoria', {
            params: {
                id_estado: localStorage.getItem('id_estado'),
                id_categoria: $rootScope.id_categoria
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