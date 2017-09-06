angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      Listings.unshift({'code' : $scope.code,
	  'name' : $scope.name,
	  'coordinates.latitude' : $scope.lati,
	  'coordinates.longitude' : $scope.longi,
	  'address' : $scope.addr});
      
    };
    $scope.deleteListing = function(index) {
		$scope.listings.splice(index,1);
	};
	
    $scope.showDetails = function(index) {
		
		$scope.code = '';
		$scope.name = '';
		$scope.lati = '';
		$scope.longi = '';
		$scope.addr = '';
		$scope.code = index.code;
		$scope.name = index.name;
		$scope.lati = index.coordinates.latitude;
		$scope.longi = index.coordinates.longitude;
		$scope.addr = index.address;
	};
	
  }
]);