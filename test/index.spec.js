
const lib = require('../');

describe('LOAD', () => {
    it("should a valid lib", () => {
        expect(lib).toBeInstanceOf(Object);
        expect(lib.cls.Server).toBeInstanceOf(Function);
        expect(lib.cls.Request).toBeInstanceOf(Function);
        expect(lib.cls.Response).toBeInstanceOf(Function);
    });
});