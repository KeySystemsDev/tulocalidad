angular.module('starter.services', [])

.factory('Categorias', function() {
	var estadoId = localStorage.getItem('estadoid');
    var categorias = [
        {"id":0,"categoria":"Emergencias Médicas","icon":"img/categorias/heart258.png","descripcion":"Ambulancias, Hospitales, Farmacias.","empresa":empresa_1},
        {"id":1,"categoria":"Emergencias Viales","icon":"img/categorias/car52.png","descripcion":"Grúas, Transito terrestre.","empresa":''},
        {"id":2,"categoria":"Seguridad","icon":"img/categorias/police4.png","descripcion":"Policia, CICPC","empresa":''},
        {"id":3,"categoria":"Bancos","icon":"img/categorias/piggy7.png","descripcion":"Centrales y sucursales","empresa":''},
        {"id":4,"categoria":"Transporte","icon":"img/categorias/transport19.png","descripcion":"Líneas e individuales.","empresa":''},
        {"id":5,"categoria":"Centros Comerciales","icon":"img/categorias/store5.png","descripcion":"Lugares de entretenimiento.","empresa":''},
        {"id":6,"categoria":"Accesorios para Vehículos","icon":"img/categorias/electric42.png","descripcion":"Repuestos nuevos y usados.","empresa":''},
        {"id":7,"categoria":"Animales y Mascotas","icon":"img/categorias/github7.png","descripcion":"Alimentos y accesorios.","empresa":''},
        {"id":8,"categoria":"Bebes","icon":"img/categorias/pregnancy.png","descripcion":"Ropa, zapatosy más.","empresa":''},
        {"id":9,"categoria":"Cámaras y Accesorios","icon":"img/categorias/photo8.png","descripcion":"Profesionales y personales.","empresa":''},
        {"id":10,"categoria":"Celulares y Teléfonos","icon":"img/categorias/phone98.png","descripcion":"Fijos y móviles.","empresa":''},
        {"id":11,"categoria":"Coleccionables y Hobbies","icon":"img/categorias/antique2.png","descripcion":"Objetos antiguos.","empresa":''},
        {"id":12,"categoria":"Consolas y Videojuegos","icon":"img/categorias/joystick8.png","descripcion":"Xbox, Play Station, Wii y más.","empresa":''},
        {"id":13,"categoria":"Deportes y Fitnes","icon":"img/categorias/hand95.png","descripcion":"Gimnasios, Productos y más.","empresa":''},
        {"id":14,"categoria":"Electrodomésticos","icon":"img/categorias/vacuum6.png","descripcion":"Linea Blanca en general.","empresa":''},
        {"id":15,"categoria":"Electrónica, Audio y Video","icon":"img/categorias/microphone46.png","descripcion":"Tablets, Ipod y más.","empresa":''},
        {"id":16,"categoria":"Hogar y Muebles","icon":"img/categorias/plug38.png","descripcion":"Estantes, Cocinas y más.","empresa":''},
        {"id":17,"categoria":"Industrias","icon":"img/categorias/industry4.png","descripcion":"Carpinteria, Herrerias y más.","empresa":''},
        {"id":18,"categoria":"Música","icon":"img/categorias/drums2.png","descripcion":"Academias, Instrumentos y más. ","empresa":''},
        {"id":19,"categoria":"Juegos y Juguetes","icon":"img/categorias/carrousel.png","descripcion":"Jugeterías","empresa":''},
        {"id":20,"categoria":"Libros, Música y Películas","icon":"img/categorias/read1.png","descripcion":"Librerías, Tiendas de música y más.","empresa":''},
        {"id":21,"categoria":"Relojes, Joyas y Bisutería","icon":"img/categorias/wristwatch4.png","descripcion":"Joyerías","empresa":''},
        {"id":22,"categoria":"Ropa, Zapatos y Accesorios","icon":"img/categorias/bedroom16.png","descripcion":"Damas y Caballeros.","empresa":''},
        {"id":23,"categoria":"Salud y Belleza","icon":"img/categorias/thermometer21.png","descripcion":"Estéticas, Spa y más.","empresa":''}
    ];

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
        return categorias[categoriaId].empresa[empresaId];
    }
  }
});

