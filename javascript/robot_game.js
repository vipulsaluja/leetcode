var Game = function () {
	this.introMessage = `Hello! Robot coming online.
	Command the robot with:
	  L - turn left
	  R - turn right
	  M - move forward
	  ? - this message
	  Q - quit
	`;

	this.commands = {
		Forward: "M",
		Left: "L",
		Right: "R",
		Quit: "Q"
	}

	this.directions = [
		{ name: "North", move: [0, 1] },
		{ name: "East", move: [1, 0] },
		{ name: "South", move: [0, -1] },
		{ name: "West", move: [-1, 0] },
	]

	this.resetGame = function () {
		this.position = [0, 0];

		// Default is north.
		this.directionIndex = 0;
	}

	this.moveForward = function () {
		let [x, y] = this.directions[this.directionIndex].move;
		this.position = [this.position[0] + x, this.position[1] + y];
	}

	this.resetGame();

	return this.introMessage;
}

Game.prototype.quit = function () {
	this.resetGame();
}

Game.prototype.commandParser = function (command) {
	if (command === "") {
		// throw error
		return "Please input some valid command";
	}

	switch (command) {
		case this.commands.Forward:
			this.moveForward();
			break;
		case this.commands.Left:
			if (this.directionIndex === 0) {
				this.directionIndex = this.directions.length - 1;
			} else {
				this.directionIndex = this.directionIndex - 1;
			}
			break;
		case this.commands.Right:
			if (this.directionIndex === this.directions.length - 1) {
				this.directionIndex = 0;
			} else {
				this.directionIndex = this.directionIndex + 1;
			}
			break;
		case this.commands.Quit:
			this.quit();
			return "Robot shutting down.";
			break;
		default:
			return this.introMessage;
	}

	return `Robot at (${this.position[0]}, ${this.position[1]}) facing ${this.directions[this.directionIndex].name}`;
}