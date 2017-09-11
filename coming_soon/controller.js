/**
 * Created by kauriHealth on 2017/8/29.
 */

(function (angular) {

    var module = angular.module('ComingSoon',['ngRoute']);

    var param = {
      templateUrl: 'coming_soon/view.html',
        controller: 'ComingSoonVC'
    };

    module.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/coming_soon/:page',param)
    }]);

    module.controller('ComingSoonVC',['$scope',function ($scope) {

    }]);

})(angular);