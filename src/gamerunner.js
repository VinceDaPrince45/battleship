import Player from "./player";

const body = document.querySelector('body');

let orientation = 'row';

export function startGame() {
    const playerOne = new Player('Player One');
    const playerTwo = new Player('Player Two');
    // starting screen
    // one grid shows up 
   
    makeStartGrid();

    // place ships in order
    const ships = [{name:'carrier',length:5},{name:'battleship',length:4},{name:'destroyer',length:3}, {name:'sumbarine',length:3}, {name:'patrol boat',length:2}]

    changeShips();

    // go to next ship when pressed
    placeShips(ships,playerOne);

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

function placeShips(array,player) {
    let idx = 0;
    let shipName = array[idx].name;
    document.querySelector('.shipname').textContent = `Place ${shipName}`;
    document.querySelector('.grid').addEventListener('click', (e) => {
        // add conditional to see if placement is valid
            shipName = array[++idx].name;
            document.querySelector('.shipname').textContent = `Place ${shipName}`
    })

    const cells = document.querySelectorAll('.cell')
    document.querySelector('.grid').addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('cell')) {
            // change all cells to white
            for (const cell of cells) {
                cell.style.backgroundColor = 'white'
            }
            // look at length of ship
            let lengthShip = array[idx].length;
            let location = +e.target.getAttribute('id');
            // look at orientation
            let locationArray = [];
            if (orientation == 'row') {
                for (let i = location; i < location+lengthShip; i++) {
                    locationArray.push(i);
                }
                if (player.gameboard.checkCollision(locationArray)) {
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
                if (player.gameboard.checkCollision(locationArray)) {
                    // highlight row around it green
                    for (const number of locationArray) {
                        document.getElementById(`${number.toString()}`).style.backgroundColor = 'grey';
                    }
                } else {
                    // highlight red
                    e.target.style.backgroundColor = 'red';
                }
            }
            // add that to row/column depending on orientation
                // row will be default
        }
    })

}

export function computerBoard() {
    
}