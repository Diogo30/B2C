// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate){
  $scope.toggleLeft = function(){
    $ionicSideMenuDelegate.toggleLeft()
  }
})

app.controller('MenuList', function($scope){
  $scope.items = [
    {name: 'Home'},
    {name: 'History'},
    {name: 'Downloads'},
    {name: 'Contacts'}
  ]
})