/**
 * Created by Pavan on 11/4/2015.
 */

    // Define an angular module for our app
    var loginRegisterApp = angular.module('loginRegisterApp', ['ngRoute']);

    // Define Routing for app
    loginRegisterApp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/login', {
                    templateUrl: 'templates/login.html',
                    controller: 'LoginController'
                }).
                when('/register', {
                    templateUrl: 'templates/register.html',
                    controller: 'RegisterController'
                }).

                when('/httpservice', {
                    templateUrl: 'templates/service.html',
                    controller: 'ServiceController'
                }).
                otherwise({
                    redirectTo: '/login'
                });
        }]);

    // Login Controller.
    loginRegisterApp.controller('LoginController', function ($scope) {

        // Submit logic. This is triggered when the user clicks the Submit button.
        $scope.submitForm = function(userName) {

            $scope.uName = userName;
        }
    });

    // Register Controller.
    loginRegisterApp.controller('RegisterController', function ($scope) {

        // Email Regex expression
        $scope.email = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

        // Submit logic. This is triggered when the user clicks the Submit button.
        $scope.submitForm = function(userName) {

            $scope.uName = userName;
        }
    });

    // Service Controller.
    loginRegisterApp.controller('ServiceController', function ($scope, $http) {

        // Http Get call.
        $http.get("templates/colors.json").success(function(result)
        {
            $scope.colors = result;
        });
    });
