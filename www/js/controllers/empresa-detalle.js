angular.module('tulocalidad.controllers')

.controller('EmpresaDetalleCtrl', function($scope, $rootScope, $window, detalle_empresa) {
    console.log('EmpresaDetalleCtrl');

    $scope.openGeo = function(latitude, longitude) {
        $window.open('geo:' + latitude + ',' + longitude + '?z=11&q=10.349653,-67.022355(Treasure)', '_system', 'location=yes');
    };

    $scope.empresa = detalle_empresa.get({'id_empresa': $rootScope.id_empresa},
        
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
