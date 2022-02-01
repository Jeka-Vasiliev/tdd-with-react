const { add } = require("./calc.js");

describe("calculator", () => {
	it("add two numbers", () => {
		expect(add(1, 2)).toEqual(3);
	});
});
