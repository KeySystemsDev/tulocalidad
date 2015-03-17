angular.module('starter.services', [])

.factory('Categorias', function() {
	var estadoId = localStorage.getItem('estadoid');
    var categorias = [
        {"id":0,"categoria":"Emergencias","icon":"img/categorias/logo.png","empresa":empresa_1},
        {"id":1,"categoria":"Clinicas","icon":"img/categorias/logo.png","empresa":null},
        {"id":2,"categoria":"Hospitales","icon":"img/categorias/logo.png","empresa":null},
        {"id":3,"categoria":"Policias","icon":"img/categorias/logo.png","empresa":null},
        {"id":4,"categoria":"Bancos","icon":"img/categorias/logo.png","empresa":null},
        {"id":5,"categoria":"Taxis","icon":"img/categorias/logo.png","empresa":null},
        {"id":6,"categoria":"Grúas","icon":"img/categorias/logo.png","empresa":null},
        {"id":7,"categoria":"Farmacias","icon":"img/categorias/logo.png","empresa":null},
        {"id":8,"categoria":"Ambulatorios","icon":"img/categorias/logo.png","empresa":null},
        {"id":9,"categoria":"Asesoría Legal","icon":"img/categorias/logo.png","empresa":null},
        {"id":10,"categoria":"Asesoría Contable","icon":"img/categorias/logo.png","empresa":null},
        {"id":11,"categoria":"Asesoría Informática","icon":"img/categorias/logo.png","empresa":null},
        {"id":12,"categoria":"Electrónica","icon":"img/categorias/logo.png","empresa":null},
        {"id":13,"categoria":"Herrerias","icon":"img/categorias/logo.png","empresa":null},
        {"id":14,"categoria":"Escuelas","icon":"img/categorias/logo.png","empresa":null},
        {"id":15,"categoria":"Liceos","icon":"img/categorias/logo.png","empresa":null},
        {"id":16,"categoria":"Universidades","icon":"img/categorias/logo.png","empresa":null},
        {"id":17,"categoria":"Guarderias","icon":"img/categorias/logo.png","empresa":null},
        {"id":18,"categoria":"Centros Comerciales","icon":"img/categorias/logo.png","empresa":null},
        {"id":19,"categoria":"Alquiler y Venta de Peliculas","icon":"img/categorias/logo.png","empresa":null},
        {"id":20,"categoria":"Tiendas de Ropa","icon":"img/categorias/logo.png","empresa":null},
        {"id":21,"categoria":"Joyerias","icon":"img/categorias/logo.png","empresa":null},
        {"id":22,"categoria":"Perfumerías","icon":"img/categorias/logo.png","empresa":null},
        {"id":23,"categoria":"Tintorerías","icon":"img/categorias/logo.png","empresa":null},
        {"id":24,"categoria":"Gimnasios","icon":"img/categorias/logo.png","empresa":null},
        {"id":25,"categoria":"Carpintería","icon":"img/categorias/logo.png","empresa":null},
        {"id":26,"categoria":"Mudanzas","icon":"img/categorias/logo.png","empresa":null},
        {"id":27,"categoria":"Fumigaciones","icon":"img/categorias/logo.png","empresa":null},
        {"id":28,"categoria":"Recreadores","icon":"img/categorias/logo.png","empresa":null},
        {"id":29,"categoria":"Agencias de Festejos","icon":"img/categorias/logo.png","empresa":null},
        {"id":30,"categoria":"Zapaterías","icon":"img/categorias/logo.png","empresa":null},
        {"id":31,"categoria":"Reparación de Calzado","icon":"img/categorias/logo.png","empresa":null},
        {"id":32,"categoria":"Ferreterias","icon":"img/categorias/logo.png","empresa":null},
        {"id":33,"categoria":"Bombas de Gasolina","icon":"img/categorias/logo.png","empresa":null},
        {"id":34,"categoria":"Cines","icon":"img/categorias/logo.png","empresa":null},
        {"id":35,"categoria":"Video Juegos","icon":"img/categorias/logo.png","empresa":null},
        {"id":36,"categoria":"Mercerias","icon":"img/categorias/logo.png","empresa":null},
        {"id":37,"categoria":"Reposteria","icon":"img/categorias/logo.png","empresa":null},
        {"id":38,"categoria":"Academias","icon":"img/categorias/logo.png","empresa":null},
        {"id":39,"categoria":"Institutos","icon":"img/categorias/logo.png","empresa":null},
        {"id":40,"categoria":"Super Mercados","icon":"img/categorias/logo.png","empresa":null},
        {"id":41,"categoria":"Seguros","icon":"img/categorias/logo.png","empresa":null},
        {"id":42,"categoria":"Restaurantes","icon":"img/categorias/logo.png","empresa":null},
        {"id":43,"categoria":"Hoteles","icon":"img/categorias/logo.png","empresa":null},
        {"id":44,"categoria":"Moteles","icon":"img/categorias/logo.png","empresa":null},
        {"id":45,"categoria":"Talleres","icon":"img/categorias/logo.png","empresa":null},
        {"id":46,"categoria":"Kioskos","icon":"img/categorias/logo.png","empresa":null},
        {"id":47,"categoria":"Grupòs de Autoayuda","icon":"img/categorias/logo.png","empresa":null},
        {"id":48,"categoria":"Fundaciones","icon":"img/categorias/logo.png","empresa":null},
        {"id":49,"categoria":"Costureras","icon":"img/categorias/logo.png","empresa":null},
        {"id":50,"categoria":"Locales Nocturnos","icon":"img/categorias/logo.png","empresa":null},
        {"id":51,"categoria":"Consultorios","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Entidades Gubernamentales","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Respuestos","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Pizzerias","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Panaderias","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Opticas","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Mueblerías","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Floristerias","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Estacionamientos","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Electro Auto","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Discotecas","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Comida Rapida","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Clubes","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Chiveras","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Caucheras","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Consesionarios","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Electrodomesticos","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Salon de Belleza","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Barberias","icon":"img/categorias/logo.png","empresa":null},
        {"id":52,"categoria":"Estéticas","icon":"img/categorias/logo.png","empresa":null}
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
})

.factory("MyService", function() {
  return {
    data: {}
  };
})

.factory("estados", function ($resource) {
    return $resource("http://keysystems.com.ve/tulocalidad/estados.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("categoria_estado", function ($resource) {
    return $resource("http://keysystems.com.ve/tulocalidad/categoria_estado.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
});



