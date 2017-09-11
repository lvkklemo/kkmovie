/**
 * Created by kauriHealth on 2017/8/29.
 */


(function (angular) {

    var module = angular.module('Top250',['ngRoute']);

    var param = {
      templateUrl:'top250/view.html',
        controller:'Top250VC'
    };
    module.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/top250/:page',param);
    }])

    module.controller('Top250VC',['$scope',function ($scope) {

    }])

})(angular);