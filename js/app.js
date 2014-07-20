var elcApp = angular.module('elcApp', ['ui.router','ui.bootstrap']);

 elcApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
     $stateProvider
      .state('home', {
        url: '/',
        //controller: 'homeCtrl',
        templateUrl: '../partials/home.html'
      })
      .state('about', {
        url: '/about',
        //controller: 'aboutCtrl',
        templateUrl: '../partials/about.html'
      })
     .state('educators', {
        url: '/educators',
        //controller: 'educators',
        templateUrl: '../partials/educators.html'
      });
})


//Carousel @ header
 
 function HeaderCarousel($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length;
      
    slides.push({
      image: 'http://placehold.it/' + newWidth + 'x300',
      text: [
          'Gambar Satu',
          'Gambar Dua',
          'Gambar Tiga',
          'Gambar Ampat'
      ][slides.length % 4]  
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
}

//Dropdown @ navbar
elcApp.controller('DropdownNav', function($scope) {});
     
 //$scope.navbarCollapsed = true;
