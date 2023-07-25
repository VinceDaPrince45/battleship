import Ship from '../ship';
import Gameboard from '../gameboard';

describe('gameboard functions', () => {
    let testCarrier;
    let testSubmarine;
    let gameboard;
    beforeEach(() => {
        testCarrier = new Ship('carrier', [0, 1, 2, 3, 4]);
        testSubmarine = new Ship('submarine', [12, 13, 14]);
        gameboard = new Gameboard();
        gameboard.init()
    });
    it('changes board locations to have ship', () => {
        gameboard.placeShips(testCarrier);
    })
})