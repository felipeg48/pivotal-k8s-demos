app.controller('TarjetasController', ['$scope', 'JsonFactory', '$location', '$http', function($scope,JsonFactory, $location, $http){
	
	var getInfo = true;
	
	var URL = ENV_PROPERTY;
	
	$scope.getDataProduct = function(id){
		ES6Promise.polyfill();
		getCAT(id);
		getFeesAndCommissions(id);
	}	
	
	var getCAT = function(id){
		$http({
			url: URL+'/fees-commisions/api/v1/getCatById/'+id,
	        method: 'GET',	        
		}).then(function(response) {
			JsonFactory.getInfoTarjeta("").success(function (data){})				
			$scope.cat = response.data
        }).catch(function(error) {
        	throw error
        });
	}	

	var getFeesAndCommissions = function(id){
		$http({
			url: URL+'/fees-commisions/api/v1/getFeesCommisionsByProductId/'+id,
	        method: 'GET',	        
		}).then(function(response) {
			$scope.commissions = response.data
        }).catch(function(error) {
        	throw error
        });
	}	
	
	$scope.init = function(id){
		limpiaCampos();
		if(id === 27|| id === 26){
		    var productId = (id === 27 ? 1:2);
            JsonFactory.getFeesAndCommissionsByProductId(productId).success(function (data) {
                $scope.fees = data;
            }).error(function (dataError) {
                console.log('Fallo la consulta de Cuotas y comisiones: ' + dataError);
            });
            JsonFactory.getCatsMultiva().success(function (data) {
                $scope.textos = jQuery.grep(data.textos, function (object, index) {
                    return object.id.toString() === id.toString();
                });
                $scope.texto = $scope.textos[0].texto;
            }).error(function (dataError) {
                console.log(dataError);
            });
		}else if(getInfo) {
			JsonFactory.getInfoTarjeta(localStorage.getItem("context")).success(function(data) {
				$scope.cuotas = data.cuotasComisiones;
				$scope.textos =  jQuery.grep(data.consultaTexto.textos , function( object, index ) {
					  return object.id == id;
				});
				JsonFactory.cuotas = data;
				getInfo = false;
				$scope.texto = $scope.textos[0].texto;
			}).error(function(dataError) {
				console.log(dataError);
			});
		}else{
			$scope.cuotas = JsonFactory.cuotas.cuotasComisiones;
			$scope.textos =  jQuery.grep(JsonFactory.cuotas.consultaTexto.textos , function( object, index ) {
				  return object.id == id;
			});
			$scope.texto = $scope.textos[0].texto;
		}
	};
	
	$scope.solicitalaYa = function(){
		$http.post('/BancaEnLinea/j_security_check', $.param($scope.credentials), {
			headers : {
				"content-type" : "application/x-www-form-urlencoded"
			}
		}).success(function(data) {
			
			window.location.href = "/BancaEnLinea/pages/main.jsf";
		}).error(function(data) {
			if(!data){
				$scope.msgError = "Error desconocido, intente de nuevo más tarde";
			}else{
				$scope.msgError = data;
			}
			$scope.loginError = true;
			
			if(source != "modal"){
				$('#portfolioModal4').modal('hide');
				modalSpin.style.display = "none";
				spinner.stop();
				$('#modalError').modal('show');
			}else{
				spinnerLoginModal.stop();
			}
		})
	}
	
	$scope.loadPage = function(){
        
        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var body = document.getElementById("fondoBody");
        if(isIE){
            var iframe = document.createElement("iframe")
            iframe.src = "https://4606569.fls.doubleclick.net/activityi;src=4606569;type=invmedia;cat=ubrbjbna;ord=" + a + "?";
            body.appendChild(iframe);
        }else{
            document.write('<iframe src="https://4606569.fls.doubleclick.net/activityi;src=4606569;type=invmedia;cat=ubrbjbna;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
        }
        
        window.location.href  = 'https://volaris.invextarjetas.com.mx:9443/lucivolaris_pro/loadPage.run?c=NA==';
    }
		
	$scope.validaRegistroLlamada = function(){
		var telefonoLlamada  = document.getElementById('telefonoLlamada').value.trim();
		
		if( telefonoLlamada == '' ){
			alert('Es necesario introducir un número telefónico');
			return ;
		}else{
			if(  8 > telefonoLlamada.length || isNaN( telefonoLlamada )){
				alert('El número de teléfono no es correcto');
				return;
			}
		}
		if(document.getElementById('demo_box_llamada').checked != true){
			alert('Es necesario que acepte las condiciones de privacidad');
			return ;
		}

		insertarCallbackLlamada(localStorage.getItem("context"), $scope.llamada);
	}
	
	var insertarCallbackLlamada = function(context, llamada){
		$http({
			url: context+'/rest/api/1.0/insertarCallback',
	        method: 'POST',
	        data: {
    			"beanCallback": { 
        			"idCategoria": 2,  
        			"idCalificacion": 7,
        			"numeroCuenta": null,
        			"numeroTelefono": ""+llamada.telefonoLlamada+"",
        			"usuarioAgente": "Portal",
        			"tipoTarjeta":"volaris"
        		}
	        }
		}).then(function(response) {
			if(response.data == 200){
				$scope.showExito="true";
			} else{
				$scope.showError="true";
			}
        }).catch(function(error) {
        	$scope.showError="true";
        });
	}	
	 
	$scope.showHorarioLlamada = false;
	var horaActual = new Date().getHours();
	if(horaActual < 8 || horaActual >= 22){
		$scope.showHorarioLlamada = true;
	}
		
	
	$scope.validaRegistroCita = function(){
		var cita = $scope.cita;
		var nombre    = cita.nombre;
		var apellido = cita.apellido;
		var telefono  = cita.telefono;
		var email = cita.email;
		
		if( "undefined" === typeof nombre || nombre.trim() == '' ){
			alert('Es necesario introducir un nombre');
			return;
		}
		
		if("undefined" === typeof apellido || apellido.trim() == '' ){
			alert('Es necesario introducir un apellido');
			return;
		}
		
		if( "undefined" === typeof telefono || telefono.trim() == '' ){
			alert('Es necesario introducir un número telefónico');
			return;
		}else if( 8 > telefono.length || isNaN(telefono) ){
			alert('El número de teléfono no es correcto');
			return;
		}
		
		if("undefined" === typeof email){
			alert('Es necesario introducir el email');
			return;
			
		}else if(!validaEmail(email)){
			alert('El formato del email es incorrecto');
			return;
			
		}
		
		if(document.getElementById('demo_box_1').checked != true){
			alert('Es necesario que acepte las condiciones de privacidad');
			return;
		}
		insertarCallbackCita(localStorage.getItem("context"), cita);
		
	}
	
	
	var insertarCallbackCita = function(context, cita){
		$http({
			url: context+'/rest/api/1.0/insertarCallback',
	        method: 'POST',
	        data: {
    			"beanCallback": { 
        			"idCategoria": 2,  
        			"idCalificacion": 7,
        			"numeroCuenta": null,  
        			"numeroTelefono": cita.telefono,  
        			"usuarioAgente": "Portal",
//        			"prioridad": 0,  
        			"email": cita.email,  
        			"tipoTarjeta":"volaris",  
        			"nombreCliente": cita.nombre + " " + cita.apellido,
        			"horarioLlamada" : cita.horarioLlamada
        		}
	        }
	    }).then(function(response) {
			if(response.data == 200){
				$scope.showExitoCita="true";
			}else{
	        	$scope.showErrorCita="true";
			}
	    
        }).catch(function(error) {
        	$scope.showErrorCita="true";
        });
	}

	$scope.isNumber = function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
       
        if ((charCode > 31 || charCode == 0) && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105)) {
           evt.returnValue = false;
        }
    }
	
	var validaEmail = function(campo){
			
		var RegExPattern = /^[a-zñ0-9\.\-_]+@([a-z]+)\.[a-z]{2,3}(\.[a-z]{2})?$/;
			
		if(campo.match(RegExPattern)){
				return true;
		} else {
			return false;
		}
	}
	
	function limpiaCampos(){
		$scope.showErrorCita=false;
		$scope.showExitoCita=false;
		$scope.showError=false;
		$scope.showExito=false;
		$scope.llamada={};
		$scope.cita = {"horarioLlamada" : "08:00 - 12:00"};
	}
	
}]);