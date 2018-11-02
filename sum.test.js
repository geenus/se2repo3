const sum = require('./sum');
test('add 1 + 2', () => {
		expect(sum(1,2)).toBe(3);
});
test('add null + null', () => {
		expect(sum(null, null)).toBe(null);
});
