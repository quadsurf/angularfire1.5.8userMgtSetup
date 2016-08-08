"use strict";
/*jshint esversion: 6 */

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

	returnTrue: function() {
			return true;
		},

};

module.exports = gamelogic;
