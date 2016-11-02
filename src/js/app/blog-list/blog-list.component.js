'use strict';

angular.module('blogList').
    // this blogList will be used as tag blog-list in index.html
    component('blogList',{
        //template:  '<div class=""><h1>{{ title }}</h1><button ng-click="someClickTest()">Click Me!</button></div>',
        templateUrl: '/templates/blog-list.html',
        controller: function($scope){
            var blogItems = [
                {title:"Post1", id:1, description: "My post 1", published_date:"2016-09-11"},
                {title:"Post2", id:2, description: "My post 2", published_date:"2016-09-12"},
                {title:"Post3", id:3, description: "My post 3", published_date:"2016-09-13"},
                {title:"Post4", id:4, description: "My post 4", published_date:"2016-09-14"},
            ]
            $scope.items = blogItems;
        }
    }
    );
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