

(function(){
'use strict';

  angular
    .module('rpsApp')
    .controller('usersCtr',
            ['$scope','$state','$http','$mdToast','$mdDialog','getUsersService',
      function($scope, $state, $http, $mdToast, $mdDialog, getUsersService){

      let t = this;
      let s = $scope;
      let st = $state;

      //initialize functions


      //vars


      function showToast(message){

        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
        );

      };

    }]);

})();
