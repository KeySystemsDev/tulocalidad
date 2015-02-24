angular.module('starter.services', [])

.factory('Categorias', function() {
	var estadoId = localStorage.getItem('estadoid');
  // Might use a resource here that returns a JSON array
  // Some fake testing data
    var categorias = [{
        id: 0,
        categoria: 'Emergencias',
        icon: 'img/categorias/alert11.png',
        empresas: emergencias
    }, {
        id: 1,
        categoria: 'Accesorios para Vehículos',
        icon: 'img/categorias/electric42.png',
        empresas: pintura
    }, {
        id: 2,
        categoria: 'Animales y Mascotas',
        icon: 'img/categorias/github7.png',
        empresas: ropa
    }, {
        id: 3,
        categoria: 'Bebes',
        icon: 'img/categorias/pregnancy.png'
    }, {
        id: 4,
        categoria: 'Cámaras y Accesorios',
        icon: 'img/categorias/photo8.png',
        empresas: aseo
    }, {
        id: 5,
        categoria: 'Celulares y Teléfonos',
        icon: 'img/categorias/phone98.png',
        empresas: ''
    }, {
        id: 6,
        categoria: 'Coleccionables y Hobbies',
        icon: 'img/categorias/antique2.png',
        empresas: ''
    }, {
        id: 6,
        categoria: 'Consolas y Videojuegos',
        icon: 'img/categorias/joystick8.png',
        empresas: ''
    }, {
        id: 7,
        categoria: 'Deportes y Fitnes',
        icon: 'img/categorias/hand95.png',
        empresas: ''
    }, {
        id: 8,
        categoria: 'Electrodomésticos',
        icon: 'img/categorias/vacuum6.png',
        empresas: ''
    }, {
        id: 9,
        categoria: 'Electrónica, Audio y Video',
        icon: 'img/categorias/microphone46.png',
        empresas: ''
    }, {
        id: 9,
        categoria: 'Electrónica, Audio y Video',
        icon: 'img/categorias/microphone46.png',
        empresas: ''
    }, {
        id: 9,
        categoria: 'Hogar y Muebles',
        icon: 'img/categorias/plug38.png',
        empresas: ''
    }, {
        id: 10,
        categoria: 'Industrias',
        icon: 'img/categorias/industry4.png',
        empresas: ''
    }, {
        id: 11,
        categoria: 'Instrumentos Musicales',
        icon: 'img/categorias/drums2.png',
        empresas: ''
    }, {
        id: 12,
        categoria: 'Juegos y Juguetes',
        icon: 'img/categorias/carrousel.png',
        empresas: ''
    }, {
        id: 13,
        categoria: 'Libros, Música y Películas',
        icon: 'img/categorias/read1.png',
        empresas: ''
    }, {
        id: 14,
        categoria: 'Relojes, Joyas y Bisutería',
        icon: 'img/categorias/wristwatch4.png',
        empresas: ''
    }, {
        id: 14,
        categoria: 'Ropa, Zapatos y Accesorios',
        icon: 'img/categorias/bedroom16.png',
        empresas: ''
    }, {
        id: 15,
        categoria: 'Salud y Belleza',
        icon: 'img/categorias/thermometer21.png',
        empresas: ''
    }];

  //console.log(categorias[0].empresas[0]);
  return {
    all: function() {
        return categorias;
    },
    estadoall: function() {
        return estados;
    },
    get: function(categoriaId) {
        return categorias[categoriaId];
    },
    detalle: function(categoriaId, empresaId) {
        return categorias[categoriaId].empresas[empresaId];
    }
  }
});

