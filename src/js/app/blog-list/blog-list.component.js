'use strict';

angular.module('blogList').
    // this blogList will be used as tag blog-list in index.html
    component('blogList',{
        template:  '<div class=""><h1>{{ title }}</h1><button ng-click="someClickTest()">Click Me!</button></div>',
        controller: function($scope){
            $scope.title="Hi There"
            $scope.clicks = 0
            $scope.someClickTest = function () {
            console.log("Clicked")
            $scope.clicks += 1 
            $scope.title = "Clicked " + $scope.clicks + " times!"
        }
    }
    });
    // controller('BlogListController',function($scope){
    //     console.log("hello")
    //     $scope.title="Hi There"
    //     $scope.clicks = 0
    //     $scope.someClickTest = function () {
    //         console.log("Clicked")
    //         $scope.clicks += 1 
    //         $scope.title = "Clicked " + $scope.clicks + " times!"
    //     }
    // });