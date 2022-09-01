var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  
  
  $scope.myName = "Zainab";

 }).directive("navigationElements", function () {
     return {
         restrict: "E",
         scope: false,
         templateUrl: "navigationElements.html"
     };
}).directive("footerElements", function () {
  return {
      restrict: "E",
      scope: false,
      templateUrl: "footerElements.html"
  };
});
