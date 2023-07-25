

class Gameboard {
    constructor() {
        this.board = [];
        this.ships = [];
    }

    init() {
        for (let i = 0; i < 100; i++) {
            this.board.push({hasShip:false,isShot:false});
        }
    }

    placeShips(ship) {
        // call class new Ships and if its player, allow them to choose location of five ships and if its robot, allow them to randomly choose spot
        this.ships.push(ship);
        ship.position.every((cell) => this.board[cell].hasShip = true);
        // will have to have restrictions on where ships are placed based on current board and cannot be placed outside boundary
    }

    receiveAttack() {
        // takes in parameter position and compares it to board
            // if position is empty on this.board, place a marker on this.board location to show that you cant place there anymore
            // if position == boat position, register a hit to corresponding boats
                // if boats has enough hits, display that boat has been destroyed
            // else display that cannot be placed here
    }

    displayBoard() {

    }

    
}

export default Gameboard;