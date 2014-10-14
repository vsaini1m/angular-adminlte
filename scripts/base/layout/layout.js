'use strict';

/**
 * adminlte.base.layout Module
 *
 * Description
 */
angular.module('adminlte.base.layout', [])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('app', {
            abdtract:true,
            views: {
                "@": {
                   templateUrl: "views/layout/layout.html",
                   controller: 'layoutCtrl'
                 },
                "header@app": {
                    templateUrl: "views/layout/header.html"
                },
                "sidebar@app": {
                    templateUrl: "views/layout/sidebar.html"
                }
            }
        });

}]);