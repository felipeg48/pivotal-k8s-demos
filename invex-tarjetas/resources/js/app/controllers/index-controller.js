app.controller('IndexController', ['$scope', '$rootScope', '$http', '$location', '$stateParams', '$state', '$window', 'JsonFactory', function ($scope, $rootScope, $http, $location, $stateParams, $state, $window, JsonFactory) {

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
    var targetEmpresarial = document.getElementById('spinEmpresarial');
    var spinnerEmpresarial = new Spinner(opts);
    var targetLoginModal = document.getElementById('spinModalLogin');
    var spinnerLoginModal = new Spinner(opts);

    var modalSpin = document.getElementById('modalSpin');

    $scope.loginError = false;
    $scope.credentials = {};
    $scope.credentialsEmpresarial = {};
    $scope.errorEmpresarial = false;

    ///------------------------------
    var botonContinuar = document.getElementById('botonContinuar');
    var botonContinuarModal = document.getElementById('botonContinuarModal');
    var inputpswd = document.getElementById('j_password');
    var inputpswdModal = document.getElementById('j_passwordModal');
    var botonContinuarEmpresarial = document.getElementById('botonContinuarEmpresarial');
    var inputpswdEmpresarial = document.getElementById('pass-empresareial');

    $scope.bienvenido = {
        bienvenido: "",
        usuario: ""
    };
    $scope.bienvenidoEmpresarial = {
        bienvenido: "",
        usuario: ""
    };
    $scope.usuario = {
        nombre: "",
        usuario: "",
        usuarioform: "",
        nombreP: ""
    };
    $scope.usuarioEmpresarial = {
        nombre: "",
        usuario: "",
        usuarioform: "",
        nombreP: ""
    };
    $scope.errorusuario = "";
    $scope.empresarial = {};

    //console.log("Se crea la variable Usuario");
    //console.log($scope.usuario);
    $scope.usuario.usuarioform = document.getElementsByName("pword")[0].value;
    console.log($scope.usuario.usuarioform);

    $scope.consultaUsuarioEmpresarial = function () {

        $scope.usuarioEmpresarial.usuarioform = document.getElementsByName("pwordEmpresarial")[0].value;
        console.log($scope.usuarioEmpresarial.usuarioform);

        JsonFactory.getUsuario(localStorage.getItem("context"), $scope.usuarioEmpresarial.usuarioform).success(function (data) {
            //alert(data.usuario + data.nombre);
            if (data.codError == 500) {
                $scope.errorusuario = "Introduzca un usuario válido.";
                $scope.usuarioEmpresarial.usuarioform = "";
                $scope.bienvenidoEmpresarial.bienvenido = "";
                $scope.bienvenidoEmpresarial.usuario = "";
                $scope.usuarioEmpresarial.nombre = "";
                $scope.usuarioEmpresarial.nombreP = "";
                $scope.usuarioEmpresarial.usuario = "";
                botonContinuarEmpresarial.style.display = "none";
                inputpswdEmpresarial.style.display = "none";
                $scope.errorEmpresarial = false;
            } else {
                $scope.errorusuario = "";
                $scope.bienvenidoEmpresarial.bienvenido = "Bienvenido: ";
                $scope.bienvenidoEmpresarial.usuario = "Usuario: ";
                $scope.usuarioEmpresarial.nombre = data.nombre;
                $scope.usuarioEmpresarial.nombreP = data.nombrePuntos;
                $scope.usuarioEmpresarial.usuario = data.usuario;
                botonContinuarEmpresarial.style.display = "initial";
                inputpswdEmpresarial.style.display = "initial";
                inputpswdEmpresarial.style.value = "";
                $scope.errorEmpresarial = false;
            }
        });

        $('.carousel').carousel('next');

    };

    $scope.consultaUsuarioModal = function () {

        $scope.usuario.usuarioform = document.getElementsByName("pwordModal")[0].value;
        console.log($scope.usuario.usuarioform);
        $scope.msgError = "";
        JsonFactory.getUsuario(localStorage.getItem("context"), $scope.usuario.usuarioform).success(function (data) {
            //alert(data.usuario + data.nombre);
            if (data.codError == 500) {
                $scope.errorusuario = "Introduzca un usuario válido.";
                $scope.usuario.usuarioform = "";
                $scope.bienvenido.bienvenido = "";
                $scope.bienvenido.usuario = "";
                $scope.usuario.nombre = "";
                $scope.usuario.nombreP = "";
                $scope.usuario.usuario = "";
                botonContinuar.style.display = "none";
                inputpswd.style.display = "none";
            } else {
                $scope.errorusuario = "";
                $scope.bienvenido.bienvenido = "Bienvenido: ";
                $scope.bienvenido.usuario = "Usuario: ";
                $scope.usuario.nombre = data.nombre;
                $scope.usuario.nombreP = data.nombrePuntos;
                console.log(data);
                $scope.usuario.usuario = data.usuario;
                botonContinuarModal.style.display = "initial";
                inputpswd.style.display = "initial";
            }
        });
        $('.carousel').carousel('next');

    };

    $scope.consultaUsuario = function () {

        $scope.usuario.usuarioform = document.getElementsByName("pword")[0].value;
        console.log($scope.usuario.usuarioform);

        JsonFactory.getUsuario(localStorage.getItem("context"), $scope.usuario.usuarioform).success(function (data) {
            //alert(data.usuario + data.nombre);
            if (data.codError == 500) {
                $scope.errorusuario = "Introduzca un usuario válido.";
                $scope.usuario.usuarioform = "";
                $scope.bienvenido.bienvenido = "";
                $scope.bienvenido.usuario = "";
                $scope.usuario.nombre = "";
                $scope.usuario.nombreP = "";
                $scope.usuario.usuario = "";
                botonContinuar.style.display = "none";
                inputpswd.style.display = "none";
            } else {
                $scope.errorusuario = "";
                $scope.bienvenido.bienvenido = "Bienvenido: ";
                $scope.bienvenido.usuario = "Usuario: ";
                $scope.usuario.nombre = data.nombre;
                $scope.usuario.nombreP = data.nombrePuntos;
                console.log(data);
                $scope.usuario.usuario = data.usuario;
                botonContinuarModal.style.display = "initial";
                inputpswd.style.display = "initial";
            }
        });

        $('.carousel').carousel('next');

    };

    ///------------------------------

    $scope.init = function () {
        console.log("ruta: " + $location.$$url);
        if ($location.$$url == "/home" || $location.$url == "/" || $location.$url == null) {
            JsonFactory.getSplash(localStorage.getItem("context")).success(function (data) {
                if (data.imagen.length != 0) {
                    $('#splash').modal('show');
                    $scope.showSplash = true;
                    $scope.rutaSplash = data.imagen[0].ruta;
                }
            });
        }

        JsonFactory.getCenefa(localStorage.getItem("context")).success(function (data) {
            var cenefaObject = {};
            angular.forEach(data.imagen, function (value, key) {
                cenefaObject = value;
            });

            if (cenefaObject.id != null) {
                $scope.cenefa = "url(" + cenefaObject.ruta + ")";
            }
        });

        new MaskedPassword(document.getElementById("noCuenta"), '\u25CF');
        new MaskedPassword(document.getElementById("usuario-empresarial"), '\u25CF');
        new MaskedPassword(document.getElementById("noCuentaModal"), '\u25CF');
    };

    $scope.login = function (source) {
        if (source == "modal") {
            console.log('entre aqui :D');
            $scope.credentials.j_username = document.getElementsByName("pwordModal")[0].value;
            spinnerLoginModal.spin(targetLoginModal);
            $('#portfolioModal4').modal('hide');
        } else {
            console.log('entre aqui :O');
            $scope.credentials.j_username = document.getElementsByName("pword")[0].value;
            spinner.spin(target);
            modalSpin.style.display = "block";
            $('#portfolioModal4').modal('hide');
        }
        $scope.credentials.j_username = $scope.usuario.usuarioform;
        $http.post('/BancaEnLinea/j_security_check', $.param($scope.credentials), {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        }).success(function (data) {

            window.location.href = "/BancaEnLinea/pages/main.jsf";
        }).error(function (data) {
            if (!data) {
                $scope.msgError = "Error desconocido, intente de nuevo más tarde";
            } else {
                $scope.msgError = data;
            }
            $scope.loginError = true;

            if (source != "modal") {
                $('#portfolioModal4').modal('hide');
                modalSpin.style.display = "none";
                spinner.stop();
                $('#modalError').modal('show');
            } else {
                spinnerLoginModal.stop();
            }
        });
    };

    $scope.getCurrenState = function (link) {
        return $scope.currenState + link;
    };

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $scope.currenState = toState.name;
        $window.ga('send', 'pageview', {page: $location.$$url});
        if ($location.$$url == '/tarjetas/volaris' || $location.$$url == '/tarjetas/volaris2' || $location.$$url == '/tarjetas/volaris0') {
            window.$zopim || (function (d, s) {
                var z = $zopim = function (c) {
                    z._.push(c)
                }, $ = z.s =
                    d.createElement(s), e = d.getElementsByTagName(s)[0];
                z.set = function (o) {
                    z.set._.push(o)
                };
                z._ = [];
                z.set._ = [];
                $.async = !0;
                $.setAttribute('charset', 'utf-8');
                $.src = '//v2.zopim.com/?2Gq0Pl9lw3GdiRa1wlh1IT17qh9d1RhJ';
                z.t = +new Date;
                $.type = 'text/javascript';
                e.parentNode.insertBefore($, e)
            })(document, 'script');
            $("iframe").show();
            $(".zopim").show();
        } else {
            $("iframe").hide();
            $(".zopim").hide();
        }
    });

    $scope.openModalImg = function () {
        $('#modalImg').modal('show');
    };


    $scope.loginEmpresarial = function () {
        spinner.spin(target);
        modalSpin.style.display = "block";
        JsonFactory.getEmpresarial(localStorage.getItem("context")).success(function (data) {
            $scope.empresarial.http = data.http;
            $scope.empresarial.window = data.window;
            $scope.credentialsEmpresarial.j_username = $scope.usuarioEmpresarial.usuarioform;
            console.log($scope.empresarial.http + " : " + $scope.empresarial.window);
            $http.post($scope.empresarial.http, $.param($scope.credentialsEmpresarial), {
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                }
            }).then(function (data) {

                window.location.href = undefined == data.data.idSesion ?
                    $scope.empresarial.window : $scope.empresarial.window + '/' + data.data.idSesion;

            }).catch(function (data) {
                if (data.data == null) {
                    $scope.msgErrorEmpresarial = "Portal Empresarial temporalmente fuera de servicio";
                    $scope.msgError = "Portal Empresarial temporalmente fuera de servicio";
                } else {
                    $scope.msgErrorEmpresarial = data.data.message;
                    $scope.msgError = data.data.message;
                }
                $scope.loginError = true;
                $scope.errorEmpresarial = true;
                $('#portfolioModal3').modal('hide');
                modalSpin.style.display = "none";
                spinner.stop();
                $('#modalError').modal('show')
            });
        });
        $('#portfolioModal3').modal('hide');
    };

    $scope.recuperaContraseniaEmpresarial = function () {
        spinner.spin(target);
        modalSpin.style.display = "block";
        $scope.resetPassEmp={};
        $scope.resetPassEmp.username=$scope.usuarioEmpresarial.usuarioform;
        JsonFactory.resetPassEmpresarial(localStorage.getItem("context"), $scope.resetPassEmp).then(function (data) {
            $scope.msgError = data.data.description;
        }).catch(function (err) {
            $scope.msgError = 'No se pudo reestablecer la contraseña, favor de contactar a Atencion a clientes';
        });
        $scope.usuarioEmpresarial.usuarioform = "";
        $scope.bienvenidoEmpresarial.bienvenido = "";
        $scope.bienvenidoEmpresarial.usuario = "";
        $scope.usuarioEmpresarial.nombre = "";
        $scope.usuarioEmpresarial.nombreP = "";
        $scope.usuarioEmpresarial.usuario = "";
        $scope.loginError = true;
        $scope.errorEmpresarial = true;
        $('#portfolioModal3').modal('hide');
        modalSpin.style.display = "none";
        spinner.stop();
        $('#modalError').modal('show');
    }

}]);