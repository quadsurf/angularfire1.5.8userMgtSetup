

(function(){
'use strict';

  angular
    .module('rpsApp')
    .controller('gameboardCtr',
            ['$scope','$state','$http','$mdToast','$mdDialog','getUsersService','newGameService','setupGameService','getGameService',
      function($scope, $state, $http, $mdToast, $mdDialog, getUsersService, newGameService, setupGameService, getGameService){

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
