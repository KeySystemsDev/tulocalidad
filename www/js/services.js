angular.module('starter.services', [])

.factory('Categorias', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
    var categorias = [{
        id: 0,
        categoria: 'Informatica',
        icon: 'img/ionic.png',
        empresas:[
            {
                categoriaId:  0,
                empresaId  :  0,
                nombre     :  'key Systems1',
                icon       :  'img/ionic.png',
                tel        :  '0212 - 329 00 87',
                direccion  :  'En en el fin del mundo',
                correo     :  'key@io.com',
                url        :  'www.keySystems1.com'
            },
            {
                categoriaId:  0,
                empresaId  :  1,
                nombre     :  'ArepaSotf1',
                icon       :  'img/ionic.png',
                tel        :  '0212 - 329 00 87',
                direccion  :  'En en el fin del mundo',
                correo     :  'Arepa@io.com',
                url        :  'www.ArepaSotf1.com' 
            }
        ]
    }, {
        id: 1,
        categoria: 'Pintura',
        icon: 'img/ionic.png',
        empresas:[
            {
                categoriaId:  1,
                empresaId  :  0,                
                nombre     :  'key Systems2',
                icon       :  'img/ionic.png',
                tel        :  '0212 - 329 00 87',
                direccion  :  'En en el fin del mundo',
                correo     :  'key@io.com',
                url        :  'www.keySystems2.com'
            },
            {
                categoriaId:  1,
                empresaId  :  1,
                nombre     :  'ArepaSotf2',
                icon       :  'img/ionic.png',
                tel        :  '0212 - 329 00 87',
                direccion  :  'En en el fin del mundo',
                correo     :  'Arepa@io.com',
                url        :  'www.ArepaSotf2.com' 
            }
        ]
    }, {
        id: 2,
        categoria: 'Ropa',
        icon: 'img/ionic.png',
        empresas:[
            {
                categoriaId:  2,
                empresaId  :  0,
                nombre     :  'key Systems3',
                icon       :  'img/ionic.png',
                tel        :  '0212 - 329 00 87',
                direccion  :  'En en el fin del mundo',
                correo     :  'key@io.com',
                url        :  'www.keySystems3.com'
            },
            {
                categoriaId:  2,
                empresaId  :  1,
                nombre     :  'ArepaSotf3',
                icon       :  'img/ionic.png',
                tel        :  '0212 - 329 00 87',
                direccion  :  'En en el fin del mundo',
                correo     :  'Arepa@io.com',
                url        :  'www.ArepaSotf3.com' 
            }
        ]
    }, {
        id: 3,
        categoria: 'Hogar',
        icon: 'img/ionic.png'
    }, {
        id: 4,
        categoria: 'Festejo',
        icon: 'img/ionic.png'
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

