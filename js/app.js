//AXA

var elcApp = angular.module('elcApp', ['ui.router', 'ui.calendar', 'ui.bootstrap']);

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
     .state('calendar', {
        url: '/calendar',
        //controller: 'calendarCtrl',
        templateUrl: '../partials/calendar.html'
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


var TabsDemoCtrl = function ($scope) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];
 
};



//UI-Calendar  http://angular-ui.github.io/ui-calendar/
function CalendarCtrl($scope) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    //$scope.changeTo = 'Bahasa Malaysia';
    /* event source that pulls from google.com */
    $scope.eventSource = {
            url: "https://www.google.com/calendar/feeds/en.malaysia%23holiday%40group.v.calendar.google.com/public/basic",
            className: 'ELC-event',
            cache: true         //aku tak sure benda ni betul2 cache kalendar ke tak, tp kalau letak pun tak kacau apa.
    };

    $scope.eventSources = [$scope.eventSource];
    $scope.eventSources2 = [$scope.calEventsExt];
}

