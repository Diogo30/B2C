example.controller("ExampleController", function($scope, $ionicSlideBoxDelegate) {
    $scope.navSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 500);
    }
});