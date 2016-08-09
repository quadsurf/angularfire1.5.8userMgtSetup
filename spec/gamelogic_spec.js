var gamelogic = require('../public/js/gamelogic.js');

// TESTING TESTS

describe("checking the test", function () {

	it("should work", function () {
		expect("test").toEqual("test");
	});

});


describe("check to see if can import functions", function () {

	it("should return true", function () {
		expect(gamelogic.returnTrue()).toEqual(true);
	});

});



// TESTS:

describe("randomRPS", function () {

	var rpsCheck = function(value) {
		return ( value === "rock" || value === "paper" || value === "scissors" );
	};

	it("should return 'rock', 'paper', or 'scissors'", function () {
		expect(rpsCheck(gamelogic.randomRPS())).toEqual(true);
		expect(rpsCheck(gamelogic.randomRPS())).toEqual(true);
		expect(rpsCheck(gamelogic.randomRPS())).toEqual(true);
		expect(rpsCheck(gamelogic.randomRPS())).toEqual(true);
		expect(rpsCheck(gamelogic.randomRPS())).toEqual(true);
	});

});


describe("vaildMove", function () {

	it("should return true is move valid", function () {
		expect(gamelogic.validMove("hex5", "hex6")).toEqual(true);
	});

	it("should return false is move invalid", function () {
		expect(gamelogic.validMove("hex5", "hex1")).toEqual(false);
		expect(gamelogic.validMove("hex5", "hex19")).toEqual(false);
	});

});
