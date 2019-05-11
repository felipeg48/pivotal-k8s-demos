app.controller('MsiController', ['$scope', 'JsonFactory', function($scope,JsonFactory){
	
	$scope.init = function(){
		JsonFactory.getPromocionesMsi(localStorage.getItem("context")).success(function(data){
			$scope.promoMsi = data;
		});
	}

	$scope.openModalMsi = function(id){
		$scope.promo = $.grep($scope.promoMsi, function(b){
            return b.id == id;
      	})[0];
      	$scope.rutaInfoPromo = $scope.promo.rutas[1];
      	$('#modalMsi').modal('show');
	}
	
}]);