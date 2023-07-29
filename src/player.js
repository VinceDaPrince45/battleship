import Gameboard from "./gameboard";

class Player {
    constructor(name) {
        this.name = name;
        this.ships = [];
        this.gameboard = new Gameboard();
    }

    receiveShot(location) {
        if (this.gameboard.board[location].isShot == false) {
            return true;
        } else return false;
    }
}

export default Player;