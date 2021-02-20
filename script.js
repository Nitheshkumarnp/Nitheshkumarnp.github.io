var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    $scope.familyData = [
        {name: 'Sundarrajan', age: 86, parent: 'Rajagopal', level: 1, children: ['Padmanaban', 'Rajan', 'Usha', 'Om Kumar', 'Siva Kumar'], mobileNumber: 'no number', show: false},
        {name: 'Padmanaban', age: 57, parent: 'Sundarrajan', level: 2, children: ['Nithya', 'Nitheshkumar', 'Subiksha'], mobileNumber: '7418308651', show: false},
        {name: 'Rajan', age: 56, parent: 'Sundarrajan', level: 2, children: ['Prasanth', 'Swetha'], mobileNumber: '8344323780', show: false},
        {name: 'Usha', age: 50, parent: 'Sundarrajan', level: 2, children: ['Ramnivas', 'Manju'], mobileNumber: '9566398548', show: false},
        {name: 'Om kumar', age: 48, parent: 'Sundarrajan', level: 2, children: ['Sanjay', 'Keerthy'], mobileNumber: '9585251710', show: false},
        {name: 'Siva kumar', age: 44, parent: 'Sundarrajan', level: 2, children: ['Guru Prasad', 'Sreevatsan'], mobileNumber: '9791247385', show: false},
        {name: 'Nithya', age: 27, parent: 'Padmanaban', level: 3, children: ['Varshini'], mobileNumber: '8807806491', show: false},
        {name: 'Nitheshkumar', age: 23, parent: 'Padmanaban', level: 3, children: [], mobileNumber: '8190011225', show: false},
        {name: 'subiksha', age: 15, parent: 'Padmanaban', level: 3, children: [], mobileNumber: '9486544083', show: false},
        {name: 'Prasanth', age: 21, parent: 'Rajan', level: 3, children: [], mobileNumber: '8870139727', show: false},
        {name: 'Swetha', age: 16, parent: 'Rajan', level: 3, children: [], mobileNumber: '9677774399', show: false},
        {name: 'Ramnivas', age: 26, parent: 'Usha', level: 3, children: [], mobileNumber: '9600739459', show: false},
        {name: 'Manju', age: 24, parent: 'Usha', level: 3, children: [], mobileNumber: '8220753184', show: false},
        {name: 'Sanjay', age: 14, parent: 'Om kumar', level: 3, children: [], mobileNumber: 'no number', show: false},
        {name: 'Keerthy', age: 11, parent: 'Om kumar', level: 3, children: [], mobileNumber: 'no number', show: false},
        {name: 'Guru Prasad', age: 11, parent: 'Siva kumar', level: 3, children: [], mobileNumber: 'no number', show: false},
        {name: 'Sreevatsan', age: 6, parent: 'Siva kumar', level: 3, children: [], mobileNumber: 'no number', show: false}
    ];
    $scope.showLevel2 = false;
    $scope.showLevel3 = false;
    $scope.level2Gen = [];
    $scope.level3Gen = [];
    $scope.prevData;
    $scope.showLevel = function(obj) {
        if(obj.level == 1) {
            $scope.showLevel2 = !$scope.showLevel2;
            $scope.showLevel3 = false;
            $scope.level2Gen = [];
            $scope.level3Gen = [];
            obj.show = !obj.show;
        }
        else if(obj.level == 2 && $scope.prevData.name == obj.name) {
            $scope.showLevel3 = !$scope.showLevel3;
            $scope.level3Gen = [];
        }
        else if(obj.level == 2) {
            $scope.showLevel3 = true;
            $scope.level3Gen = [];
        }
        for(var i = 0; i < $scope.familyData.length; i++) {
            if(obj.name == $scope.familyData[i].parent && obj.level == 1) {
                $scope.level2Gen.push($scope.familyData[i]);
            }
            if(obj.name == $scope.familyData[i].parent && obj.level == 2) {
                $scope.level3Gen.push($scope.familyData[i]);
            }
        }
        for(var j = 0; j < $scope.level2Gen.length; j++) {
            if(obj.name == $scope.level2Gen[j].name) {
                $scope.level2Gen[j].show = !$scope.level2Gen[j].show;
            } else {
                $scope.level2Gen[j].show = false;
            }
        }
        $scope.prevData = obj;
    };
    $scope.showDetails = function(obj) {
        $scope.name = obj.name;
        $scope.age = obj.age;
        $scope.parent = obj.parent;
        $scope.mobileNumber = obj.mobileNumber;
        $scope.children = obj.children;
    };
});