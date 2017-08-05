

angular.module('app', [])
    .controller('gitHubDataController', ['$scope','$http', function($scope,$http) {
		
		console.log('getData');

        $scope.reposLoaded = false;

        $scope.userLoaded = false;

        $scope.username = "binitdatta";

        $http.get("https://api.github.com/users/" + $scope.username)
            .success(function (data) {
				console.log("$http getData");
                $scope.userData = data;
                loadRepos();
            });

        var loadRepos = function () {
			console.log("loadRepos getData");
            $http.get($scope.userData.repos_url)
                .success(function (data) {
                    $scope.repoData = data;
                });
        };

		$scope.getData = function () {
			console.log('getData');
			 $http.get("https://api.github.com/users/" + $scope.gitusername)
            .success(function (data) {
                $scope.userData = data;
                loadRepos();
            });
        };

        $scope.predicate = '-updated_at';


}]);  