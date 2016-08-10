var gamelogic = require('../public/js/gamelogic.js');

function resetGameState(){
	gamelogic.gameState = {
				"players": {
					"player1": {
						"name": "p1",
						"reserve": {
							"unit1": "Rock",
							"unit2": "Rock",
							"unit3": "Paper",
							"unit4": "Paper",
							"unit5": "Scissors",
							"unit6": "Scissors"
						},
					},
					"player2": {
						"name": "p2",
						"reserve": {
							"unit1": "Rock",
							"unit2": "Rock",
							"unit3": "Paper",
							"unit4": "Paper",
							"unit5": "Scissors",
							"unit6": "Scissors"
						}
					},
				},
				"gameStatus": {
					"currentPlayer": "player1",
					"mode": "setup",
					"swaps": null,
					"AP": null,
				},
				"grid": {
					"hex1": {
								 "owner": "blocked"
							 },
					"hex2": {
								 "owner": null, "type": null, "health": null
							 },
					"hex3": {
								 "owner": null, "type": null, "health": null
							 },
					"hex4": {
								 "owner": null, "type": null, "health": null
							 },
					"hex5": {
								 "owner": null, "type": null, "health": null
							 },
					"hex6": {
								 "owner": null, "type": null, "health": null
							 },
					"hex7": {
								 "owner": null, "type": null, "health": null
							 },
					"hex8": {
								 "owner": null, "type": null, "health": null
							 },
					"hex9": {
								 "owner": null, "type": null, "health": null
							 },
					"hex10": {
								 "owner": null, "type": null, "health": null
							 },
					"hex11": {
								 "owner": null, "type": null, "health": null
							 },
					"hex12": {
								 "owner": null, "type": null, "health": null
							 },
					"hex13": {
								 "owner": null, "type": null, "health": null
							 },
					"hex14": {
								 "owner": null, "type": null, "health": null
							 },
					"hex15": {
								 "owner": null, "type": null, "health": null
							 },
					"hex16": {
								 "owner": null, "type": null, "health": null
							 },
					"hex17": {
								 "owner": null, "type": null, "health": null
							 },
					"hex18": {
								 "owner": null, "type": null, "health": null
							 },
					"hex19": {
								 "owner": null, "type": null, "health": null
							 },
					"hex20": {
								 "owner": null, "type": null, "health": null
							 },
					"hex21": {
								 "owner": null, "type": null, "health": null
							 },
					"hex22": {
								 "owner": null, "type": null, "health": null
							 },
					"hex23": {
								 "owner": null, "type": null, "health": null
							 },
					"hex24": {
								 "owner": null, "type": null, "health": null
							 },
					"hex25": {
								 "owner": null, "type": null, "health": null
							 },
					"hex26": {
								 "owner": null, "type": null, "health": null
							 },
					"hex27": {
								 "owner": null, "type": null, "health": null
							 },
					"hex28": {
								 "owner": null, "type": null, "health": null
							 },
					"hex29": {
								 "owner": null, "type": null, "health": null
							 },
					"hex30": {
								 "owner": null, "type": null, "health": null
							 },
					"hex31": {
								 "owner": null, "type": null, "health": null
							 },
					"hex32": {
								 "owner": null, "type": null, "health": null
							 },
					"hex33": {
								 "owner": null, "type": null, "health": null
							 },
					"hex34": {
								 "owner": null, "type": null, "health": null
							 },
					"hex35": {
								 "owner": null, "type": null, "health": null
							 },
					"hex36": {
								 "owner": null, "type": null, "health": null
							 },
					"hex37": {
								 "owner": "blocked"
							 }
					} // end of grid:
	};
}

function initGameReady(){
	// Initialize Game Setup, characters placed, no moves made yet
	gamelogic.gameState.players.player1.reserve = {
							"unit1": "Rock",
							"unit2": false,
							"unit3": "Paper",
							"unit4": false,
							"unit5": false,
							"unit6": false
						};

	gamelogic.gameState.players.player2.reserve = {
							"unit1": false,
							"unit2": false,
							"unit3": false,
							"unit4": "Paper",
							"unit5": "Scissors",
							"unit6": false
						};

	gamelogic.gameState.gameStatus.AP = 2;
	gamelogic.gameState.grid.hex2 = {"owner": "p1", "type": "rock", "health": 1};
	gamelogic.gameState.grid.hex3 = {"owner": "p1", "type": "scissors", "health": 1};
	gamelogic.gameState.grid.hex5 = {"owner": "p1", "type": "paper", "health": 1};
	gamelogic.gameState.grid.hex10 = {"owner": "p1", "type": "scissors", "health": 1};
	gamelogic.gameState.grid.hex28 = {"owner": "p2", "type": "rock", "health": 1};
	gamelogic.gameState.grid.hex33 = {"owner": "p2", "type": "paper", "health": 1};
	gamelogic.gameState.grid.hex35 = {"owner": "p2", "type": "rock", "health": 1};
	gamelogic.gameState.grid.hex36 = {"owner": "p2", "type": "scissors", "health": 1};

}

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
		expect(gamelogic.validMove("hex12", "hex7")).toEqual(true);
	});

	it("should return false is move invalid", function () {
		expect(gamelogic.validMove("hex5", "hex1")).toEqual(false);
		expect(gamelogic.validMove("hex5", "hex19")).toEqual(false);
	});

});


describe("endTurn", function () {

	afterAll(function () {

		resetGameState();

	});

	it("should pass turn to next player", function () {
		gamelogic.endTurn();
		expect(gamelogic.gameState.gameStatus.currentPlayer).toEqual("player2");
	});

});


describe("useAP", function () {

	beforeAll(function () {

		gamelogic.gameState.gameStatus.AP = 2;

	});

	afterAll(function () {

		gamelogic.gameState.gameStatus.AP = null;

	});

	it("should decrement AP", function () {
		gamelogic.useAP();
		expect(gamelogic.gameState.gameStatus.AP).toEqual(1);
		gamelogic.useAP();
		expect(gamelogic.gameState.gameStatus.AP).toEqual(0);
	});

	it("should pass turn to next player if no AP are left", function () {
		expect(gamelogic.gameState.gameStatus.currentPlayer).toEqual("player2");
	});

});


describe("move", function () {

	beforeAll(function () {

		initGameReady(); // Initialize Game Setup, characters placed, no moves made yet

		var selectedCor,
				objectFromSelectedCor,
				actionCor,
				objectFromActionCor;

	});

	afterAll(function () {

		resetGameState();

	});

	it("should move character data to new hex", function () {

		selectedCor = "hex2";
		objectFromSelectedCor = gamelogic.gameState.grid[selectedCor];
		actionCor = "hex7";
		objectFromActionCor = gamelogic.gameState.grid[actionCor];

		gamelogic.move(objectFromSelectedCor, selectedCor, actionCor);

		expect(gamelogic.gameState.grid["hex7"]).toEqual({"owner": "p1", "type": "rock", "health": 1});
		expect(gamelogic.gameState.grid["hex2"]).toEqual({"owner": null, "type": null, "health": null});

	});

});


describe("resolveMove that has no battle", function () {

	beforeAll(function () {

		initGameReady(); // Initialize Game Setup, characters placed, no moves made yet

		var selectedCor,
				objectFromSelectedCor,
				actionCor,
				objectFromActionCor;

	});

	afterAll(function () {

		resetGameState();

	});


	it("should move character data to new hex if hex is empty", function () {

		selectedCor = "hex2";
		objectFromSelectedCor = gamelogic.gameState.grid[selectedCor];
		actionCor = "hex7";
		objectFromActionCor = gamelogic.gameState.grid[actionCor];

		gamelogic.resolveMove(selectedCor, objectFromSelectedCor, actionCor, objectFromActionCor);

		expect(gamelogic.gameState.grid["hex7"]).toEqual({"owner": "p1", "type": "rock", "health": 1});
		expect(gamelogic.gameState.grid["hex2"]).toEqual({"owner": null, "type": null, "health": null});

	});

	it("should have action points decremented after move", function () {

		selectedCor = "hex7";
		objectFromSelectedCor = gamelogic.gameState.grid[selectedCor];
		actionCor = "hex13";
		objectFromActionCor = gamelogic.gameState.grid[actionCor];

		expect(gamelogic.gameState.gameStatus.AP).toEqual(1); // since prev it block made move

		gamelogic.resolveMove(selectedCor, objectFromSelectedCor, actionCor, objectFromActionCor); // make second move

		expect(gamelogic.gameState.gameStatus.AP).toEqual(0);

	});

	it("should pass turn to next player if no AP are left", function () {
		expect(gamelogic.gameState.gameStatus.currentPlayer).toEqual("player2");
	});

});


describe("battle", function () {

	var p1rock = {"owner": "p1", "type": "rock", "health": 1};
	var p2rock = {"owner": "p2", "type": "rock", "health": 1};
	var p1paper = {"owner": "p1", "type": "paper", "health": 1};
	var p2paper = {"owner": "p2", "type": "paper", "health": 1};
	var p1scissors = {"owner": "p1", "type": "scissors", "health": 1};
	var p2scissors = {"owner": "p2", "type": "scissors", "health": 1};

	var selectedCor = "hex12";
	var actionCor = "hex19";


	it("should return results object with tie outcome", function () {
		expect(gamelogic.battle(selectedCor, p1rock, actionCor, p2rock)).toEqual({"winner": "tie", "loser": "tie"});
		expect(gamelogic.battle(selectedCor, p1paper, actionCor, p2paper)).toEqual({"winner": "tie", "loser": "tie"});
		expect(gamelogic.battle(selectedCor, p1scissors, actionCor, p2scissors)).toEqual({"winner": "tie", "loser": "tie"});
	});

	it("should return results object with attacker as winner", function () {
		expect(gamelogic.battle(selectedCor, p1rock, actionCor, p2scissors)).toEqual({"winner": [selectedCor, p1rock], "loser": [actionCor, p2scissors]});
		expect(gamelogic.battle(selectedCor, p1paper, actionCor, p2rock)).toEqual({"winner": [selectedCor, p1paper], "loser": [actionCor, p2rock]});
		expect(gamelogic.battle(selectedCor, p1scissors, actionCor, p2paper)).toEqual({"winner": [selectedCor, p1scissors], "loser": [actionCor, p2paper]});
	});

	it("should return results object with attacker as loser", function () {
		expect(gamelogic.battle(selectedCor, p1rock, actionCor, p2paper)).toEqual({"winner": [actionCor, p2paper], "loser": [selectedCor, p1rock]});
		expect(gamelogic.battle(selectedCor, p1paper, actionCor, p2scissors)).toEqual({"winner": [actionCor, p2scissors], "loser": [selectedCor, p1paper]});
		expect(gamelogic.battle(selectedCor, p1scissors, actionCor, p2rock)).toEqual({"winner": [actionCor, p2rock], "loser": [selectedCor, p1scissors]});
	});

});


// describe("resolveMove that has battle", function () {
//
// 	beforeAll(function () {
//
// 		initGameReady(); // Initialize Game Setup, characters placed, no moves made yet
//
// 		var selectedCor,
// 				objectFromSelectedCor,
// 				actionCor,
// 				objectFromActionCor;
//
// 	});
//
// 	afterAll(function () {
//
// 		resetGameState();
//
// 	});
//
//
// 	// it("should resolve battle", function () {
// 	//
// 	//
// 	// });
//
// 	// it("should have action points decremented after move", function () {
// 	//
// 	// 	selectedCor = "hex7";
// 	// 	objectFromSelectedCor = gamelogic.gameState.grid[selectedCor];
// 	// 	actionCor = "hex13";
// 	// 	objectFromActionCor = gamelogic.gameState.grid[actionCor];
// 	//
// 	// 	expect(gamelogic.gameState.gameStatus.AP).toEqual(1); // since prev it block made move
// 	//
// 	// 	gamelogic.resolveMove(selectedCor, objectFromSelectedCor, actionCor, objectFromActionCor); // make second move
// 	//
// 	// 	expect(gamelogic.gameState.gameStatus.AP).toEqual(0);
// 	//
// 	// });
//
// 	// it("should pass turn to next player if no AP are left", function () {
// 	// 	expect(gamelogic.gameState.gameStatus.currentPlayer).toEqual("player2");
// 	// });
//
// });
