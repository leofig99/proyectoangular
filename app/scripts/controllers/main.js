'use strict';

/**
 * @ngdoc function
 * @name proyecto2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyecto2App
 */
angular.module('proyecto2App')
  .controller('MainCtrl', function ($scope) {
   $scope.todos = []
  $scope.addTodo=function(){
  	$scope.todos.push($scope.todo);
  	$scope.todo='';
  };
  $scope.removeTodo=function(index){
  	$scope.todos.splice(index,1);
  };
  
  });