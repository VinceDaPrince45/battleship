

class Gameboard {
    constructor() {
        this.board = [];
        if (this.board.length == 0) {
            this.init();
        }
    }

    init() {
        for (let i = 0; i < 100; i++) {
            this.board.push({hasShip:false,isShot:false});
        }
    }

    placeShips(ship) {
        ship.position.every((cell) => this.board[cell].hasShip = ship.name);
    }

    receiveAttack(position) {
        this.board[position].isShot = true;
    }

    checkShot(position) {
        return this.board[position].hasShip;
    }

    checkCollision(locationArray) {
        // if oriented on x axis, it will be adjacent numbers or +1 from each other
        // if oriented on y axis, it will be  the adjacent numbers or +10 from each other
        if (locationArray.every((number) => number >= 0 && number <= 99)) {
            const collisions = [9,19,29,39,49,59,69,79,89]
            // determine first if it is x axis oriented or y axis oriented
            // x axis oriented
            let xAxis = [];
            let firstnum = locationArray[0];
            for (let i=0;i<locationArray.length;i++) {
                xAxis.push(firstnum++);
            }
            if (xAxis.every((cell) => locationArray.includes(cell))) {
                // it is x axis
                // run conditionals for x axis collision and run on
                for (const collision of collisions) {
                    if (locationArray.includes(collision)) {
                        let idx = locationArray.indexOf(collision);
                        if (locationArray[idx] !== locationArray[locationArray.length - 1]) {
                            return false;
                        }
                    }
                }
                // check if ships are within those cells
                if (locationArray.every((position) => this.board[position].hasShip == false)) {
                    return true;
                } else return false;
            }
    
            let yAxis = [];
            firstnum = locationArray[0];
            for (let k=0;k<locationArray.length;k++) {
                yAxis.push(firstnum);
                firstnum += 10;
            }
            if (yAxis.every((cell) => locationArray.includes(cell))) {
                // it is y axis
                // run conditionals for y axis collision and run on
                // check if ships are within those cells
                if (locationArray.every((position) => this.board[position].hasShip == false)) {
                    return true;
                } else return false
            }
        } else return false
    }
}

export default Gameboard;