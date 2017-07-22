'use strict';
var expect = chai.expect;

describe('constants', function() {

    describe('Constant', function() {
        it('should be \'constant\'', inject(function(Constant) {
            expect(Constant).to.equal('constant');
        }));
    });
});
