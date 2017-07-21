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

angular.module('ng1-skeleton-grunt').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/views/template.htm',
    '<template>\n' +
    '    <header>Header</header>\n' +
    '\n' +
    '    <h2>Example template</h2>\n' +
    '\n' +
    '    <p>This is an example template.</p>\n' +
    '\n' +
    '    <footer>Footer</footer>\n' +
    '</template>\n'
  );

}]);
