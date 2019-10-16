describe('Timer', function() {
    it('Does it give back an object?', function() {
        assert.typeOf(getTimeRemaining(endtime), 'object');
    });

    it('Set the timer', function() {
        assert.typeOf(timer('timer', '2019-12-15', '.seconds', '.minutes', '.hours', '.days'), 'string');
    });

    describe('Total sum', function() {
        it('Total sum', function() {
            assert.equal(total, 0);
        });
    });
});