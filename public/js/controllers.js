'use strict';

/* Controllers */
function MainCtrl($scope) {
  console.log('in MainCtrl');
  $scope.myVar = 'This is a scope variable';
}

function MemoCtrl($scope, MemoService) {
  console.log('in MemoCtrl');
  $scope.fetchAllMemos = function() {
    MemoService.query({}, function(data) {
      $scope.memos = data.memos;
    });
  }
  $scope.fetchAllMemos();

  $scope.saveMemo = function() {
    $scope.error = undefined;
    MemoService.save($scope.form, function(response) {
      if(!response.error) {
        // No error, clear form and refresh view
        $scope.form = {};
        $scope.fetchAllMemos();
      } else {
        $scope.error = response.error;
      }
    });
  }
}
