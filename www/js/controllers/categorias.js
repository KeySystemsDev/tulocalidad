angular.module('tulocalidad.controllers')

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