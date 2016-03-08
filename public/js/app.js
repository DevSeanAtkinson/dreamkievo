var app = angular.module('ngTodo', []);

app.controller('WinnersController', function($scope){
 $scope.todoList = ['Old Salty Sean [Shadow Jago/Omen/Spinal]',
                  'Maximillion d00d [Fulgore/Saberwulf]',
                  'Rico Suave [Fulgore/Thunder/Glacius/Omen/Spinal]',
                  'Swordsman09 [Cinder]'];

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
    var index = $scope.todoList.indexOf(singleTodo);
    $scope.todoList.splice(index,1,$scope.currentTodo);
    $scope.currentTodo = '';
  }

$scope.moveup = function(singleTodo){
  var index = $scope.todoList.indexOf(singleTodo);
  $scope.todoList.splice(index, 1);
  $scope.todoList.splice(index-1, 0, singleTodo);
}

});

app.controller('LoserController', function($scope){
 $scope.todoList = ['Sleep NS [Kan-Ra]',
                    'YOMI.RM|Saltface [Orchid]',
                    'Pink Diamond [Maya]',
                    'UA|mygod [Saberwulf]'];

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
    var index = $scope.todoList.indexOf(singleTodo);
    $scope.todoList.splice(index,1,$scope.currentTodo);
    $scope.currentTodo = '';
  }

$scope.moveup = function(singleTodo){
  var index = $scope.todoList.indexOf(singleTodo);
  $scope.todoList.splice(index, 1);
  $scope.todoList.splice(index-1, 0, singleTodo);
}

});
