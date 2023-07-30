

class Ship {
  constructor(name,position) {
      this.name = name; // string
      this.position = position; // array of positions
      this.hits = []; // counter for hits
      this.sunk = false;
  }

  hit(location) {
      this.hits.push(location);
      this.isSunk();
  }

  isSunk() {
    if (this.position.every((cell) => this.hits.includes(cell))) {
      this.sunk = true;
    }
  }

}

export default Ship;