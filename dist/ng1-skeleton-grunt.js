'use strict';
angular
    .module('ng1-skeleton-grunt', []);

'use strict';
angular
    .module('ng1-skeleton-grunt')
    .config([

        function() {

        }
    ]);

'use strict';
angular
    .module('ng1-skeleton-grunt')
    .info({
        version: '0.0.0'
    });

'use strict';
angular
    .module('ng1-skeleton-grunt')
    .run([
        '$rootElement',
        function($rootElement) {
            var moduleName = $rootElement.attr('ng-app');
            console.debug(moduleName, angular.module(moduleName).info().version);
        }
    ]);

'use strict';
angular
    .module('ng1-skeleton-grunt')
    .constant('Constant', 'constant');
