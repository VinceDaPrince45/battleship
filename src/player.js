import Gameboard from "./gameboard";

class Player {
    constructor(name) {
        this.name = name;
        this.ships = [];
        this.gameboard = new Gameboard();
    }

    fireShot(location,gameboard) {
        if (gameboard.board[location].isShot == false) {
            gameboard.receiveAttack(location);
        }
    }
}

export default Player;