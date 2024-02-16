const {add} = require('../arithmetica')

test('2 + 3 is equal to 5', () => {
    expect(add(2,3)).toBe(5);
});

test('299 + 301 is equal to 600', () => {
    expect(add(299,301)).toBe(600);
});


test('24 + 50 is equal to 74', () => {
    expect(add(24,50)).toBe(74);
});