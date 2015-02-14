angular.module('starter.services', [])

.factory('Sections', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var sections = [{
    id: 0,
    name: 'INICIO',
    icon: './img/inicio.png',
    url: '',
    lastText: ''
  }, {
    id: 1,
    name: 'WEB',
    icon: './img/web.png',
    url: 'desarrollo-web',
    lastText: ''
  }, {
    name: 'DISEÑO',
    icon: './img/diseno.png',
    url: 'diseno-grafico',
    lastText: ''
  }, {
    name: 'ARQUITECTURA',
    icon: './img/arquitectura.png',
    url: 'aquitectura',
    lastText: ''
  }, {
    name: 'PLANES',
    icon: './img/planes.png',
    url: 'planes',
    lastText: ''
  }, {
    name: 'PORTAFOLIO',
    icon: './img/portafolio.png',
    url: 'portafolio',
    lastText: ''
  }, {
    name: 'CONTACTO',
    icon: './img/contacto.png',
    url: 'contacto',
    lastText: ''
  }];

  return {
    all: function() {
      return sections;
    },
    get: function(sectionId) {
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].id === parseInt(sectionId)) {
          return sections[i];
        }
      }
      return null;
    }
  }
})

.factory('Categorias', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categorias = [{
    id: 0,
    categoria: 'Informatica',
    icon: 'img/ionic.png',
    empresas:[
        {
            id         :  0,
            nombre     :  'key Systems',
            icon       :  'img/ionic.png',
            tel        :  '0212 - 329 00 87',
            direccion  :  'En en el fin del mundo',
            correo     :  'key@io.com'
        },
        {
            id         :  1,
            nombre     :  'ArepaSotf',
            icon       :  'img/ionic.png',
            tel        :  '0212 - 329 00 87',
            direccion  :  'En en el fin del mundo',
            correo     :  'Arepa@io.com' 
        }
    ]
  }, {
    id: 1,
    categoria: 'Pintura',
    icon: 'img/ionic.png'
  }, {
    id: 2,
    categoria: 'Ropa',
    icon: 'img/ionic.png'
  }, {
    id: 3,
    categoria: 'Hogar',
    icon: 'img/ionic.png'
  }, {
    id: 4,
    categoria: 'Festejo',
    icon: 'img/ionic.png'
  }];


  return {
    all: function() {
      return categorias;
    },
    get: function(categoriaId) {
      // Simple index lookup
      return categorias[categoriaId];
    }
  }
});

