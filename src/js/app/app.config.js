'use strict';

angular.module('try').
    config(
        function(
            $locationProvider,
            $routeProvider
        ){
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            })

            $routeProvider.
                when("/",{
                    template: "<blog-list></blog-list>"
                })
    });