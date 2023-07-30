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
    body.classList.add('start');
    makeStartGrid();
    changeShips();
    placeShips(playerOne,playerTwo);
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
}

function runGame(playerOne,playerTwo) {
    body.classList.remove('start')
    clearBody();
    computerBoard(playerTwo);
    createTwoGrids();
    displayOwnShips(playerOne);
    console.log(playerTwo.ships)
    document.querySelector('.secondgrid').addEventListener('click', (e) => {
        attack(e,playerOne,playerTwo);
    })
}

function clearBody() {
    body.removeChild(document.querySelector('.grid'));
    body.removeChild(document.querySelector('.shipname'));
    body.removeChild(document.querySelector('button'));
}

function createTwoGrids() {
    const gridContainer = document.createElement('div');

    const firstGrid = document.createElement('div');
    firstGrid.classList.add('owngrid');
    for (let i = 9; i >= 0; i--) {
        // make rows
        const row = document.createElement('div');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('own');
            if (i == 0) {
                cell.setAttribute('id',j.toString());
            } else cell.setAttribute('id',i.toString() + j.toString());
            cell.style.cssText = 'height: 2.5em; width: 2.5em; border: 1px solid black';
            row.appendChild(cell);
        }
        row.style.cssText = 'display:flex;flex-direction:row';
        firstGrid.appendChild(row);
    }
    gridContainer.appendChild(firstGrid);

    const secondGrid = document.createElement('div');
    secondGrid.classList.add('secondgrid');
    for (let i = 9; i >= 0; i--) {
        // make rows
        const row = document.createElement('div');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('opponent');
            if (i == 0) {
                cell.setAttribute('id',j.toString());
            } else cell.setAttribute('id',i.toString() + j.toString());
            cell.style.cssText = 'height: 2.5em; width: 2.5em; border: 1px solid black';
            row.appendChild(cell);
        }
        row.style.cssText = 'display:flex;flex-direction:row';
        secondGrid.appendChild(row);
    }
    gridContainer.appendChild(secondGrid);

    gridContainer.classList.add('middle');
    
    const status = document.createElement('div');
    status.classList.add('status');
    status.style.textAlign = 'center'

    body.classList.add('ongoing');
    body.append(gridContainer,status);

}

function displayOwnShips(player) {
    let playerBoard = player.gameboard.board;
    for (const position of playerBoard) {
        let index = playerBoard.indexOf(position);
        if (position.hasShip !== false) {
            document.getElementById(index.toString()).style.backgroundColor = 'grey';
        }
    }
}

function attack(e,firstPlayer,secondPlayer) {
    let position = e.target.getAttribute('id');
    if (secondPlayer.receiveShot(position)) {
        secondPlayer.gameboard.receiveAttack(position);
        if (secondPlayer.gameboard.checkShot(position)) {
            e.target.style.backgroundColor = 'red';
            document.querySelector('.status').textContent = `${firstPlayer.name} hit a ship`;
            addHit(position,secondPlayer);
            checkWinner(firstPlayer,secondPlayer);
        } else {
            e.target.style.backgroundColor = 'green';
            document.querySelector('.status').textContent = `${firstPlayer.name} hit nothing`;
        }
        setTimeout(function() {
            opponentTurn(firstPlayer,secondPlayer)
        },400);
    } else {
        document.querySelector('.status').textContent = 'already hit'
    }
}

function addHit(position,player) {
    // need to add a hit to ship and check whether or not ships sunk after
    let shipName = player.gameboard.board[position].hasShip;
    for (const ship of player.ships) {
        if (shipName == ship.name) {
            ship.hit(+position);
            if (ship.sunk) {
                document.querySelector('.status').textContent = 'destroyed a ship';
            }
        }
    }
}

function opponentTurn(playerOne,playerTwo) {
    let randomPosition = Math.floor(Math.random() * (99 - 0 + 1) + 0);
    while (!playerOne.receiveShot(randomPosition)) {
        randomPosition = Math.floor(Math.random() * (99 - 0 + 1) + 0);
    }
    if (playerOne.receiveShot(randomPosition)) {
        playerOne.gameboard.receiveAttack(randomPosition);
        if (playerOne.gameboard.checkShot(randomPosition)) {
            document.getElementById(randomPosition.toString()).style.backgroundColor = 'red';
            document.querySelector('.status').textContent = `${playerTwo.name} hit a ship`;
            addHit(randomPosition,playerOne);
            checkWinner(playerOne,playerTwo);
        } else {
            document.getElementById(randomPosition.toString()).style.backgroundColor = 'green';
            document.querySelector('.status').textContent = `${playerTwo.name} hit nothing`;
        }
    }
};

function checkWinner(playerOne,playerTwo) {
    if (playerOne.ships.every((ship) => ship.sunk == true)) {
        document.querySelector('.status').textContent = `${playerOne.name} wins`;
    } else if (playerTwo.ships.every((ship) => ship.sunk == true)) {
        document.querySelector('.status').textContent = `${playerTwo.name} wins`;
    }
}

