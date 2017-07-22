'use strict';
var expect = chai.expect;

describe('ng1-module-grunt', function() {

    it('should be registered', function() {
        expect(function() {
            angular.module('ng1-module-grunt');
        }).to.not.throw(Error);
    });

});
