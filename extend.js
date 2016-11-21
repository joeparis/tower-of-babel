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

class Player extends Character {
    constructor(x, y, name) {
        super(x, y);
        this.name = name;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    toString() {
        // this is horrific
        //  return "name: " + this.name + " " + Player.super_.prototype.toString.call(this);
        return `name: ${name} ${super.toString()}`
    }
}

let [, , x, y, name] = process.argv;
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());

var player = new Player(+x, +y, name);
player.damage();
player.move(7, 8);
console.log(player.toString());
