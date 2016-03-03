var app = angular.module('ngTodo', []);

app.controller('TodoController', function($scope){
 $scope.todoList = ['Old Salty Sean [Shadow Jago/Omen]',
                  'Rico Suave [Shadow Jago/Omen]',
                  'C88 mygod [Saberwulf]',
                  'Swordsman09 [Cinder]',
                  'Sleep ns [Kan-Ra]',
                  '[Saberwulf]',
                  '[Aria]',
                  '[Glacius]'];

    $scope.saveTodo = function(){
      var todoInfo = $scope.currentTodo;
      $scope.todoList.push(todoInfo);
      $scope.currentTodo="";
    }

$scope.removeTodo = function(singleTodo){
    var index = $scope.todoList.indexOf(singleTodo);
    $scope.todoList.splice(index, 1);
}


$scope.editTodo = function(singleTodo){
  $scope.currentTodo = singleTodo;
  $scope.removeTodo(singleTodo);
}

$scope.moveup = function(singleTodo){
  var index = $scope.todoList.indexOf(singleTodo);
  $scope.todoList.splice(index, 1);
  $scope.todoList.splice(index-1, 0, singleTodo);
}

});
