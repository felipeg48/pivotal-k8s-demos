app.controller('HomeController', ['$scope', 'JsonFactory', function($scope,JsonFactory){
	
	$scope.init = function(){
		JsonFactory.getBannerImages(localStorage.getItem("context")).success(function(data){
			$scope.imagenes = data.imagen;
			$scope.imagenApp = data.imagenApp;
			
			/* Owl carousel */
			$(".owl-carousel").owlCarousel({
				slideSpeed : 500,
				rewindSpeed : 1000,
				mouseDrag : true,
				stopOnHover : true
			});
			/* Own navigation */
			$(".owl-nav-prev").click(function(){
				$(this).parent().next(".owl-carousel").trigger('owl.prev');
			});
			$(".owl-nav-next").click(function(){
				$(this).parent().next(".owl-carousel").trigger('owl.next');
			});
			
		});
		
		//$scope.imagenes = [{"id":"60","ruta":"https://www.invextarjetas.com.mx/Imagenes/bg-home1.jpg","orden":"1","link":"Navidad/index.html","rutas":null},{"id":"61","ruta":"https://www.invextarjetas.com.mx/Imagenes/bg-home2.jpg","orden":"2","link":"http://www.recompensaselect.com.mx","rutas":null},{"id":"62","ruta":"https://www.invextarjetas.com.mx/Imagenes/bg-home3.jpg","orden":"3","link":"http://www.recompensaindigo.com.mx","rutas":null},{"id":"63","ruta":"https://www.invextarjetas.com.mx/Imagenes/bg-home4.jpg","orden":"4","link":"#/tarjetas/volaris2","rutas":null}];
	};
	
	$scope.getImageSrc = function (src) {
		  return  localStorage.getItem("context")+'/'+ src;
	};
	
}]);