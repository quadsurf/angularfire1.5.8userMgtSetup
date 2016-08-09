

(function(){
'use strict';

  angular
    .module('rpsApp')
    .controller('usersCtr',
            ['$scope','$state','$http','$mdToast','$mdDialog','$firebaseObject','authService',
      function($scope, $state, $http, $mdToast, $mdDialog, $firebaseObject, authService){

      let t = this;
      let s = $scope;
      let st = $state;

      //initialize functions


      //vars


      let ref = firebase.database().ref().child("data");

      let syncObject = $firebaseObject(ref);

      syncObject.$bindTo(s, "data");


      //BEGIN AUTH
      s.createUser = function() {
        s.message = null;
        s.error = null;
        authService.$createUserWithEmailAndPassword(s.email,s.password)
          .then(function(firebaseUser) {
            s.message = "User created with uid: " + firebaseUser.uid;
          }).catch(function(error) {
            s.error = error;
          });
      };

      let usersObj = firebase.database().ref().child("users");
      ref.onAuth(function(authData) {
        if (authData && isNewUser) {
          // save the user's profile into the database so we can list users,
          // use them in Security and Firebase Rules, and show profiles
          ref.child("users").child(authData.uid).set({
            provider: authData.provider,
            name: getName(authData)
          });
        }
      });

      //DELETE USER
      s.deleteUser = function() {
        s.message = null;
        s.error = null;
        authService.$deleteUser().then(function() {
          s.message = "Sorry to see you go. Your account has been removed.";
        }).catch(function(error) {
          s.error = error;
        });
      };

      //RETRIEVE AUTHENTICATED STATE
      s.auth = authService;
      // any time auth state changes, add user data to scope
      s.auth.$onAuthStateChanged(function(firebaseUser) {
        s.firebaseUser = firebaseUser;
        console.log(firebaseUser);
      });

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
