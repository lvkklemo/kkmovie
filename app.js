/**
 * Created by kauriHealth on 2017/8/29.
 */

    // var app = angular.module('appDelegate',['ngRoute','InTheater','ComingSoon','Top250']);
    var app = angular.module('appDelegate',['ngRoute','movieDetail','InTheater']);

    var param = {
        redirectTo:'/in_theaters/1'
    };
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.otherwise(param)
    }]);
    app.controller('MoiveController',['$scope','$route','$location',function ($scope,$route,$location) {
        // console.log($location);
        // console.log($location.path());
        $scope.location = $location;

        $scope.$watch('location.path()',function (now,old) {
            console.log('新值'+now+'旧值'+old);
            // alert(now)
            if(now.startsWith('/in_theater')){
                $scope.type ='in_theater';
                 // alert(1)
            }else if(now.startsWith('/coming_soon')){
                $scope.type ='coming_soon';
                // alert(2)
            }else{
                $scope.type ='top250';
                // alert(3)
            }
        });

        //获取文本框的输入
        $scope.input = '';
        $scope.search = function () {
            //alert($scope.input);
            $scope.type ='search';
            $route.updateParams({category:'search',q:$scope.input})
        }


    }]);

