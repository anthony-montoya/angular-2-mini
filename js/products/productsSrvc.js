angular.module('myApp').service('productsSrvc', function($http, $state) {

    this.getShoeData = function() {
        return $http.get('https://practiceapi.devmountain.com/products?category=shoes');
    }

    this.getSockData = function() {
        return $http.get('https://practiceapi.devmountain.com/products?category=socks');
    }

});