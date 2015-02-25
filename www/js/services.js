angular.module('starter.services', [])

.factory('Categorias', function() {
	var estadoId = localStorage.getItem('estadoid');
  // Might use a resource here that returns a JSON array
  // Some fake testing data
    var categorias = [{
        id: 0,
        categoria: 'Emergencias Médicas',
        icon: 'img/categorias/alert11.png',
        descripcion: 'Ambulancias, Hospitales, Farmacias.',
        empresas: emergencias
    }, {
        id: 1,
        categoria: 'Emergencias Viales',
        icon: 'img/categorias/electric42.png',
        descripcion: 'Grúas, Transito terrestre.',
        empresas: ''
    }, {
        id: 2,
        categoria: 'Seguridad',
        icon: 'img/categorias/electric42.png',
        descripcion: 'Policia, CICPC.',
        empresas: ''
    }, {
        id: 3,
        categoria: 'Bancos',
        icon: 'img/categorias/electric42.png',
        descripcion: 'Centrates y Sucursales',
        empresas: ''
    }, {
        id: 4,
        categoria: 'Taxis',
        icon: 'img/categorias/electric42.png',
        descripcion: 'Líneas e individuales.',
        empresas: ''
    }, {
        id: 5,
        categoria: 'Accesorios para Vehículos',
        icon: 'img/categorias/electric42.png',
        descripcion: 'Repuestos nuevos y usados.',
        empresas: ''
    }, {
        id: 6,
        categoria: 'Animales y Mascotas',
        icon: 'img/categorias/github7.png',
        descripcion: 'Alimentos y accesorios.',
        empresas: ''
    }, {
        id: 7,
        categoria: 'Bebes',
        icon: 'img/categorias/pregnancy.png',
        descripcion: 'Ropa, zapatos, agencias.',
    }, {
        id: 8,
        categoria: 'Cámaras y Accesorios',
        icon: 'img/categorias/photo8.png',
        descripcion: 'Profesionales y personales.',
        empresas: ''
    }, {
        id: 9,
        categoria: 'Celulares y Teléfonos',
        icon: 'img/categorias/phone98.png',
        descripcion: 'Fijos y móviles.',
        empresas: ''
    }, {
        id: 10,
        categoria: 'Coleccionables y Hobbies',
        icon: 'img/categorias/antique2.png',
        descripcion: 'Objetos antiguos o coleccionables.',
        empresas: ''
    }, {
        id: 11,
        categoria: 'Consolas y Videojuegos',
        icon: 'img/categorias/joystick8.png',
        descripcion: 'Xbox, Play Station, Wii y más.',
        empresas: ''
    }, {
        id: 12,
        categoria: 'Deportes y Fitnes',
        icon: 'img/categorias/hand95.png',
        descripcion: 'Gimnasios, Productos y más.',
        empresas: ''
    }, {
        id: 13,
        categoria: 'Electrodomésticos',
        icon: 'img/categorias/vacuum6.png',
        descripcion: 'Linea Blanca en general.',
        empresas: ''
    }, {
        id: 14,
        categoria: 'Electrónica, Audio y Video',
        icon: 'img/categorias/microphone46.png',
        descripcion: 'Tablets, Ipod y más.',
        empresas: ''
    }, {
        id: 15,
        categoria: 'Hogar y Muebles',
        icon: 'img/categorias/plug38.png',
        descripcion: 'Estantes, Cocinas y más.',
        empresas: ''
    }, {
        id: 16,
        categoria: 'Industrias',
        icon: 'img/categorias/industry4.png',
        descripcion: 'Carpinteria, Herrerias y más.',
        empresas: ''
    }, {
        id: 17,
        categoria: 'Instrumentos Musicales',
        icon: 'img/categorias/drums2.png',
        descripcion: 'Violín, Flauta, Cuatro y más.',
        empresas: ''
    }, {
        id: 18,
        categoria: 'Juegos y Juguetes',
        icon: 'img/categorias/carrousel.png',
        descripcion: 'Jugeterías.',
        empresas: ''
    }, {
        id: 19,
        categoria: 'Libros, Música y Películas',
        icon: 'img/categorias/read1.png',
        descripcion: 'Librerías, Tiendas de música y más.',
        empresas: ''
    }, {
        id: 20,
        categoria: 'Relojes, Joyas y Bisutería',
        icon: 'img/categorias/wristwatch4.png',
        descripcion: 'Joyerías.',
        empresas: ''
    }, {
        id: 21,
        categoria: 'Ropa, Zapatos y Accesorios',
        icon: 'img/categorias/bedroom16.png',
        descripcion: 'Damas y Caballeros.',
        empresas: ''
    }, {
        id: 22,
        categoria: 'Salud y Belleza',
        icon: 'img/categorias/thermometer21.png',
        descripcion: 'Estéticas, Spa y más.',
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
    publicidadall: function() {
        return publicidad;
    },
    get: function(categoriaId) {
        return categorias[categoriaId];
    },
    detalle: function(categoriaId, empresaId) {
        return categorias[categoriaId].empresas[empresaId];
    }
  }
});

