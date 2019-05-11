app.factory('JsonFactory', ['$http', function($http){

	var dataFactory ={};

	dataFactory.getBannerImages = function(context){
		return $http({
			method: 'GET',
			url: context+'/rest/api/1.0/getBannerImages',
		});
	};
	
	dataFactory.actCuenta = function(context, param){
		return $http({
			method: 'POST',
			url: context+'/rest/api/1.0/setActCuenta',
			headers : {
                "Content-Type" : "application/json; charset=utf-8",
                "Accept" : "application/json"
			},
			data: param
		});
	};
	
	dataFactory.setEmail = function(context, param){
		return $http({
			method: 'POST',
			url: context+'/rest/api/1.0/setEmail',
			headers : {
                "Content-Type" : "application/json; charset=utf-8",
                "Accept" : "application/json"
			},
			data: param
		});
	};
	
	dataFactory.resetPass = function(context, param){
		return $http({
			method: 'POST',
			url: context+'/rest/api/1.0/setPassword',
			headers : {
                "Content-Type" : "application/json; charset=utf-8",
                "Accept" : "application/json"
			},
			data: param
		});
	};
    dataFactory.resetPassEmpresarial = function(context, param){
        return $http({
            method: 'POST',
            url: 'https://www.invextarjetas.com.mx/business-backend-pxy/api/user/v1/resetPassword',
            headers : {
                "Content-Type" : "application/json; charset=utf-8",
                "Accept" : "application/json"
            },
            data: param
        });
    };

    dataFactory.getFeesAndCommissionsByProductId = function (productId) {
        return $http({
            method: 'GET',
            // url: localStorage.getItem("context") + '/product-backend/api/feesAndCommission/v1/getFeesCommisionsByProductId/'+productId //desarrollo y local
            url: 'https://www.tarjetadecreditomultiva.com/fees-commisions/api/v1/getFeesCommisionsByProductId/'+productId //produccion
        });
    };
	
	dataFactory.setContact = function(context, param){
		return $http({
			method: 'POST',
			url: context+'/rest/api/1.0/setContacto',
			headers : {
                "Content-Type" : "application/json; charset=utf-8",
                "Accept" : "application/json"
			},
			data: param
		});
	};
	
	dataFactory.recoverPassword = function(context, param){
		return $http({
			method: 'POST',
			url: context+'/rest/api/1.0/recoverPassword',
			headers : {
                "Content-Type" : "application/json; charset=utf-8",
                "Accept" : "application/json"
			},
			data: param
		});
	};
	
	dataFactory.getPromocionesByCategory = function(context, param){
		return $http({
			method: 'GET',
			url: context+'/rest/api/1.0/getPromocionesByCategory',
			data: param,
			params : param
		});
	};
	
	
	
	dataFactory.recoverUser = function(context, param){
		return $http({
			method: 'POST',
			url: context+'/rest/api/1.0/recoverUser',
			headers : {
                "Content-Type" : "application/json; charset=utf-8",
                "Accept" : "application/json"
			},
			data: param
		});
	};

	dataFactory.activaIndigo = function(context, param){
		return $http({
			method: 'POST',
			url: context+'/rest/api/1.0/activaIndigo',
			headers : {
				"Content-Type" : "application/json; charset=utf-8",
        "Accept" : "application/json"
			},
			data: param
		})
	};
	
	dataFactory.getCaptchaCode = function(context){
		return $http({
			method: 'GET',
			url: context+'/rest/api/1.0/getCaptchaCode',
		});
	};

    dataFactory.getCatsMultiva = function () {
        return $http({
            method: 'GET',
            url: localStorage.getItem("context") + '/rest/api/1.0/getCatMultiva'
        });
    };
	
	dataFactory.getInfoTarjeta = function(context){
		return $http({
			method: 'GET',
			url: context+'/rest/api/1.0/getCuotas',
		});
	};

	dataFactory.getPromocionesMsi = function(context){
		return $http({
			method: 'GET',
			url: context+'/rest/api/1.0/getPromocionesMsi',
		});
	};
	
	dataFactory.getSplash = function(context){
		return $http({
			method: 'GET',
			url: context+'/rest/api/1.0/getSplash',
		});
	};
	
	dataFactory.getCenefa = function(context){
		return $http({
			method: 'GET',
			url: context+'/rest/api/1.0/getCenefa',
		});
	};
	
	dataFactory.getUsuario = function(context, param) {
	       return $http({
	            method: 'GET', 
	            url: context+'/rest/api/1.0/getUsuario/'+ param + '|' ,
	            headers: 'Accept=*/*',
	    });
	};
	
	
	dataFactory.getEmpresarial = function(context){
		return $http({
			method: 'GET',
			url: context+'/rest/api/1.0/getEmpresarial',
		});
	};
	dataFactory.cuotas = {};
	
	return dataFactory;
}]);



