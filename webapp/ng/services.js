(function(){

  'use strict';

  angular

    .module('rpsApp')

    .service('getUsersService',['$scope','$http','$firebaseObject',
                        function($scope, $http, $firebaseObject){



    }])

    .service('authService',['$firebaseAuth',function($firebaseAuth){

      return $firebaseAuth();

    }])

    .service("addUserService", ["$firebaseArray",
      function($firebaseArray) {

        let ref = firebase.database().ref().child("users");
        return $firebaseArray(ref);
        
      }
    ])

    .service('newGameService',['$http','$firebaseObject',function($http,$firebaseObject){



    }])

    .service('setupGameService',['$http','$firebaseObject',function($http,$firebaseObject){



    }])

    .service('getGameService',['$http','$firebaseObject',function($http,$firebaseObject){



    }]);

})();
