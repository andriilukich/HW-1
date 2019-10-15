describe('Timer', function() {
    it('Does it give back an object?', function() {
        assert.typeOf(getTimeRemaining(), 'object');
    });
});