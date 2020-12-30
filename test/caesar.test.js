const caesar = require("../src/caesar");
const {expect} = require("chai");



describe("caesar function", () =>{
    it('should return false if shift is 0, -25, 25', () => {
        const actual = caesar('Thinkful', 0, true)
        expect(actual).to.be.false;
    });
    it("should return an encoded message", () =>{
        const actual = caesar('Thinkful', 3, true);
        expect(actual).to.equal('wklqnixo')
    });
    it("should return a decoded message", () => {
        const actual = caesar('wklqnixo', 3, false);
        expect(actual).to.equal('thinkful')
    });
    it('should ignore non alphabet characters when encoding and has the ability to wrap around alphabet', () => {
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal('bpqa qa i amkzmb umaaiom!')
    });
    it('should ignore non alphabet characters when decoding', () =>{
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal('this is a secret message!')
    });
});