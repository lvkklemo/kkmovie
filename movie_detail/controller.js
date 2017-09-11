/**
 * Created by kauriHealth on 2017/9/8.
 */

(function (angular) {

    var detail = angular.module('movieDetail',[]);

    var param = {
        controller : 'detailController',
        templateUrl:'movie_detail/view.html'
    };
    detail.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/detail/:id',param);
    }]);

    detail.controller('detailController',['$scope','$routeParams',function ($scope,$routeParams) {

        $scope.movie = {};
        $scope.loading = true;
        var url = 'http://api.douban.com/v2/movie/subject/'+$routeParams.id;
        $jsonp(url,{},function (data) {
            $scope.loading = false;
            $scope.movie = data;
            $scope.$apply();
        });
    }]);



})(angular);