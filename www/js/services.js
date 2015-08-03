angular.module('tulocalidad.services', [])

.factory("MyService", function() {
  return {
    data: {}
  };
})

.factory("publicidad", function ($resource) {
    return $resource("http://www.tulocalidad.com.ve/movil/empresa/publicidad", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("estados", function ($resource) {
    return $resource("http://www.tulocalidad.com.ve/movil/empresa/estados", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("categoria_estado", function ($resource) {
    return $resource("http://www.tulocalidad.com.ve/movil/empresa/categoria-estado", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("empresas_categorias", function ($resource) {
    return $resource("http://www.tulocalidad.com.ve/movil/empresa/empresa-categoria", //la registrar/url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("detalle_empresa", function ($resource) {
    return $resource("http://www.tulocalidad.com.ve/movil/empresa/empresa-detalle", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
});




