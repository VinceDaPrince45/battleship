import Player from "./player";

const body = document.querySelector('body');

export function startGame() {
    // starting screen
    // one grid shows up 
    const grid = document.createElement('div');
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
    body.style.cssText = 'height:100vh;position:relative';
    grid.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)';
        
    // place ships
    
        // check if ship placement is valid with functions
    // when ready press start

    // pressing start deletes all previous dom and creates two grids side by side
        // grid highlights when hovering over enemy board
        // when pressin on cell of opponent grid
            // check if shot is valid on enemy board and receieve the shot
}
