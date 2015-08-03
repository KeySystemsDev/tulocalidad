angular.module('tulocalidad.controllers')

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
});