import Ship from '../ship';
import Gameboard from '../gameboard';

describe('gameboard functions', () => {
    let testCarrier;
    let testSubmarine;
    let testboard;
    beforeEach(() => {
        testCarrier = new Ship('carrier', [0, 1, 2, 3, 4]);
        testSubmarine = new Ship('submarine', [12, 13, 14]);
        testboard = new Gameboard();
    });
    it('initializes board', () => {
        let array = [];
        for (let i = 0; i < 100; i++) {
            array.push({hasShip:false,isShot:false})
        }
    })
    it('changes board locations to have ship', () => {
        testboard.placeShips(testCarrier);
        expect(testboard.board[0].hasShip).toBe('carrier');
    })
    it('changes board locations to have ship', () => {
        testboard.placeShips(testCarrier);
        expect(testboard.board[1].hasShip).toBe('carrier');
    })
    it('updates board when receiving shot', () => {
        testboard.receiveAttack(25);
        expect(testboard.board[25].isShot).toBe(true);
    })
    it('responds to miss', () => {
        expect(testboard.checkShot(25)).toBe(false);
    })
    it('confirms a hit', () => {
        testboard.board[25].hasShip = true;
        expect(testboard.checkShot(25)).toBe(true);
    })
    it('confirms x axis collision', () => {
        expect(testboard.checkCollision([7,8,9,10,11])).toBe(false);
    });
    it('confirms x axis placement', () => {
        expect(testboard.checkCollision([0,1,2,3])).toBe(true);
    })
    it('confirms collision with another boat x axis', () => {
        testboard.placeShips(testSubmarine);
        expect(testboard.checkCollision([10,11,12])).toBe(false);
    })
    it('confirms y axis placement', () => {
        expect(testboard.checkCollision([7,17,27,37])).toBe(true);
    });
    it('confirms y axis collision', () => {
        expect(testboard.checkCollision([71,81,91,101])).toBe(false);
    })
    it('confirms collision with another boat y axis', () => {
        testboard.placeShips(testSubmarine);
        expect(testboard.checkCollision([12,22,32,42])).toBe(false);
    })
})