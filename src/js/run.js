'use strict';
angular
    .module('ng1-module-grunt')
    .run([
        '$rootElement',
        function($rootElement) {
            var moduleName = $rootElement.attr('ng-app');
            console.debug(moduleName, angular.module(moduleName).info().version);
        }
    ]);
