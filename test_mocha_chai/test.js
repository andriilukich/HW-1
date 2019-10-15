function sayName(name) {
    let message = 'My name is ' + name;
    return message;
}

let arr = [5, -3, 8, 10];

let result = arr.reduce(function(sum, element) {
    return sum + element;
});

let assert = require('chai').assert;

describe('sayName', function() {

    it('Get phrase with new name', function() {
        assert.typeOf(sayName('Andrii'), 'string');
    });

});
describe('arr', function() {

    it('Get sum of the array', function() {
        assert.equal(result, 13);
    });

});