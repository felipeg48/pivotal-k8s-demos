var app = angular.module('myapp', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider, $compileProvider, $locationProvider){

	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state('invex', {
		url:"/invex",
		views: {
			"view" : {
				templateUrl: 'views/01-acercade.jsp'
			}
		}
	})
	.state('home', {
		url:"/home",
		views: {
			"view" : {
				templateUrl: 'views/home.jsp',
				controller: 'HomeController'
			}
		}
	})
	.state('invexTarjetas', {
		url:"/invexTarjetas",
		views: {
			"view" : {
				templateUrl: 'views/02-acercadetarjetas.jsp'
			}
		}
	})
	.state('tarjetas', {
		url:"/tarjetas",
		views: {
			"view" : {
				templateUrl: 'views/03-tarjetas.jsp'
			}
		}
	})
	.state('tarjetas.portafolio', {
		url:"/portafolio",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/principal.jsp'
			}
		}
	})
	.state('tarjetas.volaris', {
		url:"/volaris",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/04-volaris.jsp'
			}
		}
	})
        .state('tarjetas.volaris0', {
            url:"/volaris0",
            views: {
                "view-tarjetas" : {
                    templateUrl: 'views/template/43-volaris0.jsp'
                }
            }
        })
	.state('tarjetas.volaris2', {
		url:"/volaris2",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/05-volaris2.html'
			}
		}
	})
	.state('tarjetas.solicitalaYa', {
		url:"/solicitalaYa",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/solicitalaYa.html'
			}
		}
	})
	.state('tarjetas.manchester', {
		url:"/manchester",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/06-manchester.jsp'
			}
		}
	})
	.state('tarjetas.sicardplusinvex', {
		url:"/sicardplusinvex",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/07-sicardplus.jsp'
			}
		}
	})
	.state('tarjetas.platinum', {
		url:"/platinum",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/08-platinum.jsp'
			}
		}
	})
	.state('tarjetas.sicardmc', {
		url:"/sicardmc",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/09-sicardmc.jsp'
			}
		}
	})
	.state('tarjetas.sicardplus', {
		url:"/sicardplus",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/10-sicardplus.jsp'
			}
		}
	})
	.state('tarjetas.sicardplatinum', {
		url:"/sicardplatinum",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/11-sicardplatinum.jsp'
			}
		}
	})
	.state('tarjetas.sicardbasica', {
		url:"/sicardbasica",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/12-sicardbasica.jsp'
			}
		}
	})
	.state('tarjetas.mibanco', {
		url:"/mibanco",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/13-mibanco.jsp'
			}
		}
	})
	.state('tarjetas.business', {
		url:"/business",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/14-business.jsp'
			}
		}
	})
	.state('tarjetas.cibancoOro', {
		url:"/cibancoOro",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/36-orocibanco.jsp'
			}
		}
	})
	.state('tarjetas.lowes', {
		url:"/lowes",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/39-lowes.jsp'
			}
		}
	})
	.state('tarjetas.fragua', {
		url:"/fragua",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/40-fragua.jsp'
			}
		}
	})
	.state('tarjetas.mercadoLibre', {
		url:"/mercadoLibre",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/60-mercado-libre.jsp'
			}
		}
	})
	.state('tarjetas.multivaOro', {
		url:"/multivaOro",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/55-multiva-oro.jsp'
			}
		}
	})
	.state('tarjetas.multivaPlatinum', {
		url:"/multivaPlatinum",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/56-multiva-platinum.jsp'
			}
		}
	})
	.state('tarjetas.genera', {
		url:"/genera",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/62-genera.jsp'
			}
		}
	})
	.state('pagaTuTarjeta', {
		url:"/pagaTuTarjeta",
		views: {
			"view" : {
				templateUrl: 'views/15-pagatutarjeta.jsp'
			}
		}
	})
	.state('domiciliaTuTarjeta', {
		url:"/domiciliaTuTarjeta",
		views: {
			"view" : {
				templateUrl: 'views/16-domiciliatutarjeta.jsp'
			}
		}
	})
	.state('pagoDeServicios', {
		url:"/pagoDeServicios",
		views: {
			"view" : {
				templateUrl: 'views/17-pagodeservicios.jsp'
			}
		}
	})
	.state('centralDePagos', {
		url:"/centralDePagos",
		views: {
			"view" : {
				templateUrl: 'views/18-hub.jsp'
			}
		}
	})
	.state('mesessinintereses', {
		url:"/mesessinintereses",
		views: {
			"view" : {
				templateUrl: 'views/26-mesessinintereses.jsp'
			}
		}
	})
	.state('visa', {
		url:"/visa",
		views: {
			"view" : {
				templateUrl: 'views/27-visa.jsp'
			}
		}
	})
	.state('bumeran', {
		url:"/bumeran",
		views: {
			"view" : {
				templateUrl: 'views/28-bumeran.jsp'
			}
		}
	})
	.state('segmentadas', {
		url:"/segmentadas",
		views: {
			"view" : {
				templateUrl: 'views/29-segmentadas.jsp'
			}
		}
	})
	.state('recompensasSelect', {
		url:"/recompensasSelect",
		views: {
			"view" : {
				templateUrl: 'views/19-recompensas-select.jsp'
			}
		}
	})
	.state('recompensasIndigo', {
		url:"/recompensasIndigo",
		views: {
			"view" : {
				templateUrl: 'views/20-recompensas-indigo.jsp'
			}
		}
	})
	.state('recompensasVolaris', {
		url:"/recompensasVolaris",
		views: {
			"view" : {
				templateUrl: 'views/21-volaris.jsp'
			}
		}
	})
	.state('bancos', {
		url:"/bancos",
		views: {
			"view" : {
				templateUrl: 'views/22-bancos.jsp'
			}
		}
	})
	.state('superMercados', {
		url:"/superMercados",
		views: {
			"view" : {
				templateUrl: 'views/23-supermercados.jsp'
			}
		}
	})
	.state('pagosPorInternet', {
		url:"/pagosPorInternet",
		views: {
			"view" : {
				templateUrl: 'views/24-pagosporinternet.jsp'
			}
		}
	})
	.state('recomendaciones', {
		url:"/recomendaciones",
		views: {
			"view" : {
				templateUrl: 'views/25-recomendaciones.jsp'
			}
		}
	})
	.state('contacto', {
		url:"/contacto",
		views: {
			"view" : {
				templateUrl: 'views/31-contacto.jsp'
			}
		}
	})
	.state('asistencia', {
		url:"/asistencia",
		views: {
			"view" : {
				templateUrl: 'views/32-asistenciasyseguros.jsp'
			}
		}
	})
	.state('educacionFinanciera', {
		url:"/educacionFinanciera",
		views: {
			"view" : {
				templateUrl: 'views/33-educacionfinanciera.jsp'
			}
		}
	})
	.state('aclaraciones', {
		url:"/aclaraciones",
		views: {
			"view" : {
				templateUrl: 'views/48-aclaraciones.jsp'
			}
		}
	})
	.state('activaUsuario', {
		url:"/activaUsuario",
		views: {
			"view" : {
				templateUrl: 'views/34-activaUsuario.jsp'
			}
		}
	})
	.state('gracias', {
		url:"/gracias",
		views: {
			"view" : {
				templateUrl: 'views/thank-you.jsp'
			}
		}
	})
	.state('recuperaContrasenia', {
		url:"/recuperaContrasenia",
		views: {
			"view" : {
				templateUrl: 'views/35-recuperaPassword.jsp'
			}
		}
	})
	.state('recuperaUsuario', {
		url:"/recuperaUsuario",
		views: {
			"view" : {
				templateUrl: 'views/36-recuperaUsuario.jsp'
			}
		}
	})
	.state('aceleradorVolaris', {
		url:"/aceleradorVolaris",
		views: {
			"view" : {
				templateUrl: 'views/36-aceleradorVolaris.jsp'
			}
		}
	})
	.state('buro', {
		url:"/buro",
		views: {
			"view" : {
				templateUrl: 'views/37-buro.jsp'
			}
		}
	})
	.state('consejoDeSeguridad', {
		url:"/consejoDeSeguridad",
		views: {
			"view" : {
				templateUrl: 'views/consejoDeSeguridad.jsp'
			}
		}
	})
	.state('preguntasFrecuentes', {
		url:"/preguntasFrecuentes",
		views: {
			"view" : {
				templateUrl: 'views/preguntasFrecuentes.jsp'
			}
		}
	})
	.state('contrataIndigo',{
		url:"/contrataIndigo",
		views:{
			"view":{
					templateUrl: 'views/contrata-indigo.jsp'
			}
		}
	})
	.state('tarjetas.monedero', {
		url:"/monederoInvex",
		views: {
			"view-tarjetas" : {
				templateUrl: 'views/template/38-monedero.jsp'
			}
		}
	})
	;

	// configure new 'compile' directive by passing a directive
	// factory function. The factory function injects the '$compile'
	$compileProvider.directive('compile', function($compile) {
		// directive factory creates a link function
		return function(scope, element, attrs) {
			scope.$watch(
					function(scope) {
						// watch the 'compile' expression for changes
						return scope.$eval(attrs.compile);
					},
					function(value) {
						// when the 'compile' expression changes
						// assign it into the current DOM
						element.html(value);

						// compile the new DOM and link it to the current
						// scope.
						// NOTE: we only compile .childNodes so that
						// we don't get into infinite loop compiling ourselves
						$compile(element.contents())(scope);
					}
			);
		};
	});
}).run(function($rootScope, $state,$window,$location) {
	$rootScope.$state = $state;
});


function changeMenu(path, totalMenu, menu) {
	   $(location).attr('href', 'index'+path);

	   window.setTimeout(function() {

	      for (i = 1; i <= totalMenu; i++) {
	         $('#tab'+i).removeClass('active');
	         $('.tab'+i).removeClass('active');
	      }

	      $('#tab'+menu).addClass('active');
	      $('.tab'+menu).addClass('active');


	      }, 200);

	}
