'use strict';
angular
    .module('ng1-module-grunt')
    .run([
        function() {
            var moduleName = 'ng1-module-grunt';
            console.debug(moduleName, angular.module(moduleName).info().version);
        }
    ]);
