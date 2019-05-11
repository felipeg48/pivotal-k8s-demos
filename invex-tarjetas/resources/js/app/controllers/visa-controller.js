app.controller('VisaController', ['$scope', 'JsonFactory', function($scope,JsonFactory){
	
	//spin config
	var opts = {
			lines: 13 // The number of lines to draw
			, length: 28 // The length of each line
			, width: 14 // The line thickness
			, radius: 42 // The radius of the inner circle
			, scale: 0.50 // Scales overall size of the spinner
			, corners: 1 // Corner roundness (0..1)
			, color: '#000' // #rgb or #rrggbb or array of colors
			, opacity: 0.25 // Opacity of the lines
			, rotate: 0 // The rotation offset
			, direction: 1 // 1: clockwise, -1: counterclockwise
			, speed: 1 // Rounds per second
			, trail: 60 // Afterglow percentage
			, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
			, zIndex: 2e9 // The z-index (defaults to 2000000000)
			, className: 'spinner' // The CSS class to assign to the spinner
			, top: '50%' // Top position relative to parent
			, left: '50%' // Left position relative to parent
			, shadow: false // Whether to render a shadow
			, hwaccel: false // Whether to use hardware acceleration
			, position: 'absolute' // Element positioning
	};
	var target = document.getElementById('spin');
	var spinner = new Spinner(opts);

	var modalSpin = document.getElementById('modalSpin');
	
	$scope.showRes = false;
	$scope.showViajes = false;
	$scope.showOtras = false;
	$scope.promocionesRes = [];
	$scope.promocionesViaje = [];
	$scope.promocionesOtras = [];

	$scope.loadPromociones=function(promocion){
		spinner.spin(target);
  		modalSpin.style.display = "block";
		switch (promocion) {
		case 111:
			if($scope.promocionesRes.length == 0){
				var params = {
					categoria: promocion
				};
				JsonFactory.getPromocionesByCategory(localStorage.getItem("context"), params).success(function(data) {
					$scope.promocionesRes = data;
					$scope.showRes = !$scope.showRes;
					modalSpin.style.display = "none";
		    		spinner.stop();
				}).error(function(dataError) {
					console.log(dataError);
				});
			}else{
				modalSpin.style.display = "none";
	    		spinner.stop();
				$scope.showRes = !$scope.showRes;
			}
			break;
		case 112:
			if($scope.promocionesViaje.length == 0){
				var params = {
					categoria: promocion
				};
				JsonFactory.getPromocionesByCategory(localStorage.getItem("context"), params).success(function(data) {
					$scope.promocionesViaje = data;
					$scope.showViajes = !$scope.showViajes;
					modalSpin.style.display = "none";
		    		spinner.stop();
				}).error(function(dataError) {
					console.log(dataError);
				});
			}else{
				modalSpin.style.display = "none";
	    		spinner.stop();
				$scope.showViajes = !$scope.showViajes;
			}
			break;
		case 113:
			if($scope.promocionesOtras.length == 0){
				var params = {
					categoria: promocion
				};
				JsonFactory.getPromocionesByCategory(localStorage.getItem("context"), params).success(function(data) {
					$scope.promocionesOtras = data;
					$scope.showOtras = !$scope.showOtras;
					modalSpin.style.display = "none";
		    		spinner.stop();
				}).error(function(dataError) {
					console.log(dataError);
				});
			}else{
				modalSpin.style.display = "none";
	    		spinner.stop();
				$scope.showOtras = !$scope.showOtras;
			}
			break;
		}
	};
	
	$scope.openModalPromociones = function(object){
		$scope.startDate = new Date(object.dateStart);
		$scope.endDate = new Date(object.dateEnd);
		$scope.object = object;
		$('#modalPromociones').modal('show');
	};
}]);