'use strict';

var $injector;

beforeEach(module('ng1-module-grunt'));

beforeEach(function() {
    $injector = undefined;
});

function $get(name) {
    if (!$injector) {
        inject(function(_$injector_) {
            $injector = _$injector_;
        });

        return $injector.$get(name);
    }
}

window.helper = {
    $get: $get
};
