angular.module('starter.services', [])

.factory('publicidad', function() {
  return {
    publicidad_empresas: function() {
        return publicidad;
    }
  }
})

.factory("MyService", function() {
  return {
    data: {}
  };
})

.factory("estados", function ($resource) {
    return $resource("http://keysystems.com.ve/tulocalidad/registrar/estados.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("categoria_estado", function ($resource) {
    return $resource("http://keysystems.com.ve/tulocalidad/registrar/categoria_estado.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("empresas_categorias", function ($resource) {
    return $resource("http://keysystems.com.ve/tulocalidad/registrar/empresas_categorias.php", //la registrar/url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("detalle_empresa", function ($resource) {
    return $resource("http://keysystems.com.ve/tulocalidad/registrar/detalle_empresa.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
});




