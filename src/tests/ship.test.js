import Ship from '../ship';

describe('ship functions', () => {
    let testCarrier;
    let testSubmarine;
    beforeEach(() => {
        testCarrier = new Ship('carrier', [0, 1, 2, 3, 4]);
        testSubmarine = new Ship('submarine', [12, 13, 14])
    });
    it('accepts a hit', () => {
        testCarrier.hit(0);
        expect(testCarrier.hits).toEqual([0]);
    });
    it('accepts multiple hits', () => {
        testSubmarine.hit(12);
        testSubmarine.hit(13);
        expect(testSubmarine.hits).toEqual([12,13]);
    });
    it('shows that boat is not sunk', () => {
        testCarrier.hit(1);
        testCarrier.hit(2);
        testCarrier.hit(3)
        expect(testSubmarine.sunk).toBe(false);
    });
    it('shows that boat is sunk', () => {
        testCarrier.hit(0)
        testCarrier.hit(1);
        testCarrier.hit(2);
        testCarrier.hit(3);
        testCarrier.hit(4);
        expect(testCarrier.sunk).toBe(true);
    });
})