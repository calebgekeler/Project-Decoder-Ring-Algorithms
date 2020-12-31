const substitution = require('../src/substitution');
const {expect} = require('chai');

describe('substitution', () => {
    it('should return false if characters repeat in the alphabet', () => {
        const expected = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(expected).to.be.false;
    });
    it('should return false if the given alphabet is not 26 characters', () => {
        const expected = substitution("thinkful", "abcdefg");
        expect(expected).to.be.false; 
    });
    it('should return the appropriate coded message', () => {
        const expected = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(expected).to.equal('elp xhm xf mbymwwmfj dne')
    });
    it('shoudl return the appropriate decoded message', () => {
        const expected = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(expected).to.equal('thinkful');
    })
});