angular.module('starter.controllers', [])

.controller('InitKey', function($scope) {
    console.log('InitKey');
})

.controller('CategoriasCtrl', function($scope, Categorias) {
    $scope.categorias = Categorias.all();
})

.controller('EmpresaCtrl', function($scope, $stateParams, Categorias) {
    $scope.categoria = Categorias.get($stateParams.categoriaId);
    console.log($scope.categoria);
})

.controller('EmpresaDetalleCtrl', function($scope, $stateParams, Categorias) {
    $scope.empresa = Categorias.detalai($stateParams.empresaId);
    console.log('$scope.empresa')
    console.log($scope.empresa);
});
