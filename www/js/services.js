angular.module('starter.services', [])

.factory('Categorias', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
    var categorias = [{
        id: 0,
        categoria: 'Informatica',
        icon: 'img/ionic.png',
        empresas: informatica
    }, {
        id: 1,
        categoria: 'Pintura',
        icon: 'img/ionic.png',
        empresas: pintura
    }, {
        id: 2,
        categoria: 'Ropa',
        icon: 'img/ionic.png',
        empresas: ropa
    }, {
        id: 3,
        categoria: 'Hogar',
        icon: 'img/ionic.png'
    }, {
        id: 4,
        categoria: 'Aseo',
        icon: 'img/ionic.png',
        empresas: aseo
    }];


  //console.log(categorias[0].empresas[0]);
  return {
    all: function() {
      return categorias;
    },
    get: function(categoriaId) {
      // Simple index lookup
      return categorias[categoriaId];
    },
    detalle: function(categoriaId, empresaId) {
      // Simple index lookup
      return categorias[categoriaId].empresas[empresaId];
    }
  }
});

