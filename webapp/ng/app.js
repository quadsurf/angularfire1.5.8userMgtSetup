

(function() {

  angular

    .module('rpsApp', ['ngMaterial','ngAnimate','ui.router','firebase'])

    .config(function($mdThemingProvider,$stateProvider){

      $mdThemingProvider
        .theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');

      $stateProvider
        .state('users',{
          url: '/users',
          templateUrl: '/ng/views/users.tpl.html',
          controller: 'usersCtr as users'
        })
        .state('users.new',{
          url: '/new',
          templateUrl: '/ng/views/users.new.tpl.html',
          controller: 'newUserCtr as newuser'
        })
        .state('users.edit',{
          url: '/edit/:id',
          templateUrl: '/ng/views/users.edit.tpl.html',
          controller: 'editUserCtr as edituser',
          params: {
            classified: null
          }
        })
        .state('newgame',{
          url: '/newgame',
          templateUrl: '/ng/views/game.new.tpl.html',
          controller: 'newGameCtr as newgame'
        })
        .state('game',{
          url: '/game/:id',
          templateUrl: '/ng/views/gameboard.tpl.html',
          controller: 'gameboardCtr as game',
          params: {
            classified: null
          }
        });

    });

}());
