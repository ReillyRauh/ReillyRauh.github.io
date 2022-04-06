export { Clarissa, Ching, Bob, Sam, Osama, Survivor }

class Survivor {
    constructor(name) {
        this._name = name,
        this._health = 100,
        this._energy = 100,
        this._hunger = 100,
        this._thirst = 100,
        this._isDead = false
    }
    
    get name() {
        return this._name
    }
    
    get health() {
        return this._health
    }
    
    get energy() {
        return this._energy
    }
    
    get thirst() {
        return this._thirst
    }

    get hunger() {
        return this._hunger
    }
    
    get isDead() {
        return this._isDead
    }
}

let Clarissa = new Survivor('Clarissa');
let Bob = new Survivor('Bob');
let Sam = new Survivor('Sam');
let Ching = new Survivor('Ching');
let Osama = new Survivor('Osama');