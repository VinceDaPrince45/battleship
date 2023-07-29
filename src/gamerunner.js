import Player from "./player";
import Gameboard from './gameboard';
import Ship from './ship';

const body = document.querySelector('body');
let orientation = 'row';
let locationArray;
let idx = 0;
const ships = [{name:'carrier',length:5},{name:'battleship',length:4},{name:'destroyer',length:3}, {name:'sumbarine',length:3}, {name:'patrol boat',length:2}]

export function startGame() {
    const playerOne = new Player('Player One');
    const playerTwo = new Player('Player Two');
    // starting screen
    // one grid shows up 
   
    makeStartGrid();

    // place ships in order

    changeShips();

    // go to next ship when pressed
    placeShips(playerOne,playerTwo);

    // check if ship placement is valid with functions
    // when ready press start

    // pressing start deletes all previous dom and creates two grids side by side
        // grid highlights when hovering over enemy board
        // when pressin on cell of opponent grid
            // check if shot is valid on enemy board and receieve the shot
}

function makeStartGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for (let i = 9; i >= 0; i--) {
        // make rows
        const row = document.createElement('div');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('start');
            if (i == 0) {
                cell.setAttribute('id',j.toString());
            } else cell.setAttribute('id',i.toString() + j.toString());
            cell.style.cssText = 'height: 3em; width: 3em; border: 1px solid black';
            row.appendChild(cell);
        }
        row.style.cssText = 'display:flex;flex-direction:row';
        grid.appendChild(row);
    }
    body.appendChild(grid);
}

function changeShips() {
    const name = document.createElement('div');
    name.classList.add('shipname');
    name.style.cssText = 'text-align:center';
    body.appendChild(name);

    const changeOrientation = document.createElement('button');
    changeOrientation.textContent = 'Change orientation';
    changeOrientation.style.cssText = 'margin-left:auto;margin-right:auto';
    body.appendChild(changeOrientation);

    // change orientation
    changeOrientation.addEventListener('click', () => {
        if (orientation == 'row') {
            orientation = 'column';
        } else if (orientation == 'column') orientation = 'row';
    })
}

function placeShips(playerOne,playerTwo) {
    let shipName = ships[idx].name;
    document.querySelector('.shipname').textContent = `Place ${shipName}`;
    document.querySelector('.grid').addEventListener('click', (e) => {
        if (playerOne.gameboard.checkCollision(locationArray)) {
            // initialize ship and add to player container
            for (const number of locationArray) {
                document.getElementById(`${number.toString()}`).style.backgroundColor = 'green';
            }
            let ship = new Ship(shipName,locationArray.map((cell) => +cell));
            playerOne.ships.push(ship);
            playerOne.gameboard.placeShips(ship);
            if (idx + 1 == ships.length) {
                // run code to play actual game
                // set up computer board
                runGame(playerOne,playerTwo);
            } else {
                shipName = ships[++idx].name;
                document.querySelector('.shipname').textContent = `Place ${shipName}`;
            }
        }
    })

    const cells = document.querySelectorAll('.cell')
    document.querySelector('.grid').addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('cell')) {
            // change all cells to white
            for (const cell of cells) {
                cell.style.backgroundColor = 'white'
            }
            // if there are ships in player gameboard, display chosen boat areas
            if (playerOne.ships.length !== 0) {
                for (const singleShip of playerOne.ships) {
                    singleShip.position.forEach((position) => {
                        document.getElementById(position.toString()).style.backgroundColor = 'green'
                    })
                }
            }
            // look at length of ship
            let lengthShip = ships[idx].length;
            let location = +e.target.getAttribute('id');
            // look at orientation
            locationArray = [];
            if (orientation == 'row') {
                for (let i = location; i < location+lengthShip; i++) {
                    locationArray.push(i);
                }
                if (playerOne.gameboard.checkCollision(locationArray)) {
                    for (const number of locationArray) {
                        document.getElementById(`${number.toString()}`).style.backgroundColor = 'grey';
                    }
                } else {
                    e.target.style.backgroundColor = 'red';
                }
            } else if (orientation == 'column') {
                for (let i = 0;i<lengthShip;i++) {
                    locationArray.push(location);
                    location += 10;
                }
                if (playerOne.gameboard.checkCollision(locationArray)) {
                    // highlight row around it green
                    for (const number of locationArray) {
                        document.getElementById(`${number.toString()}`).style.backgroundColor = 'grey';
                    }
                } else {
                    // highlight red
                    e.target.style.backgroundColor = 'red';
                }
            }
        }
    })

}

export function computerBoard(player) {
    idx = 0;
    // choose random spot on board and add to index
    // determine if fits on player two board
    for (const item of ships) {
        // find position
        let positionArray = [];
        let initialPosition = Math.floor(Math.random() * (99 - 0 + 1) + 0);
        // choose random orientation
        let randomBool = Math. random() > 0.5; 
        // if true, row / if false, column
        if (randomBool) {
            for (let i = initialPosition;i<initialPosition + item.length;i++) {
                positionArray.push(i);
            }
        } else {
            for (let i = 0;i<item.length;i++) {
                positionArray.push(initialPosition);
                initialPosition += 10;
            }
        }
        while (!player.gameboard.checkCollision(positionArray)) {
            positionArray = [];
            initialPosition = Math.floor(Math.random() * (99 - 0 + 1) + 0);
            randomBool = Math. random() > 0.5; 
            if (randomBool) {
                for (let i = initialPosition;i<initialPosition + item.length;i++) {
                    positionArray.push(i);
                }
            } else {
                for (let i = 0;i<item.length;i++) {
                    positionArray.push(initialPosition);
                    initialPosition += 10;
                }
            }
        }
        let ship = new Ship(item.name,positionArray);
        player.ships.push(ship);
        player.gameboard.placeShips(ship);
    }
    console.log(player.ships)
}

function runGame(playerOne,playerTwo) {
    clearBody();
    computerBoard(playerTwo);
}

function clearBody() {
    body.textContent = '';
}