/**
 * Created by kauriHealth on 2017/8/29.
 */

(function (angular) {


    var param = {
        templateUrl:'in_theater/view.html',
        controller:  'theaterVC'
    };
    var module = angular.module('InTheater',['ngRoute']);

    // 配置模块的路由
    module.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/:category/:page',param);
    }]);

    module.controller('theaterVC',['$scope','$routeParams','$route','$http',function ($scope,$routeParams,$route,$http) {
        $scope.name = '北京电影学院';
        $scope.title = 'Loading...';
        $scope.subjects=[];
        $scope.loading = true; // 开始加载
        $scope.currentPage = 0;
        $scope.totalPage = 0;
        $scope.total =  0;
        var page = parseInt($routeParams.page);
        var count = 6;
        var start = (page-1)*count;
        $scope.currentPage = page;

        var url =  'http://api.douban.com/v2/movie/'+$routeParams.category;
        // $http.get('../kkMovieTheater/datas/in_theaters.json').then(function (req) {
        //
        // alert(req)
        // }),function (err) {
        //  alert(err)
        // };
        $jsonp(
            url,
            {
                count:count,
                start:start,
                q:$routeParams.q
            },
            function (data) {
                $scope.title = data.title;
                $scope.loading = false;
                $scope.total = data.total;
                $scope.subjects = data.subjects;
                $scope.totalPage =Math.ceil($scope.total/count);
                $scope.$apply();
            }
        );

        //上一页下一页行为
        $scope.go=function (page) {

            if(page>=1 && page<=$scope.totalPage){
                $route.updateParams({page:page});
            }

        };
    }]);

})(angular);