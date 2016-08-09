"use strict";
/*jshint esversion: 6 */

let playerList = [];


let gamelogic = {

	randomRPS: function() {
		let choice = Math.floor(Math.random() * (3)) + 1;
		switch (choice) {
			case 1:
				return "rock";
			case 2:
				return "paper";
			case 3:
				return "scissors";
			default:
				return "Error";
		}
	},

	loadBoard: function (gameState) {
		// loop through gameState.players, add playerX.name to playersList
		// loop through gameState.grid, display visual representations
		// if gameState.gameStatus.currentPlayer === null,
		//	then gameState.gameStatus.currentPlayer = playersList[0];
	},

	validMove: function ( selectedCor, actionCor ) {
			if ( validMoves[selectedCor][actionCor] ) {
				return validMoves[selectedCor][actionCor];
			} else {
				return false;
			}
	},

	canMove: function ( selectedCor ) { // show valid move spaces
		// loop through validMoves for selectedCor
		// add class .canMove to each hex
	},

	resolveMove: function ( selectedCor, ObjectFromSelectedCor, actionCor, ObjectFromActionCor ) {
		// if ( valid move && ObjectFromActionCor.owner === null ) {
	  //	move (ObjectFromSelectedCor, selectedCor, actionCor);
		// else
		//	var NewselectedCor = moveNextTo(selectedCor, actionCor);
		//	move (ObjectFromSelectedCor, selectedCor, NewselectedCor);
		// 	battle(NewselectedCor, ObjectFromSelectedCor, actionCor, ObjectFromActionCor);
		// };
	},

	moveNextTo: function ( selectedCor, actionCor ) { // Move next to defending character
		switch ( selectedCor - actionCor) {
			case IfXisNeg:  // Moving Right
				// Add one to x of selectedCor
				return;
			case IfXisPos:  // Moving Left
				// Subtract one to x of selectedCor
				return;
			case IfYisNeg:  // Moving Down
				// Add one to y of selectedCor
				return;
			case IfYisPos:  // Moving Up
				// Subtract one to y of selectedCor
				return;
			default:
				return "Error";
		}
	},

	move: function ( ObjectFromSelectedCor, moveFrom, MoveTo ) {
		// gameboard[MoveTo] = ObjectFromSelectedCor;
		// gameboard[MoveFrom] = EmptyBoardObject
	},

	battle: function( NewselectedCor, ObjectFromSelectedCor, actionCor, ObjectFromActionCor ) {
		// var offender = [NewselectedCor, ObjectFromSelectedCor];
		// var defender = [actionCor, ObjectFromActionCor];
		// var loserCor;

		// Compare offender[1] to defender[1]

		// if TIE {
		//	swapOut(CurrentPlayer) character from reserve
		//	endTurn(CurrentPlayer)
		// } else {
		//	loser(offender or defender);
		//	if offender wins && gameboard[actionCor].owner === null {
		//		move( offender[1], offender[0], MoveTo )
		// 	}
		//	endTurn(CurrentPlayer)
		// }
		//
		//
	},

	loser: function( loser, loserCor ) {
		// loser.health -1
		// if loser.health === 0
		// 	gameboard[loserCor] = EmptyBoardObject
	},

	swapOut: function() {
		// each player can swap from their reserve
		// then battle() again
		return;
	},

	placeCharacter: function() {
		// NEED TO DO!!
		return;
	},

	returnTrue: function() {
			return true;
		},

}; // END OF const gamelogic =


let validMoves = {
		"hex1": {
						 "blocked": true
						},
		"hex2": {
						 "hex6": true,
						 "hex7": true,
						 "hex3": true
						},
		"hex3": {
						 "hex2": true,
						 "hex7": true,
						 "hex8": true,
						 "hex4": true
						},
		"hex4": {
						 "hex3": true,
						 "hex8": true,
						 "hex9": true,
					 },
		"hex5": {
						 "hex10": true,
						 "hex11": true,
						 "hex6": true,
					 },
		"hex6": {
						 "hex2": true,
						 "hex5": true,
						 "hex7": true,
						 "hex11": true,
						 "hex12": true
					 },
		"hex7": {
						 "hex2": true,
						 "hex3": true,
						 "hex6": true,
						 "hex8": true,
						 "hex12": true,
						 "hex13": true
					 },
		"hex8": {
						 "hex3": true,
						 "hex4": true,
						 "hex7": true,
						 "hex9": true,
						 "hex13": true,
						 "hex14": true
					 },
		"hex9": {
						 "hex4": true,
						 "hex8": true,
						 "hex14": true,
						 "hex15": true
					 },
		"hex10": {
						 "hex5": true,
						 "hex6": true,
						 "hex11": true,
						 "hex16": true,
						 "hex17": true,
					 },
		"hex11": {
						 "hex5": true,
						 "hex6": true,
						 "hex10": true,
						 "hex12": true,
						 "hex17": true,
						 "hex18": true
					 },
		"hex12": {
						 "hex6": true,
						 "hex7": true,
						 "hex11": true,
						 "hex13": true,
						 "hex18": true,
						 "hex19": true
					 },
		"hex13": {
						 "hex7": true,
						 "hex8": true,
						 "hex12": true,
						 "hex14": true,
						 "hex19": true,
						 "hex20": true
					 },
		"hex14": {
						 "hex8": true,
						 "hex9": true,
						 "hex13": true,
						 "hex15": true,
						 "hex20": true,
						 "hex21": true
					 },
		"hex15": {
						 "hex9": true,
						 "hex14": true,
						 "hex21": true,
						 "hex22": true
					 },
		"hex16":{
						 "hex10": true,
						 "hex17": true,
						 "hex23": true
					 },
		"hex17":{
						 "hex10": true,
						 "hex11": true,
						 "hex16": true,
						 "hex18": true,
						 "hex23": true,
						 "hex24": true
					 },
		"hex18":{
						 "hex11": true,
						 "hex12": true,
						 "hex17": true,
						 "hex19": true,
						 "hex24": true,
						 "hex25": true
					 },
		"hex19":{
						 "hex12": true,
						 "hex13": true,
						 "hex18": true,
						 "hex20": true,
						 "hex25": true,
						 "hex26": true
					 },
		"hex20":{
						 "hex13": true,
						 "hex14": true,
						 "hex19": true,
						 "hex21": true,
						 "hex26": true,
						 "hex27": true
					 },
		"hex21":{
						 "hex14": true,
						 "hex15": true,
						 "hex20": true,
						 "hex22": true,
						 "hex27": true,
						 "hex28": true
					 },
		"hex22":{
						 "hex15": true,
						 "hex21": true,
						 "hex28": true
					 },
		"hex23":{
						 "hex16": true,
						 "hex17": true,
						 "hex24": true,
						 "hex29": true
					 },
		"hex24":{
						 "hex17": true,
						 "hex18": true,
						 "hex23": true,
						 "hex25": true,
						 "hex29": true,
						 "hex30": true
					 },
		"hex25":{
						 "hex18": true,
						 "hex19": true,
						 "hex24": true,
						 "hex26": true,
						 "hex30": true,
						 "hex31": true
					 },
		"hex26":{
						 "hex19": true,
						 "hex20": true,
						 "hex25": true,
						 "hex27": true,
						 "hex31": true,
						 "hex32": true
					 },
		"hex27":{
						 "hex20": true,
						 "hex21": true,
						 "hex26": true,
						 "hex28": true,
						 "hex32": true,
						 "hex33": true
					 },
		"hex28":{
						 "hex21": true,
						 "hex22": true,
						 "hex27": true,
						 "hex33": true
					 },
		"hex29":{
						 "hex23": true,
						 "hex24": true,
						 "hex30": true,
						 "hex34": true
					 },
		"hex30":{
						 "hex24": true,
						 "hex25": true,
						 "hex29": true,
						 "hex31": true,
						 "hex34": true,
						 "hex35": true
					 },
		"hex31":{
						 "hex25": true,
						 "hex26": true,
						 "hex30": true,
						 "hex32": true,
						 "hex35": true,
						 "hex36": true
					 },
		"hex32":{
						 "hex26": true,
						 "hex27": true,
						 "hex31": true,
						 "hex33": true,
						 "hex36": true
					 },
		"hex33":{
						 "hex27": true,
						 "hex28": true,
						 "hex32": true
					 },
		"hex34":{
						 "hex29": true,
						 "hex30": true,
						 "hex35": true
					 },
		"hex35":{
						 "hex34": true,
						 "hex30": true,
						 "hex31": true,
						 "hex36": true
					 },
		"hex36":{
						 "hex31": true,
						 "hex32": true,
						 "hex35": true
					 },
		"hex37":{
						 "blocked": true
					 }
		};


let gamestate = {
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
				"currentPlayer": "p1",
				"mode": "setup",
				"swaps": null,
				"AP": null,
			},
			"grid": {
				"hex1": {
							 "owner": "blocked"
						 },
				"hex2": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex3": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex4": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex5": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex6": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex7": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex8": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex9": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex10": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex11": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex12": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex13": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex14": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex15": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex16": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex17": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex18": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex19": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex20": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex21": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex22": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex23": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex24": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex25": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex26": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex27": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex28": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex29": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex30": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex31": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex32": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex33": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex34": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex35": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex36": {
							 "owner": null, "type": null, "health": 1
						 },
				"hex37": {
							 "owner": "blocked"
						 }
				} // end of grid:
			};




module.exports = gamelogic;
