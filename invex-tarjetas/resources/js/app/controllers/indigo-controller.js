app.controller('ContrataIndigoController', ['$scope', 'JsonFactory', function($scope,JsonFactory){

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

	$scope.indigo = {};
	$scope.correcto = false;
	$scope.error = false;

	$scope.init = function(){
		loadCaptcha();
	}



	$scope.submitContrataIndigo = function(){
		spinner.spin(target);
		modalSpin.style.display = "block";
		JsonFactory.activaIndigo(localStorage.getItem("context"), $scope.indigo).success(function(data){  
			$scope.correcto = true;
			$scope.error = false;
			modalSpin.style.display = "none";
			spinner.stop();
			$scope.msgSuccess = data.msgError;
		}).error(function(data){     
			modalSpin.style.display = "none";
			spinner.stop();
			loadCaptcha();
			$scope.error = true;
			$scope.correcto = false;
			$scope.msgError = data.msgError;
		})
	}


	function loadCaptcha(){
		JsonFactory.getCaptchaCode(localStorage.getItem("context")).success(function(data){
			$scope.captcha = data.captcha;
		});
	}







}]);