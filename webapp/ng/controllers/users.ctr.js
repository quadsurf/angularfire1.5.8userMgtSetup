

(function(){
'use strict';

  angular
    .module('rpsApp')
    .controller('usersCtr',
            ['$scope','$state','$http','$mdToast','$mdDialog','$firebaseObject','authService','addUserService',
      function($scope, $state, $http, $mdToast, $mdDialog, $firebaseObject, authService, addUserService){

      let t = this;
      let s = $scope;
      let st = $state;

      //initialize functions


      //vars
      s.users = {};
      // $firebaseObject(firebase.database().ref().child("users")).$bindTo(s,"users");


      let ref = firebase.database().ref().child("data");

      let syncObject = $firebaseObject(ref);

      syncObject.$bindTo(s, "data");

      //       name: getName(authData)

      //DELETE USER
      s.deleteUser = function() {
        s.message = null;
        s.error = null;
        authService.$deleteUser().then(function() {
          s.message = "Sorry to see you go. Your account has been removed.";
          })
          .catch(function(error) {
            s.error = error;
          });
      };

      //EMAIL SIGNUPS
      s.createUser = function() {
        s.message = null;
        s.error = null;
        authService.$createUserWithEmailAndPassword(s.email,s.password)
          .then(function(firebaseUser) {

            s.firebaseUser = firebaseUser;

            Object.defineProperties(s.firebaseUser.providerData[0],{
              displayName: { writable:true },
              email: { writable:true },
              photoURL: { writable:true }
            });

            s.firebaseUser.providerData[0].displayName;
            $scope.$watch('firebaseUser.providerData[0].displayName', function(){
                if (s.firebaseUser){
                  s.firebaseUser.providerData[0].displayName = s.firebaseUser.providerData[0].email.replace(/@.*/, '');
                }
              }
            );
            s.firebaseUser.providerData[0].displayName = s.firebaseUser.providerData[0].email.replace(/@.*/, '');

            s.firebaseUser.providerData[0].photoURL = 'assets/images/no-photo.gif';

            s.firebaseUser.providerData[0].score = 0;

            if (s.firebaseUser !== null && s.firebaseUser.providerData[0].providerId === 'password'){

              var ref = firebase.database().ref().child("users");
              var users = $firebaseObject(ref);
              var uid = s.firebaseUser.uid;

              users[uid] = s.firebaseUser.providerData[0];

              users.$save()
              .then(function(ref) {
                console.log('Email Signup Saved');
              }, function(error) {
                console.log("Oops, the following went wrong: ", error);
              });

            } else {
              console.log('is logged out');
            }


          })
          .catch(function(error) {
            s.error = error;
          });
      };

      //SOCIAL SIGNUPS
      s.auth = authService;
      authService.$onAuthStateChanged(function(firebaseUser){
        s.firebaseUser = firebaseUser;
        if (s.firebaseUser){

          if (s.firebaseUser.providerData[0].providerId !== "password"){

            // function addUser(child){
            //
            // }

            var ref = firebase.database().ref().child("users");
            var users = $firebaseObject(ref);
            var uid = s.firebaseUser.uid;            

            s.firebaseUser.providerData[0].score = 0;

            users[uid] = s.firebaseUser.providerData[0];

            users.$save()
            .then(function(ref) {
              console.log('Social Signup Saved');
            }, function(error) {
              console.log("Oops, the following went wrong: ", error);
            });

          }
        } else {
          console.log('is logged out');
        }



      });

      // //RETRIEVE AUTHENTICATED STATE
      // s.auth = authService;
      // // any time auth state changes, add user data to scope
      // s.auth.$onAuthStateChanged(function(firebaseUser) {
      //   if (firebaseUser){
      //     s.user = firebaseUser;
      //     s.uid = s.user.uid;
      //
      //   let ref = firebase.database().child("users").child(s.uid);
      //
      //   addUserService(ref)
      //     .then(function(){
      //       alert('user added to db');
      //     },function(error){
      //       console.log('Oops:', error);
      //     });
      //
      //   console.log(s.firebaseUser.uid);
      //
      //   }
      // });//END RETRIEVE AUTHENTICATED STATE

      //EXAMPLE
      // {
      //   "profiles": {
      //      "physicsmarie": {
      //         name: "Marie Curie",
      //         dob: "November 7, 1867"
      //      }
      //   }
      // }
      // var ref = firebase.database().ref();
      // $scope.profile = $firebaseObject(ref.child('profiles').child('physicsmarie'));


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
