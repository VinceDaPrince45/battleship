import Player from "./player";

const body = document.querySelector('body');

export function startGame() {
    // starting screen
    // one grid shows up 
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for (let i = 9; i >= 0; i--) {
        // make rows
        const row = document.createElement('div');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('start');
            cell.setAttribute('id',i.toString() + j.toString())
            cell.style.cssText = 'height: 3em; width: 3em; border: 1px solid black';
            row.appendChild(cell);
        }
        row.style.cssText = 'display:flex;flex-direction:row';
        grid.appendChild(row);
    }
    body.appendChild(grid);
        

    // place ships in order
    const ships = [{name:'carrier',length:5},{name:'battleship',length:4},{name:'destroyer',length:3}, {name:'sumbarine',length:3}, {name:'patrol boat',length:2}]
    const name = document.createElement('div');
    name.style.cssText = 'text-align:center';
    body.appendChild(name);

    const changeOrientation = document.createElement('button');
    changeOrientation.textContent = 'Change orientation';
    changeOrientation.style.cssText = 'margin-left:auto;margin-right:auto';
    body.appendChild(changeOrientation);

    let orientation = 'row';
    changeOrientation.addEventListener('click', () => {
        if (orientation == 'row') {
            orientation = 'column';
        } else if (orientation == 'column') orientation = 'row';
    })

    let idx = 0;
    let shipName = ships[idx].name;
    name.textContent = `Place ${shipName}`;
    grid.addEventListener('click', (e) => {
        // add conditional to see if placement is valid
            shipName = ships[++idx].name;
            name.textContent = `Place ${shipName}`
    })

    const cells = document.querySelectorAll('.cell')
    grid.addEventListener('mouseover', (e) => {
        // change all cells to white
        for (const cell of cells) {
            cell.style.backgroundColor = 'white'
        }
        // look at length of ship
        let lengthShip = ships[idx].length;
        let location = e.target.getAttribute('id');
        // look at orientation
        for (let i=0;i<lengthShip;i++) {

        }
        // add that to row/column depending on orientation
            // row will be default
        
    })

        // check if ship placement is valid with functions
    // when ready press start

    // pressing start deletes all previous dom and creates two grids side by side
        // grid highlights when hovering over enemy board
        // when pressin on cell of opponent grid
            // check if shot is valid on enemy board and receieve the shot
}

function hoverEffect(target) {
    target.style.cssText = 'background-color:grey';
}