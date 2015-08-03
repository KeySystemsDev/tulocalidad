// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [ 'ionic', 
                            'starter.controllers', 
                            'starter.services',
                            'uiGmapgoogle-maps',
                            'ngResource', 
                            'ngCordova', 
                            'chieffancypants.loadingBar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
  
  cfpLoadingBarProvider.includeSpinner = true;

  $stateProvider

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
      //controller: 'AppCtrl'
    })

    .state('tab.recomendados', {
      url: "/recomendados",
      views: {
        'tab-recomendados': {
          templateUrl: "templates/recomendados.html",
          controller: 'RecomendadosCtrl'
        }
      }
    })

    .state('tab.acerca', {
      url: "/acerca",
      views: {
        'tab-recomendados': {
          templateUrl: "templates/acerca.html",
          //controller: 'acercaCtrl'
        }
      }
    })

    
    .state('tab.configuracion', {
      url: "/configuracion",
      views: {
        'tab-recomendados': {
          templateUrl: "templates/configuracion.html",
          controller: 'ConfiguracionCtrl'
        }
      }
    })

    .state('tab.categoria', {
      url: "/categoria",
      views: {
        'tab-categoria': {
          templateUrl: "templates/categoria.html",
          controller: 'CategoriasCtrl'
        }
      }
    })

    .state('tab.empresas', {
      url: "/empresas/:id_categoria",
      views: {
        'tab-categoria': {
          templateUrl: "templates/empresas.html",
          controller: 'EmpresaCtrl'
        }
      }
    })

    .state('tab.empresas-detalle', {
      url: "/empresas-detalle/:id_empresa",
      views: {
        'tab-categoria': {
          templateUrl: "templates/empresas-detalle.html",
          controller: 'EmpresaDetalleCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/recomendados');
})

.directive('browseTo', function ($ionicGesture) {
 return {
  restrict: 'A',
  link: function ($scope, $element, $attrs) {
   var handleTap = function (e) {
    // todo: capture Google Analytics here
    var inAppBrowser = window.open(encodeURI($attrs.browseTo), '_system');
   };
   var tapGesture = $ionicGesture.on('tap', handleTap, $element);
   $scope.$on('$destroy', function () {
    // Clean up - unbind drag gesture handler
    $ionicGesture.off(tapGesture, 'tap', handleTap);
   });
  }
 }
});
