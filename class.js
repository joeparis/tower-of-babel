
class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this._health = 100;
    }

    damage() {
        this._health -= 10;
    }

    getHealth() {
        return this._health;
    }

    toString() {
         return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`;
    }
}

var [x, y] = process.argv.slice(2);
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
