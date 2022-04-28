
var myApp = angular.module('myApp', []);

myApp.controller('calculatorCtrl', function ($scope, $http) {

  $scope.isValid = false;
  $scope.showResult = false;
  $scope.customStyle = {};


  $scope.validator = function (event) {
    $scope.showResult = false;

    if (!event.target.value.match(/^[\d]+$/)) {
      $scope.customStyle[event.target.name] = "border border-danger fw-bold text-danger";
      $scope.isValid = false;
    }
    else {
      $scope.customStyle[event.target.name] = "border border-success";
      $scope.isValid = true;
    }
  }

  $scope.multiply = function (input1, input2) {
    return parseInt(input1) * parseInt(input2)
  }

  $scope.SendData = function (firstNumber,secondNumber) {

    $scope.showResult = true
    var data = {
      "input1": firstNumber,
      "input2": secondNumber,
      "result": parseInt(firstNumber) * parseInt(secondNumber)
    };

    $http.post('http://localhost:2000/saveResult', data)
      .then(function (response) {
        $scope.PostDataResponse =
          response.data;
      })
  }

  $scope.makeCall = function () {
    var request = {
      method: 'GET',
      url: 'http://localhost:2000/getResult',
      headers: {
        'Anonymous': true
      }
    };

    $http(request)
      .success(function (data) {
        console.log('success : ', data);
        $scope.firstNumber = data[0].input1;
        $scope.secondNumber = data[0].input2;
        $scope.showResult = true
      })
      .error(function (error) {
        console.log('error : ', error);
      });
  }

})

