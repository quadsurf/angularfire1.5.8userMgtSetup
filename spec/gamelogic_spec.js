var gamelogic = require('../public/js/gamelogic.js');


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


describe("RandomRPS", function () {

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
