app.controller('ActivaCuentaController', ['$scope', 'JsonFactory', function($scope,JsonFactory){

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
	var celularvar = document.getElementById('movil');
	
	var modalSpin = document.getElementById('modalSpin');
	
	$scope.model = {};
	$scope.modelReset = {};
	$scope.modelEmail = {};
	$scope.error = false;
	$scope.errorEmail = false;
	$scope.dias = [];
	$scope.anios = [];
	$scope.faseTwo = false;
	$scope.faseEmail = false;
	$scope.faseOne = true;
	$scope.model.intentos = 0;
	$scope.classTextLeft = "col-md-5 col-sm-12 text-justify";
	$scope.classTextRight = "col-md-12 col-sm-12";
	$scope.responseCaptcha = "";
	$scope.nombre="";
	$scope.faseThree = false;
	$scope.celular ={
			textoTitulo : "Celular registrado (Últimos 4 dígitos)",
			min:4,
			max:4,
			p1Texto: "Celular es necesario",
			placeholder:"Celular"
	};

	$scope.init = function(){
		for(var i=1; i < 32; i++ ){
			$scope.dias.push(i);
		}
		var anioActual = new Date().getFullYear();
		for(var j= anioActual; j > 1920; j-- ){
			$scope.anios.push(j);
		}
		$scope.getCaptcha();
	};
	
	$scope.validatePass = function(){
		if($scope.modelReset.password != $scope.modelReset.passwordValidate){
			return true;
		}else {
			return false;
		}
	};
	
	$scope.emailEquals = function(){
		if($scope.modelEmail.nuevoEmail == $scope.emailValidate){
			return true;
		}else{
			return false;
		}
	};
	
	$scope.getCaptcha = function(){
		JsonFactory.getCaptchaCode(localStorage.getItem("context")).success(function(data){
			$scope.captcha = data.captcha;
		});
	};

	$scope.submitActCuenta = function () {
		
		spinner.spin(target);
  		modalSpin.style.display = "block";
		JsonFactory.actCuenta(localStorage.getItem("context"), $scope.model).success(function(data){
			$scope.modelReset = data;
			modalSpin.style.display = "none";
			spinner.stop();
			console.log($scope.modelReset);
			$scope.classTextRight = "col-md-12 col-sm-12";
			$scope.faseOne = false;
			$scope.faseEmail = ((data.usuario == "" || data.usuario == null || data.usuario == " ")? true : false);
			$scope.faseTwo = ($scope.faseEmail == true? false: true);
		}).error(function(data){
			$scope.model.intentos++;
			modalSpin.style.display = "none";
    		spinner.stop();
			$scope.error = true;
			$scope.celular ={
					textoTitulo : "CVV2 (Últimos 3 dígitos de el reverso de tu tarjeta)",
					min:3,
					max:3,
					p1Texto: "CVV2 es necesario",
					placeholder:"CVV2"
			};
			celularvar.style.display="initial";
			celularvar.style.value="";
			$scope.model.telefono="";
			$scope.msgError = data.msgError;
			
		});
	};
	
	$scope.submitEmail =function(){
		$scope.errorEmail = $scope.emailEquals();
		
		if($scope.errorEmail){
			spinner.spin(target);
	  		modalSpin.style.display = "block";
	  		$scope.modelEmail.cuenta = $scope.model.tarjeta;
	  		$scope.modelEmail.custId = "";
			JsonFactory.setEmail(localStorage.getItem("context"), $scope.modelEmail).success(function(data){
				modalSpin.style.display = "none";
	    		spinner.stop();
	    		$scope.faseEmail = false;
	    		$scope.faseTwo = true;
	    		$scope.modelReset.usuario = $scope.modelEmail.nuevoEmail;
			}).error(function(data){
				$scope.getCaptcha();
				modalSpin.style.display = "none";
	    		spinner.stop();
	    		$scope.errorFaseEmail = true;
	    		$scope.msgErrorFaseDos = data.msgError;	    		
			});
		}else{
			$scope.errorFaseEmail = true;
			$scope.msgErrorFaseEmail="Los Emails deben coincidir";
		}
	};
	
	$scope.submitResetPass = function(){
		$scope.errorPass = $scope.validatePass();
		if(!$scope.errorPass){
			spinner.spin(target);
	  		modalSpin.style.display = "block";
	  		$scope.modelReset.fromAppMovil = false;
			JsonFactory.resetPass(localStorage.getItem("context"), $scope.modelReset).success(function(data){
				modalSpin.style.display = "none";
	    		spinner.stop();
	    		$scope.faseTwo = false;
	    		$scope.faseThree = true;
	    		$scope.correo = data.usuario;
			}).error(function(data){
				$scope.getCaptcha();
				modalSpin.style.display = "none";
	    		spinner.stop();
	    		$scope.errorFaseDos = true;
	    		$scope.msgErrorFaseDos = data.msgError;	    		
			});
		}else{
			$scope.errorFaseDos = true;
			$scope.msgErrorFaseDos="Las contraseñas deben coincidir";
		}
	};
	
}]);