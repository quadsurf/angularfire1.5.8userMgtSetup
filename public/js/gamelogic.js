"use strict";
/*jshint esversion: 6 */

let swaps = 0;
let playerList = [];


const gamelogic = {

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

	initBoard: function (players) {
		// playerList = players;
		// loop through playersList
		// init gameboard
		// gamedata.turn = playersList[0];
	},

	canMove: function ( cor ) { // show valid move spaces
		// loop through grid based on cor
		// add class .canMove to each square
	},

	resolveMove: function ( SelectedCor, ObjectFromSelectedCor, ActionCor, ObjectFromActionCor ) {
		// if ( valid move && ObjectFromActionCor.owner === null ) {
	  //	move (ObjectFromSelectedCor, SelectedCor, ActionCor);
		// else
		//	var NewSelectedCor = moveNextTo(SelectedCor, ActionCor);
		//	move (ObjectFromSelectedCor, SelectedCor, NewSelectedCor);
		// 	battle(NewSelectedCor, ObjectFromSelectedCor, ActionCor, ObjectFromActionCor);
		// };
	},

	moveNextTo: function ( SelectedCor, ActionCor ) { // Move next to defending character
		switch ( SelectedCor - ActionCor) {
			case IfXisNeg:  // Moving Right
				// Add one to x of SelectedCor
				return;
			case IfXisPos:  // Moving Left
				// Subtract one to x of SelectedCor
				return;
			case IfYisNeg:  // Moving Down
				// Add one to y of SelectedCor
				return;
			case IfYisPos:  // Moving Up
				// Subtract one to y of SelectedCor
				return;
			default:
				return "Error"
		}
	},

	move: function ( ObjectFromSelectedCor, moveFrom, MoveTo ) {
		// gameboard[MoveTo] = ObjectFromSelectedCor;
		// gameboard[MoveFrom] = EmptyBoardObject
	},

	battle: function( NewSelectedCor, ObjectFromSelectedCor, ActionCor, ObjectFromActionCor ) {
		// var offender = [NewSelectedCor, ObjectFromSelectedCor];
		// var defender = [ActionCor, ObjectFromActionCor];
		// var loserCor;

		// Compare offender[1] to defender[1]

		// if TIE {
		//	swapOut(CurrentPlayer) character from reserve
		//	endTurn(CurrentPlayer)
		// } else {
		//	loser(offender or defender);
		//	if offender wins && gameboard[ActionCor].owner === null {
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

};

module.exports = gamelogic;
