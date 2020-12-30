const polybius = require('../src/polybius');
const {expect} = require('chai');

describe('polybius', () => {
    it('should return the correct coded message', () => {
        const actual = polybius("thinkful");
        expect(actual).to.equal("4432423352125413");
    });
    it('should add the spaces into the output', () => {
        const actual = polybius("Hello world");
        expect(actual).to.equal('3251131343 2543241341');
    });
    it('should return false when trying to decode a string that is not even in length', () =>{
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    });
    it('should include i and j as 1 letter and all for spaces when decoding', () =>{
        const actual = polybius('3251131343 4432423352125413', false);
        expect(actual).to.equal('hello thi/jnkful')
    });
});