app.controller('RecoverUserController', ['$scope', 'JsonFactory', function($scope,JsonFactory){

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
	function validacionServicio(data){
		if(data.codError == 200){
			modalSpin.style.display = "none";
    		spinner.stop();
    		$scope.validado = true;
    		$scope.msgValido = data.msgError;
		}else{
			modalSpin.style.display = "none";
    		$scope.getCaptcha();
    		spinner.stop();
    		$scope.error = true;
    		$scope.msgError = data.msgError == null ? 'Ocurrió un error en el servicio. Favor de intentarlo más tarde' : data.msgError;
    		grecaptcha.reset();
		}
	}
	
	$scope.recupera = {};
	
	$scope.error = false;
	$scope.validado = false;
	
	$scope.init = function(){
		$scope.getCaptcha();
	};
	
	$scope.getCaptcha = function(){
		JsonFactory.getCaptchaCode(localStorage.getItem("context")).success(function(data){
			$scope.captcha = data.captcha;
		});
	};
	    
    $scope.submitRecoverUser = function(){
    	spinner.spin(target);
  		modalSpin.style.display = "block";
  		$scope.recupera.fromAppMovil = false;
    	JsonFactory.recoverUser(localStorage.getItem("context"),$scope.recupera).success(function(data){
    		validacionServicio(data);
    	}).error(function(data) {
    		validacionServicio(data);
		});
    };
}]);