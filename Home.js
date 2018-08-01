app.controller('HomeCtrl', ['$http','$scope','$location','$rootScope','myServiceHome',function($http,$scope,$location,
	$rootScope,myServiceHome) {

  	    $scope.user={}



	$scope.submitForm=function(){
$http.post('/signup', $scope.user).success((result)=>{
               if(result == "Email id already Registered"){
                   alert("Email id already Registered")
               }
               else if(result=="Error Occured")
               {
                   alert("Error Occured");
               }
               else{
                       myServiceHome.myUserData=$scope.user;
                        alert("you have successfully signup")
                        $location.path('/index');
               }
           })
           
	};
  var today = new Date();
  var minAge = 0;
  $scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());

}]);